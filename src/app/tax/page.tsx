import * as React from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Landmark,
  ShieldCheck,
  UserCheck,
} from 'lucide-react'

export default function TaxGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">
      
      {/* 1. EDITORIAL HEADER */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.24em] uppercase text-slate-500 font-semibold">
                STATUTORY GOVERNANCE &bull; CORPORATE &amp; FISCAL REGIME
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-500">
              <span className="text-emerald-800 font-semibold flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />
                Federal Tax Authority (FTA) Official Decrees
              </span>
              <span>&bull;</span>
              <span>Last Reviewed: Q1 2026</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-t border-slate-200/80 pt-6">
            <div className="space-y-3 max-w-3xl">
              <h1 className="text-4xl sm:text-6xl font-light tracking-[-0.035em] leading-[1.05] text-slate-950 font-serif">
                UAE TAX LAW &amp;<br />FISCAL FRAMEWORK.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                A rigorous, statutory breakdown of Federal Decree-Law No. 47 of 2022 on Corporate Tax, Qualifying Free Zone Person (QFZP) 0% criteria, VAT Law No. 8 of 2017, and the Romania&ndash;UAE Double Tax Avoidance Convention.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <a
                href="https://tax.gov.ae/en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 transition-colors"
              >
                <span>FTA Portal</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <Link
                href="/business"
                className="inline-flex items-center gap-1.5 px-4 py-3 bg-slate-950 hover:bg-slate-800 text-white transition-colors"
              >
                <span>Business Setup Hub</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATUTORY PILLARS */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase font-bold">CORPORATE TAX STANDARD</span>
              <div className="text-xl font-bold text-slate-950">9% / 0%</div>
              <p className="text-[11px] text-slate-500">0% on net profit up to AED 375,000; 9% on excess.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase font-bold">NATURAL PERSON REAL ESTATE</span>
              <div className="text-xl font-bold text-emerald-800">0% Personal Tax</div>
              <p className="text-[11px] text-slate-500">Cabinet Decision 49/2023: personal property exempt.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase font-bold">VALUE ADDED TAX (VAT)</span>
              <div className="text-xl font-bold text-slate-950">5% Standard</div>
              <p className="text-[11px] text-slate-500">Mandatory threshold AED 375,000 annual taxable revenue.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase font-bold">ROMANIA-UAE TREATY</span>
              <div className="text-xl font-bold text-slate-950">Law 74/1993</div>
              <p className="text-[11px] text-slate-500">Bilateral avoidance of double taxation on income &amp; wealth (signed 11 April 1993).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CONTENT SECTIONS */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-16">
        
        {/* SECTION 1: CORPORATE TAX */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">
              01 &bull; PRIMARY STATUTE
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
              UAE Corporate Tax (Federal Decree-Law No. 47 of 2022)
            </h2>
          </div>

          <div className="p-6 sm:p-8 bg-white border border-slate-200 space-y-6">
            <div className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 space-y-4">
              <p>
                The UAE introduced a federal Corporate Tax regime applicable to financial years commencing on or after <strong>1 June 2023</strong>. Designed to adhere to international tax transparency standards (including OECD BEPS Pillar Two), the tax is levied on taxable net business income derived by juridical persons (corporations) and certain natural persons conducting commercial business activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                    Tier 1: 0% Statutory Bracket
                  </h3>
                </div>
                <div className="text-2xl font-mono font-bold text-slate-950">AED 0 &ndash; AED 375,000</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Taxable net profit up to AED 375,000 (approx. USD 102,110 / EUR 94,100) per financial year is taxed at a statutory <strong>0% rate</strong> to foster SME growth and entrepreneurship.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-900" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                    Tier 2: 9% Standard Headline Rate
                  </h3>
                </div>
                <div className="text-2xl font-mono font-bold text-slate-950">9% on Excess</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Taxable net profit exceeding AED 375,000 is taxed at <strong>9%</strong>. This represents one of the lowest statutory headline corporate tax rates among major global financial centers.
                </p>
              </div>
            </div>

            {/* Small Business Relief */}
            <div className="p-5 bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 space-y-2">
              <div className="flex items-center gap-2 font-bold font-mono uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                <span>Small Business Relief (Ministerial Decision No. 73 of 2023)</span>
              </div>
              <p className="leading-relaxed text-emerald-900">
                Tax resident juridical and natural persons with gross revenue equal to or below <strong>AED 3,000,000</strong> in a relevant tax period and all previous tax periods ending on or before <strong>31 December 2026</strong> can elect to be treated as having no taxable income for that period, effectively exempting them from paying corporate tax, subject to maintaining proper accounting records and annual tax return filing.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: QUALIFYING FREE ZONE PERSON (QFZP) */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">
              02 &bull; FREE ZONE JURISDICTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
              Qualifying Free Zone Person (QFZP) 0% Criteria
            </h2>
          </div>

          <div className="p-6 sm:p-8 bg-white border border-slate-200 space-y-6">
            <div className="p-4 bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-1">
              <div className="flex items-center gap-2 font-bold font-mono">
                <AlertTriangle className="h-4 w-4 text-amber-700" />
                <span>CRITICAL DISTINCTION: Being in a Free Zone Does Not Automatically Equal 0%</span>
              </div>
              <p className="leading-relaxed text-amber-900">
                A common misconception is that any company registered in a Dubai Free Zone pays 0% corporate tax automatically. Under Cabinet Decision No. 55 of 2023 and Ministerial Decision No. 139 of 2023, a Free Zone company must actively qualify as a <strong>Qualifying Free Zone Person (QFZP)</strong> and derive <strong>Qualifying Income</strong> to maintain 0% tax. If conditions are breached, the company is taxed at 9% on all income for 5 subsequent tax periods.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900">
                The 5 Mandatory Conditions to Qualify as a QFZP:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-mono font-bold text-slate-900 flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-slate-200 text-slate-900 text-[10px]">1</span>
                    Adequate Substance in UAE
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Must maintain adequate physical assets (office or leased desk), adequate number of qualified employees in the free zone, and incur adequate operating expenditure.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-mono font-bold text-slate-900 flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-slate-200 text-slate-900 text-[10px]">2</span>
                    Derives Qualifying Income
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Income from transactions with other Free Zone persons (unless excluded), or income from specified Qualifying Activities (e.g. software manufacturing, treasury services, ship operations, logistics) with non-free zone persons.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-mono font-bold text-slate-900 flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-slate-200 text-slate-900 text-[10px]">3</span>
                    Satisfies De Minimis Requirement
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Non-qualifying revenue derived from mainland UAE customers must not exceed <strong>5% of total revenue</strong> or <strong>AED 5,000,000</strong> (whichever is lower).
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
                  <div className="font-mono font-bold text-slate-900 flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-slate-200 text-slate-900 text-[10px]">4</span>
                    Audited Financial Statements
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Must prepare and maintain annual audited financial statements prepared under IFRS accounting standards, certified by an authorized auditor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: NATURAL PERSON REAL ESTATE EXEMPTION */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">
              03 &bull; INDIVIDUAL INVESTORS
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
              Natural Person Real Estate Tax Exemption (Cabinet Decision No. 49 of 2023)
            </h2>
          </div>

          <div className="p-6 sm:p-8 bg-white border border-slate-200 space-y-6">
            <p className="text-sm text-slate-700 leading-relaxed">
              Cabinet Decision No. 49 of 2023 specifies how Corporate Tax applies to Natural Persons (individual residents and foreign non-residents). Under Article 2 of the Decision:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 bg-emerald-50/70 border border-emerald-200 text-emerald-950 space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-emerald-800">REAL ESTATE EXEMPTION</span>
                <div className="text-base font-bold">100% Tax-Free</div>
                <p className="text-emerald-900 font-sans text-[11px] leading-relaxed">
                  Real estate investments conducted directly or through a trust/foundation by a natural person in their personal capacity are NOT considered a business activity subject to Corporate Tax.
                </p>
              </div>

              <div className="p-4 bg-emerald-50/70 border border-emerald-200 text-emerald-950 space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-emerald-800">PERSONAL INVESTMENTS</span>
                <div className="text-base font-bold">100% Tax-Free</div>
                <p className="text-emerald-900 font-sans text-[11px] leading-relaxed">
                  Personal investment activity, including dividends, share profits, capital gains, and bank deposits conducted in a personal capacity, is exempt from Corporate Tax.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 text-slate-900 space-y-1.5">
                <span className="text-[10px] font-bold uppercase text-slate-500">COMMERCIAL TURNOVER</span>
                <div className="text-base font-bold">&gt; AED 1,000,000</div>
                <p className="text-slate-600 font-sans text-[11px] leading-relaxed">
                  An individual conducting a trade or commercial business (e.g., freelance consulting) only triggers Corporate Tax registration if annual gross commercial turnover exceeds AED 1,000,000.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: VALUE ADDED TAX (VAT) */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">
              04 &bull; INDIRECT CONSUMPTION TAX
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
              Value Added Tax (Federal Decree-Law No. 8 of 2017)
            </h2>
          </div>

          <div className="p-6 sm:p-8 bg-white border border-slate-200 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-3">
                <h3 className="font-mono font-bold uppercase tracking-wider text-slate-900">
                  VAT Registration Thresholds
                </h3>
                <div className="space-y-2">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <span className="text-slate-600">Mandatory Registration Threshold:</span>
                    <span className="font-mono font-bold text-slate-950">AED 375,000 / yr</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <span className="text-slate-600">Voluntary Registration Threshold:</span>
                    <span className="font-mono font-bold text-slate-950">AED 187,500 / yr</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 flex justify-between items-center">
                    <span className="text-slate-600">Standard VAT Rate:</span>
                    <span className="font-mono font-bold text-slate-950">5.0%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-mono font-bold uppercase tracking-wider text-slate-900">
                  VAT Treatment of Dubai Real Estate
                </h3>
                <div className="space-y-2">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 font-bold">First Supply of Residential (New Build):</span>
                      <span className="font-mono text-emerald-700 font-bold">Zero-Rated (0%)</span>
                    </div>
                    <p className="text-[11px] text-slate-500">First sale/lease within 3 years of completion certificate.</p>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 font-bold">Subsequent Residential Resale &amp; Lease:</span>
                      <span className="font-mono text-blue-700 font-bold">Exempt</span>
                    </div>
                    <p className="text-[11px] text-slate-500">No VAT charged to buyer or tenant.</p>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 font-bold">Commercial Real Estate (Offices, Retail):</span>
                      <span className="font-mono text-slate-900 font-bold">Standard 5% VAT</span>
                    </div>
                    <p className="text-[11px] text-slate-500">Subject to standard 5% VAT on sales and commercial leases.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: ROMANIA - UAE DOUBLE TAX AVOIDANCE CONVENTION */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-bold">
              05 &bull; BILATERAL TAX CONVENTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
              Romania &ndash; UAE Convention for Avoidance of Double Taxation (Law No. 74/1993)
            </h2>
          </div>

          <div className="p-6 sm:p-8 bg-white border border-slate-200 space-y-6">
            <p className="text-sm text-slate-700 leading-relaxed">
              Romania and the United Arab Emirates established their initial bilateral tax convention for the Avoidance of Double Taxation and the Prevention of Fiscal Evasion with respect to Taxes on Income and on Wealth, signed in Abu Dhabi on 11 April 1993 and ratified in Romania by <strong>Law No. 74 of 3 November 1993</strong> (published in Monitorul Oficial al României, Partea I, No. 262 of 9 November 1993), later updated under the modern bilateral agreement ratified by Law No. 26/2016 (Monitorul Oficial No. 225 of 25 March 2016).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="p-5 bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Landmark className="h-4 w-4 text-slate-800" />
                  <h3 className="font-mono font-bold uppercase tracking-wider text-slate-900">
                    Article 6 &bull; Immovable Property (Real Estate)
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Article 6 provides that income derived by a resident of a Contracting State from immovable property situated in the other Contracting State may be taxed in the State where the property is situated. Under UAE domestic law (Cabinet Decision No. 49/2023), real estate income derived by natural persons is not currently subject to UAE personal income tax.
                </p>
                <div className="pt-2 text-[11px] text-slate-500 font-mono">
                  Source: Law 74/1993 &bull; Verified October 2026
                </div>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-slate-800" />
                  <h3 className="font-mono font-bold uppercase tracking-wider text-slate-900">
                    Romanian Tax Residency &amp; Declarația Unică
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  A tax treaty does not automatically eliminate filing obligations in Romania. Individuals who remain Romanian tax residents under Law 227/2015 (Codul Fiscal) are subject to worldwide income reporting via Declarația Unică (Form 212). The specific method for avoiding double taxation (credit or exemption) must be reviewed with an authorized tax advisor (consultant fiscal autorizat).
                </p>
                <div className="pt-2">
                  <Link
                    href="/ghiduri/impozitare-romania-dubai"
                    className="text-slate-900 font-mono text-[11px] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Citește Ghidul Complet în Română</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: STATUTORY DISCLAIMER */}
        <section className="p-6 sm:p-8 bg-slate-900 text-white space-y-4">
          <div className="flex items-center gap-2 text-accent">
            <ShieldCheck className="h-5 w-5" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              Statutory Educational Disclaimer &amp; Professional Counsel Notice
            </h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-light">
            This guide is prepared strictly for informational and educational purposes based on UAE Federal Decree-Law No. 47 of 2022, Federal Decree-Law No. 8 of 2017, Cabinet Decision No. 49 of 2023, the Romanian Fiscal Code (Law 227/2015), and the Romania&ndash;UAE Tax Convention (Law 74/1993). Nothing on this platform constitutes formal individual tax, legal, or financial advice. Investors must seek counsel from a licensed tax advisor (consultant fiscal CCF) and certified FTA tax agent to evaluate their specific domicile, residency questionnaires, and corporate structuring.
          </p>
        </section>

      </main>

    </div>
  )
}
