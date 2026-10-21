import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cum Cumperi o Proprietate în Dubai din România Pas cu Pas | Ghid 2026',
  description:
    'Ghidul complet în 12 etape pentru investitorii români: documente, contract Form F, transfer DLD 4%, conturi escrow Legea 8/2007, verificare broker și formalități fiscale ANAF.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/ghiduri/cum-cumperi-proprietate-dubai',
  },
  openGraph: {
    title: 'Cum Cumperi o Proprietate în Dubai din România Pas cu Pas | DUBAI',
    description:
      'Ghid complet și obiectiv pentru achiziții imobiliare în Dubai: etape, taxe oficiale, contracte MOU Form F, conturi escrow și riscuri de evitat.',
    url: 'https://dubai.cristianvaduva.com/ghiduri/cum-cumperi-proprietate-dubai',
    siteName: 'DUBAI — Independent Real Estate Research',
    locale: 'ro_RO',
    type: 'article',
  },
}

export default function CumCumperiProprietateDubaiPage() {
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
            Ghid Due Diligence &bull; Modul 01
          </span>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-800 font-semibold uppercase">
              Proces de Achiziție
            </span>
            <span>&bull;</span>
            <span>Timp lectură: 14 minute</span>
            <span>&bull;</span>
            <span>Ultima revizuire: Octombrie 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-slate-950 font-serif tracking-tight leading-tight max-w-4xl">
            Cum cumperi o proprietate în Dubai din România, pas cu pas
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
            Un ghid structural complet pentru cetățenii și rezidenții români care doresc să achiziționeze un imobil în Dubai, explicat de la analiza incipientă a pieței până la eliberarea titlului de proprietate și declararea fiscală în România.
          </p>

          <div className="p-4 bg-slate-50 border-l-2 border-slate-900 text-xs font-mono text-slate-700 leading-relaxed">
            <strong>Notă de conformitate:</strong> Prezentul ghid are scop strict educațional și de informare. Nu constituie consultanță juridică, fiscală sau de brokeraj imobiliar. Pentru tranzacții concrete, apelați întotdeauna la avocați autorizați, consultanți fiscali acreditați și brokeri licențiați RERA.
          </div>
        </div>
      </header>

      {/* 3. BODY CONTENT (12 STEPS) */}
      <main className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-12 text-slate-800 font-sans leading-relaxed text-sm sm:text-base">

        {/* STEP 1 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <span className="font-mono text-sm font-bold text-slate-950">ETAPA 01</span>
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Definirea Bugetului și a Obiectivului Investițional
            </h2>
          </div>
          <p>
            Înainte de a iniția căutarea pe portaluri, este esențial să stabiliți natura investiției:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>Randament recurent din chirii (Yield Focus):</strong> vizate sunt unitățile mici și medii (studio, 1 bedroom) situate în hub-uri cu densitate mare de chiriași corporate sau expați (Business Bay, Jumeirah Village Circle, Dubai Marina).
            </li>
            <li>
              <strong>Apreciere de capital pe termen mediu-lung (Capital Growth):</strong> proiecte în stadiu de lansare în zone noi de master-development sau proprietăți waterfront unice (Palm Jumeirah, Dubai Islands).
            </li>
            <li>
              <strong>Uz personal sau relocare:</strong> case, vile sau apartamente mari în comunități de familii (Dubai Hills Estate, Al Barari), ținând cont de școli, spitale și acces rutier.
            </li>
          </ul>
          <p className="text-xs font-mono text-slate-500">
            Regulă de aur: Calculați întotdeauna bugetul total adăugând minimum 7%–8% pentru taxe oficiale DLD, onorarii de trustee, comisioane și eventuale costuri de mobilare/echipare.
          </p>
        </section>

        {/* STEP 2 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <span className="font-mono text-sm font-bold text-slate-950">ETAPA 02</span>
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Cercetarea Zonelor: Freehold vs Leasehold
            </h2>
          </div>
          <p>
            Străinii (inclusiv cetățenii români) pot achiziționa proprietăți cu drept deplin de proprietate (<strong>Freehold</strong>) exclusiv în zonele special desemnate prin <em>Legea nr. 7 din 2006</em> și <em>Decretul nr. 3 din 2006</em>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block uppercase">Zone Freehold (Proprietate Deplină)</span>
              <p className="text-slate-600 font-sans">
                Drept perpetuu de proprietate, vânzare, moștenire și închiriere. Peste 24 de districte, printre care Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, JVC, Dubai Hills Estate.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 block uppercase">Zone Leasehold (Închiriere pe Termen Lung)</span>
              <p className="text-slate-600 font-sans">
                Drept de folosință pe perioade de până la 99 de ani, dar terenul rămâne în proprietatea cetățenilor locali sau a statului (de exemplu anumite zone din Deira sau Bur Dubai). Investitorii internaționali optează preponderent pentru Freehold.
              </p>
            </div>
          </div>
        </section>

        {/* STEP 3 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <span className="font-mono text-sm font-bold text-slate-950">ETAPA 03</span>
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Verificarea Dezvoltatorului și a Istoricului de Livrare
            </h2>
          </div>
          <p>
            Nu vă bazați exclusiv pe randări 3D sau reclame din social media. În Dubai, orice proiect licențiat poate fi verificat direct pe portalul oficial <strong>Dubai Land Department (DLD)</strong> sau prin aplicația <strong>Dubai REST</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Verificați dacă dezvoltatorul este înregistrat oficial la RERA (Real Estate Regulatory Agency).</li>
            <li>Inspectați istoricul proiectelor anterioare: au fost livrate la timp sau cu întârzieri?</li>
            <li>Verificați procentul real de construcție auditat de inspectorii DLD (disponibil public în aplicația Dubai REST).</li>
          </ul>
        </section>

        {/* STEP 4 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <span className="font-mono text-sm font-bold text-slate-950">ETAPA 04</span>
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Off-Plan (În Construcție) vs Ready (Finalizată)
            </h2>
          </div>
          <p>
            Alegerea între o proprietate gata și una în construcție influențează direct fluxul de numerar, contractele și riscul:
          </p>
          <div className="overflow-x-auto border border-slate-200">
            <table className="w-full text-xs font-mono">
              <thead className="bg-slate-100 border-b border-slate-200 text-left">
                <tr>
                  <th className="p-3 uppercase">Criteriu</th>
                  <th className="p-3 uppercase">Proprietate Ready (Finalizată)</th>
                  <th className="p-3 uppercase">Proprietate Off-Plan (În Construcție)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-sans">
                <tr>
                  <td className="p-3 font-mono font-semibold">Generare Venituri</td>
                  <td className="p-3">Imediată (chirie anuală Ejari sau regim hotelier)</td>
                  <td className="p-3">Numai după recepție și emiterea cheilor</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold">Grafic de Plată</td>
                  <td className="p-3">Plată integrală la transfer (propriu sau credit)</td>
                  <td className="p-3">Plan de rate eșalonat (ex: 60/40 sau 70/30)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold">Garanție Financiară</td>
                  <td className="p-3">Inspectare fizică directă înainte de cumpărare</td>
                  <td className="p-3">Plățile merg exclusiv în contul Escrow al proiectului</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold">Document Proprietate</td>
                  <td className="p-3">Title Deed emis imediat de DLD</td>
                  <td className="p-3">Oqood (certificat de pre-înregistrare DLD)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* STEP 5 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <span className="font-mono text-sm font-bold text-slate-950">ETAPA 05</span>
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Documentele Necesare pentru Cumpărătorul Român
            </h2>
          </div>
          <p>
            Dubai are o procedură birocratică eficientă pentru nerezidenți. Documentele de bază necesare pentru o persoană fizică sunt:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Pașaport valid (minimum 6 luni până la expirare). Nu este obligatoriu să dețineți viză UAE sau Emirates ID pentru a cumpăra.</li>
            <li>Adresă de e-mail și număr de telefon valid (pentru autentificare în sistemul DLD).</li>
            <li>Dovada provenienței fondurilor (KYC / AML solicitat de bănci și dezvoltator).</li>
            <li>Dacă tranzacția se face la distanță prin mandatar: Procură Notarială (Power of Attorney - POA) redactată, apostilată/supralegalizată și tradusă în arabă.</li>
          </ul>
        </section>

        {/* STEP 6 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <span className="font-mono text-sm font-bold text-slate-950">ETAPA 06</span>
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Taxele și Costurile Oficiale de Tranzacție
            </h2>
          </div>
          <p>
            Conform surselor oficiale ale Guvernului din Dubai, principalele cheltuieli la cumpărare sunt:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>Taxa de transfer DLD: 4.00%</strong> din valoarea tranzacției, reglementată de <em>Executive Council Resolution No. 30 of 2013</em>. Se achită către Dubai Land Department.
            </li>
            <li>
              <strong>Comisionul biroului de înregistrare (Trustee Registration Fee):</strong> AED 4.000 + TVA (pentru proprietăți &ge; AED 500.000) sau AED 2.000 + TVA (pentru proprietăți &lt; AED 500.000).
            </li>
            <li>
              <strong>Certificat de emitere Title Deed:</strong> AED 250 – AED 580.
            </li>
            <li>
              <strong>Certificatul NOC (No Objection Certificate):</strong> între AED 500 și AED 5.000 + TVA, emis de master developer către vânzător pentru a atesta lipsa datoriilor la întreținere.
            </li>
            <li>
              <strong>Comision agenție imobiliară (resale):</strong> standard 2% + 5% TVA (dacă se cumpără prin broker).
            </li>
          </ul>
          <div className="pt-1">
            <Link
              href="/ghiduri/costuri-achizitie-dubai"
              className="text-slate-900 font-mono text-xs font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Vezi Ghidul Detaliat al Costurilor de Achiziție</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </section>

        {/* STEP 7 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <span className="font-mono text-sm font-bold text-slate-950">ETAPA 07</span>
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Rolul Brokerului Autorizat și Verificarea Licenței
            </h2>
          </div>
          <p>
            În Dubai, intermedierea imobiliară este strict reglementată de RERA. Nu colaborați cu persoane care nu vă pot prezenta o licență activă:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Fiecare broker autorizat deține un card RERA cu număr <strong>BRN (Broker Registration Number)</strong>.</li>
            <li>Fiecare agenție imobiliară deține un număr <strong>ORN (Office Registration Number)</strong>.</li>
            <li>Orice anunț public trebuie să poarte un permis Trakheesi cu cod QR scanabil.</li>
          </ul>
          <div className="pt-1">
            <Link
              href="/ghiduri/verificare-broker-anunt-dubai"
              className="text-slate-900 font-mono text-xs font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Află cum verifici un broker pe Dubai REST</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </section>

        {/* STEP 8 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <span className="font-mono text-sm font-bold text-slate-950">ETAPA 08</span>
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Contractele, Plățile și Semnarea (Form F / SPA)
            </h2>
          </div>
          <p>
            Documentele contractuale diferă în funcție de tipul proprietății:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>Pe piața secundară (Resale):</strong> se semnează <em>Unified Form F (Memorandum of Understanding - MOU)</em> generat direct pe portalul DLD. Cumpărătorul depune un cec de garanție de 10% (Security Deposit), reținut de agenția escrow/trustee până la finalizarea transferului.
            </li>
            <li>
              <strong>La dezvoltator (Off-Plan):</strong> se semnează inițial un formular de rezervare (Booking Form) cu plata depozitului inițial (5%–20%), urmat de contractul de vânzare-cumpărare <em>Sales and Purchase Agreement (SPA)</em>.
            </li>
          </ul>
          <div className="p-4 bg-amber-50/70 border border-amber-200 text-xs font-mono text-amber-900 leading-relaxed">
            <strong>Atenție maximă:</strong> Pentru off-plan, toate transferurile bancare se efectuează exclusiv către contul oficial Escrow al proiectului, deschis la o bancă aprobată de DLD. Nu trimiteți bani în conturi personale sau în contul general al dezvoltatorului.
          </div>
        </section>

        {/* STEP 9 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <span className="font-mono text-sm font-bold text-slate-950">ETAPA 09</span>
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Înregistrarea și Eliberarea Titlului de Proprietate (Title Deed)
            </h2>
          </div>
          <p>
            Pentru proprietățile finalizate, transferul oficial are loc la un <strong>Trustee Registration Office</strong> aprobat de DLD:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Părțile (sau reprezentanții cu procură) se prezintă cu pașapoartele, NOC-ul original și cecurile bancare certificate (Manager&apos;s Cheques).</li>
            <li>Trustee-ul validează datele în sistemul centralizat DLD, eliberează cecul către vânzător și înregistrează cumpărătorul.</li>
            <li>DLD emite electronic <strong>Title Deed-ul</strong> oficial pe numele cumpărătorului, descărcabil imediat și scanabil prin cod QR.</li>
          </ul>
        </section>

        {/* STEP 10 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <span className="font-mono text-sm font-bold text-slate-950">ETAPA 10</span>
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Costurile Recurente, Administrarea și Închirierea
            </h2>
          </div>
          <p>
            După achiziție, menținerea și monetizarea proprietății implică responsabilități specifice:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>
              <strong>Service Charges (Cheltuieli de mentenanță):</strong> între AED 12 și AED 45+ per sq ft anual, în funcție de clădire și facilități. Tarifele sunt reglementate prin indicele RERA Service Charge Index.
            </li>
            <li>
              <strong>Înregistrarea contractului de închiriere (Ejari):</strong> obligatorie prin sistemul DLD pentru chirii anuale pe termen lung.
            </li>
            <li>
              <strong>Companie de Property Management:</strong> comision uzual între 5% și 10% din chiria anuală pentru colectare cecuri, reparații și asistență chiriași.
            </li>
          </ul>
        </section>

        {/* STEP 11 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <span className="font-mono text-sm font-bold text-slate-950">ETAPA 11</span>
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Aspecte Fiscale pentru Rezidentul Fiscal Român
            </h2>
          </div>
          <p>
            O eroare frecventă este presupunerea că scutirea fiscală din Dubai elimină orice obligație din România. Dacă sunteți rezident fiscal în România:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Sunteți supus impozitării pe venitul global conform <em>Legii nr. 227/2015 (Codul Fiscal)</em>.</li>
            <li>Veniturile din chirii sau câștigurile de capital obținute în străinătate trebuie raportate la ANAF prin <strong>Declarația Unică (Formularul 212)</strong>.</li>
            <li>
              Aplicarea <em>Convenției de evitare a dublei impuneri dintre România și Emiratele Arabe Unite</em> (semnată la Abu Dhabi la 11 aprilie 1993 și ratificată de Parlamentul României prin <strong>Legea nr. 74 din 3 noiembrie 1993</strong>, publicată în Monitorul Oficial al României, Partea I, nr. 262 din 9 noiembrie 1993) stabilește metoda de evitare a dublei impuneri (credit fiscal sau scutire), necesitând validarea unui consultant fiscal acreditat.
            </li>
          </ul>
          <div className="pt-1">
            <Link
              href="/ghiduri/impozitare-romania-dubai"
              className="text-slate-900 font-mono text-xs font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Citește Ghidul Fiscal Complet România–Dubai</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </section>

        {/* STEP 12 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <span className="font-mono text-sm font-bold text-slate-950">ETAPA 12</span>
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              Semnale de Alarmă și Întrebări Esențiale Înainte de Plată
            </h2>
          </div>
          <p>
            Înainte de a semna sau de a achita un avans, verificați următoarele elemente critice:
          </p>
          <div className="p-5 bg-slate-50 border border-slate-200 space-y-3 font-mono text-xs">
            <div className="flex items-start gap-2 text-slate-900 font-bold">
              <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
              <span>LISTĂ DE VERIFICARE OBLIGATORIE</span>
            </div>
            <ul className="space-y-2 font-sans text-slate-700 text-xs pl-6 list-disc">
              <li>Are proiectul cont escrow aprobat și înregistrat oficial la DLD?</li>
              <li>Care este procentul de penalizare dacă dezvoltatorul întârzie predarea cheilor cu peste 12 luni?</li>
              <li>Ce cheltuieli de service charge per sq ft sunt estimate și dacă există un plafon contractual?</li>
              <li>Dacă vânzătorul este persoană fizică, a prezentat un Title Deed original recent verificat în Dubai REST?</li>
              <li>Agentul imobiliar are număr BRN valid pe cardul său RERA?</li>
            </ul>
          </div>
        </section>

        {/* RELATED GUIDES */}
        <section className="pt-10 border-t border-slate-200 space-y-6 font-mono text-xs">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
            GHIDURI ASOCIATE RECOMANDATE
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/ghiduri/costuri-achizitie-dubai"
              className="p-5 bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-white transition-all space-y-1 block group"
            >
              <span className="text-slate-950 font-bold block group-hover:text-slate-700">
                Costurile Cumpărării unei Proprietăți în Dubai &rarr;
              </span>
              <span className="text-slate-500 font-sans text-xs">
                Defalcarea exactă a taxei DLD de 4%, costurilor trustee și cheltuielilor administrative.
              </span>
            </Link>
            <Link
              href="/ghiduri/riscuri-off-plan-dubai"
              className="p-5 bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-white transition-all space-y-1 block group"
            >
              <span className="text-slate-950 font-bold block group-hover:text-slate-700">
                Riscurile Investițiilor Off-Plan &rarr;
              </span>
              <span className="text-slate-500 font-sans text-xs">
                Cum funcționează contul escrow sub Legea 8/2007 și ce verificări contractuale sunt vitale.
              </span>
            </Link>
          </div>
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
