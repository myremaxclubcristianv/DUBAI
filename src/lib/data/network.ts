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
    description: 'Major master developers (Emaar, Meraas, Omniyat, Sobha, Select Group, Nakheel) and DLD-licensed escrow and title management bodies registered in Dubai.',
    jurisdictions: ['Dubai Land Department', 'RERA', 'DLD Cube'],
    verified_participants: [
      'Emaar Properties PJSC',
      'OMNIYAT',
      'Meraas / Dubai Holding',
      'Sobha Realty',
      'Select Group',
      'Authorized Real Estate Registration Trustees',
    ],
    advisory_focus: [
      'Off-plan inventory verification',
      'Bulk unit acquisition & floor plates',
      'Title registration & escrow validation',
      'Escrow audit verification per Law No. 8 of 2007',
    ],
    provenance: createOfficialProvenance('DLD', 'Law No. 7 of 2006 / Law No. 8 of 2007', 'DLD Developer & Escrow Directory'),
  },
  {
    id: 'pillar-capital',
    title: 'Banking & Family Office Infrastructure',
    subtitle: 'Institutional Finance & Wealth Management',
    description: 'UAE Central Bank-regulated private banks, DIFC Single Family Offices (SFO), and asset managers operating under DFSA oversight.',
    jurisdictions: ['DIFC (Dubai International Financial Centre)', 'CBUAE (Central Bank of the UAE)', 'ADGM'],
    verified_participants: [
      'Emirates NBD Private Banking',
      'First Abu Dhabi Bank (FAB) Private Wealth',
      'Dubai International Financial Centre (DIFC) SFO Ecosystem',
      'Mashreq Private Banking',
      'DFSA Licensed Asset Managers',
    ],
    advisory_focus: [
      'Mortgage structuring per CBUAE regulations',
      'Liquidity facilities & escrow account protocols',
      'DIFC foundation & family office structuring',
      'Cross-border compliance & capital transfer',
    ],
    provenance: createOfficialProvenance('CBUAE', 'CBUAE Mortgage Regulations / DFSA Rulebook', 'Official Financial Regulatory Framework'),
  },
  {
    id: 'pillar-business-setup',
    title: 'Corporate Structuring & Free Zone Authorities',
    subtitle: 'Jurisdictional Entity Architecture',
    description: 'Flagship corporate jurisdictions for operating companies, holding entities, and corporate tax compliance under Federal Decree-Law No. 47 of 2022.',
    jurisdictions: ['DET (Dubai Economy and Tourism)', 'DIFC', 'DMCC (Dubai Multi Commodities Centre)', 'DDA'],
    verified_participants: [
      'Dubai Department of Economy and Tourism (DET)',
      'DIFC Authority & Registrar of Companies',
      'DMCC Authority',
      'Dubai Development Authority (DDA)',
    ],
    advisory_focus: [
      '100% foreign ownership Mainland entity registration',
      'Free zone operational company incorporation',
      'Federal Corporate Tax compliance (0% SME band / 9% standard rate)',
      'Employment residency visa allocations',
    ],
    provenance: createOfficialProvenance('DET', 'Federal Decree-Law No. 47 of 2022 (Corporate Tax)', 'Official Department of Economy and Tourism Register'),
  },
  {
    id: 'pillar-legal-tax',
    title: 'Statutory Legal & Tax Framework',
    subtitle: 'Cross-Border Wealth & Succession Planning',
    description: 'UAE-licensed legal practitioners and registered tax agents for property conveyance, Wills registration at DIFC Courts, and double tax treaty analysis.',
    jurisdictions: ['DIFC Courts Wills Service', 'Federal Tax Authority (FTA)', 'Dubai Courts'],
    verified_participants: [
      'DIFC Courts Wills & Probate Registry',
      'FTA-Certified Tax Agents',
      'Licensed UAE Legal Practitioners',
      'Cross-Border Wealth Advisory Practitioners',
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
    title: 'Lifestyle & Aviation Sector',
    subtitle: 'FBO, Superyacht & Hospitality Infrastructure',
    description: 'Licensed private aviation handling at Al Maktoum International (DWC), Dubai Harbour maritime facilities, and verified hospitality establishments.',
    jurisdictions: ['Dubai Civil Aviation Authority (DCAA)', 'Dubai Maritime City Authority (DMCA)', 'DET'],
    verified_participants: [
      'ExecuJet Middle East (Dubai South Executive Terminal)',
      'Jet Aviation Dubai (OMDB / OMDW)',
      'Dubai Harbour Marina (D-Marin)',
      'Bulgari Yacht Club Marina',
    ],
    advisory_focus: [
      'Private air charter slot clearance & ramp handling',
      'Superyacht berth allocation guidelines',
      'Exotic automobile fleet handling protocols',
      'Culinary establishment private reservations',
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
    focus: 'Real Estate Investment, Cross-Border Capital & Developer Showcases',
    official_website: 'https://www.internationalpropertyshow.net/',
    frequency: 'Annual (February)',
    provenance: createOfficialProvenance('DLD', 'DLD Sponsored Strategic Forum', 'Official Real Estate Exhibition Ledger'),
  },
  {
    id: 'conf-atm',
    name: 'Arabian Travel Market (ATM Dubai)',
    organizer: 'RX Global / DET Supported',
    venue: 'Dubai World Trade Centre',
    focus: 'Hospitality, Resorts, Tourism & Aviation Connectivity',
    official_website: 'https://www.wtm.com/atm/',
    frequency: 'Annual (May)',
    provenance: createOfficialProvenance('DET', 'DET Tourism Partner Calendar', 'Official Dubai Tourism Exhibition'),
  },
]
