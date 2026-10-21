import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Scale,
  Coins,
  Building,
  FileCheck2,
  TrendingUp,
  AlertTriangle,
  BadgePercent,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ghiduri Imobiliare Dubai pentru Investitori Români | Cercetare & Due Diligence',
  description:
    'Ghiduri independente și analize tehnice pentru investitorii români în Dubai: pași de achiziție, costuri DLD, fiscalitate ANAF și Legea 74/1993 (Convenția semnată la 11 aprilie 1993), Golden Visa și riscuri off-plan.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/ghiduri',
  },
  openGraph: {
    title: 'Ghiduri Imobiliare Dubai pentru Investitori Români | DUBAI',
    description:
      'Ghiduri complete și fundamentate juridic: achiziție pas cu pas, costuri reale, Golden Visa, riscuri off-plan și fiscalitate comparată România–Dubai.',
    url: 'https://dubai.cristianvaduva.com/ghiduri',
    siteName: 'DUBAI — Independent Real Estate Research',
    locale: 'ro_RO',
    type: 'website',
  },
}

const GUIDES = [
  {
    slug: 'cum-cumperi-proprietate-dubai',
    title: 'Cum Cumperi o Proprietate în Dubai din România, Pas cu Pas',
    description:
      'Ghidul complet în 12 etape esențiale: de la selecția proprietății și verificarea dezvoltatorului până la Form F (MOU), cont escrow, transfer DLD și administrare la distanță.',
    category: 'Proces & Due Diligence',
    readTime: '14 min',
    lawRef: 'Legea 7/2006 & Legea 8/2007',
    icon: Building,
  },
  {
    slug: 'costuri-achizitie-dubai',
    title: 'Costurile Cumpărării unei Proprietăți în Dubai',
    description:
      'Structura completă a taxelor: taxa DLD de 4% (Rezoluția 30/2013), onorarii trustee, taxe NOC, comisioane și service charges anuale fără costuri ascunse.',
    category: 'Taxe & Buget',
    readTime: '10 min',
    lawRef: 'Exec. Council Res. 30/2013',
    icon: Coins,
  },
  {
    slug: 'golden-visa-uae',
    title: 'Viza de Rezidență Imobiliară UAE: Ghid în Limba Română',
    description:
      'Condițiile oficiale conform Cabinet Resolution No. 65/2022 și portalului Guvernului EAU (u.ae): durata de 5 ani reînnoibilă pentru investiții imobiliare de minimum AED 2M, distincția față de investițiile publice (10 ani) și procedura DLD.',
    category: 'Rezidență',
    readTime: '9 min',
    lawRef: 'Cabinet Res. 65/2022 & u.ae',
    icon: FileCheck2,
  },
  {
    slug: 'impozitare-romania-dubai',
    title: 'Impozitarea Proprietăților din Dubai pentru Rezidenții Fiscali Români',
    description:
      'Analiză juridică și fiscală: aplicarea Convenției de evitare a dublei impuneri (Legea nr. 74/1993, semnată la 11 aprilie 1993), Codul Fiscal 227/2015, Declarația Unică ANAF și statutul rezidenței fiscale.',
    category: 'Fiscalitate & Reglementare',
    readTime: '12 min',
    lawRef: 'Legea 74/1993 & Codul Fiscal',
    icon: BadgePercent,
  },
  {
    slug: 'dubai-vs-bucuresti',
    title: 'Dubai vs București: Randament Net, Riscuri și Costuri Reale',
    description:
      'Comparație obiectivă între cele două piețe: randamente brute vs nete, grad de ocupare, costuri de administrare, risc valutar și lichiditate pe termen lung.',
    category: 'Analiză Comparată',
    readTime: '13 min',
    lawRef: 'Studiu Comparativ & Modelare',
    icon: Scale,
  },
  {
    slug: 'riscuri-off-plan-dubai',
    title: 'Riscurile Investițiilor Off-Plan în Dubai și Protecția Escrow',
    description:
      'Analiza riscurilor de întârziere, execuție și lichiditate. Cum funcționează contul escrow sub Legea nr. 8/2007 și ce verificări contractuale sunt obligatorii.',
    category: 'Managementul Riscului',
    readTime: '11 min',
    lawRef: 'Legea 8/2007 (Escrow Account Law)',
    icon: AlertTriangle,
  },
  {
    slug: 'verificare-broker-anunt-dubai',
    title: 'Cum Verifici un Broker și un Anunț Imobiliar în Dubai',
    description:
      'Ghid pas cu pas pe portalurile oficiale DLD și Dubai REST: verificarea BRN, ORN, licenței comerciale, codului QR Trakheesi și a autorizării de promovare.',
    category: 'Verificare & Securitate',
    readTime: '8 min',
    lawRef: 'Reglementări RERA & Trakheesi',
    icon: ShieldCheck,
  },
]

export default function GhiduriHubPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="border-b border-slate-200 bg-slate-50/70 pt-16 pb-14 sm:pt-20 sm:pb-18">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">

          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-white border border-slate-200 text-slate-900 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 text-emerald-700" />
                <span>INVESTOR RESEARCH HUB &bull; ROMÂNIA</span>
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono">
              <span>Sursa datelor: DLD &bull; RERA &bull; ANAF</span>
              <span>&bull;</span>
              <span>Revizuit: Octombrie 2026</span>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-slate-950 font-serif">
              Ghiduri Imobiliare Dubai<br />
              <span className="font-serif italic font-normal text-slate-800">
                pentru investitorii din România.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
              Cercetare independentă, fundamentare juridică și analize tehnice menite să elimine promisiunile nerealiste din piață. Înțelege cadrul legal al Emiratului Dubai, costurile reale de tranzacționare și tratamentul fiscal conform legislației române și internaționale.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-3 bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase block font-semibold">TAXĂ TRANSFER DLD</span>
              <span className="text-slate-950 font-bold text-sm">4.00% Fix</span>
              <span className="text-[10px] text-slate-500 block">Rezoluția 30/2013</span>
            </div>
            <div className="p-3 bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase block font-semibold">PRAG GOLDEN VISA</span>
              <span className="text-slate-950 font-bold text-sm">&ge; 2.000.000 AED</span>
              <span className="text-[10px] text-slate-500 block">Cabinet Res. 65/2022</span>
            </div>
            <div className="p-3 bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase block font-semibold">TRATAT FISCAL RO-UAE</span>
              <span className="text-slate-950 font-bold text-sm">Legea nr. 74/1993</span>
              <span className="text-[10px] text-slate-500 block">Ratificare Convenție</span>
            </div>
            <div className="p-3 bg-white border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-400 uppercase block font-semibold">PROTECȚIE ESCROW</span>
              <span className="text-slate-950 font-bold text-sm">Cont Fiduciar RERA</span>
              <span className="text-[10px] text-slate-500 block">Eliberare pe etape (L. 8/2007)</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. GUIDES GRID */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-14 sm:py-20 space-y-12 flex-1">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
              CATALOG EDITORIAL &bull; 7 MODULE TEMATICE
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
              Resurse Fundamentate pentru Decizii Corecte
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Toate ghidurile includ referințe legislative verificabile
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GUIDES.map((guide, idx) => {
            const Icon = guide.icon
            return (
              <article
                key={guide.slug}
                className="group flex flex-col justify-between p-7 bg-white border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                      MODUL 0{idx + 1} &bull; {guide.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{guide.readTime} lectură</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-50 border border-slate-200 text-slate-900 group-hover:bg-slate-950 group-hover:text-white transition-colors shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-800 font-semibold block truncate">
                      {guide.lawRef}
                    </span>
                  </div>

                  <h3 className="text-xl font-light text-slate-950 group-hover:text-slate-700 font-serif leading-snug transition-colors">
                    <Link href={`/ghiduri/${guide.slug}`}>
                      {guide.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {guide.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 text-[10px] uppercase">Ghid Editorial</span>
                  <Link
                    href={`/ghiduri/${guide.slug}`}
                    className="inline-flex items-center gap-1.5 text-slate-950 font-bold group-hover:translate-x-1 transition-transform"
                  >
                    <span>Citește Ghidul</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* 3. ADDITIONAL SERVICES STRIP (VIEWINGS, REPORT, NEWSLETTER) */}
        <section className="pt-10 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          <Link
            href="/raport-trimestrial"
            className="p-6 bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-white transition-all space-y-2 block group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-slate-500">RAPORT TRIMESTRIAL</span>
              <TrendingUp className="h-4 w-4 text-[#c9a962]" />
            </div>
            <h4 className="text-sm font-bold text-slate-950 group-hover:text-slate-700">
              Dubai Property Market Monitor &rarr;
            </h4>
            <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
              Analiză factuală pe volume, tranzacții înregistrate la DLD și indici de chirie RERA pentru investitorii din România.
            </p>
          </Link>

          <Link
            href="/vizionari"
            className="p-6 bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-white transition-all space-y-2 block group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-slate-500">PROGRAMARE VIZIONĂRI</span>
              <Building className="h-4 w-4 text-slate-800" />
            </div>
            <h4 className="text-sm font-bold text-slate-950 group-hover:text-slate-700">
              Vizionări prin Parteneri Autorizați &rarr;
            </h4>
            <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
              Protocol transparent: solicitările sunt transmise către profesioniști licențiați RERA numai după confirmare.
            </p>
          </Link>

          <Link
            href="/newsletter"
            className="p-6 bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-white transition-all space-y-2 block group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-slate-500">NEWSLETTER LUNAR</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-700" />
            </div>
            <h4 className="text-sm font-bold text-slate-950 group-hover:text-slate-700">
              Abonare Analize &amp; Legislație &rarr;
            </h4>
            <p className="text-[11px] text-slate-600 font-sans leading-relaxed">
              Rezumat lunar cu schimbări legislative, ghiduri noi și alerte de piață, fără promovare agresivă.
            </p>
          </Link>
        </section>

        {/* 4. MANDATORY DISCLAIMER */}
        <section className="p-6 bg-slate-50 border border-slate-200 text-slate-600 font-mono text-[11px] leading-relaxed space-y-2">
          <div className="font-bold uppercase tracking-wider text-slate-900">
            AVIZ DE CONFORMITATE &bull; STATUT EDITORIAL INDEPENDENT
          </div>
          <p>
            DUBAI este o platformă independentă de cercetare și informare imobiliară. Publicarea unui proiect sau a unei proprietăți nu implică existența unui mandat de vânzare, a unei relații de reprezentare ori a unei verificări independente a fiecărei informații. Pentru tranzacții, vizionări și servicii reglementate, utilizatorii vor fi îndrumați către profesioniști și parteneri autorizați, după confirmarea disponibilității și a statutului acestora.
          </p>
        </section>

      </main>

    </div>
  )
}
