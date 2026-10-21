'use client'

import * as React from 'react'
import Link from 'next/link'
import { ContactModal } from '@/components/layout/contact-modal'
import {
  Calendar,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  FileText,
  DollarSign,
} from 'lucide-react'

// FREE ZONE DIRECTORY DATA (Verified from Official Free Zone Authorities)
const FREE_ZONES = [
  {
    id: 'difc',
    name: 'Dubai International Financial Centre (DIFC)',
    arabicName: 'مركز دبي المالي العالمي',
    type: 'Financial & Professional Free Zone (Common Law)',
    authority: 'DIFC Authority / DFSA',
    officialUrl: 'https://www.difc.ae/',
    focus: 'Banking, FinTech, Wealth & Asset Management, Family Offices, Venture Capital, Corporate Law',
    minLicenseCostAed: 44000,
    visasIncluded: 'Flexible based on office square footage',
    officeRequirement: 'Physical office or registered flexi-desk in DIFC district mandatory',
    auditMandatory: true,
    highlights: [
      'Independent English Common Law judicial jurisdiction (DIFC Courts)',
      'Independent financial services regulator (DFSA)',
      'Global top-10 financial center status with zero foreign exchange controls',
      'Innovation Hub with subsidised licenses for qualifying FinTech and AI startups',
    ],
  },
  {
    id: 'dmcc',
    name: 'Dubai Multi Commodities Centre (DMCC)',
    arabicName: 'مركز دبي للسلع المتعددة',
    type: 'Commodities, Trading & Multi-Sector Free Zone',
    authority: 'DMCC Authority',
    officialUrl: 'https://www.dmcc.ae/',
    focus: 'Commodities Trading (Gold, Diamonds, Tea, Crypto), Commercial Trade, IT, Professional Services',
    minLicenseCostAed: 31000,
    visasIncluded: '1 to 3 visas on flexi-desk packages; scalable with leased office space in JLT',
    officeRequirement: 'Flexi-desk, serviced office, or leased commercial unit in Jumeirah Lakes Towers (JLT)',
    auditMandatory: true,
    highlights: [
      'Awarded Global Free Zone of the Year multiple consecutive times by fDi Intelligence',
      'DMCC Crypto Centre & Gaming Centre with dedicated regulatory sandboxes',
      'Direct customs connectivity with Jebel Ali Port and major UAE transport corridors',
      'Over 24,000 member companies registered across 68 commercial towers',
    ],
  },
  {
    id: 'meydan',
    name: 'Meydan Free Zone (MFZ)',
    arabicName: 'منطقة ميدان الحرة',
    type: 'Digital & Commercial Free Zone',
    authority: 'Meydan Free Zone Authority',
    officialUrl: 'https://www.meydanfz.ae/',
    focus: 'E-Commerce, Technology, Digital Media, Management Consulting, International Trading',
    minLicenseCostAed: 12500,
    visasIncluded: '1 to 6 visa allocation packages available on virtual flexi-desk licenses',
    officeRequirement: 'Virtual office or shared business center at The Meydan Hotel complex',
    auditMandatory: false,
    highlights: [
      'Cost-effective entry point for international digital entrepreneurs and consultants',
      'Meydan Pay integrated digital merchant gateway and automated IBAN onboarding',
      '100% digital license issuance typically completed within 3 to 5 business days',
      'Prime central location 15 minutes from Downtown Dubai and DXB Airport',
    ],
  },
  {
    id: 'ifza',
    name: 'International Free Zone Authority (IFZA)',
    arabicName: 'هيئة المنطقة الحرة الدولية',
    type: 'Commercial & Multi-Disciplinary Free Zone',
    authority: 'Dubai Silicon Oasis Authority / IFZA',
    officialUrl: 'https://www.ifza.com/',
    focus: 'Consulting, Commercial Trading, Media, General Trading, Holding Companies',
    minLicenseCostAed: 13900,
    visasIncluded: '0 to 3 visa packages on smart desk allocations',
    officeRequirement: 'Flexi-desk in IFZA Business Park, Dubai Silicon Oasis',
    auditMandatory: false,
    highlights: [
      'Highly competitive tier-one corporate packaging with no paid-up capital deposit required',
      'Possibility to combine professional and commercial trading activities under one license',
      'Dedicated corporate VIP medical fitness and Emirates ID fast-track assistance',
      'Wide network of international incorporation agent representations',
    ],
  },
  {
    id: 'tecom',
    name: 'TECOM Group (Dubai Internet City & Media City)',
    arabicName: 'مجموعة تيكوم',
    type: 'Sector-Dedicated Technology & Media Cluster',
    authority: 'Dubai Development Authority (DDA)',
    officialUrl: 'https://tecomgroup.ae/',
    focus: 'Technology (DIC), Media & Production (DMC), Science & Biotech (DSP), Design (d3)',
    minLicenseCostAed: 22000,
    visasIncluded: 'Allocated according to commercial leased premises',
    officeRequirement: 'Physical executive space or in5 incubator co-working station',
    auditMandatory: true,
    highlights: [
      'Home to regional Fortune 500 tech headquarters (Microsoft, Google, Oracle, Cisco)',
      'in5 business incubator offering subsidised 3-year startup licensing packages',
      'Targeted industry ecosystems with specialized networking and investor matching events',
      'Strict sector zoning ensuring high-reputation cluster peer recognition',
    ],
  },
  {
    id: 'dubai-south',
    name: 'Dubai South Free Zone',
    arabicName: 'دبي الجنوب',
    type: 'Aviation, Logistics & Commercial Megaproject',
    authority: 'Dubai Aviation City Corporation (DACC)',
    officialUrl: 'https://www.dubaisouth.ae/',
    focus: 'Logistics, Aerospace, Supply Chain, E-Commerce Fulfillment, Exhibition Services',
    minLicenseCostAed: 15500,
    visasIncluded: 'Flexible based on facility size (warehousing, industrial plots, or flexi-desk)',
    officeRequirement: 'Business Center smart desk or dedicated logistics warehousing park',
    auditMandatory: true,
    highlights: [
      'Direct multimodal bonded logistics corridor linking Jebel Ali Port with Al Maktoum Airport (DWC)',
      'Heart of the master-planned $35B Al Maktoum International Airport expansion',
      'Dedicated Aerospace Supply Chain and VIP Executive Jet maintenance hangars',
      'Future commercial hub supporting D33 logistics and air cargo doubling mandates',
    ],
  },
]

export default function BusinessHubPage() {
  const [activeTab, setActiveTab] = React.useState<'NAVIGATOR' | 'MAINLAND_VS_FREEZONE' | 'FREEZONES' | 'CALCULATOR' | 'COMPLIANCE'>('NAVIGATOR')
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false)

  // Navigator State
  const [navActivity, setNavActivity] = React.useState('TECH')
  const [navMarket, setNavMarket] = React.useState('GLOBAL')
  const [navVisas, setNavVisas] = React.useState('1_2')
  const [navOffice, setNavOffice] = React.useState('FLEXI')

  // Cost Calculator State
  const [calcJurisdiction, setCalcJurisdiction] = React.useState<'FREE_ZONE_BUDGET' | 'FREE_ZONE_PREMIUM' | 'MAINLAND'>('FREE_ZONE_BUDGET')
  const [calcVisasCount, setCalcVisasCount] = React.useState<number>(1)
  const [calcOfficeType, setCalcOfficeType] = React.useState<'FLEXI' | 'SERVICED' | 'PHYSICAL'>('FLEXI')
  const [calcNeedBankHelp, setCalcNeedBankHelp] = React.useState<boolean>(true)
  const [calcNeedAudit, setCalcNeedAudit] = React.useState<boolean>(true)

  // Dynamic Cost Calculation
  const licenseCost = calcJurisdiction === 'FREE_ZONE_BUDGET' ? 12500 : calcJurisdiction === 'FREE_ZONE_PREMIUM' ? 32000 : 18500
  const establishmentCardCost = 2200
  const visaCostPerPerson = 4500 // Residence permit + medical test + Emirates ID + biometric + change of status
  const totalVisasCost = calcVisasCount * visaCostPerPerson
  const officeCost = calcOfficeType === 'FLEXI' ? 3500 : calcOfficeType === 'SERVICED' ? 18000 : 45000
  const bankAssistanceCost = calcNeedBankHelp ? 3500 : 0
  const corporateTaxAndAuditCost = calcNeedAudit ? 6500 : 2500
  const firstYearTotal = licenseCost + establishmentCardCost + totalVisasCost + officeCost + bankAssistanceCost + corporateTaxAndAuditCost
  const recurringAnnualCost = licenseCost + officeCost + (calcNeedAudit ? 6500 : 2500) + Math.round(totalVisasCost / 2) // Visas renew every 2 years

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="border-b border-slate-200 bg-slate-50/70 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-800 uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
              <span>Dubai Business Hub &bull; DED &amp; Free Zone Registry</span>
            </span>
            <span className="px-3 py-1 bg-slate-900 text-white uppercase tracking-widest font-semibold">
              Corporate Intelligence
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 uppercase tracking-widest hidden sm:inline-block">
              100% Foreign Ownership (Decree 32/2021)
            </span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-950 font-serif">
              Dubai Business Setup &amp; Corporate Hub
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
              Source-led intelligence for international entrepreneurs, corporate relocations, and venture founders. Verified licensing frameworks, mainland vs free zone comparative legalities, corporate tax underwriting, and transparent operational budgeting.
            </p>
          </div>

          {/* Quick Tab Selector */}
          <div className="pt-4 flex flex-wrap items-center gap-2 font-mono text-xs border-t border-slate-200">
            <button
              onClick={() => setActiveTab('NAVIGATOR')}
              className={`px-4 py-2 border transition-colors cursor-pointer ${
                activeTab === 'NAVIGATOR'
                  ? 'bg-slate-950 text-white border-slate-950 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Setup Navigator
            </button>
            <button
              onClick={() => setActiveTab('MAINLAND_VS_FREEZONE')}
              className={`px-4 py-2 border transition-colors cursor-pointer ${
                activeTab === 'MAINLAND_VS_FREEZONE'
                  ? 'bg-slate-950 text-white border-slate-950 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Mainland vs. Free Zone
            </button>
            <button
              onClick={() => setActiveTab('FREEZONES')}
              className={`px-4 py-2 border transition-colors cursor-pointer ${
                activeTab === 'FREEZONES'
                  ? 'bg-slate-950 text-white border-slate-950 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Free Zone Directory (6)
            </button>
            <button
              onClick={() => setActiveTab('CALCULATOR')}
              className={`px-4 py-2 border transition-colors cursor-pointer ${
                activeTab === 'CALCULATOR'
                  ? 'bg-slate-950 text-white border-slate-950 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Cost Calculator
            </button>
            <button
              onClick={() => setActiveTab('COMPLIANCE')}
              className={`px-4 py-2 border transition-colors cursor-pointer ${
                activeTab === 'COMPLIANCE'
                  ? 'bg-slate-950 text-white border-slate-950 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Compliance Calendar
            </button>
          </div>
        </div>
      </section>

      {/* 2. TABBED CONTENT CONTAINER */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-14 sm:py-20 flex-1 space-y-16">
        
        {/* TAB 1: COMPANY SETUP NAVIGATOR */}
        {activeTab === 'NAVIGATOR' && (
          <section className="space-y-10 animate-in fade-in duration-200">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
                STEP-BY-STEP ADVISORY TOOL
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-950 font-serif">
                Company Setup Navigator
              </h2>
              <p className="text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
                Select your business parameters to identify the legally optimal jurisdiction, licensing authority, and statutory compliance framework in Dubai.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Inputs Column (6 cols) */}
              <div className="lg:col-span-6 p-6 sm:p-8 bg-slate-50 border border-slate-200 space-y-6">
                
                {/* 1. Activity Category */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold block">
                    1. Primary Commercial Activity
                  </label>
                  <select
                    value={navActivity}
                    onChange={(e) => setNavActivity(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-200 text-xs font-mono text-slate-900 focus:outline-none focus:border-slate-900 cursor-pointer"
                  >
                    <option value="TECH">Technology, Software, AI, SaaS, Web3</option>
                    <option value="CONSULTING">Management, Strategic &amp; Professional Consulting</option>
                    <option value="TRADING">International Commercial Trading &amp; Physical Import/Export</option>
                    <option value="ECOMMERCE">E-Commerce &amp; Digital Direct-to-Consumer</option>
                    <option value="HOLDING">Holding Company, Asset Protection &amp; Family Wealth</option>
                    <option value="FINANCE">Financial Services, Asset Management, Brokerage</option>
                    <option value="REAL_ESTATE">Real Estate Brokerage &amp; Property Management</option>
                  </select>
                </div>

                {/* 2. Target Market */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold block">
                    2. Geographic Client Focus
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'GLOBAL', label: '100% Global / Cross-Border' },
                      { id: 'BOTH', label: 'UAE Mainland + Global' },
                      { id: 'LOCAL', label: 'Local UAE Market Only' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setNavMarket(opt.id)}
                        className={`p-3 text-[11px] font-mono border text-center transition-all cursor-pointer ${
                          navMarket === opt.id
                            ? 'bg-slate-900 text-white border-slate-900 font-bold shadow-2xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Visas Requirement */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold block">
                    3. Required UAE Residency Visas
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: '0', label: '0 Visas' },
                      { id: '1_2', label: '1–2 Visas' },
                      { id: '3_5', label: '3–5 Visas' },
                      { id: '6_PLUS', label: '6+ Visas' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setNavVisas(opt.id)}
                        className={`p-2.5 text-xs font-mono border text-center transition-all cursor-pointer ${
                          navVisas === opt.id
                            ? 'bg-slate-900 text-white border-slate-900 font-bold'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Workspace Requirement */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold block">
                    4. Premise / Office Requirement
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'FLEXI', label: 'Flexi-Desk / Virtual' },
                      { id: 'SERVICED', label: 'Private Serviced Office' },
                      { id: 'PHYSICAL', label: 'Commercial Lease' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setNavOffice(opt.id)}
                        className={`p-2.5 text-[11px] font-mono border text-center transition-all cursor-pointer ${
                          navOffice === opt.id
                            ? 'bg-slate-900 text-white border-slate-900 font-bold'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Recommendation Column (6 cols) */}
              <div className="lg:col-span-6 p-6 sm:p-8 bg-slate-950 text-white border border-slate-900 space-y-6 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#38bdf8] font-bold">
                    RECOMMENDED SETUP PATHWAY
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800">
                    STATUTORY FIT
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-white">
                    {navMarket === 'LOCAL' || navActivity === 'REAL_ESTATE'
                      ? 'Dubai Mainland LLC (DET Licensing)'
                      : navActivity === 'FINANCE'
                      ? 'DIFC Financial Free Zone (DFSA Common Law)'
                      : navActivity === 'TRADING' && navOffice === 'PHYSICAL'
                      ? 'DMCC Authority (JLT Logistics / Trading)'
                      : 'Meydan or IFZA Digital Free Zone'}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {navMarket === 'LOCAL' || navActivity === 'REAL_ESTATE'
                      ? 'Because your commercial scope requires direct onshore trading within the UAE mainland and local consumers, a Dubai Economy and Tourism (DET) Mainland license with 100% foreign ownership is legally required.'
                      : navActivity === 'FINANCE'
                      ? 'Financial brokerage, private equity, and wealth advisory mandate common law oversight under the Dubai Financial Services Authority (DFSA) within DIFC.'
                      : 'Because your operations are primarily cross-border and consultative, a tier-one Dubai Free Zone provides the most tax-efficient, nimble setup with 0% Qualifying Free Zone Person Corporate Tax potential.'}
                  </p>
                </div>

                {/* Statutory Caveat: Preliminary Guidance Only */}
                <div className="p-3.5 bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider text-[10px]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Preliminary Regulatory Guidance Only</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-400">
                    This automated navigator generates preliminary guidance based on current UAE licensing frameworks. It does not constitute a definitive legal determination. Final structure, external ministerial NOCs, and activity combinations must be confirmed directly with the relevant licensing authority (DET or Free Zone) or a qualified corporate structuring counsel.
                  </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                  <div className="p-3 bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[10px]">ESTIMATED SETUP TIME</span>
                    <span className="text-white font-bold">5–10 Business Days</span>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[10px]">CORPORATE TAX RATE</span>
                    <span className="text-emerald-400 font-bold">0% Qualifying / 9% Standard</span>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[10px]">FOREIGN OWNERSHIP</span>
                    <span className="text-white font-bold">100% Permitted (Decree 32/2021)</span>
                  </div>
                  <div className="p-3 bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-[10px]">MIN. CAPITAL DEPOSIT</span>
                    <span className="text-white font-bold">AED 0 (No initial lock-up)</span>
                  </div>
                </div>

                {/* Action */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 text-xs font-mono uppercase tracking-widest font-semibold transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Request Incorporation Dossier</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={() => setActiveTab('CALCULATOR')}
                    className="px-4 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    Calculate Itemized Budget
                  </button>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* TAB 2: MAINLAND VS FREE ZONE COMPARISON */}
        {activeTab === 'MAINLAND_VS_FREEZONE' && (
          <section className="space-y-8 animate-in fade-in duration-200">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
                STATUTORY COMPARISON MATRIX
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-950 font-serif">
                Mainland vs. Free Zone Comparison
              </h2>
              <p className="text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
                Clear distinction under Federal Decree-Law No. 32 of 2021 (Commercial Companies) and Federal Decree-Law No. 47 of 2022 (Corporate Tax).
              </p>
            </div>

            <div className="overflow-x-auto border border-slate-200">
              <table className="w-full text-left text-xs font-mono divide-y divide-slate-200">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="p-4 uppercase tracking-wider font-semibold w-1/4">Key Dimension</th>
                    <th className="p-4 uppercase tracking-wider font-semibold w-3/8 text-slate-200">Mainland (DET)</th>
                    <th className="p-4 uppercase tracking-wider font-semibold w-3/8 text-slate-200">Free Zone (e.g. DIFC, DMCC, Meydan)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="p-4 font-bold text-slate-900 bg-slate-50">Commercial Scope</td>
                    <td className="p-4 text-slate-700">Can trade anywhere in the UAE mainland, with local consumers, government tenders, and globally without restriction.</td>
                    <td className="p-4 text-slate-700">Can trade globally and within Free Zones. Direct commercial sales to UAE mainland consumers requires a local distributor or mainland commercial branch.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 bg-slate-50">Foreign Ownership</td>
                    <td className="p-4 text-slate-700">100% foreign ownership permitted for over 1,000+ commercial and industrial activities under Decree 32/2021.</td>
                    <td className="p-4 text-slate-700">100% foreign ownership guaranteed for all approved activities.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 bg-slate-50">Physical Office Rule</td>
                    <td className="p-4 text-slate-700">Requires a registered tenancy contract with Ejari (minimum physical office or DED-approved business center).</td>
                    <td className="p-4 text-slate-700">Flexible options: flexi-desk, shared co-working, or dedicated commercial unit in the Free Zone territory.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 bg-slate-50">Corporate Tax Treatment</td>
                    <td className="p-4 text-slate-700">Standard 9% on taxable profit exceeding AED 375,000 (0% up to AED 375,000 under Small Business Relief).</td>
                    <td className="p-4 text-slate-700">Potential 0% on Qualifying Income for Qualifying Free Zone Persons (QFZP); 9% on non-qualifying income.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 bg-slate-50">Customs &amp; Duties</td>
                    <td className="p-4 text-slate-700">Subject to standard 5% UAE customs tariffs upon initial customs clearance into the mainland.</td>
                    <td className="p-4 text-slate-700">0% customs duty on goods imported into and stored within designated Free Zone bonded customs zones.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900 bg-slate-50">Applicable Legal System</td>
                    <td className="p-4 text-slate-700">UAE Civil Law (Dubai Courts operating in Arabic, with notary public certifications).</td>
                    <td className="p-4 text-slate-700">Free Zone internal regulations; DIFC operates under independent English Common Law courts.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* TAB 3: FREE ZONE DIRECTORY */}
        {activeTab === 'FREEZONES' && (
          <section className="space-y-8 animate-in fade-in duration-200">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
                AUTHORITATIVE JURISDICTION DIRECTORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-950 font-serif">
                Dubai Free Zone Directory
              </h2>
              <p className="text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
                Detailed verified profiles for primary Dubai Free Zones. Published fee baselines, target industry sectors, and official licensing authorities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FREE_ZONES.map((fz) => (
                <div key={fz.id} className="p-6 bg-white border border-slate-200 hover:border-slate-400 transition-all space-y-4 shadow-2xs">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase text-slate-500">
                      <span>{fz.type}</span>
                      <a
                        href={fz.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 hover:underline flex items-center gap-1 font-bold"
                      >
                        <span>Official Portal</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <h3 className="text-xl font-serif font-light text-slate-950">
                      {fz.name}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 block">{fz.arabicName}</span>
                  </div>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    <strong className="font-semibold text-slate-900">Sector Focus:</strong> {fz.focus}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono bg-slate-50 p-3 border border-slate-100">
                    <div>
                      <span className="text-slate-400 block text-[9px]">STARTING LICENSE</span>
                      <span className="text-slate-950 font-bold">AED {fz.minLicenseCostAed.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px]">STATUTORY AUDIT</span>
                      <span className={`font-bold ${fz.auditMandatory ? 'text-amber-800' : 'text-slate-700'}`}>
                        {fz.auditMandatory ? 'Mandatory Annual' : 'Optional / Threshold'}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">Key Highlights:</span>
                    <ul className="space-y-1 text-xs text-slate-600 font-light">
                      {fz.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 4: BUSINESS COST CALCULATOR */}
        {activeTab === 'CALCULATOR' && (
          <section className="space-y-8 animate-in fade-in duration-200">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
                FINANCIAL UNDERWRITING TOOL
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-950 font-serif">
                Dubai Business Setup Cost Calculator
              </h2>
              <p className="text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
                Estimate first-year capital outlay and ongoing annual renewal costs for company formation in Dubai. All statutory tariffs itemized transparently.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Controls Column (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 bg-slate-50 border border-slate-200 space-y-6">
                
                {/* 1. Jurisdiction Choice */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold block">
                    Jurisdiction Tier
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'FREE_ZONE_BUDGET' as const, label: 'Digital Free Zone (Meydan/IFZA)', fee: 'AED 12,500' },
                      { id: 'FREE_ZONE_PREMIUM' as const, label: 'Tier-1 Zone (DIFC / DMCC)', fee: 'AED 32,000' },
                      { id: 'MAINLAND' as const, label: 'Mainland LLC (DET)', fee: 'AED 18,500' },
                    ].map((j) => (
                      <button
                        key={j.id}
                        type="button"
                        onClick={() => setCalcJurisdiction(j.id)}
                        className={`p-3 text-[11px] font-mono border text-center transition-all cursor-pointer ${
                          calcJurisdiction === j.id
                            ? 'bg-slate-900 text-white border-slate-900 font-bold'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <span className="block">{j.label}</span>
                        <span className="text-[10px] opacity-75 mt-0.5 block">{j.fee}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Number of Visas */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <label className="uppercase tracking-wider text-slate-800 font-bold">
                      Residency Visas Required
                    </label>
                    <span className="text-slate-950 font-bold">{calcVisasCount} {calcVisasCount === 1 ? 'Visa' : 'Visas'}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={calcVisasCount}
                    onChange={(e) => setCalcVisasCount(Number(e.target.value))}
                    className="w-full accent-slate-950 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>1 Investor Visa</span>
                    <span>5 Visas</span>
                    <span>10 Team Visas</span>
                  </div>
                </div>

                {/* 3. Office Type */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold block">
                    Workspace &amp; Office Solution
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'FLEXI' as const, label: 'Flexi-Desk (Shared)', fee: 'AED 3,500' },
                      { id: 'SERVICED' as const, label: 'Serviced Business Center', fee: 'AED 18,000' },
                      { id: 'PHYSICAL' as const, label: 'Dedicated Lease (Ejari)', fee: 'AED 45,000' },
                    ].map((off) => (
                      <button
                        key={off.id}
                        type="button"
                        onClick={() => setCalcOfficeType(off.id)}
                        className={`p-3 text-[11px] font-mono border text-center transition-all cursor-pointer ${
                          calcOfficeType === off.id
                            ? 'bg-slate-900 text-white border-slate-900 font-bold'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <span className="block">{off.label}</span>
                        <span className="text-[10px] opacity-75 mt-0.5 block">{off.fee}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Toggles */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <label className="flex items-center gap-2 p-3 bg-white border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calcNeedBankHelp}
                      onChange={(e) => setCalcNeedBankHelp(e.target.checked)}
                      className="accent-slate-950"
                    />
                    <span className="text-xs font-mono text-slate-800">Corporate Bank Account Desk (+AED 3,500)</span>
                  </label>

                  <label className="flex items-center gap-2 p-3 bg-white border border-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calcNeedAudit}
                      onChange={(e) => setCalcNeedAudit(e.target.checked)}
                      className="accent-slate-950"
                    />
                    <span className="text-xs font-mono text-slate-800">Corporate Tax &amp; Audit Filing (+AED 6,500)</span>
                  </label>
                </div>

              </div>

              {/* Output Itemized Budget Column (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-white border border-slate-200 space-y-6 shadow-sm">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold block">
                  ITEMIZED STATUTORY BUDGET
                </span>

                <div className="space-y-2.5 font-mono text-xs divide-y divide-slate-100">
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-600">Trade License Issuance</span>
                    <span className="text-slate-950 font-bold">AED {licenseCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-600">Immigration Establishment Card</span>
                    <span className="text-slate-950 font-bold">AED {establishmentCardCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-600">Residence Visas ({calcVisasCount}x AED 4,500)</span>
                    <span className="text-slate-950 font-bold">AED {totalVisasCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-600">Workspace / Lease Allocation</span>
                    <span className="text-slate-950 font-bold">AED {officeCost.toLocaleString()}</span>
                  </div>
                  {calcNeedBankHelp && (
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-600">Corporate Banking Setup</span>
                      <span className="text-slate-950 font-bold">AED {bankAssistanceCost.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-600">Tax &amp; Annual Audit Retainer</span>
                    <span className="text-slate-950 font-bold">AED {corporateTaxAndAuditCost.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-slate-950 font-bold block">
                        FIRST-YEAR TOTAL OUTLAY
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        Approx. €{Math.round(firstYearTotal / 4.0).toLocaleString()} / ${Math.round(firstYearTotal / 3.6725).toLocaleString()}
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-light text-slate-950 font-mono font-bold">
                      AED {firstYearTotal.toLocaleString()}
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-100 flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-600">Estimated Annual Renewal:</span>
                    <span className="text-slate-950 font-bold">AED {recurringAnnualCost.toLocaleString()} / year</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-full py-3 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-widest font-semibold transition-all shadow-xs"
                  >
                    Lock Official Setup Quotation
                  </button>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* TAB 5: COMPLIANCE CALENDAR */}
        {activeTab === 'COMPLIANCE' && (
          <section className="space-y-8 animate-in fade-in duration-200">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
                CORPORATE GOVERNANCE SCHEDULE
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-slate-950 font-serif">
                Dubai Company Compliance Calendar
              </h2>
              <p className="text-sm text-slate-600 font-light max-w-2xl leading-relaxed">
                Mandatory statutory reporting deadlines for all operating commercial entities in Dubai under Federal and Emirate decrees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 bg-white border border-slate-200 space-y-3 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-slate-950">
                  <Calendar className="h-4 w-4 text-slate-900" />
                  <span>Annual Trade License Renewal</span>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Every mainland and Free Zone trade license must be renewed annually before expiration. Operating with an expired license incurs statutory fines of AED 200/month from DED/Free Zone authorities and can trigger bank account freezes.
                </p>
                <div className="pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                  Cycle: Annual &bull; Authority: Relevant Licensing Body
                </div>
              </div>

              <div className="p-6 bg-white border border-slate-200 space-y-3 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-slate-950">
                  <FileText className="h-4 w-4 text-emerald-800" />
                  <span>Corporate Tax Filing (9 Months)</span>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Under Federal Decree-Law No. 47 of 2022, every UAE juridical person must register for Corporate Tax and file an annual tax return with the Federal Tax Authority within 9 months following the conclusion of its financial tax period.
                </p>
                <div className="pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                  Cycle: Annual &bull; Authority: Federal Tax Authority (FTA)
                </div>
              </div>

              <div className="p-6 bg-white border border-slate-200 space-y-3 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-slate-950">
                  <DollarSign className="h-4 w-4 text-blue-800" />
                  <span>VAT Returns &amp; Remittances (5%)</span>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Businesses exceeding the mandatory VAT threshold of AED 375,000 must file returns and pay tax by the 28th day following the close of their assigned tax period via EmaraTax. Tax periods are assigned by the FTA upon registration (standard period is quarterly, with monthly filing assigned to larger businesses or designated sectors under Federal Decree-Law No. 8 of 2017).
                </p>
                <div className="pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                  Cycle: Assigned by FTA (Quarterly or Monthly) &bull; Authority: Federal Tax Authority (FTA)
                </div>
              </div>

            </div>

            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Statutory Tax &amp; Corporate Governance Guide
                </span>
                <p className="text-xs text-slate-300 font-light">
                  Explore full legal decrees: Federal Decree-Law No. 47 of 2022, 0% Qualifying Free Zone criteria, and Romania&ndash;UAE Double Tax Treaty.
                </p>
              </div>
              <Link
                href="/tax"
                className="px-5 py-2.5 bg-white text-slate-950 font-mono text-xs font-bold whitespace-nowrap hover:bg-slate-100 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Read Statutory Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </section>
        )}

      </main>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
