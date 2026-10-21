import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Users,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Viza de Rezidență pentru Investitori Imobiliari în UAE | Ghid Oficial 2026',
  description:
    'Condițiile oficiale curente conform Cabinet Resolution No. 65/2022 și portalului oficial al Guvernului EAU (u.ae / ICP): durata de 5 ani reînnoibilă pentru investiții imobiliare de minimum 2.000.000 AED, distincția față de rutele de 10 ani (investiții publice de capital, talente excepționale, antreprenori), proprietăți ipotecate și procedura GDRFA.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/ghiduri/golden-visa-uae',
  },
  openGraph: {
    title: 'Viza de Rezidență pentru Investitori Imobiliari în UAE | DUBAI',
    description:
      'Ghid complet și verificat despre viza de rezidență imobiliară în Dubai: durata de 5 ani reînnoibilă (față de rutele de 10 ani pentru investiții publice sau talente excepționale), pragul de AED 2M, criterii oficiale u.ae / ICP și procedura DLD Cube.',
    url: 'https://dubai.cristianvaduva.com/ghiduri/golden-visa-uae',
    siteName: 'DUBAI — Independent Real Estate Research',
    locale: 'ro_RO',
    type: 'article',
  },
}

export default function GoldenVisaUaeGhidPage() {
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
            Rezidență UAE &bull; Modul 03
          </span>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-800 font-semibold uppercase">
              Rezidență Imobiliară (5 Ani Reînnoibilă)
            </span>
            <span>&bull;</span>
            <span>Timp lectură: 9 minute</span>
            <span>&bull;</span>
            <span>Ultima revizuire: Octombrie 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-slate-950 font-serif tracking-tight leading-tight max-w-4xl">
            Viza de rezidență pentru investitori imobiliari în UAE: ghid oficial în limba română
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
            Cadrul legal, cerințele financiare și pașii procedurali pentru obținerea rezidenței pe termen lung în Emiratele Arabe Unite prin achiziția de proprietăți imobiliare: durata statutară de 5 ani reînnoibilă (conform portalului Guvernului EAU u.ae / ICP) și distincția clară față de rutele de 10 ani (investiții publice de capital, talente excepționale, antreprenori, studenți eminenți).
          </p>

          <div className="p-4 bg-slate-50 border-l-2 border-slate-900 text-xs font-mono text-slate-700 leading-relaxed">
            <strong>Baza legislativă oficială:</strong> <em>Cabinet Resolution No. 65 of 2022</em> (Regulamentul de aplicare a Legii Federale a Intrării și Reședinței Străinilor) și portalul oficial al Guvernului EAU (<em>u.ae</em> / <em>ICP</em>). Aprobarea oricărei cereri este supusă verificării de securitate și deciziei autorităților competente (GDRFA / ICP). Niciun intermediar privat nu poate garanta emiterea vizei.
          </div>
        </div>
      </header>

      {/* 3. MAIN CONTENT */}
      <main className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-12 text-slate-800 font-sans leading-relaxed text-sm sm:text-base">

        {/* SECTION 1: WHAT IS THE REAL ESTATE INVESTOR VISA */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <FileCheck2 className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              1. Cadrul Legal: Viza Imobiliară (5 Ani) vs Rutele de 10 Ani (Investiții Publice, Talente)
            </h2>
          </div>
          <p>
            Portalul oficial al Guvernului Emiratelor Arabe Unite (<strong>u.ae</strong>) și Autoritatea Federală pentru Identitate, Cetățenie, Vămi și Securitatea Porturilor (<strong>ICP</strong>) clasifică permisele de rezidență pe termen lung pe baza unor criterii distincte:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
            <div className="p-5 bg-white border border-slate-200 space-y-2 shadow-2xs">
              <span className="font-bold text-slate-950 block uppercase text-sm border-b border-slate-100 pb-2">
                Investiții Imobiliare (Real Estate)
              </span>
              <ul className="text-slate-700 font-sans space-y-1.5 list-disc pl-4 text-xs">
                <li><strong>Durată statutară:</strong> 5 ani reînnoibilă (self-sponsored).</li>
                <li><strong>Prag minim:</strong> AED 2.000.000 în proprietăți deținute integral, ipotecate sau off-plan.</li>
                <li><strong>Sponsorizare familie:</strong> Inclusă pe durata valabilității permisului.</li>
              </ul>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200 space-y-2 shadow-2xs">
              <span className="font-bold text-slate-950 block uppercase text-sm border-b border-slate-100 pb-2">
                Investiții Publice &amp; Alte Categorii de 10 Ani
              </span>
              <ul className="text-slate-700 font-sans space-y-1.5 list-disc pl-4 text-xs">
                <li><strong>Investiții publice (10 ani):</strong> Depozit bancar acreditat de &ge; AED 2M, fond de investiții sau companie ce achită &ge; AED 250k/an taxe federale.</li>
                <li><strong>Alte categorii oficiale de 10 ani (u.ae):</strong> Talente excepționale (medici, cercetători, oameni de cultură, inventatori), antreprenori, studenți de excepție și pionieri umanitari.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-600 font-mono pt-2">
            *Avertisment oficial: Conform portalului oficial al Guvernului EAU (u.ae / ICP), durata statutară a vizei de rezidență pentru investiții imobiliare este de 5 ani reînnoibilă. Categoriile de rezidență de 10 ani (Golden Visa) sunt reglementate distinct și pot fi accesate prin investiții publice de capital în condițiile aplicabile, precum și prin celelalte categorii oficiale (talente excepționale, antreprenori, cercetători, pionieri umanitari). Cererile se instrumentează prin centrul DLD Cube și GDRFA, iar eligibilitatea finală, durata permisului și aprobarea sunt stabilite în mod individual și suveran exclusiv de către autoritățile competente din EAU.
          </p>
        </section>

        {/* SECTION 2: OFFICIAL ELIGIBILITY THRESHOLD */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <ShieldCheck className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Pragul Financiar Oficial: Minimum AED 2.000.000
            </h2>
          </div>
          <p>
            Conform normelor stabilite prin <em>Cabinet Resolution No. 65/2022</em>, investitorul trebuie să dețină una sau mai multe proprietăți imobiliare în zone Freehold a căror valoare totală cumulată este de <strong>cel puțin 2.000.000 AED</strong> (aprox. 500.000 EUR la cursul de referință).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
            <div className="p-5 bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block uppercase">Cumul de Proprietăți Multiple</span>
              <p className="text-slate-600 font-sans">
                Pragul de 2 milioane AED nu trebuie atins neapărat printr-o singură proprietate. Puteți cumula două sau mai multe apartamente (de exemplu un apartament de 1.1M AED și unul de 950k AED), cu condiția ca ambele să fie pe numele aceluiași titular.
              </p>
            </div>
            <div className="p-5 bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block uppercase">Coproprietate Soț / Soție</span>
              <p className="text-slate-600 font-sans">
                Dacă imobilul este cumpărat în coproprietate de soț și soție, aceștia pot aplica pe baza aceluiași titlu dacă valoarea totală este de minimum 2M AED și prezintă certificatul de căsătorie legalizat și tradus.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: MORTGAGED & OFF-PLAN RULES */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <FileCheck2 className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Reguli pentru Proprietăți Ipotecate și Proiecte Off-Plan
            </h2>
          </div>
          <p>
            Autoritățile din Dubai au clarificat condițiile specifice pentru cazurile în care proprietatea nu este achitată integral sau este în curs de edificare:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>Proprietăți cumpărate cu credit ipotecar:</strong> Se acceptă dacă valoarea din Title Deed este de cel puțin AED 2M. În practică, este necesară o scrisoare oficială NOC de la banca finanțatoare locală aprobată de DLD, confirmând acordul de eliberare a vizei.
            </li>
            <li>
              <strong>Proprietăți Off-Plan (În Construcție):</strong> Este eligibil contractul de vânzare-cumpărare (SPA / Oqood) înregistrat la DLD cu valoare de minimum AED 2M, însoțit de adeverința emisă de dezvoltator care atestă plățile efectuate și stadiul proiectului.
            </li>
          </ul>
        </section>

        {/* SECTION 4: KEY ADVANTAGES */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Users className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Beneficiile Majore ale Permisului de Rezidență Imobiliară
            </h2>
          </div>
          <div className="divide-y divide-slate-200 border border-slate-200 bg-white font-mono text-xs">
            <div className="p-4 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block font-sans text-sm">Fără Cerință de Prezență Continuă</span>
                <span className="text-slate-600 font-sans text-xs">Spre deosebire de vizele standard de muncă care se anulează dacă titularul părăsește UAE pentru mai mult de 180 de zile consecutiv, titularul de rezidență pentru investitori poate călători liber în afara Emiratelor fără pierderea automată a statutului.</span>
              </div>
            </div>
            <div className="p-4 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block font-sans text-sm">Sponsorizarea Familiei</span>
                <span className="text-slate-600 font-sans text-xs">Puteți sponsoriza soțul/soția și copiii pe durata valabilității permisului, asigurându-le rezidență legală și acces la educație în EAU.</span>
              </div>
            </div>
            <div className="p-4 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block font-sans text-sm">Sponsorizarea Personalului Casnic</span>
                <span className="text-slate-600 font-sans text-xs">Dreptul de a sponsoriza asistenți personali, șoferi sau personal casnic conform reglementărilor federale.</span>
              </div>
            </div>
            <div className="p-4 flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block font-sans text-sm">Deschiderea de Conturi Bancare Locale &amp; Permis de Conducere</span>
                <span className="text-slate-600 font-sans text-xs">Acces deplin la sistemul bancar emiratez cu Emirates ID și conversia facilă a permisului de conducere conform acordurilor bilaterale.</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: PROCEDURAL WORKFLOW & COSTS */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <FileCheck2 className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Procedura Pas cu Pas și Costurile Oficiale
            </h2>
          </div>
          <p>
            În Dubai, procedura este facilitată la ghișeul unic <strong>Cube DLD</strong> (Dubai Land Department Headquarters):
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li><strong>Verificarea inițială a dosarului:</strong> Prezentarea Title Deed-ului original (&ge; AED 2M), pașaportului și a fotografiilor tip pașaport.</li>
            <li><strong>Vizita medicală oficială (Medical Fitness):</strong> Analize de sânge și radiografie pulmonară la un centru acreditat de Dubai Health Authority (DHA).</li>
            <li><strong>Amprentarea biometrică:</strong> Pentru emiterea cărții de identitate federale (<em>Emirates ID</em>).</li>
            <li><strong>Eliberarea vizei electronice de rezidență:</strong> Transmisă prin aplicația GDRFA / Dubai REST pe perioada acordată conform normelor autorității.</li>
          </ol>
          <div className="p-4 bg-slate-50 border border-slate-200 font-mono text-xs space-y-1">
            <span className="font-bold text-slate-900 uppercase">Costuri Oficiale Estimative de Procedură:</span>
            <p className="text-slate-600 font-sans">
              Taxele guvernamentale totale (viză DLD, medical VIP, emitere Emirates ID, taxe de securitate) se situează de regulă între <strong>AED 8.500 și AED 11.500</strong> per solicitant principal. Pentru fiecare membru de familie sponsorizat, taxa este de aprox. AED 4.500 – AED 6.000.
            </p>
          </div>
        </section>

        {/* SECTION 6: IMPORTANT LIMITATIONS */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Ce NU Oferă Rezidența Imobiliară: Limite și Precizări
            </h2>
          </div>
          <div className="p-5 bg-amber-50/70 border border-amber-200 text-xs font-mono text-amber-950 space-y-2">
            <span className="font-bold block uppercase tracking-wider">PRECIZĂRI CRUCIALE PENTRU INVESTITORI</span>
            <ul className="space-y-2 font-sans text-slate-800 list-disc pl-5">
              <li><strong>Nu acordă cetățenie:</strong> Este un permis de rezidență temporar (reînnoibil la scadență), nu o cale către pașaportul Emiratelor Arabe Unite.</li>
              <li><strong>Nu anulează automat rezidența fiscală din România:</strong> Obținerea unui Emirates ID nu vă scutește de obligațiile față de ANAF decât dacă depuneți Chestionarul de rezidență fiscală și demonstrați mutarea centrului intereselor vitale.</li>
              <li><strong>Menținerea investiției:</strong> Înstrăinarea proprietății înainte de expirarea valabilității impune înlocuirea acesteia cu un alt activ eligibil de &ge; AED 2M sau anularea vizei.</li>
            </ul>
          </div>
        </section>

        {/* NAVIGATION / CTA */}
        <section className="pt-8 border-t border-slate-200 flex flex-wrap gap-4 font-mono text-xs">
          <Link
            href="/ghiduri/costuri-achizitie-dubai"
            className="px-5 py-3 bg-slate-950 hover:bg-slate-800 text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Ghidul Costurilor de Achiziție</span>
          </Link>
          <Link
            href="/ghiduri/impozitare-romania-dubai"
            className="px-5 py-3 border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 transition-colors flex items-center gap-2"
          >
            <span>Ghid Fiscal România–Dubai</span>
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
