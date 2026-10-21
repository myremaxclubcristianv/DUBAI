import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ExternalLink,
  BarChart3,
  AlertCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dubai Property Market Monitor — România | Raport Trimestrial DLD 2026',
  description:
    'Monitorul trimestrial al pieței imobiliare din Dubai pentru investitorii români: date oficiale DLD, volume de tranzacții, indici RERA, analiză factuală și metodologie deschisă.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/raport-trimestrial',
  },
  openGraph: {
    title: 'Dubai Property Market Monitor — România | DUBAI',
    description:
      'Raport trimestrial independent bazat exclusiv pe registrele deschise Dubai Land Department (DLD): date oficiale, volume, chirii și interpretare prudentă.',
    url: 'https://dubai.cristianvaduva.com/raport-trimestrial',
    siteName: 'DUBAI — Independent Real Estate Research',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function RaportTrimestrialPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">

      {/* 1. TOP BREADCRUMB */}
      <div className="border-b border-slate-200 bg-slate-50/70 py-3.5">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-10 lg:px-16 flex items-center justify-between font-mono text-xs">
          <Link
            href="/ghiduri"
            className="inline-flex items-center gap-2 uppercase tracking-wider text-slate-600 hover:text-slate-950 transition-colors"
          >
            <span className="text-slate-400">&larr;</span>
            <span>Înapoi la Hub Ghiduri RO</span>
          </Link>
          <span className="text-[10px] text-slate-500 font-semibold uppercase">
            Cercetare Trimestrială &bull; Seria 2026
          </span>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-slate-900 text-white font-semibold uppercase tracking-widest text-[10px] flex items-center gap-1.5">
                <BarChart3 className="h-3 w-3 text-[#c9a962]" />
                <span>MONITOR OFICIAL DE PIAȚĂ</span>
              </span>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-700 uppercase font-semibold text-[10px]">
                Ediția Q1–Q3 2026
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono">
              <span>Sursă date: Dubai Land Department (Open Data)</span>
              <span>&bull;</span>
              <span>Accesat: Octombrie 2026</span>
            </div>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-light text-slate-950 font-serif tracking-tight leading-tight">
              Dubai Property Market Monitor<br />
              <span className="font-serif italic font-normal text-slate-800">
                pentru investitorii români.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
              Publicație trimestrială de cercetare imobiliară independentă. Analizăm datele oficiale publicate de Dubai Land Department (DLD), separând faptele verificate de speculațiile promoționale din piață.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase block font-semibold">SURSA PRIMARĂ</span>
              <span className="text-slate-950 font-bold text-sm">DLD Open Data</span>
              <span className="text-[10px] text-slate-500 block">Registru electronic public</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase block font-semibold">SEGMENT ACOPERIT</span>
              <span className="text-slate-950 font-bold text-sm">Freehold Residential</span>
              <span className="text-[10px] text-slate-500 block">Zone deschise cetățenilor străini</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase block font-semibold">METRICĂ CHIRII</span>
              <span className="text-slate-950 font-bold text-sm">RERA Ejari Index</span>
              <span className="text-[10px] text-slate-500 block">Contracte oficiale înregistrate</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-[10px] text-slate-500 uppercase block font-semibold">PERIODICITATE</span>
              <span className="text-slate-950 font-bold text-sm">Trimestrială</span>
              <span className="text-[10px] text-slate-500 block">Actualizare la final de ciclu</span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. CURRENT EDITION DOSSIER */}
      <main className="w-full max-w-[1280px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-16 flex-1 text-slate-800">

        {/* SECTION 1: EXECUTIVE EDITORIAL SUMMARY */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
                ANALIZĂ EDITORIALĂ &bull; EDIȚIA ÎN VIGOARE
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
                Sinteza Trimestrială: Între Cerere Susținută și Aflux de Oferte Noi
              </h2>
            </div>
            <a
              href="https://dubailand.gov.ae/en/open-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 hover:text-slate-950 underline"
            >
              <span>Accesează DLD Open Data</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 font-light">
              <p>
                Piața imobiliară din Dubai a continuat să înregistreze volume ridicate de tranzacții în primele trei trimestre ale anului 2026, susținută de fluxurile constante de capital internațional, stabilitatea monedei ancorate la dolarul american (3.6725 AED/USD) și atractivitatea programului UAE Golden Visa (pragul de 2.000.000 AED reglementat prin <em>Cabinet Resolution No. 65/2022</em>).
              </p>
              <p>
                Totuși, o privire riguroasă dincolo de titlurile de presă relevă <strong>o bifurcare clară a pieței</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 font-sans">
                <li>
                  <strong>Segmentul Prime consacrat (Palm Jumeirah, Downtown Dubai, Dubai Marina):</strong> Se caracterizează printr-o ofertă fizică strict limitată și o rezistență ridicată a prețurilor, cu tranzacții conduse predominant de utilizatori finali sau investitori de capital pe termen lung.
                </li>
                <li>
                  <strong>Segmentul Suburban și Noile Dezvoltări Master (Jumeirah Village Circle, Dubai South, Dubailand):</strong> Înregistrează cel mai mare volum de tranzacții off-plan, însă investitorii trebuie să monitorizeze cu atenție numărul uriaș de unități programate pentru predare în intervalul 2026–2028, care poate pune presiune pe nivelul chiriilor viitoare.
                </li>
              </ul>
              <p className="text-xs font-mono text-slate-500 pt-2">
                Clarificare metodologică: Indicele oficial RERA Ejari urmărește exclusiv nivelul și evoluția chiriilor contractuale (baremul Decretului nr. 43 din 2013), nu randamentul net al unei investiții. Randamentul net nu constituie un indice macroeconomic generalizat publicat de autorități, ci rezultatul unui calcul financiar individual (Venit Net din Exploatare raportat la Costul Total de Achiziție), influențat direct de taxa de mentenanță (Service Charges aprobate prin Mollak, uzual AED 15–35+/sqft) și cheltuielile de administrare.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-6 space-y-4 font-mono text-xs">
              <span className="font-bold text-slate-900 block uppercase border-b border-slate-200 pb-2">
                PARAMETRII DE REVIZUIRE AI MONITORULUI
              </span>
              <div className="space-y-2 text-[11px] text-slate-600">
                <div className="flex justify-between">
                  <span>Autoritate Sursă:</span>
                  <span className="text-slate-950 font-bold">DLD / RERA</span>
                </div>
                <div className="flex justify-between">
                  <span>Arie Teritorială:</span>
                  <span className="text-slate-950 font-bold">Emiratul Dubai</span>
                </div>
                <div className="flex justify-between">
                  <span>Valută de Raportare:</span>
                  <span className="text-slate-950 font-bold">AED / EUR</span>
                </div>
                <div className="flex justify-between">
                  <span>Verificare Metodologică:</span>
                  <span className="text-emerald-800 font-bold">Independentă</span>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200 text-[10px] text-slate-500 font-sans leading-relaxed">
                Platforma DUBAI nu inventează proiecții sau procente. Orice indicator care nu poate fi verificat în rapoartele primare este exclus sau marcat drept „Indisponibil temporar”.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: OFFICIAL METRICS SCHEDULE */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
              TABEL METRICI &bull; DATE OFICIALE VERIFICATE
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-950 font-serif">
              Indicatori Monitorizați și Surse Statutare
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200 font-mono text-xs">
            <table className="w-full text-left">
              <thead className="bg-slate-100 border-b border-slate-200 text-slate-900">
                <tr>
                  <th className="p-3.5 uppercase">Indicator Monitorizat</th>
                  <th className="p-3.5 uppercase">Valoare de Referință</th>
                  <th className="p-3.5 uppercase">Sursă Primară &amp; Bază Legală</th>
                  <th className="p-3.5 uppercase">Statut Verificare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-sans">
                <tr>
                  <td className="p-3.5 font-mono font-semibold">Taxă de transfer DLD</td>
                  <td className="p-3.5 font-mono font-bold text-slate-950">4.00% fix</td>
                  <td className="p-3.5">Exec. Council Res. No. 30 of 2013</td>
                  <td className="p-3.5 font-mono text-emerald-800 font-bold">Verificat Octombrie 2026</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-mono font-semibold">Curs de schimb USD / AED</td>
                  <td className="p-3.5 font-mono font-bold text-slate-950">3.6725 (Fix)</td>
                  <td className="p-3.5">Banca Centrală a EAU (CBUAE)</td>
                  <td className="p-3.5 font-mono text-emerald-800 font-bold">Peg Oficial din 1997</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-mono font-semibold">Prag investiție Golden Visa</td>
                  <td className="p-3.5 font-mono font-bold text-slate-950">&ge; AED 2.000.000</td>
                  <td className="p-3.5">Cabinet Resolution No. 65 of 2022</td>
                  <td className="p-3.5 font-mono text-emerald-800 font-bold">Confirmat GDRFA / DLD</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-mono font-semibold">Indice anual chirii rezidențiale</td>
                  <td className="p-3.5 font-mono">Conform calculatorului RERA</td>
                  <td className="p-3.5">RERA Rental Calculator (Decree No. 43 of 2013)</td>
                  <td className="p-3.5 font-mono text-slate-700 font-bold">Actualizat dinamic DLD</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-mono font-semibold">Mentenanță (Service Charge Index)</td>
                  <td className="p-3.5 font-mono">AED 12 – AED 45+ / sqft</td>
                  <td className="p-3.5">Indicele oficial RERA Service Charges</td>
                  <td className="p-3.5 font-mono text-slate-700 font-bold">Verificat pe fiecare clădire</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-mono font-semibold">Conturi Escrow Proiecte Off-Plan</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-800">Statutar conform legii (eliberare pe etape)</td>
                  <td className="p-3.5">Legea nr. 8 din 2007 (Escrow Trust Account)</td>
                  <td className="p-3.5 font-mono text-emerald-800 font-bold">Auditat DLD Trustee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3: EDITORIAL DISCLAIMER & DATA LIMITATIONS */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <AlertCircle className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Limitările Metodologice ale Datelor
            </h2>
          </div>
          <div className="p-6 bg-slate-50 border border-slate-200 space-y-3 font-mono text-xs text-slate-700">
            <span className="font-bold text-slate-900 block uppercase">
              CE TREBUIE SĂ ȘTIE FIECARE CITITOR DESPRE STATISTICILE IMOBILIARE:
            </span>
            <ul className="space-y-2 font-sans text-xs leading-relaxed list-disc pl-5">
              <li>
                <strong>Diferența dintre volumul tranzacționat și livrarea efectivă:</strong> Tranzacțiile off-plan înregistrate la DLD prin Oqood reprezintă angajamente contractuale viitoare, nu proprietăți finalizate gata de închiriere.
              </li>
              <li>
                <strong>Prețurile de ofertă (asking price) vs prețurile reale:</strong> Prețurile publicate pe portaluri reflectă așteptările vânzătorilor, în timp ce ledger-ul DLD înregistrează exclusiv prețurile la care s-a semnat transferul.
              </li>
              <li>
                <strong>Specificul fiecărei unități:</strong> Două apartamente identice din aceeași clădire pot avea randamente substanțial diferite în funcție de etaj, vedere, orientare și calitatea amenajării interioare.
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 4: ARCHIVE / UPCOMING EDITIONS */}
        <section className="space-y-4 border-t border-slate-200 pt-10">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
                ARHIVĂ &amp; PERIODICITATE
              </span>
              <h3 className="text-xl font-light text-slate-950 font-serif">
                Ediții Planificate
              </h3>
            </div>
            <Link
              href="/newsletter"
              className="text-xs font-mono text-slate-900 font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Primește raportul pe e-mail</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 bg-white border border-slate-900 space-y-1">
              <span className="text-slate-900 font-bold block">EDIȚIA ÎN VIGOARE (2026.Q3)</span>
              <span className="text-slate-500 text-[11px] block">Publicat: Octombrie 2026</span>
              <span className="text-emerald-800 font-bold block pt-1 text-[11px]">&bull; Disponibil integral mai sus</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-1 opacity-70">
              <span className="text-slate-700 font-bold block">EDIȚIA ANTERIOARĂ (2026.Q2)</span>
              <span className="text-slate-500 text-[11px] block">Publicat: Iulie 2026</span>
              <span className="text-slate-400 block pt-1 text-[11px]">Date arhivate</span>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-1 opacity-70">
              <span className="text-slate-700 font-bold block">URMĂTOAREA EDIȚIE (2026.Q4)</span>
              <span className="text-slate-500 text-[11px] block">Disponibil: Ianuarie 2027</span>
              <span className="text-slate-400 block pt-1 text-[11px]">În curs de colectare date DLD</span>
            </div>
          </div>
        </section>

        {/* 5. MANDATORY DISCLAIMER */}
        <section className="p-6 bg-slate-100/70 border border-slate-200 text-slate-600 font-mono text-[11px] leading-relaxed space-y-2">
          <div className="font-bold uppercase tracking-wider text-slate-900">
            AVIZ DE CONFORMITATE ȘI STATUT EDITORIAL INDEPENDENT
          </div>
          <p>
            DUBAI este o platformă independentă de cercetare și informare imobiliară. Publicarea unui proiect sau a unei proprietăți nu implică existența unui mandat de vânzare, a unei relații de reprezentare ori a unei verificări independente a fiecărei informații. Pentru tranzacții, vizionări și servicii reglementate, utilizatorii vor fi îndrumați către profesioniști și parteneri autorizați, după confirmarea disponibilității și a statutului acestora.
          </p>
        </section>

      </main>

    </div>
  )
}
