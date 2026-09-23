-- =============================================================================
-- DUBAI REAL ESTATE, INVESTMENT INTELLIGENCE & PRIVATE CLIENT DESK
-- Idempotent PostgreSQL Data Seeding Script (Phase 5)
-- =============================================================================

-- -----------------------------------------------------------------------------
-- 1. SEED SOURCES
-- -----------------------------------------------------------------------------

INSERT INTO sources (id, slug, name, publisher, source_type, official_url, description, status)
VALUES
  ('a0000000-0000-0000-0000-000000000001', 'src-dld-official', 'Dubai Land Department (DLD) Official Tariff & Registration', 'Government of Dubai', 'DLD', 'https://dubailand.gov.ae', 'Official conveyance, Title Deed issuance, map registration, and trustee fee schedules.', 'ACTIVE'),
  ('a0000000-0000-0000-0000-000000000002', 'src-uae-golden-visa', 'UAE Federal Authority for Identity and Citizenship (ICP)', 'UAE Federal Government', 'UAE_GOVERNMENT', 'https://icp.gov.ae', 'Cabinet Resolution No. 65 of 2022 governing the 5-Year Real Estate Investor Golden Visa criteria.', 'ACTIVE'),
  ('a0000000-0000-0000-0000-000000000003', 'src-fta-corporate-tax', 'UAE Federal Tax Authority (FTA)', 'UAE Ministry of Finance', 'FTA', 'https://tax.gov.ae', 'Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses.', 'ACTIVE'),
  ('a0000000-0000-0000-0000-000000000004', 'src-fta-vat', 'UAE Federal Tax Authority (FTA) - VAT Portal', 'UAE Ministry of Finance', 'FTA', 'https://tax.gov.ae', 'Federal Decree-Law No. 8 of 2017 on Value Added Tax.', 'ACTIVE'),
  ('a0000000-0000-0000-0000-000000000005', 'src-omniyat-official', 'OMNIYAT Official Developer Registry', 'Omniyat Real Estate LLC', 'DEVELOPER', 'https://omniyat.com', 'Official project portfolio, master specifications, and architectural documentation for One at Palm Jumeirah.', 'ACTIVE'),
  ('a0000000-0000-0000-0000-000000000006', 'src-emaar-official', 'Emaar Properties PJSC Official Portal', 'Emaar Properties PJSC', 'DEVELOPER', 'https://properties.emaar.com', 'Official specifications and development master plans for Il Primo, Burj Crown, and Dubai Hills Estate.', 'ACTIVE'),
  ('a0000000-0000-0000-0000-000000000007', 'src-select-group-official', 'Select Group Official Portal', 'Select Group', 'DEVELOPER', 'https://select-group.ae', 'Official development registers for Peninsula Five and waterfront portfolios.', 'ACTIVE'),
  ('a0000000-0000-0000-0000-000000000008', 'src-michelin-dubai', 'Michelin Guide Dubai Inspection', 'Michelin Travel Partner', 'OTHER_OFFICIAL', 'https://guide.michelin.com/en/ae/restaurants', 'Official culinary inspectors ratings and tasting menu pricing verifications.', 'ACTIVE'),
  ('a0000000-0000-0000-0000-000000000009', 'src-dcaa-aviation', 'Dubai Civil Aviation Authority (DCAA)', 'Government of Dubai', 'DCAA', 'https://dcaa.gov.ae', 'Licensed commercial aviation operators and VIP terminal handlers register.', 'ACTIVE'),
  ('a0000000-0000-0000-0000-000000000010', 'src-dmca-maritime', 'Dubai Maritime City Authority (DMCA)', 'Government of Dubai', 'DMCA', 'https://pcfc.ae', 'Licensed maritime charters, superyacht berths, and commercial fleet registers.', 'ACTIVE')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  official_url = EXCLUDED.official_url,
  updated_at = NOW();

-- -----------------------------------------------------------------------------
-- 2. SEED DEVELOPERS
-- -----------------------------------------------------------------------------

INSERT INTO developers (id, slug, legal_name, display_name, developer_identifier, license_number, official_url, status, headquarters, founded_year, portfolio_overview, source_id)
VALUES
  ('b0000000-0000-0000-0000-000000000001', 'omniyat', 'Omniyat Real Estate LLC', 'OMNIYAT', 'DLD-DEV-108', 'DLD-LIC-10892', 'https://omniyat.com', 'ACTIVE', 'Dubai, UAE', 2005, 'Ultra-luxury architectural landmarks designed in collaboration with Zaha Hadid and Foster + Partners.', 'a0000000-0000-0000-0000-000000000005'),
  ('b0000000-0000-0000-0000-000000000002', 'emaar-properties', 'Emaar Properties PJSC', 'Emaar', 'DLD-DEV-101', 'DLD-LIC-10101', 'https://properties.emaar.com', 'ACTIVE', 'Dubai, UAE', 1997, 'Master developer of Downtown Dubai, Burj Khalifa, Dubai Marina, and Dubai Hills Estate.', 'a0000000-0000-0000-0000-000000000006'),
  ('b0000000-0000-0000-0000-000000000003', 'select-group', 'Select Group Development LLC', 'Select Group', 'DLD-DEV-204', 'DLD-LIC-20455', 'https://select-group.ae', 'ACTIVE', 'Dubai, UAE', 2002, 'Premium waterfront residential towers and master-planned urban communities in Business Bay and Dubai Marina.', 'a0000000-0000-0000-0000-000000000007'),
  ('b0000000-0000-0000-0000-000000000004', 'meraas', 'Meraas Holding LLC', 'Meraas', 'DLD-DEV-305', 'DLD-LIC-30512', 'https://meraas.com', 'ACTIVE', 'Dubai, UAE', 2007, 'Developer of iconic lifestyle destinations including Bluewaters Island, City Walk, and Jumeirah Bay Island.', 'a0000000-0000-0000-0000-000000000001'),
  ('b0000000-0000-0000-0000-000000000005', 'ellington-properties', 'Ellington Properties Development LLC', 'Ellington', 'DLD-DEV-412', 'DLD-LIC-41289', 'https://ellingtonproperties.ae', 'ACTIVE', 'Dubai, UAE', 2014, 'Design-centric boutique residences focused on curated aesthetics in Palm Jumeirah and Downtown Dubai.', 'a0000000-0000-0000-0000-000000000001')
ON CONFLICT (id) DO UPDATE SET
  legal_name = EXCLUDED.legal_name,
  display_name = EXCLUDED.display_name,
  official_url = EXCLUDED.official_url,
  updated_at = NOW();

-- -----------------------------------------------------------------------------
-- 3. SEED AREAS
-- -----------------------------------------------------------------------------

INSERT INTO areas (id, slug, name, sector, description, freehold_status, coordinates_latitude, coordinates_longitude, coordinate_type, transit_dxb_minutes, transit_downtown_minutes, hero_image_url, source_id)
VALUES
  ('c0000000-0000-0000-0000-000000000001', 'palm-jumeirah', 'Palm Jumeirah', 'WATERFRONT', 'World-renowned archipelago offering private beachfront living, ultra-luxury villas, and branded hotel residences.', 'DESIGNATED_FREEHOLD', 25.1124000, 55.1390000, 'COMMUNITY_CENTROID', 28, 22, 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80', 'a0000000-0000-0000-0000-000000000001'),
  ('c0000000-0000-0000-0000-000000000002', 'downtown-dubai', 'Downtown Dubai', 'DOWNTOWN', 'The urban core of Dubai housing the Burj Khalifa, Dubai Opera, and prestigious ultra-luxury high-rise penthouses.', 'DESIGNATED_FREEHOLD', 25.1972000, 55.2744000, 'COMMUNITY_CENTROID', 15, 0, 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1600&q=80', 'a0000000-0000-0000-0000-000000000001'),
  ('c0000000-0000-0000-0000-000000000003', 'dubai-hills-estate', 'Dubai Hills Estate', 'GOLF_SUBURBS', 'Master-planned golf community featuring championship greens, private family mansions, and rolling parklands.', 'DESIGNATED_FREEHOLD', 25.1112000, 55.2576000, 'COMMUNITY_CENTROID', 20, 15, 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', 'a0000000-0000-0000-0000-000000000001'),
  ('c0000000-0000-0000-0000-000000000004', 'dubai-marina', 'Dubai Marina', 'WATERFRONT', 'Vibrant waterfront skyline featuring superyacht berths, luxury high-rises, and private marina promenades.', 'DESIGNATED_FREEHOLD', 25.0805000, 55.1403000, 'COMMUNITY_CENTROID', 25, 20, 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1600&q=80', 'a0000000-0000-0000-0000-000000000001'),
  ('c0000000-0000-0000-0000-000000000005', 'difc', 'DIFC', 'FINANCIAL', 'The premier international financial center of the Middle East, offering prestigious urban residences and Michelin dining.', 'DESIGNATED_FREEHOLD', 25.2095000, 55.2798000, 'COMMUNITY_CENTROID', 12, 5, 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=80', 'a0000000-0000-0000-0000-000000000001')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  sector = EXCLUDED.sector,
  updated_at = NOW();

-- -----------------------------------------------------------------------------
-- 4. SEED PROJECTS
-- -----------------------------------------------------------------------------

INSERT INTO projects (id, slug, name, developer_id, community_id, area_name, developer_name, status, completion_status, handover_date, project_identifier, escrow_identifier, starting_price, starting_price_type, hero_image_url, official_url, source_id)
VALUES
  ('d0000000-0000-0000-0000-000000000001', 'one-at-palm-jumeirah', 'One at Palm Jumeirah, Dorchester Collection', 'b0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', 'Palm Jumeirah', 'OMNIYAT', 'ACTIVE', 'READY', 'Completed (2021)', 'DLD-PRJ-5412', 'ESCROW-DLD-5412-CBD', 32000000.00, 'ASKING', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80', 'https://omniyat.com', 'a0000000-0000-0000-0000-000000000005'),
  ('d0000000-0000-0000-0000-000000000002', 'il-primo-downtown', 'Il Primo Downtown Dubai', 'b0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000002', 'Downtown Dubai', 'Emaar', 'ACTIVE', 'READY', 'Completed (2023)', 'DLD-PRJ-8821', 'ESCROW-DLD-8821-ENBD', 28500000.00, 'ASKING', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80', 'https://properties.emaar.com', 'a0000000-0000-0000-0000-000000000006'),
  ('d0000000-0000-0000-0000-000000000003', 'peninsula-five', 'Peninsula Five Waterfront', 'b0000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000004', 'Business Bay / Canal', 'Select Group', 'ACTIVE', 'UNDER_CONSTRUCTION', 'Q4 2025', 'DLD-PRJ-9104', 'ESCROW-DLD-9104-DIB', 3200000.00, 'ASKING', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80', 'https://select-group.ae', 'a0000000-0000-0000-0000-000000000007')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  status = EXCLUDED.status,
  updated_at = NOW();

-- -----------------------------------------------------------------------------
-- 5. SEED PROPERTIES
-- -----------------------------------------------------------------------------

INSERT INTO properties (
  id, slug, title, listing_status, transaction_type, property_type,
  asking_price, price_type, currency, price_per_sqft,
  internal_area_sqft, internal_area_sqm, bedrooms, bathrooms, parking_spaces, floor_number, view_type,
  project_id, developer_id, area_id, project_name, developer_name, area_name,
  coordinates_latitude, coordinates_longitude, coordinate_type,
  completion_status, completion_date, images, source_status, source_id
)
VALUES
  (
    'e0000000-0000-0000-0000-000000000001',
    'one-palm-4-bedroom-residence',
    '4-Bedroom Luxury Residence at One at Palm Jumeirah',
    'ACTIVE', 'SALE', 'apartment',
    42500000.00, 'ASKING', 'AED', 5483.87,
    7750.00, 720.00, 4, 5, 3, 14, 'Full Arabian Gulf & Dubai Marina Skyline View',
    'd0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001',
    'One at Palm Jumeirah, Dorchester Collection', 'OMNIYAT', 'Palm Jumeirah',
    25.1124000, 55.1390000, 'PROJECT_CENTROID',
    'READY', 'Completed (2021)',
    ARRAY['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'],
    'SOURCE_AUDITED', 'a0000000-0000-0000-0000-000000000005'
  ),
  (
    'e0000000-0000-0000-0000-000000000002',
    'il-primo-opera-district-penthouse',
    'Il Primo Opera District Full-Floor Penthouse',
    'ACTIVE', 'SALE', 'penthouse',
    38000000.00, 'ASKING', 'AED', 7191.52,
    5284.00, 490.90, 4, 5, 3, 38, 'Burj Khalifa & Dubai Opera Front-Row Panoramic View',
    'd0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000002',
    'Il Primo Downtown Dubai', 'Emaar', 'Downtown Dubai',
    25.1972000, 55.2744000, 'PROJECT_CENTROID',
    'READY', 'Completed (2023)',
    ARRAY['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80'],
    'SOURCE_AUDITED', 'a0000000-0000-0000-0000-000000000006'
  ),
  (
    'e0000000-0000-0000-0000-000000000003',
    'dubai-hills-fairway-vistas-mansion',
    'Fairway Vistas Master Golf Mansion',
    'ACTIVE', 'SALE', 'mansion',
    55000000.00, 'ASKING', 'AED', 4782.61,
    11500.00, 1068.39, 6, 7, 4, 2, 'Direct Championship Golf Course & Parklands View',
    NULL, 'b0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000003',
    'Dubai Hills Estate', 'Emaar', 'Dubai Hills Estate',
    25.1112000, 55.2576000, 'COMMUNITY_CENTROID',
    'READY', 'Completed',
    ARRAY['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80'],
    'SOURCE_AUDITED', 'a0000000-0000-0000-0000-000000000006'
  )
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  asking_price = EXCLUDED.asking_price,
  updated_at = NOW();

-- -----------------------------------------------------------------------------
-- 6. SEED LIFESTYLE ENTITIES
-- -----------------------------------------------------------------------------

INSERT INTO lifestyle (id, slug, name, category, operator, location, area_name, official_url, pricing_status, tariff_details, verification_status, image_url, source_id)
VALUES
  ('f0000000-0000-0000-0000-000000000001', 'ossiano-underwater-dining', 'Ossiano Dubai (1 Michelin Star)', 'dining', 'Atlantis Dubai', 'Atlantis, The Palm', 'Palm Jumeirah', 'https://atlantis.com', 'VERIFIED_TARIFF', '10-course tasting menu from AED 1,250 per guest', 'SOURCE_AUDITED', 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80', 'a0000000-0000-0000-0000-000000000008'),
  ('f0000000-0000-0000-0000-000000000002', 'tresind-studio', 'Trèsind Studio (2 Michelin Stars)', 'dining', 'Passion F&B', 'St. Regis Gardens, The Palm', 'Palm Jumeirah', 'https://tresindstudio.com', 'VERIFIED_TARIFF', 'Degustation menu AED 995 per guest + VAT', 'SOURCE_AUDITED', 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80', 'a0000000-0000-0000-0000-000000000008'),
  ('f0000000-0000-0000-0000-000000000003', 'jetex-vip-terminal', 'Jetex Private Jet FBO Terminal', 'aviation', 'Jetex Executive Aviation', 'Al Maktoum International Airport (DWC)', 'Dubai South', 'https://jetex.com', 'PRICE_ON_REQUEST', 'Private terminal VIP handling, customs & private aircraft charter', 'SOURCE_AUDITED', 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80', 'a0000000-0000-0000-0000-000000000009'),
  ('f0000000-0000-0000-0000-000000000004', 'burj-al-arab-jumeirah', 'Burj Al Arab Jumeirah (5-Star Ultra-Luxury)', 'hotels', 'Jumeirah Group', 'Umm Suqeim 3', 'Jumeirah', 'https://jumeirah.com', 'VERIFIED_TARIFF', 'Deluxe one-bedroom suites from AED 4,500/night', 'SOURCE_AUDITED', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80', 'a0000000-0000-0000-0000-000000000001')
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  pricing_status = EXCLUDED.pricing_status,
  updated_at = NOW();

-- -----------------------------------------------------------------------------
-- 7. SEED ENTITY PROVENANCE
-- -----------------------------------------------------------------------------

INSERT INTO entity_sources (entity_type, entity_id, source_id, source_reference, source_date, verification_status, notes)
VALUES
  ('property', 'e0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000005', 'One at Palm Jumeirah Official Omniyat Register', '2026-09-01', 'SOURCE_AUDITED', 'Property internal specifications and floor area audited against developer register.'),
  ('property', 'e0000000-0000-0000-0000-000000000002', 'a0000000-0000-0000-0000-000000000006', 'Il Primo Official Emaar Register', '2026-09-01', 'SOURCE_AUDITED', 'Downtown Dubai Opera District penthouse specifications verified.'),
  ('developer', 'b0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 'DLD Developer Registry DLD-DEV-108', '2026-09-01', 'SOURCE_AUDITED', 'DLD license and official registration audited.'),
  ('area', 'c0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 'Regulation No. 3 of 2006 Freehold Register', '2026-09-01', 'SOURCE_AUDITED', 'Palm Jumeirah designated freehold community boundaries.');
