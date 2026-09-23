import { ProvenanceMetadata } from '@/types/provenance'
import { createOfficialProvenance } from './sources'

export interface NetworkEcosystemPillar {
  id: string
  title: string
  subtitle: string
  description: string
  jurisdictions: string[]
  verified_participants: string[]
  advisory_focus: string[]
  provenance: ProvenanceMetadata
}

export interface VerifiedConferenceItem {
  id: string
  name: string
  organizer: string
  venue: string
  focus: string
  official_website: string
  frequency: string
  provenance: ProvenanceMetadata
}

export const NETWORK_ECOSYSTEM_PILLARS: NetworkEcosystemPillar[] = [
  {
    id: 'pillar-real-estate',
    title: 'Master Developer & Real Estate Ecosystem',
    subtitle: 'Statutory Development & Title Infrastructure',
    description: 'Direct interface with Dubai tier-1 master developers (Emaar, Meraas, Omniyat, Sobha, Select Group, Nakheel) and DLD-licensed escrow and title management bodies.',
    jurisdictions: ['Dubai Land Department', 'RERA', 'DLD Cube'],
    verified_participants: [
      'Emaar Properties PJSC',
      'OMNIYAT Executive Desk',
      'Meraas / Dubai Holding',
      'Sobha Realty Executive Sales',
      'Select Group Development Desk',
      'Authorized Real Estate Registration Trustees',
    ],
    advisory_focus: [
      'Pre-allocation off-plan inventory access',
      'Bulk unit acquisition & floor plates',
      'Title registration & escrow validation',
      'Escrow audit verification per Law No. 8 of 2007',
    ],
    provenance: createOfficialProvenance('DLD', 'Law No. 7 of 2006 / Law No. 8 of 2007', 'DLD Developer & Escrow Directory'),
  },
  {
    id: 'pillar-capital',
    title: 'Private Wealth, Banking & Family Offices',
    subtitle: 'Institutional Finance & Liquidity Architecture',
    description: 'Bespoke connectivity across UAE Central Bank-regulated private wealth banks, DIFC Single Family Offices (SFO), and multi-family wealth managers for debt structuring and asset custody.',
    jurisdictions: ['DIFC (Dubai International Financial Centre)', 'CBUAE (Central Bank of the UAE)', 'ADGM'],
    verified_participants: [
      'Emirates NBD Private Banking',
      'First Abu Dhabi Bank (FAB) Private Wealth',
      'Dubai International Financial Centre (DIFC) SFO Ecosystem',
      'Mashreq Private Banking Desk',
      'Authorized DFSA Institutional Asset Managers',
    ],
    advisory_focus: [
      'Non-resident mortgage structuring (up to 50% LTV per CBUAE)',
      'High-net-worth liquidity lines & escrow deposit verification',
      'DIFC foundation & family office structuring',
      'Cross-border capital transfer & compliance clearance',
    ],
    provenance: createOfficialProvenance('CBUAE', 'CBUAE Mortgage Regulations / DFSA Rulebook', 'Official Financial Regulatory Framework'),
  },
  {
    id: 'pillar-business-setup',
    title: 'Corporate Structuring & Free Zone Authorities',
    subtitle: 'Jurisdictional Entity Architecture',
    description: 'Direct coordination with flagship Dubai corporate jurisdictions for operating companies, holding entities, and tax residency alignment under Federal Decree-Law No. 47 of 2022.',
    jurisdictions: ['DET (Dubai Economy and Tourism)', 'DIFC', 'DMCC (Dubai Multi Commodities Centre)', 'DDA'],
    verified_participants: [
      'Dubai Department of Economy and Tourism (DET)',
      'DIFC Authority & Registrar of Companies',
      'DMCC Authority',
      'Dubai Internet City / Dubai Media City (TECOM)',
    ],
    advisory_focus: [
      '100% foreign ownership Mainland entity registration',
      'Free zone operational company incorporation',
      'Federal Corporate Tax registration (0% SME band / 9% standard rate)',
      'Executive employment residency visa quotas',
    ],
    provenance: createOfficialProvenance('DET', 'Federal Decree-Law No. 47 of 2022 (Corporate Tax)', 'Official Department of Economy and Tourism Register'),
  },
  {
    id: 'pillar-legal-tax',
    title: 'Statutory Legal & Tax Advisory Desks',
    subtitle: 'Cross-Border Wealth Protection',
    description: 'Engagement with top-tier UAE-licensed legal practitioners and registered tax agents for property conveyance, Wills registration at DIFC Courts, and bilateral double tax treaty analysis.',
    jurisdictions: ['DIFC Courts Wills Service', 'Federal Tax Authority (FTA)', 'Dubai Courts'],
    verified_participants: [
      'DIFC Courts Wills & Probate Registry',
      'FTA-Certified Tax Agents',
      'Licensed UAE Conveyancing Advocates',
      'Bespoke Cross-Border Wealth Planners',
    ],
    advisory_focus: [
      'Non-Muslim Wills registration at DIFC Courts',
      'Corporate SPV property ownership structuring',
      'Double Taxation Avoidance Agreement (DTAA) validation',
      'Inheritance and statutory succession planning',
    ],
    provenance: createOfficialProvenance('FTA', 'Cabinet Decision No. 49 of 2023 / DIFC Wills Law No. 1 of 2019', 'Statutory Legal & Tax Framework'),
  },
  {
    id: 'pillar-lifestyle-access',
    title: 'Ultra-Prime Lifestyle & Aviation Network',
    subtitle: 'Private Fleet, Superyacht & Hospitality Desks',
    description: 'Direct relationships with Dubai South (DWC) FBO private jet operators, Dubai Harbour superyacht marina management, and palace hospitality leadership.',
    jurisdictions: ['Dubai Civil Aviation Authority (DCAA)', 'Dubai Maritime City Authority (DMCA)', 'DET'],
    verified_participants: [
      'ExecuJet Middle East (Dubai South Executive Terminal)',
      'Jet Aviation Dubai (OMDB / OMDW)',
      'Dubai Harbour Marina Management (D-Marin)',
      'Bulgari Yacht Club Marina & Concierge',
    ],
    advisory_focus: [
      'Private air charter slot clearance & ramp handling',
      'Superyacht berth allocation (up to 160m LOA)',
      'Exotic supercar fleet management & storage',
      'Private island dining & priority reservation coordination',
    ],
    provenance: createOfficialProvenance('DET', 'DMCA Marine Regulations / DCAA Aviation Directives', 'Verified Licensed Marine & Aviation Desks'),
  },
]

export const VERIFIED_DUBAI_CONFERENCES: VerifiedConferenceItem[] = [
  {
    id: 'conf-gitex',
    name: 'GITEX Global (World Trade Centre)',
    organizer: 'Dubai World Trade Centre (DWTC)',
    venue: 'Dubai World Trade Centre & Dubai Harbour',
    focus: 'Enterprise Technology, Artificial Intelligence, Sovereign Digital Capital & Web3',
    official_website: 'https://www.gitex.com/',
    frequency: 'Annual (October)',
    provenance: createOfficialProvenance('DET', 'DWTC Official Calendar', 'Dubai Government Events Registry'),
  },
  {
    id: 'conf-fintech-summit',
    name: 'Dubai FinTech Summit',
    organizer: 'Dubai International Financial Centre (DIFC)',
    venue: 'Madinat Jumeirah Conference Centre',
    focus: 'Global Banking, Private Wealth Technology, Sovereign Capital & Regulatory Governance',
    official_website: 'https://dubaifintechsummit.com/',
    frequency: 'Annual (May)',
    provenance: createOfficialProvenance('DET', 'DIFC Official Calendar', 'DIFC Strategic Initiative'),
  },
  {
    id: 'conf-ips',
    name: 'International Property Show (IPS Dubai)',
    organizer: 'Strategic Exhibitions / DLD Supported',
    venue: 'Dubai World Trade Centre',
    focus: 'Global Real Estate Investment, Institutional Cross-Border Capital & Developer Showcases',
    official_website: 'https://www.internationalpropertyshow.net/',
    frequency: 'Annual (February)',
    provenance: createOfficialProvenance('DLD', 'DLD Sponsored Strategic Forum', 'Official Real Estate Exhibition Ledger'),
  },
  {
    id: 'conf-atm',
    name: 'Arabian Travel Market (ATM Dubai)',
    organizer: 'RX Global / DET Supported',
    venue: 'Dubai World Trade Centre',
    focus: 'Luxury Hospitality, Palace Resorts, Ultra-Prime Tourism & Aviation Connectivity',
    official_website: 'https://www.wtm.com/atm/',
    frequency: 'Annual (May)',
    provenance: createOfficialProvenance('DET', 'DET Tourism Partner Calendar', 'Official Dubai Tourism Exhibition'),
  },
]
