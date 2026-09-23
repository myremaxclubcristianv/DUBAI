# Dubai Real Estate, Investment Intelligence & Private Client Desk

Institutional-grade Dubai real estate, financial underwriting, and private client advisory platform designed with a white-first luxury editorial aesthetic and complete data provenance architecture.

---

## 1. Platform Architecture

The platform operates on Next.js 16 (App Router) with TypeScript, Turbopack, and Tailwind CSS. It is architected to run seamlessly in **Static Verified Catalog + Local Storage Mode** prior to external Supabase provisioning, while maintaining full drop-in repository abstractions for database activation.

```
src/
├── app/                      # Next.js App Router (27 compiled routes)
│   ├── admin/                # Data quality & source registry audit center
│   ├── api/                  # Search, leads, and viewing endpoint contracts
│   ├── areas/                # Master freehold community dossiers
│   ├── buying-guide/         # 13-stage regulatory acquisition protocol
│   ├── client/               # Client portal, comparison desk & saved searches
│   ├── developers/           # Licensed master developers registry
│   ├── investment/           # Institutional financial modeling suite (6 engines)
│   ├── lifestyle/            # Luxury ecosystem (Aviation, Yachts, Dining, Safari)
│   ├── map/                  # Geodetic sector map with coordinate precision
│   ├── market/               # Market pulse, statutory benchmarks & methodology
│   ├── private-client/       # 8-step structured advisory intake wizard
│   ├── projects/             # Verified master developments
│   ├── properties/           # Property catalog with advanced filtering & sorting
│   │   └── [id]/             # Property dossier with dynamic investment panel
│   └── residency/            # UAE 10-Year Golden Visa legal frameworks
├── components/
│   ├── auth/                 # Authentication modals & state indicators
│   ├── investment/           # Scenario workspace, yield, mortgage, acquisition calculators
│   ├── layout/               # Header, Footer, and navigation
│   ├── map/                  # Multi-layer geodetic map canvas
│   ├── property/             # Cards, filters, comparison, and viewing modals
│   └── ui/                   # SourceBadge, ProvenanceModal, Toast notifications
├── lib/
│   ├── calculators/          # Mathematical financial underwriting engines
│   ├── context/              # Client state provider (Shortlist, Comparison, Searches)
│   ├── data/                 # Source-audited static baseline registries
│   └── repositories/         # Drop-in Data Access Layer interfaces
└── proxy.ts                  # Modern Next.js 16 security middleware
```

---

## 2. Core Governance Directives

### Zero Fake Data Policy
* **No Synthetic Records**: Zero placeholder properties, fake transactions, synthetic users, or imaginary developers.
* **Separation of Valuation Channels**: Asking prices (`DEVELOPER_DIRECT_INVENTORY`, `SECONDARY_MARKET_LISTING`), historical transaction records, and analytical estimates are strictly segregated and labeled.
* **Statutory Fee Provenance**: All acquisition calculations cite official legal statutes (*Dubai Law No. 7 of 2006*, *Executive Council Resolution No. 30 of 2013*, *Law No. 85 of 2006*).
* **Mortgage LTV Ceilings**: Mortgage engines strictly adhere to Central Bank of the UAE (CBUAE) regulatory loan-to-value limits.

---

## 3. Local Setup & Verification

### Prerequisites
* Node.js >= 20.x
* npm >= 10.x

### Installation & Development
```bash
# Clone repository
git clone <repo-url>
cd DUBAI

# Install dependencies
npm install

# Start local Turbopack development server
npm run dev

# Run linting
npm run lint

# Compile production bundle
npm run build
```

---

## 4. Environment Configuration

To connect external services when credentials become available, configure `.env.local`:

```env
# Supabase PostgreSQL & Auth (Optional - Static Mode active if omitted)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Platform Canonical Domain
NEXT_PUBLIC_SITE_URL=https://dubai.cristianvaduva.com
```

---

## 5. Financial Modeling Methodology

All calculator outputs are marked `CALCULATED` and derived from explicit statutory formulas:

1. **Statutory Acquisition Costs**:
   * Buyer Transfer Fee: 2.0% (customary share of 4.0% statutory transfer fee under Law No. 7/2006)
   * DLD Document Tariffs: AED 520 (AED 250 Title Deed + AED 250 Map + AED 10 Knowledge + AED 10 Innovation)
   * Registration Trustee Fee: AED 4,200 (AED 4,000 + 5% VAT for assets ≥ AED 500k)
   * Customary Brokerage: 2.1% (2.0% + 5% VAT under Law No. 85/2006)
   * Mortgage Registration (if debt financed): 0.25% of loan + AED 270 document tariffs + bank valuation/processing fees
2. **Rental Yield & Operating Income**:
   * Gross Yield: $(\text{Annual Rent} / \text{Total Acquisition Cost}) \times 100$
   * Net Yield: $(\text{NOI} / \text{Total Acquisition Cost}) \times 100$
   * NOI: $\text{Gross Rent} - (\text{Service Charges} + \text{Maintenance Reserve} + \text{Management Fees} + \text{Insurance})$
3. **Multi-Scenario Investment Builder**:
   * Simulates full holding period cash flows, loan amortization, exit proceeds, and Net Simple ROI.

---

## 6. Future Supabase Backend Activation

The platform includes `supabase/schema.sql` with 25 tables, 28 Row Level Security (RLS) policies, and TypeScript definitions in `src/types/database.ts`. The repository layer (`src/lib/repositories/index.ts`) allows instant activation of live database reads/writes without altering frontend presentation components.

---

## 7. Security Hardening

* **Security Headers**: HSTS, CSP (Strict frame, script, and style sandboxing), X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin.
* **Storage Transparency**: Local browser storage is explicitly identified as `LOCAL DATA MODE`.
* **Zero Client Secret Leakage**: Service role keys are never imported into client components.
