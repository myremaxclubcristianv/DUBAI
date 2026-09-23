-- ============================================
-- DUBAI REAL ESTATE & LIFESTYLE PLATFORM
-- Database Schema with Data Provenance
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- SOURCE & PROVENANCE ARCHITECTURE
-- ============================================

CREATE TABLE sources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'OFFICIAL_GOVERNMENT', 'DEVELOPER', 'LICENSED_OPERATOR', 'MARKET_DATA', 'PUBLIC', 'USER_PROVIDED'
  url TEXT,
  authority TEXT,
  status TEXT DEFAULT 'ACTIVE', -- 'ACTIVE', 'INACTIVE', 'DEPRECATED'
  last_checked TIMESTAMP WITH TIME ZONE,
  last_successful_retrieval TIMESTAMP WITH TIME ZONE,
  data_categories TEXT[], -- e.g., '{properties,transactions,rentals}'
  update_frequency TEXT, -- 'DAILY', 'WEEKLY', 'MONTHLY', 'QUARTERLY', 'YEARLY'
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE source_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source_id UUID NOT NULL REFERENCES sources(id) ON DELETE CASCADE,
  source_reference TEXT,
  publication_date DATE,
  data_period_start DATE,
  data_period_end DATE,
  retrieved_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  verified_at TIMESTAMP WITH TIME ZONE,
  verification_status TEXT DEFAULT 'NOT_VERIFIED', -- 'VERIFIED', 'NOT_VERIFIED', 'DISPUTED', 'OUTDATED'
  confidence_level TEXT, -- 'HIGH', 'MEDIUM', 'LOW'
  original_value TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- USERS & AUTHENTICATION
-- ============================================

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  phone TEXT,
  role TEXT DEFAULT 'USER', -- 'USER', 'CLIENT', 'AGENT', 'ADVISOR', 'ADMIN', 'SUPER_ADMIN'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- DEVELOPERS
-- ============================================

CREATE TABLE developers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  legal_name TEXT NOT NULL,
  display_name TEXT,
  developer_id TEXT,
  license_number TEXT,
  license_expiry DATE,
  official_website TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  office_address TEXT,
  description TEXT,
  status TEXT DEFAULT 'ACTIVE', -- 'ACTIVE', 'INACTIVE', 'SUSPENDED'
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- PROJECTS
-- ============================================

CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  developer_id UUID NOT NULL REFERENCES developers(id),
  master_developer TEXT,
  location TEXT NOT NULL,
  community TEXT NOT NULL,
  district TEXT,
  coordinates_latitude NUMERIC,
  coordinates_longitude NUMERIC,
  project_identifier TEXT,
  status TEXT DEFAULT 'ACTIVE', -- 'ACTIVE', 'COMPLETED', 'SOLD_OUT', 'CANCELLED', 'UPCOMING'
  construction_status TEXT, -- 'NOT_STARTED', 'FOUNDATION', 'STRUCTURE', 'FINISHING', 'READY'
  completion_date DATE,
  handover_date DATE,
  number_of_buildings INTEGER,
  total_units INTEGER,
  project_value NUMERIC,
  escrow_account TEXT,
  escrow_bank TEXT,
  unit_types TEXT[], -- e.g., '{apartment,villa,penthouse}'
  starting_price NUMERIC,
  current_price_from NUMERIC,
  price_per_sqft NUMERIC,
  payment_plan TEXT,
  service_charge_per_sqft NUMERIC,
  amenities TEXT[],
  nearby_infrastructure TEXT[],
  official_brochure_url TEXT,
  floorplans_url TEXT,
  official_website TEXT,
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- PROPERTIES
-- ============================================

CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  property_id TEXT UNIQUE,
  listing_status TEXT DEFAULT 'ACTIVE', -- 'ACTIVE', 'SOLD', 'RENTED', 'WITHDRAWN', 'PENDING'
  transaction_type TEXT NOT NULL, -- 'SALE', 'RENT'
  property_type TEXT NOT NULL, -- 'apartment', 'villa', 'townhouse', 'penthouse', 'mansion', 'branded_residence', 'plot', 'commercial', 'office', 'retail'
  asking_price NUMERIC,
  asking_price_currency TEXT DEFAULT 'AED',
  transaction_price NUMERIC,
  transaction_price_currency TEXT DEFAULT 'AED',
  market_estimate NUMERIC,
  market_estimate_currency TEXT DEFAULT 'AED',
  internal_area_sqft NUMERIC,
  internal_area_sqm NUMERIC,
  plot_area_sqft NUMERIC,
  plot_area_sqm NUMERIC,
  bedrooms INTEGER,
  bathrooms INTEGER,
  parking_spaces INTEGER,
  floor_number INTEGER,
  view TEXT,
  has_balcony BOOLEAN DEFAULT FALSE,
  has_terrace BOOLEAN DEFAULT FALSE,
  furnishing_status TEXT, -- 'UNFURNISHED', 'SEMI_FURNISHED', 'FULLY_FURNISHED'
  building_name TEXT,
  project_id UUID REFERENCES projects(id),
  developer_id UUID REFERENCES developers(id),
  community TEXT NOT NULL,
  district TEXT,
  location TEXT NOT NULL,
  coordinates_latitude NUMERIC,
  coordinates_longitude NUMERIC,
  completion_status TEXT, -- 'OFF_PLAN', 'READY', 'UNDER_CONSTRUCTION'
  completion_date DATE,
  handover_date DATE,
  payment_plan TEXT,
  service_charge_per_year NUMERIC,
  rental_price_monthly NUMERIC,
  rental_price_annual NUMERIC,
  rental_price_currency TEXT DEFAULT 'AED',
  amenities TEXT[],
  description TEXT,
  images TEXT[],
  floorplan_url TEXT,
  video_url TEXT,
  documents TEXT[],
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TRANSACTIONS
-- ============================================

CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  transaction_id TEXT UNIQUE,
  property_id UUID REFERENCES properties(id),
  transaction_date DATE NOT NULL,
  transaction_amount NUMERIC NOT NULL,
  currency TEXT DEFAULT 'AED',
  property_size_sqft NUMERIC,
  price_per_sqft NUMERIC,
  property_type TEXT,
  bedrooms INTEGER,
  project_id UUID REFERENCES projects(id),
  building_name TEXT,
  developer_id UUID REFERENCES developers(id),
  community TEXT,
  district TEXT,
  transaction_type TEXT, -- 'SALE', 'RENT', 'MORTGAGE'
  previous_transaction_id UUID REFERENCES transactions(id),
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- RENTAL RECORDS
-- ============================================

CREATE TABLE rental_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  property_id UUID REFERENCES properties(id),
  rent_type TEXT NOT NULL, -- 'ASKING', 'ACHIEVED', 'HISTORICAL', 'ESTIMATE'
  annual_rent NUMERIC,
  monthly_rent NUMERIC,
  currency TEXT DEFAULT 'AED',
  start_date DATE,
  end_date DATE,
  bedrooms INTEGER,
  property_type TEXT,
  community TEXT,
  district TEXT,
  size_sqft NUMERIC,
  price_per_sqft NUMERIC,
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- AREAS / COMMUNITIES
-- ============================================

CREATE TABLE areas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  type TEXT, -- 'COMMUNITY', 'DISTRICT', 'NEIGHBORHOOD'
  parent_area_id UUID REFERENCES areas(id),
  description TEXT,
  coordinates_latitude NUMERIC,
  coordinates_longitude NUMERIC,
  metro_stations TEXT[],
  schools TEXT[],
  hospitals TEXT[],
  malls TEXT[],
  beaches_nearby BOOLEAN,
  golf_courses_nearby BOOLEAN,
  airports_nearby TEXT[],
  lifestyle_tags TEXT[], -- e.g., '{luxury,family,urban,waterfront}'
  investment_characteristics TEXT[],
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- LIFESTYLE - YACHTS
-- ============================================

CREATE TABLE yachts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  model TEXT,
  operator TEXT,
  length_feet NUMERIC,
  guests_capacity INTEGER,
  cabins INTEGER,
  crew INTEGER,
  departure_marina TEXT,
  duration_hours NUMERIC,
  route TEXT,
  catering_included BOOLEAN,
  water_toys TEXT[],
  price_per_hour NUMERIC,
  price_per_day NUMERIC,
  currency TEXT DEFAULT 'AED',
  availability_status TEXT, -- 'AVAILABLE', 'BOOKED', 'MAINTENANCE'
  license_number TEXT,
  verified BOOLEAN DEFAULT FALSE,
  contact_email TEXT,
  contact_phone TEXT,
  website TEXT,
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- LIFESTYLE - DESERT SAFARI
-- ============================================

CREATE TABLE desert_safaris (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  operator TEXT NOT NULL,
  experience_name TEXT NOT NULL,
  experience_type TEXT, -- 'PRIVATE', 'VIP', 'SHARED'
  duration_hours NUMERIC,
  vehicle_type TEXT,
  driver_included BOOLEAN DEFAULT TRUE,
  route TEXT,
  camp_name TEXT,
  camel_ride_included BOOLEAN DEFAULT FALSE,
  quad_bike_included BOOLEAN DEFAULT FALSE,
  dune_buggy_included BOOLEAN DEFAULT FALSE,
  sandboarding_included BOOLEAN DEFAULT FALSE,
  falcon_experience_included BOOLEAN DEFAULT FALSE,
  bbq_included BOOLEAN DEFAULT FALSE,
  private_dinner_included BOOLEAN DEFAULT FALSE,
  inclusions TEXT[],
  exclusions TEXT[],
  price_per_person NUMERIC,
  currency TEXT DEFAULT 'AED',
  cancellation_policy TEXT,
  booking_url TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- LIFESTYLE - PRIVATE AVIATION
-- ============================================

CREATE TABLE aviation_services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  operator TEXT NOT NULL,
  service_type TEXT NOT NULL, -- 'HELICOPTER_TRANSFER', 'HELICOPTER_TOUR', 'PRIVATE_JET_CHARTER', 'PRIVATE_JET_TRANSFER'
  aircraft_type TEXT,
  route TEXT,
  departure_airport TEXT,
  arrival_airport TEXT,
  duration_minutes NUMERIC,
  capacity INTEGER,
  price_per_hour NUMERIC,
  price_total NUMERIC,
  currency TEXT DEFAULT 'AED',
  availability_status TEXT,
  booking_url TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  website TEXT,
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- LIFESTYLE - LUXURY CARS
-- ============================================

CREATE TABLE luxury_cars (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER,
  daily_rate NUMERIC,
  weekly_rate NUMERIC,
  currency TEXT DEFAULT 'AED',
  deposit_amount NUMERIC,
  mileage_limit_km_per_day INTEGER,
  insurance_included BOOLEAN DEFAULT TRUE,
  delivery_available BOOLEAN DEFAULT FALSE,
  pickup_location TEXT,
  driver_option_available BOOLEAN DEFAULT FALSE,
  operator TEXT,
  availability_status TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  website TEXT,
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- LIFESTYLE - RESTAURANTS
-- ============================================

CREATE TABLE restaurants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  cuisine_type TEXT[],
  location TEXT NOT NULL,
  community TEXT,
  price_level TEXT, -- 'BUDGET', 'MODERATE', 'EXPENSIVE', 'LUXURY'
  fine_dining BOOLEAN DEFAULT FALSE,
  michelin_stars INTEGER,
  rooftop BOOLEAN DEFAULT FALSE,
  waterfront BOOLEAN DEFAULT FALSE,
  beach BOOLEAN DEFAULT FALSE,
  brunch_available BOOLEAN DEFAULT FALSE,
  steak_specialist BOOLEAN DEFAULT FALSE,
  japanese_specialist BOOLEAN DEFAULT FALSE,
  arabic_specialist BOOLEAN DEFAULT FALSE,
  italian_specialist BOOLEAN DEFAULT FALSE,
  nightlife_venue BOOLEAN DEFAULT FALSE,
  club BOOLEAN DEFAULT FALSE,
  lounge BOOLEAN DEFAULT FALSE,
  live_music BOOLEAN DEFAULT FALSE,
  dj BOOLEAN DEFAULT FALSE,
  vip_available BOOLEAN DEFAULT FALSE,
  official_website TEXT,
  contact_phone TEXT,
  reservations_url TEXT,
  average_price_per_person NUMERIC,
  currency TEXT DEFAULT 'AED',
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- LIFESTYLE - HOTELS
-- ============================================

CREATE TABLE hotels (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  community TEXT,
  category TEXT, -- 'HOTEL', 'RESORT', 'BOUTIQUE', 'BEACH', 'CITY', 'BUSINESS', 'FAMILY', 'VILLA', 'SERVICED_APARTMENT'
  star_rating INTEGER,
  rooms_count INTEGER,
  amenities TEXT[],
  official_website TEXT,
  booking_url TEXT,
  contact_phone TEXT,
  average_price_per_night NUMERIC,
  currency TEXT DEFAULT 'AED',
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- LIFESTYLE - EVENTS
-- ============================================

CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  event_type TEXT NOT NULL, -- 'CONCERT', 'FESTIVAL', 'SPORTS', 'FORMULA1', 'GOLF', 'TENNIS', 'EXHIBITION', 'BUSINESS', 'FASHION', 'ART', 'NIGHTLIFE', 'FAMILY'
  venue TEXT NOT NULL,
  location TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_time TIME,
  end_date DATE,
  organizer TEXT,
  description TEXT,
  ticket_url TEXT,
  official_website TEXT,
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- LIFESTYLE - CONCIERGE SERVICES
-- ============================================

CREATE TABLE concierge_services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  service_name TEXT NOT NULL,
  service_type TEXT NOT NULL, -- 'CHAUFFEUR', 'PRIVATE_DRIVER', 'CHEF', 'BUTLER', 'SECURITY', 'PERSONAL_ASSISTANT', 'PRIVATE_DINING', 'EVENT_PLANNING'
  provider TEXT NOT NULL,
  description TEXT,
  location TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  website TEXT,
  price_per_hour NUMERIC,
  price_per_day NUMERIC,
  currency TEXT DEFAULT 'AED',
  source_id UUID REFERENCES sources(id),
  source_record_id UUID REFERENCES source_records(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- CLIENT AREA
-- ============================================

CREATE TABLE client_saved_properties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  saved_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  notes TEXT,
  UNIQUE(user_id, property_id)
);

CREATE TABLE client_saved_searches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  search_name TEXT,
  search_filters JSONB,
  alert_enabled BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE client_comparisons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  property_ids UUID[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- VIEWING MANAGER
-- ============================================

CREATE TABLE viewings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  property_id UUID NOT NULL REFERENCES properties(id),
  agent_id UUID REFERENCES users(id),
  requested_date DATE NOT NULL,
  requested_time TIME NOT NULL,
  status TEXT DEFAULT 'REQUESTED', -- 'REQUESTED', 'CONFIRMED', 'COMPLETED', 'CANCELLED', 'RESCHEDULED'
  notes TEXT,
  follow_up_required BOOLEAN DEFAULT FALSE,
  outcome TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- CRM / LEADS
-- ============================================

CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  source TEXT, -- 'WEBSITE', 'REFERRAL', 'SOCIAL_MEDIA', 'EVENT', 'OTHER'
  stage TEXT DEFAULT 'NEW', -- 'NEW', 'QUALIFIED', 'PROPERTIES_SENT', 'VIEWING', 'OFFER', 'NEGOTIATION', 'MOU', 'SPA', 'CLOSED', 'LOST'
  interested_property_types TEXT[],
  budget_min NUMERIC,
  budget_max NUMERIC,
  preferred_communities TEXT[],
  notes TEXT,
  assigned_to UUID REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- DEALS
-- ============================================

CREATE TABLE deals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id),
  property_id UUID REFERENCES properties(id),
  deal_type TEXT, -- 'SALE', 'RENT', 'OFF_PLAN'
  stage TEXT DEFAULT 'OFFER', -- 'OFFER', 'NEGOTIATION', 'MOU', 'SPA', 'FINANCE', 'INSURANCE', 'PROPERTY_MANAGEMENT', 'COMPLETED'
  offer_amount NUMERIC,
  accepted_amount NUMERIC,
  currency TEXT DEFAULT 'AED',
  closing_date DATE,
  commission_amount NUMERIC,
  documents TEXT[],
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- DATA QUALITY
-- ============================================

CREATE TABLE data_quality_issues (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  table_name TEXT NOT NULL,
  record_id UUID,
  issue_type TEXT NOT NULL, -- 'DUPLICATE', 'MISSING_SOURCE', 'STALE_DATA', 'INVALID_VALUE', 'IMPOSSIBLE_AREA', 'INVALID_PRICE', 'CONFLICTING_SOURCES', 'BROKEN_URL', 'EXPIRED_INFO', 'MISSING_RELATIONSHIP'
  severity TEXT DEFAULT 'MEDIUM', -- 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'
  description TEXT,
  detected_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  resolved_at TIMESTAMP WITH TIME ZONE,
  resolved_by UUID REFERENCES users(id),
  status TEXT DEFAULT 'OPEN' -- 'OPEN', 'IN_PROGRESS', 'RESOLVED', 'IGNORED'
);

-- ============================================
-- AUDIT LOGS
-- ============================================

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  action TEXT NOT NULL,
  table_name TEXT,
  record_id UUID,
  old_values JSONB,
  new_values JSONB,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================

-- Properties
CREATE INDEX idx_properties_community ON properties(community);
CREATE INDEX idx_properties_district ON properties(district);
CREATE INDEX idx_properties_type ON properties(property_type);
CREATE INDEX idx_properties_status ON properties(listing_status);
CREATE INDEX idx_properties_transaction_type ON properties(transaction_type);
CREATE INDEX idx_properties_price ON properties(asking_price);
CREATE INDEX idx_properties_bedrooms ON properties(bedrooms);
CREATE INDEX idx_properties_project ON properties(project_id);
CREATE INDEX idx_properties_developer ON properties(developer_id);

-- Transactions
CREATE INDEX idx_transactions_date ON transactions(transaction_date);
CREATE INDEX idx_transactions_community ON transactions(community);
CREATE INDEX idx_transactions_type ON transactions(transaction_type);
CREATE INDEX idx_transactions_amount ON transactions(transaction_amount);

-- Projects
CREATE INDEX idx_projects_developer ON projects(developer_id);
CREATE INDEX idx_projects_community ON projects(community);
CREATE INDEX idx_projects_status ON projects(status);

-- Areas
CREATE INDEX idx_areas_name ON areas(name);
CREATE INDEX idx_areas_type ON areas(type);

-- Users
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- Source records
CREATE INDEX idx_source_records_source ON source_records(source_id);
CREATE INDEX idx_source_records_status ON source_records(verification_status);

-- ============================================
-- ROW LEVEL SECURITY POLICIES
-- ============================================

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE developers ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_saved_properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_saved_searches ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_comparisons ENABLE ROW LEVEL SECURITY;
ALTER TABLE viewings ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE deals ENABLE ROW LEVEL SECURITY;

-- Public read access for properties, projects, developers, transactions
CREATE POLICY "Public read access for properties" ON properties FOR SELECT USING (true);
CREATE POLICY "Public read access for projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public read access for developers" ON developers FOR SELECT USING (true);
CREATE POLICY "Public read access for transactions" ON transactions FOR SELECT USING (true);
CREATE POLICY "Public read access for areas" ON areas FOR SELECT USING (true);
CREATE POLICY "Public read access for sources" ON sources FOR SELECT USING (true);

-- Users can only read their own data
CREATE POLICY "Users can read own data" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own data" ON users FOR UPDATE USING (auth.uid() = id);

-- Client area - users can only access their own data
CREATE POLICY "Users can read own saved properties" ON client_saved_properties FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own saved properties" ON client_saved_properties FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own saved properties" ON client_saved_properties FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can read own saved searches" ON client_saved_searches FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own saved searches" ON client_saved_searches FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own saved searches" ON client_saved_searches FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own saved searches" ON client_saved_searches FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can read own comparisons" ON client_comparisons FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own comparisons" ON client_comparisons FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own comparisons" ON client_comparisons FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own comparisons" ON client_comparisons FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can read own viewings" ON viewings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own viewings" ON viewings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own viewings" ON viewings FOR UPDATE USING (auth.uid() = user_id);

-- Agents and advisors can read leads
CREATE POLICY "Agents can read leads" ON leads FOR SELECT USING (
  auth.uid() = assigned_to OR 
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('AGENT', 'ADVISOR', 'ADMIN', 'SUPER_ADMIN'))
);

-- Admin and super admin have full access
CREATE POLICY "Admin full access on properties" ON properties FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('ADMIN', 'SUPER_ADMIN'))
);
CREATE POLICY "Admin full access on projects" ON projects FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('ADMIN', 'SUPER_ADMIN'))
);
CREATE POLICY "Admin full access on developers" ON developers FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('ADMIN', 'SUPER_ADMIN'))
);
CREATE POLICY "Admin full access on leads" ON leads FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('ADMIN', 'SUPER_ADMIN'))
);
CREATE POLICY "Admin full access on deals" ON deals FOR ALL USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role IN ('ADMIN', 'SUPER_ADMIN'))
);

-- ============================================
-- FUNCTIONS AND TRIGGERS FOR UPDATED_AT
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply to tables with updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_developers_updated_at BEFORE UPDATE ON developers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_properties_updated_at BEFORE UPDATE ON properties
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_areas_updated_at BEFORE UPDATE ON areas
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_yachts_updated_at BEFORE UPDATE ON yachts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_desert_safaris_updated_at BEFORE UPDATE ON desert_safaris
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_aviation_services_updated_at BEFORE UPDATE ON aviation_services
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_luxury_cars_updated_at BEFORE UPDATE ON luxury_cars
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_restaurants_updated_at BEFORE UPDATE ON restaurants
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_hotels_updated_at BEFORE UPDATE ON hotels
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_concierge_services_updated_at BEFORE UPDATE ON concierge_services
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_client_saved_searches_updated_at BEFORE UPDATE ON client_saved_searches
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_client_comparisons_updated_at BEFORE UPDATE ON client_comparisons
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_viewings_updated_at BEFORE UPDATE ON viewings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_deals_updated_at BEFORE UPDATE ON deals
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();