import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  QrCode,
  AlertTriangle,
  Building,
  UserCheck,
  FileSearch,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cum Verifici un Broker și un Anunț Imobiliar în Dubai | Ghid RERA & Trakheesi',
  description:
    'Ghid oficial de verificare a brokerilor și anunțurilor imobiliare în Dubai: verificarea codului QR Trakheesi, a cardului RERA BRN, numărului de agenție ORN și a licenței comerciale pe Dubai REST.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/ghiduri/verificare-broker-anunt-dubai',
  },
  openGraph: {
    title: 'Cum Verifici un Broker și un Anunț Imobiliar în Dubai | DUBAI',
    description:
      'Ghid de securitate pentru investitori: proceduri oficiale pe portalul DLD și Dubai REST pentru verificarea brokerilor, agențiilor și codurilor QR Trakheesi.',
    url: 'https://dubai.cristianvaduva.com/ghiduri/verificare-broker-anunt-dubai',
    siteName: 'DUBAI — Independent Real Estate Research',
    locale: 'ro_RO',
    type: 'article',
  },
}

export default function VerificareBrokerAnuntDubaiPage() {
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
            Securitate &bull; Modul 07
          </span>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-800 font-semibold uppercase">
              Verificare Oficială RERA
            </span>
            <span>&bull;</span>
            <span>Timp lectură: 8 minute</span>
            <span>&bull;</span>
            <span>Ultima revizuire: Octombrie 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-slate-950 font-serif tracking-tight leading-tight max-w-4xl">
            Cum verifici un broker și un anunț imobiliar în Dubai
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
            Proceduri oficiale pentru validarea licențelor BRN/ORN, scanarea codurilor QR Trakheesi și deosebirea dintre portalurile de promovare și intermediarii autorizați.
          </p>

          <div className="p-4 bg-slate-50 border-l-2 border-slate-900 text-xs font-mono text-slate-700 leading-relaxed">
            <strong>Baza oficială:</strong> Autoritatea de Reglementare Imobiliară din Dubai (RERA - <em>Real Estate Regulatory Agency</em>), subdiviziune a Dubai Land Department (DLD). În Dubai, intermedierea imobiliară fără licență activă constituie infracțiune sancționată contravențional și penal.
          </div>
        </div>
      </header>

      {/* 3. MAIN CONTENT */}
      <main className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-12 text-slate-800 font-sans leading-relaxed text-sm sm:text-base">

        {/* SECTION 1: ROLES IN THE ECOSYSTEM */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Building className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              1. Cine este Cine în Imobiliarele din Dubai: Roluri și Distincții
            </h2>
          </div>
          <p>
            Pentru a evita confuziile frecvente, investitorii trebuie să cunoască rolul exact al fiecărui actor din piață:
          </p>

          <div className="divide-y divide-slate-200 border border-slate-200 bg-white font-mono text-xs">
            <div className="p-4 space-y-1">
              <span className="font-bold text-slate-900 block font-sans text-sm">Agentul / Brokerul Imobiliar (Individual)</span>
              <p className="text-slate-600 font-sans text-xs">
                Persoană fizică autorizată de RERA în urma unui curs și a unui examen oficial. Deține un card de brokeraj cu număr <strong>BRN (Broker Registration Number)</strong> și activează obligatoriu sub umbrela unei agenții licențiate.
              </p>
            </div>
            <div className="p-4 space-y-1">
              <span className="font-bold text-slate-900 block font-sans text-sm">Agenția Imobiliară (Brokerajul)</span>
              <p className="text-slate-600 font-sans text-xs">
                Companie înregistrată comercial la DED (Departamentul de Economie și Turism) și licențiată de RERA cu un număr <strong>ORN (Office Registration Number)</strong>. Agenția poartă răspunderea legală pentru contractele semnate de brokerii săi.
              </p>
            </div>
            <div className="p-4 space-y-1">
              <span className="font-bold text-slate-900 block font-sans text-sm">Dezvoltatorul (Master Developer &amp; Private Developer)</span>
              <p className="text-slate-600 font-sans text-xs">
                Entitatea care construiește proiectul (ex: Emaar, Nakheel, Sobha). Dezvoltatorii au propriile echipe interne de vânzări directe, dar colaborează frecvent și cu agenții externe acreditate.
              </p>
            </div>
            <div className="p-4 space-y-1">
              <span className="font-bold text-slate-900 block font-sans text-sm">Portalul de Anunțuri (Listing Portal)</span>
              <p className="text-slate-600 font-sans text-xs">
                Platforme tehnologice sau agregate (ex: Property Finder, Bayut, Dubizzle) care găzduiesc reclame plătite de agenții. Portalurile nu sunt părți în tranzacție și nu garantează acuratețea fiecărui anunț.
              </p>
            </div>
            <div className="p-4 space-y-1">
              <span className="font-bold text-slate-900 block font-sans text-sm">Platforma Editorială de Cercetare (Research Platform)</span>
              <p className="text-slate-600 font-sans text-xs">
                Platforme independente precum DUBAI, axate pe documentare legislativă, analiză de date oficiale DLD, educare și îndrumare către parteneri verificați, fără a pretinde mandate fictive sau servicii reglementate fără licență.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: HOW TO VERIFY BRN & ORN */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <UserCheck className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              2. Cum Verifici Licența Brokerului (BRN) și a Agenției (ORN)
            </h2>
          </div>
          <p>
            Nu acceptați recomandări doar pe baza profilului de WhatsApp sau a cărților de vizită tipărite. Orice broker legitim vă poate pune la dispoziție în format digital cardul său <strong>RERA Broker Card</strong>:
          </p>
          <div className="p-5 bg-slate-50 border border-slate-200 font-mono text-xs space-y-3">
            <span className="font-bold text-slate-900 uppercase block text-[11px]">
              PAȘII OFICIALI DE VERIFICARE PE PORTALUL DUBAI REST:
            </span>
            <ol className="list-decimal pl-5 space-y-2 font-sans text-slate-700 text-xs">
              <li>Deschideți aplicația oficială <strong>Dubai REST</strong> sau accesați portalul <a href="https://dubailand.gov.ae" target="_blank" rel="noopener noreferrer" className="underline font-bold text-slate-900">dubailand.gov.ae</a>.</li>
              <li>Accesați secțiunea <em>Real Estate Services &rarr; Validation Services &rarr; Verify Licensed Real Estate Brokers</em>.</li>
              <li>Introduceți numărul <strong>BRN</strong> al brokerului sau numele complet.</li>
              <li>Sistemul DLD va afișa: statutul licenței (Active / Inactive), fotografia oficială, agenția la care este angajat (ORN) și data expirării autorizației.</li>
              <li>Dacă agentul apare ca „Inactive” sau nu poate fi găsit în baza DLD, <strong>refuzați orice colaborare sau plată</strong>.</li>
            </ol>
          </div>
        </section>

        {/* SECTION 3: THE TRAKHEESI QR CODE */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <QrCode className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              3. Permisul Trakheesi și Scanarea Codului QR al Anunțului
            </h2>
          </div>
          <p>
            Prin reglementările RERA, <strong>este strict interzisă publicarea oricărui anunț imobiliar (online, social media, ziare sau panouri stradale) fără un permis oficial Trakheesi</strong>.
          </p>
          <p>
            Fiecare reclamă legală trebuie să conțină un <strong>cod QR dinamic</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>Scanarea codului QR:</strong> La scanarea cu telefonul, linkul trebuie să vă redirecționeze pe domeniul oficial guvernamental <strong>dubailand.gov.ae</strong> (nu pe un domeniu privat sau copie de site).
            </li>
            <li>
              <strong>Informațiile afișate de DLD la scanare:</strong> Numele agenției autorizate, statutul permisului, tipul tranzacției (vânzare/închiriere), proprietatea exactă autorizată și confirmarea că proprietarul a semnat formularul oficial de reprezentare (Form A).
            </li>
            <li>
              <strong>Anunțurile fără cod QR sau cu QR invalid:</strong> Reprezintă reclame false (bait ads), unități indisponibile promovate ilegal pentru colectare de lead-uri sau escrocherii.
            </li>
          </ul>
        </section>

        {/* SECTION 4: WHAT A LICENSE PROVES AND WHAT IT DOES NOT PROVE */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              4. Ce Dovedește o Licență și Ce NU Dovedește
            </h2>
          </div>
          <p>
            O eroare frecventă a investitorilor internaționali este să considere că prezența unei licențe RERA sau a unui cod QR Trakheesi garantează că investiția va fi una de succes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-1">
            <div className="p-5 bg-emerald-50/50 border border-emerald-200 space-y-2">
              <span className="font-bold text-emerald-900 block uppercase">Ce Dovedește Licența / QR-ul:</span>
              <ul className="space-y-1 font-sans text-slate-800 list-disc pl-4 text-xs">
                <li>Persoana are drept legal de a profesa ca intermediar în Dubai.</li>
                <li>Agenția este înregistrată și identificabilă juridic.</li>
                <li>Proprietarul a dat acordul formal pentru promovarea acelui imobil.</li>
                <li>Proiectul off-plan este înregistrat în evidențele DLD.</li>
              </ul>
            </div>
            <div className="p-5 bg-rose-50/50 border border-rose-200 space-y-2">
              <span className="font-bold text-rose-900 block uppercase">Ce NU Dovedește:</span>
              <ul className="space-y-1 font-sans text-slate-800 list-disc pl-4 text-xs">
                <li>Nu garantează randamentul viitor sau creșterea de preț.</li>
                <li>Nu garantează că dezvoltatorul va finaliza la termen fără întârzieri.</li>
                <li>Nu înseamnă că prețul solicitat este cel mai bun din piață.</li>
                <li>Nu înlocuiește analiza financiară și contractuală independentă.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 5: RED FLAGS */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <FileSearch className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              5. Semnale de Alarmă Majore (Red Flags)
            </h2>
          </div>
          <div className="p-5 bg-slate-50 border border-slate-200 space-y-2 font-mono text-xs">
            <ul className="space-y-2 font-sans text-slate-700 text-xs list-disc pl-5">
              <li><strong>Solicitarea de plăți în conturi personale:</strong> Niciun broker licențiat nu are dreptul să încaseze banii de avans sau de preț pe numele său personal sau prin servicii de transfer rapid nemonitorizate.</li>
              <li><strong>Presiunea temporală agresivă:</strong> „Aceasta este ultima unitate disponibilă, trebuie să trimiteți depozitul în 30 de minute fără să citiți contractul”.</li>
              <li><strong>Promisiuni de randamente garantate nerealiste:</strong> Promisiuni de genul „15% garantat pe 10 ani” fără un contract ferm de închiriere garantat bancar.</li>
              <li><strong>Refuzul de a arăta codul QR Trakheesi sau cardul BRN:</strong> Scuze legate de „sistemul este în mentenanță”.</li>
            </ul>
          </div>
        </section>

        {/* NAVIGATION / CTA */}
        <section className="pt-8 border-t border-slate-200 flex flex-wrap gap-4 font-mono text-xs">
          <Link
            href="/ghiduri/riscuri-off-plan-dubai"
            className="px-5 py-3 bg-slate-950 hover:bg-slate-800 text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Riscuri Off-Plan</span>
          </Link>
          <Link
            href="/raport-trimestrial"
            className="px-5 py-3 border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 transition-colors flex items-center gap-2"
          >
            <span>Raport Trimestrial de Piață</span>
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
