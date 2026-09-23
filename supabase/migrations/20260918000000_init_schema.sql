-- =============================================================================
-- DUBAI REAL ESTATE, INVESTMENT INTELLIGENCE & PRIVATE CLIENT DESK
-- Production PostgreSQL Database Migration (Phase 5)
-- =============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =============================================================================
-- 1. ENUMS & DOMAIN DEFINITIONS
-- =============================================================================

DO $$ BEGIN
  CREATE TYPE user_role AS ENUM (
    'PUBLIC',
    'USER',
    'CLIENT',
    'AGENT',
    'ADVISOR',
    'ADMIN',
    'SUPER_ADMIN'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE source_type AS ENUM (
    'DLD',
    'UAE_GOVERNMENT',
    'FTA',
    'DET',
    'DCAA',
    'DMCA',
    'DDCR',
    'DEVELOPER',
    'OTHER_OFFICIAL'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE price_type AS ENUM (
    'ASKING',
    'ACHIEVED',
    'ESTIMATE',
    'USER_INPUT'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE coordinate_type AS ENUM (
    'PROJECT_CENTROID',
    'COMMUNITY_CENTROID',
    'EXACT_PROPERTY',
    'OTHER'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE viewing_status AS ENUM (
    'NEW',
    'CONTACTED',
    'SCHEDULED',
    'COMPLETED',
    'CANCELLED'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE crm_pipeline_stage AS ENUM (
    'NEW',
    'QUALIFIED',
    'VIEWING',
    'OFFER',
    'NEGOTIATION',
    'MOU',
    'SPA',
    'FINANCE',
    'DLD',
    'HANDOVER',
    'CLOSED',
    'LOST'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- =============================================================================
-- 2. HELPER FUNCTIONS
-- =============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =============================================================================
-- 3. SOURCES & PROVENANCE REGISTRY
-- =============================================================================

CREATE TABLE IF NOT EXISTS sources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  publisher TEXT NOT NULL,
  source_type source_type NOT NULL,
  official_url TEXT,
  description TEXT,
  status TEXT DEFAULT 'ACTIVE',
  last_verified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS entity_sources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_type TEXT NOT NULL, -- 'property', 'project', 'developer', 'area', 'lifestyle', 'regulation'
  entity_id TEXT NOT NULL,
  source_id UUID NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
  source_reference TEXT,
  source_date DATE,
  verified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  verification_status TEXT DEFAULT 'SOURCE_AUDITED',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================================================
-- 4. USERS & PROFILES
-- =============================================================================

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  role user_role NOT NULL DEFAULT 'USER',
  display_name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  display_name TEXT,
  phone TEXT,
  country TEXT,
  language TEXT DEFAULT 'en',
  tax_residency TEXT,
  investment_capacity TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================================================
-- 5. MASTER ENTITIES (AREAS, DEVELOPERS, PROJECTS, PROPERTIES, LIFESTYLE)
-- =============================================================================

CREATE TABLE IF NOT EXISTS areas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  sector TEXT NOT NULL,
  description TEXT,
  freehold_status TEXT DEFAULT 'DESIGNATED_FREEHOLD',
  coordinates_latitude NUMERIC(10, 7),
  coordinates_longitude NUMERIC(10, 7),
  coordinate_type coordinate_type DEFAULT 'COMMUNITY_CENTROID',
  transit_dxb_minutes INTEGER,
  transit_downtown_minutes INTEGER,
  hero_image_url TEXT,
  source_id UUID REFERENCES sources(id),
  verified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS developers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  legal_name TEXT NOT NULL,
  display_name TEXT,
  developer_identifier TEXT,
  license_number TEXT,
  official_url TEXT,
  status TEXT DEFAULT 'ACTIVE',
  headquarters TEXT DEFAULT 'Dubai, UAE',
  founded_year INTEGER,
  portfolio_overview TEXT,
  source_id UUID REFERENCES sources(id),
  verified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  developer_id UUID NOT NULL REFERENCES developers(id),
  community_id UUID REFERENCES areas(id),
  area_name TEXT NOT NULL,
  developer_name TEXT NOT NULL,
  status TEXT DEFAULT 'ACTIVE',
  completion_status TEXT NOT NULL, -- 'READY', 'UNDER_CONSTRUCTION', 'OFF_PLAN'
  handover_date TEXT,
  project_identifier TEXT,
  escrow_identifier TEXT,
  starting_price NUMERIC(14, 2),
  starting_price_type price_type DEFAULT 'ASKING',
  payment_plan_summary TEXT,
  hero_image_url TEXT,
  official_url TEXT,
  source_id UUID REFERENCES sources(id),
  verified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS properties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  listing_status TEXT DEFAULT 'ACTIVE', -- 'ACTIVE', 'UNDER_OFFER', 'SOLD', 'ARCHIVED'
  transaction_type TEXT NOT NULL DEFAULT 'SALE', -- 'SALE', 'RENT'
  property_type TEXT NOT NULL, -- 'apartment', 'villa', 'penthouse', 'mansion'
  
  -- Price Architecture
  asking_price NUMERIC(14, 2),
  transaction_price NUMERIC(14, 2),
  market_estimate NUMERIC(14, 2),
  price_type price_type NOT NULL DEFAULT 'ASKING',
  currency TEXT NOT NULL DEFAULT 'AED',
  price_per_sqft NUMERIC(10, 2),
  
  -- Dimensions & Specifications
  internal_area_sqft NUMERIC(10, 2) NOT NULL,
  internal_area_sqm NUMERIC(10, 2),
  bedrooms INTEGER NOT NULL,
  bathrooms INTEGER NOT NULL,
  parking_spaces INTEGER DEFAULT 1,
  floor_number INTEGER,
  view_type TEXT,
  furnishing_status TEXT DEFAULT 'UNFURNISHED',
  
  -- Hierarchy & Location
  project_id UUID REFERENCES projects(id),
  developer_id UUID REFERENCES developers(id),
  area_id UUID REFERENCES areas(id),
  project_name TEXT,
  developer_name TEXT NOT NULL,
  area_name TEXT NOT NULL,
  
  -- Geodetic Coordinates
  coordinates_latitude NUMERIC(10, 7),
  coordinates_longitude NUMERIC(10, 7),
  coordinate_type coordinate_type DEFAULT 'PROJECT_CENTROID',
  
  -- Development Status
  completion_status TEXT NOT NULL, -- 'READY', 'OFF_PLAN', 'HANDOVER_SOON'
  completion_date TEXT,
  handover_date TEXT,
  
  -- Media
  images TEXT[] DEFAULT '{}',
  
  -- Provenance
  source_status TEXT DEFAULT 'SOURCE_AUDITED',
  source_id UUID REFERENCES sources(id),
  verified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS lifestyle (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL, -- 'dining', 'aviation', 'yachts', 'cars', 'safari', 'hotels', 'concierge'
  operator TEXT NOT NULL,
  location TEXT NOT NULL,
  area_name TEXT NOT NULL,
  official_url TEXT,
  pricing_status TEXT DEFAULT 'PRICE_ON_REQUEST', -- 'VERIFIED_TARIFF', 'PRICE_ON_REQUEST'
  tariff_details TEXT,
  verification_status TEXT DEFAULT 'SOURCE_AUDITED',
  image_url TEXT,
  source_id UUID REFERENCES sources(id),
  verified_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================================================
-- 6. CLIENT PORTAL & SAVED WORKSPACES
-- =============================================================================

CREATE TABLE IF NOT EXISTS saved_properties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, property_id)
);

CREATE TABLE IF NOT EXISTS saved_searches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  filters JSONB NOT NULL DEFAULT '{}'::jsonb,
  sort_order TEXT DEFAULT 'DEFAULT',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS viewing_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  requested_date DATE NOT NULL,
  requested_time TEXT,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  message TEXT,
  status viewing_status NOT NULL DEFAULT 'NEW',
  assigned_agent_id UUID REFERENCES users(id) ON DELETE SET NULL,
  agent_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS client_intakes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  service_category TEXT NOT NULL,
  strategic_objective TEXT NOT NULL,
  budget_tier TEXT NOT NULL,
  target_location TEXT NOT NULL,
  timeline TEXT NOT NULL,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT NOT NULL,
  tax_residency TEXT NOT NULL,
  notes TEXT,
  status crm_pipeline_stage NOT NULL DEFAULT 'NEW',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================================================
-- 7. CRM & OPERATIONAL TABLES
-- =============================================================================

CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  last_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  source TEXT DEFAULT 'WEBSITE_FORM',
  budget_min NUMERIC(14, 2),
  budget_max NUMERIC(14, 2),
  preferred_areas TEXT[],
  property_types TEXT[],
  status crm_pipeline_stage NOT NULL DEFAULT 'NEW',
  assigned_agent_id UUID REFERENCES users(id) ON DELETE SET NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  citizenship TEXT,
  tax_country TEXT,
  kyc_status TEXT DEFAULT 'PENDING',
  mandate_type TEXT,
  assigned_advisor_id UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS deals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
  property_id UUID REFERENCES properties(id) ON DELETE SET NULL,
  deal_name TEXT NOT NULL,
  stage crm_pipeline_stage NOT NULL DEFAULT 'QUALIFIED',
  agreed_price NUMERIC(14, 2),
  dld_registration_number TEXT,
  assigned_agent_id UUID REFERENCES users(id) ON DELETE SET NULL,
  estimated_handover_date DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  due_date TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'PENDING', -- 'PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'
  assigned_to UUID REFERENCES users(id) ON DELETE SET NULL,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  deal_id UUID REFERENCES deals(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS notes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  deal_id UUID REFERENCES deals(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_private BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  deal_id UUID REFERENCES deals(id) ON DELETE SET NULL,
  uploaded_by UUID NOT NULL REFERENCES users(id),
  file_name TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  size_bytes BIGINT NOT NULL,
  storage_path TEXT NOT NULL,
  document_type TEXT NOT NULL, -- 'PASSPORT', 'TITLE_DEED', 'MOU', 'SPA', 'PROOF_OF_FUNDS', 'OTHER'
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  actor_id UUID REFERENCES users(id) ON DELETE SET NULL,
  action TEXT NOT NULL, -- 'CREATE', 'UPDATE', 'DELETE', 'VIEW', 'ROLE_CHANGE', 'DATA_IMPORT'
  entity_name TEXT NOT NULL,
  entity_id TEXT NOT NULL,
  metadata JSONB DEFAULT '{}'::jsonb,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- =============================================================================
-- 8. INDEXING STRATEGY
-- =============================================================================

CREATE INDEX IF NOT EXISTS idx_properties_slug ON properties(slug);
CREATE INDEX IF NOT EXISTS idx_properties_area_id ON properties(area_id);
CREATE INDEX IF NOT EXISTS idx_properties_developer_id ON properties(developer_id);
CREATE INDEX IF NOT EXISTS idx_properties_project_id ON properties(project_id);
CREATE INDEX IF NOT EXISTS idx_properties_asking_price ON properties(asking_price);
CREATE INDEX IF NOT EXISTS idx_properties_property_type ON properties(property_type);
CREATE INDEX IF NOT EXISTS idx_properties_bedrooms ON properties(bedrooms);
CREATE INDEX IF NOT EXISTS idx_properties_completion_status ON properties(completion_status);
CREATE INDEX IF NOT EXISTS idx_properties_listing_status ON properties(listing_status);

CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_developer_id ON projects(developer_id);
CREATE INDEX IF NOT EXISTS idx_projects_community_id ON projects(community_id);

CREATE INDEX IF NOT EXISTS idx_developers_slug ON developers(slug);
CREATE INDEX IF NOT EXISTS idx_areas_slug ON areas(slug);
CREATE INDEX IF NOT EXISTS idx_lifestyle_category ON lifestyle(category);

CREATE INDEX IF NOT EXISTS idx_saved_properties_user_id ON saved_properties(user_id);
CREATE INDEX IF NOT EXISTS idx_saved_searches_user_id ON saved_searches(user_id);
CREATE INDEX IF NOT EXISTS idx_viewing_requests_property_id ON viewing_requests(property_id);
CREATE INDEX IF NOT EXISTS idx_viewing_requests_user_id ON viewing_requests(user_id);
CREATE INDEX IF NOT EXISTS idx_viewing_requests_status ON viewing_requests(status);

CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_assigned_agent_id ON leads(assigned_agent_id);
CREATE INDEX IF NOT EXISTS idx_deals_stage ON deals(stage);
CREATE INDEX IF NOT EXISTS idx_deals_client_id ON deals(client_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_actor_id ON audit_logs(actor_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_entity ON audit_logs(entity_name, entity_id);

-- =============================================================================
-- 9. TRIGGERS FOR AUTO-UPDATING TIMESTAMPS
-- =============================================================================

DO $$
DECLARE
  t text;
BEGIN
  FOR t IN
    SELECT table_name FROM information_schema.tables
    WHERE table_schema = 'public'
    AND table_name IN (
      'sources', 'users', 'profiles', 'areas', 'developers', 'projects',
      'properties', 'lifestyle', 'saved_searches', 'viewing_requests',
      'client_intakes', 'leads', 'clients', 'deals', 'tasks', 'notes', 'documents'
    )
  LOOP
    EXECUTE format('
      DROP TRIGGER IF EXISTS trg_update_timestamp_%I ON %I;
      CREATE TRIGGER trg_update_timestamp_%I
      BEFORE UPDATE ON %I
      FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    ', t, t, t, t);
  END LOOP;
END $$;

-- =============================================================================
-- 10. ROW LEVEL SECURITY (RLS) POLICIES
-- =============================================================================

-- Enable RLS on all tables
ALTER TABLE sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE entity_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE developers ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE lifestyle ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE viewing_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_intakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Helper function to extract user role from auth
CREATE OR REPLACE FUNCTION get_current_user_role()
RETURNS user_role AS $$
DECLARE
  v_role user_role;
BEGIN
  SELECT role INTO v_role FROM public.users WHERE id = auth.uid();
  RETURN COALESCE(v_role, 'PUBLIC'::user_role);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- -----------------------------------------------------------------------------
-- PUBLIC / READ-ONLY CATALOG POLICIES
-- -----------------------------------------------------------------------------

CREATE POLICY "Public Read Sources" ON sources FOR SELECT USING (true);
CREATE POLICY "Public Read Entity Sources" ON entity_sources FOR SELECT USING (true);
CREATE POLICY "Public Read Areas" ON areas FOR SELECT USING (true);
CREATE POLICY "Public Read Developers" ON developers FOR SELECT USING (true);
CREATE POLICY "Public Read Projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public Read Active Properties" ON properties FOR SELECT USING (listing_status = 'ACTIVE');
CREATE POLICY "Public Read Lifestyle" ON lifestyle FOR SELECT USING (true);

-- -----------------------------------------------------------------------------
-- USER & PROFILE POLICIES
-- -----------------------------------------------------------------------------

CREATE POLICY "Users can view own user record" ON users
  FOR SELECT USING (auth.uid() = id OR get_current_user_role() IN ('ADMIN', 'SUPER_ADMIN'));

CREATE POLICY "Users can update own user record" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = user_id OR get_current_user_role() IN ('ADMIN', 'SUPER_ADMIN'));

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- -----------------------------------------------------------------------------
-- SAVED PROPERTIES & SAVED SEARCHES POLICIES
-- -----------------------------------------------------------------------------

CREATE POLICY "Users manage own saved properties" ON saved_properties
  FOR ALL USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users manage own saved searches" ON saved_searches
  FOR ALL USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- -----------------------------------------------------------------------------
-- VIEWING REQUESTS & INTAKES POLICIES
-- -----------------------------------------------------------------------------

CREATE POLICY "Public can insert viewing requests" ON viewing_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view own viewing requests" ON viewing_requests
  FOR SELECT USING (
    auth.uid() = user_id
    OR get_current_user_role() IN ('AGENT', 'ADVISOR', 'ADMIN', 'SUPER_ADMIN')
  );

CREATE POLICY "Staff can update viewing requests" ON viewing_requests
  FOR UPDATE USING (get_current_user_role() IN ('AGENT', 'ADVISOR', 'ADMIN', 'SUPER_ADMIN'));

CREATE POLICY "Public can insert client intakes" ON client_intakes
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Staff can view client intakes" ON client_intakes
  FOR SELECT USING (get_current_user_role() IN ('ADVISOR', 'ADMIN', 'SUPER_ADMIN'));

-- -----------------------------------------------------------------------------
-- CRM POLICIES (LEADS, CLIENTS, DEALS, TASKS, NOTES, DOCUMENTS, AUDIT LOGS)
-- -----------------------------------------------------------------------------

CREATE POLICY "Public can submit leads" ON leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Staff can view and manage leads" ON leads
  FOR ALL USING (get_current_user_role() IN ('AGENT', 'ADVISOR', 'ADMIN', 'SUPER_ADMIN'));

CREATE POLICY "Staff can manage clients" ON clients
  FOR ALL USING (
    get_current_user_role() IN ('ADMIN', 'SUPER_ADMIN')
    OR (get_current_user_role() = 'ADVISOR' AND assigned_advisor_id = auth.uid())
  );

CREATE POLICY "Clients can view own client profile" ON clients
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Staff can manage deals" ON deals
  FOR ALL USING (
    get_current_user_role() IN ('ADMIN', 'SUPER_ADMIN')
    OR (get_current_user_role() = 'AGENT' AND assigned_agent_id = auth.uid())
  );

CREATE POLICY "Staff can view and manage tasks" ON tasks
  FOR ALL USING (get_current_user_role() IN ('AGENT', 'ADVISOR', 'ADMIN', 'SUPER_ADMIN'));

CREATE POLICY "Staff can view and create notes" ON notes
  FOR ALL USING (get_current_user_role() IN ('AGENT', 'ADVISOR', 'ADMIN', 'SUPER_ADMIN'));

CREATE POLICY "Secure Document Access" ON documents
  FOR ALL USING (
    get_current_user_role() IN ('ADMIN', 'SUPER_ADMIN')
    OR (uploaded_by = auth.uid())
  );

CREATE POLICY "Admin only Audit Logs" ON audit_logs
  FOR SELECT USING (get_current_user_role() IN ('ADMIN', 'SUPER_ADMIN'));

CREATE POLICY "Insert Audit Logs" ON audit_logs
  FOR INSERT WITH CHECK (true);
