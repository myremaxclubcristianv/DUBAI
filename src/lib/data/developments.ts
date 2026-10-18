import { ProvenanceMetadata } from '@/types/provenance'
import { createOfficialProvenance } from './sources'

/* ========================================================================= */
/* 01. TYPES & INTERFACES                                                    */
/* ========================================================================= */

export interface DevelopmentUnit {
  id: string
  unitNumber: string
  tower: 'A' | 'B' | 'C' | 'D'
  floor: number
  bedrooms: number
  unitType: '2B' | '3B' | '4B'
  subtype: string
  view: string
  internalAreaSqFt: number
  externalAreaSqFt: number
  totalAreaSqFt: number
  internalAreaM2: number
  externalAreaM2: number
  totalAreaM2: number
  investorPriceAed: number
  investorPriceAedRounded: number
  planId: 'type-01-corner' | 'type-02-middle' | 'type-03-corner' | 'type-06-middle'
  planLabel: string
  hasDiscrepancy: boolean
  discrepancyNote?: string
  availabilityStatus: 'LISTED_INVESTOR_SHEET'
}

export interface DesignConcept {
  id: string
  name: string
  headline: string
  description: string
  arabicHeadline?: string
  palette: string[]
  accentColor: string
  materials: string[]
}

export interface TravelTimeEntry {
  destination: string
  minutes: number
  sourceNote: string
}

export interface FloorPlanDefinition {
  id: string
  name: string
  bedrooms: number
  typicalAreaM2: number
  applicableSubtypes: string[]
  description: string
  rooms: string[]
  notes: string
}

export interface DevelopmentProject {
  id: string
  slug: string
  name: string
  brand: string
  subtitle: string
  headline: string
  location: {
    district: string
    area: string
    emirate: string
    country: string
    full: string
  }
  concept: string
  towersCount: number
  floorsPerTower: string
  apartmentsTotal: number
  apartmentsMix: {
    twoBedroom: number
    threeBedroom: number
    fourBedroom: number
  }
  villasTotal: number
  timeline: {
    beginning: string
    completionDate: string
    isIndicative: boolean
    qualification: string
  }
  developers: {
    brandPartner: string
    developer: string
    jointEntity?: string
    headOffice: string
  }
  features: string[]
  designConcepts: DesignConcept[]
  travelTimes: TravelTimeEntry[]
  investorOfferTerms: {
    title: string
    conditions: string[]
    parkingPriceAed: number
    paymentWindow: string
    qualification: string
  }
  disclaimers: string[]
  heroSummary: string
  editorialDescription: string
  provenance: ProvenanceMetadata
}

/* ========================================================================= */
/* 02. BRABUS ISLAND PROJECT SPECIFICATION                                   */
/* ========================================================================= */

export const BRABUS_ISLAND_PROJECT: DevelopmentProject = {
  id: 'dev-brabus-island',
  slug: 'brabus-island',
  name: 'BRABUS ISLAND',
  brand: 'BRABUS GmbH & Reportage Properties',
  subtitle: 'Al Seef District, Al Raha, Abu Dhabi',
  headline: 'Tailor-Made Waterfront Architecture on the Arabian Gulf',
  location: {
    district: 'Al Seef District',
    area: 'Al Raha',
    emirate: 'Abu Dhabi',
    country: 'UAE',
    full: 'Al Seef District, Al Raha, Abu Dhabi, UAE',
  },
  concept: 'Four residential towers, 352 apartments and 96 luxury waterfront villas',
  towersCount: 4,
  floorsPerTower: '13 residential floors plus basement',
  apartmentsTotal: 352,
  apartmentsMix: {
    twoBedroom: 256,
    threeBedroom: 80,
    fourBedroom: 16,
  },
  villasTotal: 96,
  timeline: {
    beginning: 'Summer 2025',
    completionDate: 'Q1 2029',
    isIndicative: true,
    qualification: 'Indicative completion date stated in the brochure; subject to developer and statutory confirmation.',
  },
  developers: {
    brandPartner: 'BRABUS GmbH (Bottrop, Germany)',
    developer: 'Reportage Properties',
    jointEntity: 'Cosmo Developments',
    headOffice: 'Tamouh Tower, 28th Floor, Al Reem Island, Abu Dhabi, UAE',
  },
  features: [
    'Private balconies and expansive terraces configured according to individual unit plan',
    'Bespoke kitchen cabinetry and premium solid countertops',
    'Fully tiled designer bathrooms and guest powder rooms wherever applicable',
    'En-suite master bedrooms according to architectural plan',
    'Double-glazed thermal-acoustic insulated window systems',
    'Integrated built-in wardrobes across all bedrooms',
    'Walk-in showers in each primary bathroom',
    'Central high-efficiency air conditioning system',
    'Integrated vanity units and architectural mirrors',
    'Satellite master antenna and ultra-high-speed fibre-optic telecommunications connectivity',
  ],
  designConcepts: [
    {
      id: 'black-and-bold',
      name: 'Black and Bold',
      headline: 'Uncompromising Contrast & Supercar DNA',
      description:
        'Inspired by the high-performance world of tailor-made BRABUS supercars. Deep obsidian palettes, smoked chrome accents, carbon-weave textures, and assertive architectural millwork designed for those who command distinction.',
      palette: ['#09090b', '#18181b', '#27272a', '#71717a'],
      accentColor: '#18181b',
      materials: ['Smoked Chrome', 'Dark Slate', 'Carbon Fibre Textures', 'Matte Black Anodized Aluminium'],
    },
    {
      id: 'white-bliss',
      name: 'White Bliss',
      headline: 'Pristine Waterfront Clarity & Natural Light',
      description:
        'A luminous interpretation celebrating the azure seascape of Al Raha. Architectural pure-white surfaces, brushed stainless steel hardware, sun-bleached natural stone, and seamless light reflection across open living salons.',
      palette: ['#ffffff', '#f8fafc', '#e2e8f0', '#94a3b8'],
      accentColor: '#0284c7',
      materials: ['Honed White Marble', 'Brushed Stainless Steel', 'Ultra-Clear Fluted Glass', 'Bleached Oak'],
    },
    {
      id: 'gray-haven',
      name: 'Gray Haven',
      headline: 'Understated Architectural Sophistication',
      description:
        'A harmonized spectrum of slate, graphite, and warm mineral tones. Understated brushed titanium details, tactile micro-cement surfaces, and tailored walnut elements providing a serene, contemplative coastal sanctuary.',
      palette: ['#1e293b', '#334155', '#64748b', '#cbd5e1'],
      accentColor: '#b89648',
      materials: ['Brushed Titanium', 'Basalt Stone', 'Graphite Millwork', 'Acoustic Textured Paneling'],
    },
  ],
  travelTimes: [
    { destination: 'Al Raha Beach', minutes: 5, sourceNote: 'As stated in the supplied brochure' },
    { destination: 'Masdar City', minutes: 10, sourceNote: 'As stated in the supplied brochure' },
    { destination: 'Abu Dhabi International Airport', minutes: 10, sourceNote: 'As stated in the supplied brochure' },
    { destination: 'Khalifa City', minutes: 15, sourceNote: 'As stated in the supplied brochure' },
    { destination: 'Sheikh Zayed Grand Mosque', minutes: 15, sourceNote: 'As stated in the supplied brochure' },
    { destination: 'Yas Island', minutes: 18, sourceNote: 'As stated in the supplied brochure' },
    { destination: 'Etihad Arena', minutes: 18, sourceNote: 'As stated in the supplied brochure' },
    { destination: 'Ferrari World Yas Island', minutes: 20, sourceNote: 'As stated in the supplied brochure' },
    { destination: 'Saadiyat Island', minutes: 25, sourceNote: 'As stated in the supplied brochure' },
    { destination: 'Louvre Abu Dhabi', minutes: 25, sourceNote: 'As stated in the supplied brochure' },
    { destination: 'Guggenheim Abu Dhabi', minutes: 28, sourceNote: 'As stated in the supplied brochure' },
  ],
  investorOfferTerms: {
    title: 'Investor Offer Sheet Conditions',
    conditions: [
      'Investor offer only — full payment required within 1 to 3 months.',
      'NO 1% bulk discount / NO 1% for one-time payment.',
      'NO flip or change of unit permitted under this offering.',
      'Parking space price: AED 100,000 per allocated space.',
      'Standard brokerage commission terms apply.',
    ],
    parkingPriceAed: 100000,
    paymentWindow: '1 to 3 months',
    qualification:
      'The 21 priced residences presented here reflect a discrete investor offer list across Towers A, B and C. These figures do not represent the complete 352-apartment inventory, and current unit availability must be independently verified with the desk.',
  },
  disclaimers: [
    'Prices are based strictly on the supplied investor price list and are subject to developer reconfirmation.',
    'Current availability is not guaranteed; units listed reflect the official investor offer sheet provided.',
    'Floor plans, layouts, and dimensions are approximate and subject to developer revision and statutory approvals.',
    'Renderings, decor, loose furniture, and accessories shown are illustrative representations and not part of the standard unit delivery.',
    'Independent brokerage presentation: This platform provides independent advisory intelligence and does not represent the official developer portal of BRABUS GmbH or Reportage Properties.',
    'Source material reproduction notice: Official brochure and engineering plans contain confidentiality restrictions; public asset publication is governed by written authorization.',
  ],
  heroSummary:
    'A landmark branded master community positioned along Al Raha Beach in Abu Dhabi. Featuring four 13-story residential towers, 352 bespoke residences, and 96 waterfront villas curated with BRABUS tailor-made design philosophy.',
  editorialDescription:
    'BRABUS ISLAND translates the signature high-performance aesthetics of Bottrop into prime architectural waterfront residences in Abu Dhabi. Rising across four contemporary towers in the Al Seef District of Al Raha, the project integrates bold geometric silhouettes, floor-to-ceiling maritime panoramic glazing, and modular interior design concepts tailored to individual client commissions.',
  provenance: createOfficialProvenance(
    'Developer Documentation',
    'Reportage Properties / BRABUS Official Investor Release (Summer 2025)',
    'Verified Investor Price Sheet & Architectural Floor Plan Set R02'
  ),
}

/* ========================================================================= */
/* 03. 21 VERIFIED INVESTOR UNITS (STRICT CONCORDANCE WITH SOURCE WORKBOOK)  */
/* ========================================================================= */

export const BRABUS_ISLAND_UNITS: DevelopmentUnit[] = [
  {
    id: 'brabus-A-105',
    unitNumber: 'A-105',
    tower: 'A',
    floor: 1,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 02 - Middle',
    view: 'Sea View',
    internalAreaSqFt: 979.52,
    externalAreaSqFt: 226.04,
    totalAreaSqFt: 1205.56,
    internalAreaM2: 91.0,
    externalAreaM2: 21.0,
    totalAreaM2: 112.0,
    investorPriceAed: 2470560.69,
    investorPriceAedRounded: 2470561,
    planId: 'type-02-middle',
    planLabel: 'Type 02 - Middle (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-A-106',
    unitNumber: 'A-106',
    tower: 'A',
    floor: 1,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 344.45,
    totalAreaSqFt: 1474.66,
    internalAreaM2: 105.0,
    externalAreaM2: 32.0,
    totalAreaM2: 137.0,
    investorPriceAed: 3022024.75,
    investorPriceAedRounded: 3022025,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-A-107',
    unitNumber: 'A-107',
    tower: 'A',
    floor: 1,
    bedrooms: 3,
    unitType: '3B',
    subtype: 'Type 01 - Corner',
    view: 'Partial Sea View',
    internalAreaSqFt: 1367.02,
    externalAreaSqFt: 301.39,
    totalAreaSqFt: 1668.41,
    internalAreaM2: 127.0,
    externalAreaM2: 28.0,
    totalAreaM2: 155.0,
    investorPriceAed: 2930639.72,
    investorPriceAedRounded: 2930640,
    planId: 'type-01-corner',
    planLabel: 'Type 01 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-A-205',
    unitNumber: 'A-205',
    tower: 'A',
    floor: 2,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 02 - Middle',
    view: 'Sea View',
    internalAreaSqFt: 979.52,
    externalAreaSqFt: 226.04,
    totalAreaSqFt: 1205.56,
    internalAreaM2: 91.0,
    externalAreaM2: 21.0,
    totalAreaM2: 112.0,
    investorPriceAed: 2556619.69,
    investorPriceAedRounded: 2556620,
    planId: 'type-02-middle',
    planLabel: 'Type 02 - Middle (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-A-206',
    unitNumber: 'A-206',
    tower: 'A',
    floor: 2,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 290.63,
    totalAreaSqFt: 1420.84,
    internalAreaM2: 105.0,
    externalAreaM2: 27.0,
    totalAreaM2: 132.0,
    investorPriceAed: 2922131.28,
    investorPriceAedRounded: 2922131,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-A-306',
    unitNumber: 'A-306',
    tower: 'A',
    floor: 3,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 279.86,
    totalAreaSqFt: 1410.07,
    internalAreaM2: 105.0,
    externalAreaM2: 26.0,
    totalAreaM2: 131.0,
    investorPriceAed: 2987549.72,
    investorPriceAedRounded: 2987550,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-A-506',
    unitNumber: 'A-506',
    tower: 'A',
    floor: 5,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 285.24,
    totalAreaSqFt: 1415.45,
    internalAreaM2: 105.0,
    externalAreaM2: 26.5,
    totalAreaM2: 131.5,
    investorPriceAed: 3019377.15,
    investorPriceAedRounded: 3019377,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-A-606',
    unitNumber: 'A-606',
    tower: 'A',
    floor: 6,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 285.24,
    totalAreaSqFt: 1415.45,
    internalAreaM2: 105.0,
    externalAreaM2: 26.5,
    totalAreaM2: 131.5,
    investorPriceAed: 3029737.07,
    investorPriceAedRounded: 3029737,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-A-706',
    unitNumber: 'A-706',
    tower: 'A',
    floor: 7,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 279.86,
    totalAreaSqFt: 1410.07,
    internalAreaM2: 105.0,
    externalAreaM2: 26.0,
    totalAreaM2: 131.0,
    investorPriceAed: 3028830.83,
    investorPriceAedRounded: 3028831,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-A-806',
    unitNumber: 'A-806',
    tower: 'A',
    floor: 8,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 269.1,
    totalAreaSqFt: 1399.31,
    internalAreaM2: 105.0,
    externalAreaM2: 25.0,
    totalAreaM2: 130.0,
    investorPriceAed: 3016541.35,
    investorPriceAedRounded: 3016541,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-A-906',
    unitNumber: 'A-906',
    tower: 'A',
    floor: 9,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 269.1,
    totalAreaSqFt: 1399.31,
    internalAreaM2: 105.0,
    externalAreaM2: 25.0,
    totalAreaM2: 130.0,
    investorPriceAed: 3026782.71,
    investorPriceAedRounded: 3026783,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-A-1104',
    unitNumber: 'A-1104',
    tower: 'A',
    floor: 11,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 06 - Middle',
    view: 'Sea View',
    internalAreaSqFt: 1162.5,
    externalAreaSqFt: 818.06,
    totalAreaSqFt: 1980.56,
    internalAreaM2: 108.0,
    externalAreaM2: 76.0,
    totalAreaM2: 184.0,
    investorPriceAed: 4293664.99,
    investorPriceAedRounded: 4293665,
    planId: 'type-06-middle',
    planLabel: 'Type 06 - Middle (11th Floor Plan)',
    hasDiscrepancy: true,
    discrepancyNote:
      'Internal Area Discrepancy: The workbook price list specifies 1,162.50 sq ft (~108.00 m²), whereas the architectural drawing label for Type 06 on the 11th floor indicates approximately 110.50–110.51 m². Source investor value is preserved internally and flagged for reconfirmation before contract drafting.',
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-B-103',
    unitNumber: 'B-103',
    tower: 'B',
    floor: 1,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 344.45,
    totalAreaSqFt: 1474.66,
    internalAreaM2: 105.0,
    externalAreaM2: 32.0,
    totalAreaM2: 137.0,
    investorPriceAed: 3099260.66,
    investorPriceAedRounded: 3099261,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-B-106',
    unitNumber: 'B-106',
    tower: 'B',
    floor: 1,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 344.45,
    totalAreaSqFt: 1474.66,
    internalAreaM2: 105.0,
    externalAreaM2: 32.0,
    totalAreaM2: 137.0,
    investorPriceAed: 3316209.16,
    investorPriceAedRounded: 3316209,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-B-206',
    unitNumber: 'B-206',
    tower: 'B',
    floor: 2,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 290.63,
    totalAreaSqFt: 1420.84,
    internalAreaM2: 105.0,
    externalAreaM2: 27.0,
    totalAreaM2: 132.0,
    investorPriceAed: 2999367.19,
    investorPriceAedRounded: 2999367,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-B-306',
    unitNumber: 'B-306',
    tower: 'B',
    floor: 3,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 279.86,
    totalAreaSqFt: 1410.07,
    internalAreaM2: 105.0,
    externalAreaM2: 26.0,
    totalAreaM2: 131.0,
    investorPriceAed: 2987549.72,
    investorPriceAedRounded: 2987550,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-B-406',
    unitNumber: 'B-406',
    tower: 'B',
    floor: 4,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 279.86,
    totalAreaSqFt: 1410.07,
    internalAreaM2: 105.0,
    externalAreaM2: 26.0,
    totalAreaM2: 131.0,
    investorPriceAed: 2997870.37,
    investorPriceAedRounded: 2997870,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-B-506',
    unitNumber: 'B-506',
    tower: 'B',
    floor: 5,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 285.24,
    totalAreaSqFt: 1415.45,
    internalAreaM2: 105.0,
    externalAreaM2: 26.5,
    totalAreaM2: 131.5,
    investorPriceAed: 3019377.15,
    investorPriceAedRounded: 3019377,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-C-307',
    unitNumber: 'C-307',
    tower: 'C',
    floor: 3,
    bedrooms: 3,
    unitType: '3B',
    subtype: 'Type 01 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1367.02,
    externalAreaSqFt: 301.39,
    totalAreaSqFt: 1668.41,
    internalAreaM2: 127.0,
    externalAreaM2: 28.0,
    totalAreaM2: 155.0,
    investorPriceAed: 3065900.04,
    investorPriceAedRounded: 3065900,
    planId: 'type-01-corner',
    planLabel: 'Type 01 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-C-407',
    unitNumber: 'C-407',
    tower: 'C',
    floor: 4,
    bedrooms: 3,
    unitType: '3B',
    subtype: 'Type 01 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1367.02,
    externalAreaSqFt: 301.39,
    totalAreaSqFt: 1668.41,
    internalAreaM2: 127.0,
    externalAreaM2: 28.0,
    totalAreaM2: 155.0,
    investorPriceAed: 3312443.74,
    investorPriceAedRounded: 3312444,
    planId: 'type-01-corner',
    planLabel: 'Type 01 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
  {
    id: 'brabus-C-606',
    unitNumber: 'C-606',
    tower: 'C',
    floor: 6,
    bedrooms: 2,
    unitType: '2B',
    subtype: 'Type 03 - Corner',
    view: 'Sea View',
    internalAreaSqFt: 1130.21,
    externalAreaSqFt: 285.24,
    totalAreaSqFt: 1415.45,
    internalAreaM2: 105.0,
    externalAreaM2: 26.5,
    totalAreaM2: 131.5,
    investorPriceAed: 2848904.18,
    investorPriceAedRounded: 2848904,
    planId: 'type-03-corner',
    planLabel: 'Type 03 - Corner (Typical Floors 1–10)',
    hasDiscrepancy: false,
    availabilityStatus: 'LISTED_INVESTOR_SHEET',
  },
]

/* ========================================================================= */
/* 04. ARCHITECTURAL FLOOR PLAN DEFINITIONS                                  */
/* ========================================================================= */

export const BRABUS_FLOOR_PLANS: FloorPlanDefinition[] = [
  {
    id: 'type-01-corner',
    name: 'Type 01 - Corner Suite (3-Bedroom)',
    bedrooms: 3,
    typicalAreaM2: 127.53,
    applicableSubtypes: ['Type 01 - Corner'],
    description:
      'Expansive dual-aspect corner residence featuring a master bedroom with en-suite dressing corridor, two secondary guest bedrooms, generous open-plan living and dining salon, and wrap-around viewing terrace.',
    rooms: [
      'Master Bedroom Suite with En-suite Bathroom & Wardrobe Corridor',
      'Bedroom 02 with En-suite Bathroom',
      'Bedroom 03 with Built-in Wardrobes',
      'Formal Living & Dining Salon with Direct Terrace Access',
      'Designer Closed / Semi-Open Kitchen with Premium Countertops',
      'Powder Room / Guest Washroom',
      'Dedicated Laundry / Mechanical Utility Closet',
      'Wrap-around Panoramic Balcony / Terrace (28.00 m²)',
    ],
    notes:
      'Typical layout shown for floors 1–10. Balcony depths and shaft positions vary slightly by floor level and tower elevation. Subject to developer and statutory planning confirmation.',
  },
  {
    id: 'type-02-middle',
    name: 'Type 02 - Middle Suite (2-Bedroom)',
    bedrooms: 2,
    typicalAreaM2: 91.05,
    applicableSubtypes: ['Type 02 - Middle'],
    description:
      'Highly efficient linear waterfront layout maximizing direct sea frontage. Complete with an en-suite primary bedroom suite, secondary bedroom with adjacent bathroom, integrated kitchen counter, and deep viewing balcony.',
    rooms: [
      'Primary Bedroom with En-suite Bathroom & Built-in Wardrobes',
      'Bedroom 02 with Direct Access to Guest Bathroom',
      'Open Living & Dining Lounge Facing the Arabian Gulf',
      'Linear Island Kitchen with Breakfast Counter',
      'Guest Powder Room / Bathroom 02',
      'Private Coastal Balcony (21.00 m²)',
    ],
    notes:
      'Typical layout shown for floors 1–10. Columns and balcony depths vary according to tower elevation and structural grid. Measurements are approximate.',
  },
  {
    id: 'type-03-corner',
    name: 'Type 03 - Corner Suite (2-Bedroom)',
    bedrooms: 2,
    typicalAreaM2: 104.44,
    applicableSubtypes: ['Type 03 - Corner'],
    description:
      'Premier corner 2-bedroom residence with dual panoramic vistas. Features an extended corner terrace with multiple balcony access points, en-suite master suite, and generous entertaining proportions.',
    rooms: [
      'Master Bedroom with En-suite Bathroom & Architectural Dressing Alcove',
      'Bedroom 02 with Built-in Wardrobes & Full Bathroom Access',
      'Corner Living & Entertaining Salon with Dual-Aspect Natural Light',
      'Bespoke Open Gourmet Kitchen with Solid Worktops',
      'Guest Powder Room',
      'Expansive Corner Balcony / Terrace (25.00 m² – 32.00 m²)',
    ],
    notes:
      'Typical layout shown for floors 1–10. Balcony width adjusts across floors (25.00 m² on upper levels to 32.00 m² on level 1). Exact dimensions subject to final as-built survey.',
  },
  {
    id: 'type-06-middle',
    name: 'Type 06 - Middle Executive Residence (2-Bedroom, Level 11)',
    bedrooms: 2,
    typicalAreaM2: 110.51,
    applicableSubtypes: ['Type 06 - Middle'],
    description:
      'Level 11 executive residence featuring an oversized panoramic terrace spanning 76.00 m² (818.06 sq ft). Curated for indoor-outdoor entertaining with extended floor heights and prime maritime vistas.',
    rooms: [
      'Executive Master Bedroom Suite with Walk-in Wardrobe',
      'En-suite Luxury Master Bathroom with Dual Vanity',
      'Bedroom 02 with Direct Terrace Access',
      'Full Secondary Bathroom & Guest Powder Room',
      'Expansive Living & Dining Gallery with Panoramic Glazing',
      'Gourmet Island Kitchen with Premium Storage Cabinets',
      'Oversized Private Sky Terrace (76.00 m² / 818.06 sq ft)',
    ],
    notes:
      'Level 11 specialized plan. Please note internal area discrepancy: workbook price sheet lists 108.00 m² (1,162.50 sq ft) while architectural plan label indicates 110.50–110.51 m². Flagged for reconfirmation.',
  },
]

/* ========================================================================= */
/* 05. REUSABLE REGISTRY & QUERY HELPERS                                     */
/* ========================================================================= */

export const ALL_SIGNATURE_DEVELOPMENTS: DevelopmentProject[] = [BRABUS_ISLAND_PROJECT]

export function getDevelopmentBySlug(slug: string): DevelopmentProject | undefined {
  return ALL_SIGNATURE_DEVELOPMENTS.find((d) => d.slug === slug)
}

export function getAllDevelopments(): DevelopmentProject[] {
  return ALL_SIGNATURE_DEVELOPMENTS
}

export function getDevelopmentUnits(slug: string): DevelopmentUnit[] {
  if (slug === 'brabus-island') {
    return BRABUS_ISLAND_UNITS
  }
  return []
}

export function getDevelopmentUnitByNumber(unitNumber: string): DevelopmentUnit | undefined {
  return BRABUS_ISLAND_UNITS.find((u) => u.unitNumber.toLowerCase() === unitNumber.toLowerCase())
}

export function getFloorPlanById(planId: string): FloorPlanDefinition | undefined {
  return BRABUS_FLOOR_PLANS.find((p) => p.id === planId)
}

export interface UnitFilters {
  bedrooms: 'ALL' | 2 | 3
  tower: 'ALL' | 'A' | 'B' | 'C'
  floor: 'ALL' | number
  minPrice?: number
  maxPrice?: number
  minArea?: number
  maxArea?: number
  view: 'ALL' | 'Sea View' | 'Partial Sea View'
}

export type UnitSortKey =
  | 'price-asc'
  | 'price-desc'
  | 'interior-asc'
  | 'interior-desc'
  | 'total-asc'
  | 'total-desc'
  | 'floor-asc'
  | 'floor-desc'
  | 'unit-asc'

export function filterAndSortUnits(
  units: DevelopmentUnit[],
  filters: UnitFilters,
  sortKey: UnitSortKey
): DevelopmentUnit[] {
  const filtered = units.filter((u) => {
    if (filters.bedrooms !== 'ALL' && u.bedrooms !== filters.bedrooms) return false
    if (filters.tower !== 'ALL' && u.tower !== filters.tower) return false
    if (filters.floor !== 'ALL' && u.floor !== filters.floor) return false
    if (filters.view !== 'ALL' && u.view !== filters.view) return false
    if (filters.minPrice && u.investorPriceAedRounded < filters.minPrice) return false
    if (filters.maxPrice && u.investorPriceAedRounded > filters.maxPrice) return false
    if (filters.minArea && u.internalAreaM2 < filters.minArea) return false
    if (filters.maxArea && u.internalAreaM2 > filters.maxArea) return false
    return true
  })

  return filtered.sort((a, b) => {
    switch (sortKey) {
      case 'price-asc':
        return a.investorPriceAedRounded - b.investorPriceAedRounded
      case 'price-desc':
        return b.investorPriceAedRounded - a.investorPriceAedRounded
      case 'interior-asc':
        return a.internalAreaM2 - b.internalAreaM2
      case 'interior-desc':
        return b.internalAreaM2 - a.internalAreaM2
      case 'total-asc':
        return a.totalAreaM2 - b.totalAreaM2
      case 'total-desc':
        return b.totalAreaM2 - a.totalAreaM2
      case 'floor-asc':
        return a.floor - b.floor
      case 'floor-desc':
        return b.floor - a.floor
      case 'unit-asc':
      default:
        return a.unitNumber.localeCompare(b.unitNumber)
    }
  })
}
