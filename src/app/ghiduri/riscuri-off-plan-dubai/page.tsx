import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  FileCheck2,
  Clock,
  Coins,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Riscurile Investițiilor Off-Plan în Dubai & Contul Escrow | Ghid Legea 8/2007',
  description:
    'Ghid critic de analiză a riscurilor off-plan în Dubai: întârzieri de livrare, diferențe între broșuri și contractul SPA, funcționarea contului Escrow (Legea 8/2007) și reguli de revânzare.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/ghiduri/riscuri-off-plan-dubai',
  },
  openGraph: {
    title: 'Riscurile Investițiilor Off-Plan în Dubai și Protecția Escrow | DUBAI',
    description:
      'Analiză de risc obiectivă pentru proiectele în construcție: riscuri contractuale, garanții bancare, audit DLD și capcanele promovării agresive.',
    url: 'https://dubai.cristianvaduva.com/ghiduri/riscuri-off-plan-dubai',
    siteName: 'DUBAI — Independent Real Estate Research',
    locale: 'ro_RO',
    type: 'article',
  },
}

export default function RiscuriOffPlanDubaiPage() {
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
            Managementul Riscului &bull; Modul 06
          </span>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-800 font-semibold uppercase">
              Analiză Tehnică de Risc
            </span>
            <span>&bull;</span>
            <span>Timp lectură: 11 minute</span>
            <span>&bull;</span>
            <span>Ultima revizuire: Octombrie 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-slate-950 font-serif tracking-tight leading-tight max-w-4xl">
            Riscurile investițiilor off-plan în Dubai și protecția contului escrow
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
            Proiectele în construcție oferă planuri de plată eșalonate atractive, dar implică riscuri reale care trebuie gestionate prin verificare contractuală și monitorizare oficială RERA.
          </p>

          <div className="p-4 bg-slate-50 border-l-2 border-slate-900 text-xs font-mono text-slate-700 leading-relaxed">
            <strong>Baza legislativă de protecție:</strong> <em>Legea nr. 8 din 2007 (Escrow Account Law)</em> obligă dezvoltatorii să depună fondurile cumpărătorilor într-un cont fiduciar supus auditului DLD. Totuși, existența contului escrow nu garantează livrarea la data estimată sau absența litigiilor contractuale.
          </div>
        </div>
      </header>

      {/* 3. MAIN CONTENT */}
      <main className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-12 text-slate-800 font-sans leading-relaxed text-sm sm:text-base">

        {/* SECTION 1: THE DELAY RISK */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Clock className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              1. Riscul Întârzierii Livrării (Completion Delay)
            </h2>
          </div>
          <p>
            Întârzierea finalizării este cel mai comun risc întâlnit pe piața proiectelor off-plan la nivel mondial, inclusiv în Dubai:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>Perioada de grație contractuală (Grace Period):</strong> Aproape toate contractele de vânzare-cumpărare (SPA) conțin o clauză standard care acordă dezvoltatorului o perioadă de grație de <strong>6 până la 12 luni</strong> după data anticipată de finalizare (Anticipated Completion Date), fără ca aceasta să constituie culpă contractuală sau să dea dreptul la penalități.
            </li>
            <li>
              <strong>Impact asupra randamentului:</strong> O întârziere de 12 luni înseamnă amânarea cu un an a încasării chiriei estimate, reducând rentabilitatea anualizată a capitalului imobilizat.
            </li>
            <li>
              <strong>Cum atenuați riscul:</strong> Verificați în aplicația <em>Dubai REST</em> istoricul de livrare al dezvoltatorului și stadiul fizic auditat al construcției înainte de a semna.
            </li>
          </ul>
        </section>

        {/* SECTION 2: MARKETING VS CONTRACT SPA */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <FileCheck2 className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              2. Diferența dintre Materialele de Marketing și Contractul SPA
            </h2>
          </div>
          <p>
            Broșurile glossy, clipurile video generate pe calculator și machetele spectaculoase din showroom-uri nu au valoare juridică obligatorie decât dacă specificațiile lor sunt transpuse expres în contractul SPA (Sales and Purchase Agreement):
          </p>
          <div className="p-5 bg-amber-50/70 border border-amber-200 font-mono text-xs text-amber-950 space-y-2">
            <span className="font-bold block uppercase tracking-wider">CAPCANE FRECVENTE ÎN SPECIFICAȚIILE CONTRACTUALE</span>
            <ul className="space-y-1.5 font-sans text-slate-800 list-disc pl-5 text-xs">
              <li><strong>Clauza de variație a suprafeței (Tolerance Clause):</strong> Majoritatea contractelor permit o abatere de până la &plusmn;3% – 5% între suprafața din plan și cea măsurată fizică la predare, fără recalcularea prețului.</li>
              <li><strong>Clauza materialelor echivalente:</strong> Dezvoltatorul își rezervă adesea dreptul de a înlocui finisajele de marmură sau electrocasnicele menționate în broșură cu produse „de calitate similară”, dacă furnizorul inițial nu poate livra.</li>
              <li><strong>Modificarea facilităților comune:</strong> Spațiile verzi, numărul de piscine sau magazinele din complex pot suferi modificări de proiectare pe parcursul autorizărilor municipale.</li>
            </ul>
          </div>
        </section>

        {/* SECTION 3: HOW ESCROW WORKS (LAW 8/2007) */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <ShieldCheck className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              3. Mecanismul de Protecție al Contului Escrow (Legea nr. 8/2007)
            </h2>
          </div>
          <p>
            Pentru a proteja investitorii împotriva dezvoltatorilor insolvenți sau a deturnării de fonduri, Emiratul Dubai a adoptat <em>Legea nr. 8 din 2007</em>. Conform legii:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Fiecare proiect off-plan autorizat are un <strong>cont bancar Escrow individual</strong> deschis la o bancă acreditată de DLD.</li>
            <li>Toate plățile efectuate de cumpărători trebuie virate <strong>exclusiv în acest cont Escrow</strong>. Banii nu ajung în contul curent al dezvoltatorului.</li>
            <li>Dezvoltatorul nu poate retrage bani din contul escrow după bunul plac. Fondurile se eliberează în tranșe strictly corelate cu progresul fizic al lucrărilor, certificat pe teren de inginerii și auditorii independenți numiți de DLD.</li>
            <li>O cotă de <strong>5% din fondurile proiectului rămâne blocată în contul escrow timp de un an de la finalizare</strong>, pentru a garanta remedierea eventualelor defecte de construcție (Snagging &amp; Defect Liability Period).</li>
          </ul>
        </section>

        {/* SECTION 4: DEFAULT CLAUSES & PAYMENT PENALTIES */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Coins className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              4. Clauzele de Neplată și Penalitățile pentru Cumpărător (Default Risks)
            </h2>
          </div>
          <p>
            Dacă investitorul întâmpină dificultăți financiare și nu mai poate achita tranșele stabilite în planul de plată, <em>Legea nr. 19 din 2017</em> (care a amendat Legea 13/2008) reglementează procedura pe care dezvoltatorul o poate iniția prin DLD:
          </p>
          <div className="divide-y divide-slate-200 border border-slate-200 bg-white font-mono text-xs">
            <div className="p-4">
              <span className="font-bold text-slate-900 block font-sans">Progres fizic &gt; 80%:</span>
              <span className="text-slate-600 font-sans text-xs">Dezvoltatorul poate păstra sumele plătite, poate solicita vânzarea unității la licitație prin DLD sau poate rezoluționa contractul reținând până la 40% din prețul total.</span>
            </div>
            <div className="p-4">
              <span className="font-bold text-slate-900 block font-sans">Progres fizic între 60% și 80%:</span>
              <span className="text-slate-600 font-sans text-xs">Dezvoltatorul poate rezoluționa contractul și reține până la 40% din prețul total prevăzut în SPA.</span>
            </div>
            <div className="p-4">
              <span className="font-bold text-slate-900 block font-sans">Progres fizic sub 60%:</span>
              <span className="text-slate-600 font-sans text-xs">Dezvoltatorul poate reține până la 25% din valoarea contractului, returnând restul fondurilor către cumpărător în termenul legal.</span>
            </div>
          </div>
          <p className="text-xs font-mono text-slate-500">
            Recomandare: Nu semnați planuri de plată pe care nu sunteți 100% sigur că le puteți susține financiar pe durata celor 3–4 ani de șantier.
          </p>
        </section>

        {/* SECTION 5: RESALE BEFORE HANDOVER */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              5. Riscul de Revânzare Înainte de Finalizare (Off-Plan Resale Restriction)
            </h2>
          </div>
          <p>
            O strategie promovată intens de anumiți brokeri este „cumperi off-plan, plătești 20% și revinzi cu profit peste un an”. Această abordare implică riscuri majore:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>
              <strong>Pragul minim impus de dezvoltator:</strong> Majoritatea marilor dezvoltatori (Emaar, Meraas, Nakheel) <strong>interzic revânzarea unității</strong> până când cumpărătorul nu a achitat efectiv între <strong>30% și 50%</strong> din valoarea totală a contractului.
            </li>
            <li>
              <strong>Comisionul de NOC pentru transfer:</strong> Dezvoltatorul percepe o taxă administrativă pentru eliberarea NOC-ului de cesiune a contractului către un nou cumpărător.
            </li>
            <li>
              <strong>Concurența directă cu dezvoltatorul:</strong> Dacă proiectul are încă unități nevândute la dezvoltator cu planuri de plată atractive, vă va fi foarte dificil să găsiți un cumpărător pe piața secundară dispus să plătească un premium în numerar.
            </li>
          </ul>
        </section>

        {/* SECTION 6: HOW TO VERIFY A PROJECT */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <CheckCircle2 className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              6. Cum Verifici Independent un Proiect în Dubai REST
            </h2>
          </div>
          <p>
            Urmați acești pași înainte de a transfera orice sumă de bani:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li>Descărcați aplicația oficială <strong>Dubai REST</strong> (disponibilă pe iOS și Android).</li>
            <li>Navigați la secțiunea <em>Real Estate Services &rarr; Project Status Tracking</em>.</li>
            <li>Introduceți numele proiectului sau numărul de înregistrare al proiectului furnizat de dezvoltator.</li>
            <li>Verificați: numărul contului Escrow, banca deținătoare, procentul fizic de construcție realizat și data inspectării DLD.</li>
            <li>Dacă proiectul nu apare în baza DLD sau contul escrow nu este activ, opriți orice plată.</li>
          </ol>
        </section>

        {/* NAVIGATION / CTA */}
        <section className="pt-8 border-t border-slate-200 flex flex-wrap gap-4 font-mono text-xs">
          <Link
            href="/ghiduri/dubai-vs-bucuresti"
            className="px-5 py-3 bg-slate-950 hover:bg-slate-800 text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Dubai vs București</span>
          </Link>
          <Link
            href="/ghiduri/verificare-broker-anunt-dubai"
            className="px-5 py-3 border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 transition-colors flex items-center gap-2"
          >
            <span>Verificare Broker &amp; Anunț</span>
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
