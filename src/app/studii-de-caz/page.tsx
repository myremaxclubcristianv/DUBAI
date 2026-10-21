import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FileSearch,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Lock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Studii de Caz & Transaction Insights | Metodologie de Analiză DUBAI',
  description:
    'Secțiunea editorială Transaction Insights: metodologia riguroasă și cadrul de publicare pentru studii de caz anonimizate bazate pe tranzacții reale în Dubai.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/studii-de-caz',
  },
  openGraph: {
    title: 'Studii de Caz & Transaction Insights | DUBAI',
    description:
      'Metodologie de analiză tranzacțională independentă: cum documentăm, anonimizăm și evaluăm tranzacțiile imobiliare reale fără date fabricate.',
    url: 'https://dubai.cristianvaduva.com/studii-de-caz',
    siteName: 'DUBAI — Independent Real Estate Research',
    locale: 'ro_RO',
    type: 'website',
  },
}

export default function StudiiDeCazPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-950 selection:bg-slate-900 selection:text-white">

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
            Metodologie Editorială
          </span>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-slate-900 text-white font-mono text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <FileSearch className="h-3 w-3 text-[#c9a962]" />
              <span>TRANSACTION INSIGHTS &bull; CADRU EDITORIAL</span>
            </span>
            <span className="text-xs font-mono text-slate-500">Politica privind studiile de caz reale</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-slate-950 font-serif tracking-tight leading-tight max-w-4xl">
            Metodologia analizelor tranzacționale anonimizate
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
            De ce refuzăm să inventăm studii de caz fictive sau testimoniale anonime nesusținute. Cum documentăm, audităm și anonimizăm tranzacțiile reale înainte de publicare.
          </p>
        </div>
      </header>

      {/* 3. MAIN CONTENT */}
      <main className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-16 flex-1 text-slate-800">

        {/* Policy Declaration */}
        <section className="p-6 sm:p-8 bg-slate-50 border border-slate-200 space-y-3 font-mono text-xs leading-relaxed">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
            <ShieldCheck className="h-5 w-5 text-emerald-700 shrink-0" />
            <span>REGULA EDITORIALĂ FUNDAMENTALĂ: ZERO CAZURI INVENTATE</span>
          </div>
          <p className="font-sans text-slate-700 text-xs sm:text-sm">
            Pe piața imobiliară din Dubai abundă „studiile de caz” promoționale cu povești de succes fabricate, randamente inventate de 15% net și testimoniale nesusținute de acte. <strong>Politica platformei DUBAI interzice strict publicarea oricărui studiu de caz fictiv.</strong>
          </p>
          <p className="font-sans text-slate-600 text-xs">
            Un studiu de caz va fi publicat în această secțiune exclusiv atunci când există documente justificative complete (contracte încheiate, Title Deed, chitanțe oficiale de transfer DLD) și acordul expres scris de anonimizare semnat de părțile implicate.
          </p>
        </section>

        {/* 4-Pillar Evaluation Protocol */}
        <section className="space-y-6">
          <div className="space-y-1 border-b border-slate-200 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
              PROTOCOLE EDITORIALE DE AUDIT
            </span>
            <h2 className="text-2xl font-light text-slate-950 font-serif">
              Ce Conține un Studiu de Caz Publicat de DUBAI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            <div className="p-6 bg-white border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block font-sans text-sm">
                1. Bilanț Financiar Integral (Inflows &amp; Outflows)
              </span>
              <p className="text-slate-600 font-sans text-xs leading-relaxed">
                Nu doar prețul de achiziție și chiria brută, ci defalcarea completă: taxa DLD de 4%, trustee fee, NOC, cheltuieli de mobilare, comision de property management, cheltuieli de mentenanță (Service Charges) și impozite declarate la ANAF.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block font-sans text-sm">
                2. Verificarea Cronologiei și a Întârzierilor
              </span>
              <p className="text-slate-600 font-sans text-xs leading-relaxed">
                Pentru achizițiile off-plan, analiza datei promise în contractul inițial comparativ cu data efectivă de emitere a Title Deed-ului, evidențiind lecțiile practice învățate din eventualele perioade de grație.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block font-sans text-sm">
                3. Protecția Deplină a Datelor (Anonimizare GDPR)
              </span>
              <p className="text-slate-600 font-sans text-xs leading-relaxed">
                Eliminarea tuturor elementelor de identificare personală: nume, număr de unitate specifică din clădire, număr de pașaport sau cont bancar, păstrând doar tipologia de activ, districtul și cifrele financiare auditate.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block font-sans text-sm">
                4. Analiza Riscurilor și a Lecțiilor Practice
              </span>
              <p className="text-slate-600 font-sans text-xs leading-relaxed">
                Fiecare analiză include nu doar ceea ce a mers bine, ci și provocările întâmpinate: bănci locale, deschiderea contului de utilități DEWA, dispute de mentenanță sau schimbări legislative neprevăzute.
              </p>
            </div>
          </div>
        </section>

        {/* Status of Section */}
        <section className="p-6 bg-slate-50 border border-slate-200 font-mono text-xs space-y-3">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <Lock className="h-4 w-4 text-slate-700" />
            <span>STATUT CURENT AL SECȚIUNII: ÎN CURS DE REVIZUIRE ȘI ANONIMIZARE</span>
          </div>
          <p className="font-sans text-slate-600 text-xs leading-relaxed">
            Echipa noastră de cercetare lucrează la redactarea primelor dosare tranzacționale anonimizate realizate de investitori români pe piața din Dubai. Studiile vor fi publicate treptat, după finalizarea auditului documentar și semnarea acordurilor de confidențialitate.
          </p>
        </section>

        {/* CTA to Guides */}
        <section className="pt-8 border-t border-slate-200 flex flex-wrap gap-4 font-mono text-xs">
          <Link
            href="/ghiduri/cum-cumperi-proprietate-dubai"
            className="px-5 py-3 bg-slate-950 hover:bg-slate-800 text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Ghidul de Achiziție Pas cu Pas</span>
          </Link>
          <Link
            href="/raport-trimestrial"
            className="px-5 py-3 border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 transition-colors flex items-center gap-2"
          >
            <span>Vezi Raportul Trimestrial DLD</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </section>

        {/* 4. MANDATORY DISCLAIMER */}
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
