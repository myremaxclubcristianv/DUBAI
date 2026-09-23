<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Dubai Real Estate & Lifestyle Platform

## Project Overview
Production-grade Dubai real estate, investment intelligence, and lifestyle platform with complete data provenance architecture.

## Critical Rules

### NO FAKE DATA
- Never invent property prices, statistics, transaction numbers, or any factual data
- Never use placeholder or sample data in production
- Missing information is acceptable; fake information is NOT
- All data must be sourced from verified sources with proper attribution

### Data Provenance
- Every important data point must support source tracking
- Separate asking price, transaction price, and market estimate
- Separate asking rent, achieved rent, and rental estimates
- Never represent advertised rent as achieved rent
- Never represent estimates as source data

### Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Database
- PostgreSQL via Supabase
- Schema in `supabase/schema.sql`
- TypeScript types in `src/types/database.ts`
- Row Level Security enabled
- Source registry for data provenance

### Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Supabase (Auth, Database, Storage)
- Radix UI components
- Lucide React icons

### Design System
- Premium dark theme (black, charcoal, titanium)
- Subtle gold accent (#c9a962)
- Editorial spacing and typography
- Components in `src/components/ui/`
- Custom utilities in `src/lib/utils.ts`

## Key Features Implemented

### Core Pages
- Homepage with platform overview
- Properties (empty state, architecture ready)
- Projects (empty state, architecture ready)
- Developers (empty state, architecture ready)
- Market Intelligence (transactions, rentals, trends)
- Investment Tools (yield, mortgage, ROI, comparison)
- Lifestyle directory (yachts, aviation, cars, dining)

### Data Architecture
- Complete database schema with 20+ tables
- Source registry and provenance tracking
- Data quality engine foundation
- Audit logging
- Row Level Security policies

### Security
- Security middleware with headers
- CSP policy
- Authentication foundation (Supabase Auth)
- Role-based access control (USER, CLIENT, AGENT, ADVISOR, ADMIN, SUPER_ADMIN)

## Next Steps

### Required External Configuration
1. Set up Supabase project
2. Run `supabase/schema.sql` to create tables
3. Configure environment variables (see `env.example`)
4. Set up Supabase Auth

### Future Implementation
- Authentication UI and flows
- Property search and filtering with real data
- Client area with saved properties and searches
- Viewing manager
- CRM/Leads management
- Admin dashboard
- AI integration (only if real API available)
- Real data ingestion from official sources

## File Structure
```
src/
├── app/                 # Next.js App Router pages
├── components/          # React components
│   ├── ui/             # Base UI components
│   ├── layout/         # Layout components
│   ├── property/       # Property-specific components
│   ├── investment/     # Investment calculator components
│   └── lifestyle/      # Lifestyle components
├── lib/                # Utilities and helpers
├── types/              # TypeScript definitions
└── middleware.ts       # Security middleware
```

## Design Principles
- Premium, expensive feel (Bloomberg Terminal + Apple + Porsche Design)
- Strong typography and editorial spacing
- High contrast dark theme
- No excessive glassmorphism or gradients
- Fast performance (Core Web Vitals)
- Mobile-first responsive design
- Accessible (semantic HTML, keyboard navigation)