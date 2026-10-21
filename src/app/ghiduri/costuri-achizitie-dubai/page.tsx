import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Coins,
  Receipt,
  Building,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Costurile Cumpărării unei Proprietăți în Dubai | Ghid Taxe DLD 2026',
  description:
    'Ghid complet al taxelor de achiziție în Dubai: taxa DLD de 4% (Rezoluția 30/2013), onorarii trustee, taxe NOC, comisioane și costuri anuale de mentenanță (Service Charges).',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/ghiduri/costuri-achizitie-dubai',
  },
  openGraph: {
    title: 'Costurile Cumpărării unei Proprietăți în Dubai | DUBAI',
    description:
      'Structura detaliată a costurilor de tranzacție imobiliară în Dubai: taxe guvernamentale DLD, taxe trustee, NOC, comision agenție și costuri recurente.',
    url: 'https://dubai.cristianvaduva.com/ghiduri/costuri-achizitie-dubai',
    siteName: 'DUBAI — Independent Real Estate Research',
    locale: 'ro_RO',
    type: 'article',
  },
}

export default function CosturiAchizitieDubaiPage() {
  return (
    <article className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">

      {/* 1. TOP BREADCRUMB */}
      <div className="border-b border-slate-200 bg-slate-50/70 py-3.5">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 flex items-center justify-between font-mono text-xs">
          <Link
            href="/ghiduri"
            className="inline-flex items-center gap-2 uppercase tracking-wider text-slate-600 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Înapoi la Hub Ghiduri RO</span>
          </Link>
          <span className="text-[10px] text-slate-500 font-semibold uppercase">
            Ghid Financiar &bull; Modul 02
          </span>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-800 font-semibold uppercase">
              Taxe &amp; Bugetare
            </span>
            <span>&bull;</span>
            <span>Timp lectură: 10 minute</span>
            <span>&bull;</span>
            <span>Ultima revizuire: Octombrie 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-slate-950 font-serif tracking-tight leading-tight max-w-4xl">
            Costurile cumpărării unei proprietăți în Dubai
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
            O analiză transparentă și detaliată a taxelor guvernamentale, onorariilor administrative și cheltuielilor recurente asociate unei tranzacții imobiliare în Dubai, fără costuri ascunse.
          </p>

          <div className="p-4 bg-slate-50 border-l-2 border-slate-900 text-xs font-mono text-slate-700 leading-relaxed">
            <strong>Baza legală:</strong> Tarifele oficiale DLD sunt reglementate prin <em>Executive Council Resolution No. 30 of 2013</em>. Cumpărătorul trebuie să ia în calcul un supliment de aproximativ <strong>6.5% – 7.5%</strong> peste valoarea tranzacției pentru acoperirea taxelor de închidere.
          </div>
        </div>
      </header>

      {/* 3. MAIN CONTENT */}
      <main className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-12 text-slate-800 font-sans leading-relaxed text-sm sm:text-base">

        {/* SECTION 1: DLD 4% TRANSFER FEE */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Coins className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              1. Taxa Oficială DLD de Transfer (4.00%)
            </h2>
          </div>
          <p>
            Taxa principală percepută de <strong>Dubai Land Department (DLD)</strong> pentru înregistrarea transferului dreptului de proprietate este de <strong>4.00%</strong> din valoarea contractuală a imobilului (sau valoarea evaluată de DLD dacă aceasta este mai mare).
          </p>
          <div className="p-5 bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
            <span className="font-bold text-slate-900 block uppercase text-[11px]">
              REGLEMENTARE JURIDICĂ: EXEC. COUNCIL RES. NO. 30/2013
            </span>
            <p className="text-slate-700 font-sans">
              Legea prevede că taxa de 4% poate fi împărțită egal (2% cumpărător / 2% vânzător), cu excepția cazului în care părțile convin altfel. În practica curentă de piață a Emiratului Dubai, <strong>cumpărătorul suportă integral taxa de 4%</strong>, atât pentru achiziții noi (off-plan de la dezvoltator), cât și pe piața secundară (resale).
            </p>
            <div className="pt-2 text-[10px] text-slate-500">
              La această taxă se adaugă taxa administrativă DLD Knowledge Fee (AED 10) și Innovation Fee (AED 10).
            </div>
          </div>
        </section>

        {/* SECTION 2: TRUSTEE REGISTRATION FEES */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Receipt className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              2. Taxe de Înregistrare Trustee (Registration Trustee Fee)
            </h2>
          </div>
          <p>
            Pentru proprietățile finalizate (ready), tranzacțiile nu se mai perfectează la ghișeele centrale DLD, ci prin birourile autorizate de înregistrare (<em>Trustee Registration Offices</em>). Onorariul este stabilit prin grilă oficială fixă:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-1">
            <div className="p-4 bg-white border border-slate-200 space-y-1">
              <span className="text-slate-500 uppercase block text-[10px]">Proprietăți &ge; AED 500.000</span>
              <span className="text-slate-950 font-bold text-base">AED 4.000 + 5% TVA</span>
              <p className="text-slate-600 font-sans text-xs">Total: AED 4.200 achitat la biroul trustee în momentul transferului.</p>
            </div>
            <div className="p-4 bg-white border border-slate-200 space-y-1">
              <span className="text-slate-500 uppercase block text-[10px]">Proprietăți &lt; AED 500.000</span>
              <span className="text-slate-950 font-bold text-base">AED 2.000 + 5% TVA</span>
              <p className="text-slate-600 font-sans text-xs">Total: AED 2.100 pentru garsoniere sau unități compacte sub prag.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: NOC (NO OBJECTION CERTIFICATE) */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Building className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              3. Certificatul NOC Emis de Dezvoltator
            </h2>
          </div>
          <p>
            La revânzarea unei proprietăți pe piața secundară, dezvoltatorul proiectului (ex: Emaar, Nakheel, Sobha, Meraas) trebuie să elibereze un certificat de neobiecțiune (<em>No Objection Certificate - NOC</em>). Acesta atestă că vânzătorul nu are restanțe la cheltuielile de întreținere sau încălcări ale regulamentului clădirii.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li><strong>Cost orientativ:</strong> între AED 500 și AED 5.000 + TVA (stabilit de fiecare dezvoltator).</li>
            <li><strong>Timp de emitere:</strong> între 2 și 7 zile lucrătoare (există și proceduri urgente contra cost).</li>
            <li><strong>Cine suportă:</strong> conform uzanțelor, vânzătorul achită NOC-ul, dar părțile pot stabili altfel prin contractul MOU.</li>
          </ul>
        </section>

        {/* SECTION 4: BROKERAGE COMMISSIONS */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Coins className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              4. Comisioanele de Brokeraj Imobiliar
            </h2>
          </div>
          <p>
            Regimul comisioanelor diferă substanțial între tipurile de achiziție:
          </p>
          <div className="divide-y divide-slate-200 border border-slate-200 bg-white font-mono text-xs">
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-slate-900 block">Off-Plan Direct de la Dezvoltator</span>
                <span className="text-slate-500 font-sans">Unități noi achiziționate în faza de lansare sau construcție</span>
              </div>
              <span className="text-emerald-800 font-bold sm:text-right">0% Comision Cumpărător (achitat de dezvoltator)</span>
            </div>
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-slate-900 block">Piața Secundară (Resale)</span>
                <span className="text-slate-500 font-sans">Proprietăți finalizate tranzacționate prin agenție</span>
              </div>
              <span className="text-slate-950 font-bold sm:text-right">2.00% + 5% TVA din valoarea tranzacției</span>
            </div>
          </div>
        </section>

        {/* SECTION 5: OFF-PLAN SPECIFICS (OQOOD) */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Receipt className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              5. Costuri Specifice Proprietăților Off-Plan (Oqood)
            </h2>
          </div>
          <p>
            Pentru imobilele cumpărate în stadiu de proiect, DLD nu emite un Title Deed imediat, ci un document de pre-înregistrare denumit <strong>Oqood</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li><strong>Taxa DLD Oqood:</strong> 4% din prețul de achiziție, plătită de regulă la semnarea contractului inițial.</li>
            <li><strong>Taxa administrativă de emitere Oqood:</strong> AED 1.000 – AED 3.000 + TVA.</li>
            <li>La recepția finală (handover), Oqood-ul se convertește automat în Title Deed final, plătindu-se doar taxa de emitere de aprox. AED 250 – 580.</li>
          </ul>
        </section>

        {/* SECTION 6: FINANCING / MORTGAGE COSTS */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Coins className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              6. Costuri Suplimentare în Cazul Finanțării Ipotecare
            </h2>
          </div>
          <p>
            Dacă achiziția se realizează printr-un credit ipotecar acordat de o bancă licențiată din UAE (băncile din Dubai oferă credite nerezidenților cu un avans uzual de 40%–50%):
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li><strong>Taxa DLD de înregistrare a ipotecii:</strong> 0.25% din valoarea creditului + AED 290.</li>
            <li><strong>Taxa de procesare a băncii (Bank Arrangement Fee):</strong> de regulă 1.00% + TVA din valoarea împrumutului.</li>
            <li><strong>Raportul de evaluare bancară a imobilului (Valuation Fee):</strong> AED 2.500 – AED 3.500 + TVA.</li>
          </ul>
        </section>

        {/* SECTION 7: RECURRING SERVICE CHARGES */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Building className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              7. Costuri Recurente: Mentenanța (Service Charges)
            </h2>
          </div>
          <p>
            În Dubai, proprietarii achită anual cheltuieli de administrare a clădirii către asociația de proprietari (Owners Association Management), reglementate prin indicele <strong>RERA Service Charge Index</strong>.
          </p>
          <div className="p-5 bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-600">Interval Comun de Piață:</span>
              <span className="text-slate-950 font-bold">AED 12 – AED 35 / sq ft anual</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-600">Clădiri Ultra-Lux / Branded Residences:</span>
              <span className="text-slate-950 font-bold">AED 40 – AED 70+ / sq ft anual</span>
            </div>
            <p className="text-slate-600 font-sans text-xs pt-1">
              Exemplu: Pentru un apartament de 1.000 sq ft (aprox. 93 mp) cu un service charge de AED 20/sq ft, costul anual de mentenanță este de AED 20.000 (aprox. 5.000 EUR), incluzând paza, piscina, sala de fitness, mentenanța fațadei și fondul de rezervă (sinking fund).
            </p>
          </div>
        </section>

        {/* SECTION 8: TOTAL SUMMARY FORMULA */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Receipt className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              8. Formula Sintetică a Bugetului de Achiziție
            </h2>
          </div>
          <div className="p-6 bg-slate-950 text-white font-mono text-xs space-y-4">
            <span className="text-[#c9a962] font-bold uppercase tracking-widest block text-[11px]">
              TOTAL ESTIMATIV COSTURI TRANZACȚIE PE PIAȚA SECUNDARĂ (RESALE)
            </span>
            <div className="space-y-2 border-y border-white/10 py-3 font-mono">
              <div className="flex justify-between">
                <span>DLD Transfer Tariff</span>
                <span className="text-slate-300">4.00%</span>
              </div>
              <div className="flex justify-between">
                <span>Registration Trustee Fee</span>
                <span className="text-slate-300">AED 4.200 fix (cu TVA)</span>
              </div>
              <div className="flex justify-between">
                <span>Certificat Title Deed &amp; Map</span>
                <span className="text-slate-300">AED 580 fix</span>
              </div>
              <div className="flex justify-between">
                <span>NOC Fee (Dezvoltator)</span>
                <span className="text-slate-300">AED 1.000 – AED 3.000</span>
              </div>
              <div className="flex justify-between">
                <span>Agency Commission (Brokerage)</span>
                <span className="text-slate-300">2.00% + 5% TVA (2.10%)</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-sm text-[#c9a962]">
              <span>TOTAL MEDIU ESTIMATIV PESTE PREȚ:</span>
              <span>~6.5% – 7.2%</span>
            </div>
            <p className="text-slate-400 font-sans text-xs">
              Pentru proprietăți off-plan de la dezvoltator (unde comisionul de agenție este suportat de vânzător), totalul costurilor inițiale este de aprox. <strong>4.2% – 4.5%</strong>.
            </p>
          </div>
        </section>

        {/* NAVIGATION / CTA */}
        <section className="pt-8 border-t border-slate-200 flex flex-wrap gap-4 font-mono text-xs">
          <Link
            href="/ghiduri/cum-cumperi-proprietate-dubai"
            className="px-5 py-3 bg-slate-950 hover:bg-slate-800 text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Ghidul Pas cu Pas</span>
          </Link>
          <Link
            href="/ghiduri/golden-visa-uae"
            className="px-5 py-3 border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 transition-colors flex items-center gap-2"
          >
            <span>Ghid Golden Visa UAE</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </section>

        {/* DISCLAIMER */}
        <section className="p-6 bg-slate-100/70 border border-slate-200 text-slate-600 font-mono text-[11px] leading-relaxed space-y-2">
          <div className="font-bold uppercase tracking-wider text-slate-900">
            AVIZ DE CONFORMITATE ȘI STATUT EDITORIAL INDEPENDENT
          </div>
          <p>
            DUBAI este o platformă independentă de cercetare și informare imobiliară. Publicarea unui proiect sau a unei proprietăți nu implică existența unui mandat de vânzare, a unei relații de reprezentare ori a unei verificări independente a fiecărei informații. Pentru tranzacții, vizionări și servicii reglementate, utilizatorii vor fi îndrumați către profesioniști și parteneri autorizați, după confirmarea disponibilității și a statutului acestora.
          </p>
        </section>

      </main>
    </article>
  )
}
