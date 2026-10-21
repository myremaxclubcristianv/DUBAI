import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Scale,
  Landmark,
  FileText,
  BadgePercent,
  ShieldCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impozitarea Proprietăților din Dubai pentru Rezidenții Români | Ghid Fiscal ANAF 2026',
  description:
    'Ghid fiscal exhaustiv: aplicarea Convenției România–UAE (ratificată prin Legea nr. 74/1993, semnată la 11 aprilie 1993), Codul Fiscal 227/2015, declararea chiriilor la ANAF prin Declarația Unică 212, CASS și rezidența fiscală.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/ghiduri/impozitare-romania-dubai',
  },
  openGraph: {
    title: 'Impozitarea Proprietăților din Dubai pentru Rezidenții Români | DUBAI',
    description:
      'Analiză fiscală prudentă: Convenția de evitare a dublei impuneri ratificată prin Legea nr. 74/1993 (semnată 11 aprilie 1993), obligații la ANAF, chirie, câștiguri de capital și CASS.',
    url: 'https://dubai.cristianvaduva.com/ghiduri/impozitare-romania-dubai',
    siteName: 'DUBAI — Independent Real Estate Research',
    locale: 'ro_RO',
    type: 'article',
  },
}

export default function ImpozitareRomaniaDubaiPage() {
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
            Fiscalitate &bull; Modul 04
          </span>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-800 font-semibold uppercase">
              Legislație Fiscală Comparată
            </span>
            <span>&bull;</span>
            <span>Timp lectură: 12 minute</span>
            <span>&bull;</span>
            <span>Ultima revizuire: Octombrie 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-slate-950 font-serif tracking-tight leading-tight max-w-4xl">
            Impozitarea proprietăților din Dubai pentru rezidenții fiscali români
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
            O analiză prudentă și tehnică a Convenției de evitare a dublei impuneri (ratificată prin Legea nr. 74/1993, semnată la 11 aprilie 1993), a prevederilor Codului Fiscal român (Legea 227/2015) și a obligațiilor de declarare la ANAF.
          </p>

          <div className="p-4 bg-slate-50 border-l-2 border-slate-900 text-xs font-mono text-slate-700 leading-relaxed space-y-1">
            <p>
              <strong>AVERTISMENT PROFESIONAL OBLIGATORIU:</strong> Afirmația comercială simplistă conform căreia „nu plătești niciun impozit nicăieri” este falsă și periculoasă. Tratamentul fiscal depinde de rezidența fiscală a persoanei, de natura veniturilor și de aplicarea convenției bilaterale.
            </p>
            <p className="text-slate-500">
              Prezentul document are caracter strict educațional și informativ. Nu reprezintă o opinie fiscală individualizată. Înainte de a lua decizii financiare, consultați un membru acreditat al Camerei Consultanților Fiscali (CCF) din România.
            </p>
          </div>
        </div>
      </header>

      {/* 3. MAIN CONTENT */}
      <main className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-12 text-slate-800 font-sans leading-relaxed text-sm sm:text-base">

        {/* SECTION 1: CITIZENSHIP VS TAX RESIDENCY */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Scale className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              1. Cetățenia Română vs Rezidența Fiscală
            </h2>
          </div>
          <p>
            În legislația fiscală internațională și românească, <strong>obligația de plată a impozitelor nu decurge din deținerea pașaportului, ci din statutul de rezidență fiscală</strong>.
          </p>
          <p>
            Conform art. 7 pct. 36 și art. 59 din <em>Legea nr. 227/2015 (Codul Fiscal)</em>, o persoană fizică este considerată rezident fiscal în România dacă îndeplinește cel puțin una dintre următoarele condiții:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li>Are domiciliul în România;</li>
            <li>Centrul intereselor vitale ale persoanei fizice este amplasat în România (familie, locuință permanentă, afaceri principale);</li>
            <li>Este prezentă în România pentru o perioadă sau mai multe perioade care depășesc în total 183 de zile pe parcursul oricărui interval de 12 luni consecutive.</li>
          </ul>
          <div className="p-4 bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800">
            <strong>Consecință:</strong> Persoanele fizice rezidente fiscal în România datorează impozit în România pe <strong>veniturile obținute din orice sursă, atât din România, cât și din afara României (principiul venitului mondial)</strong>.
          </div>
        </section>

        {/* SECTION 2: BILATERAL TREATY LAW 74/1993 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Landmark className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              2. Convenția de Evitare a Dublei Impuneri România–UAE (Legea nr. 74/1993)
            </h2>
          </div>
          <p>
            Relațiile fiscale dintre România și Emiratele Arabe Unite își au fundamentul bilateral în <em>Convenția dintre Guvernul României și Guvernul Emiratelor Arabe Unite pentru evitarea dublei impuneri și prevenirea evaziunii fiscale cu privire la impozitele pe venit și pe avere</em>, semnată la Abu Dhabi la 11 aprilie 1993 și ratificată de Parlamentul României prin <strong>Legea nr. 74 din 3 noiembrie 1993</strong> (publicată în Monitorul Oficial al României, Partea I, nr. 262 din 9 noiembrie 1993). Cadrul a fost actualizat ulterior prin noul acord bilateral ratificat prin Legea nr. 26/2016 (M. Of. nr. 225 din 25 martie 2016).
          </p>

          <div className="p-5 bg-slate-50 border border-slate-200 space-y-3 font-mono text-xs">
            <span className="font-bold text-slate-900 block uppercase">
              ARTICOLUL 6 &bull; VENITURI DIN BUNURI IMOBILE (REAL ESTATE)
            </span>
            <p className="font-sans text-slate-700 leading-relaxed text-xs">
              <em>„Art. 6 alin. (1): Veniturile realizate de un rezident al unui stat contractant din bunuri imobile (inclusiv veniturile din agricultură sau din exploatări forestiere) situate în celălalt stat contractant <strong>pot fi impuse în acest din urmă stat</strong>.”</em>
            </p>
            <p className="font-sans text-slate-600 leading-relaxed text-xs border-t border-slate-200 pt-2">
              Formularea „pot fi impuse” (în engleză <em>„may be taxed”</em>) conferă statului sursă (Dubai / UAE) dreptul primordial de a taxa proprietatea. Însă aceasta nu exclude automat dreptul statului de rezidență (România) de a lua în considerare aceste venituri, conform regulilor stabilite la Articolul 24 din Convenție.
            </p>
          </div>
        </section>

        {/* SECTION 3: RENTAL INCOME & ANAF REPORTING */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <BadgePercent className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              3. Veniturile din Chirii: Obligații Declarative la ANAF (Declarația Unică)
            </h2>
          </div>
          <p>
            În Emiratele Arabe Unite, conform <em>Cabinet Decision No. 49 of 2023</em>, veniturile obținute de persoane fizice din deținerea sau închirierea de proprietăți rezidențiale personale <strong>nu sunt supuse impozitului pe venit local (0% personal tax în UAE)</strong>.
          </p>
          <p>
            Pentru un investitor care rămâne rezident fiscal român, situația impune următorii pași:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>
              <strong>Obligația de declarare:</strong> Venitul din chirii obținut în străinătate trebuie raportat în România prin <strong>Declarația Unică (Formularul 212)</strong>, secțiunea <em>Venituri realizate din străinătate</em>, până la data de <strong>25 mai</strong> a anului următor celui de realizare a venitului.
            </li>
            <li>
              <strong>Metoda de evitare a dublei impuneri (lipsa unei concluzii universale):</strong> Codul Fiscal român (art. 130) prevede aplicarea metodei creditului fiscal sau a scutirii, în conformitate cu convenția bilaterală aplicabilă. Deoarece în UAE nu se percepe un impozit pe venitul din chirii pentru persoanele fizice (impozit local 0% conform <em>Cabinet Decision No. 49/2023</em>), nu există un impozit extern plătit efectiv care să fie dedus ca și credit fiscal. <strong>Nu există o concluzie fiscală generală valabilă automat pentru toți rezidenții</strong>; obținerea unui certificat de rezidență fiscală de la Federal Tax Authority (FTA) din UAE nu este în sine suficientă pentru a înlătura obligațiile din România, tratamentul depinzând de menținerea sau renunțarea la centrul intereselor vitale în România și de analiza individuală a unui consultant fiscal autorizat (membru CCF).
            </li>
            <li>
              <strong>Contribuția de Asigurări Sociale de Sănătate (CASS):</strong> Veniturile extrasalariale din străinătate (inclusiv chirii) se cumulează pentru stabilirea plafonului CASS (6, 12 sau 24 de salarii minime brute pe țară). Dacă totalul veniturilor extrasalariale depășește aceste plafoane, se datorează CASS în România, indiferent de convenția de evitare a dublei impuneri.
            </li>
          </ul>
        </section>

        {/* SECTION 4: CAPITAL GAINS */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Landmark className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              4. Câștigurile de Capital la Vânzarea Proprietății
            </h2>
          </div>
          <p>
            La înstrăinarea unui imobil situat în Dubai:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700">
            <li><strong>În Dubai:</strong> Nu se percepe impozit pe câștigul de capital pentru persoanele fizice. Se achită exclusiv taxa standard DLD de transfer (de regulă de către noul cumpărător) și taxa de emitere NOC.</li>
            <li><strong>În România:</strong> Conform Convenției (Art. 13 - Câștiguri de capital), câștigurile provenind din înstrăinarea bunurilor imobile pot fi impuse în statul în care sunt situate bunurile (UAE). Totuși, tratamentul exact de raportare către ANAF trebuie documentat prin acte de proveniență și contracte de vânzare.</li>
          </ul>
        </section>

        {/* SECTION 5: HOW TO OFFICIALLY TRANSFER TAX RESIDENCY */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <FileText className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              5. Cum se Schimbă Oficial Rezidența Fiscală din România în UAE
            </h2>
          </div>
          <p>
            Pentru a deveni rezident fiscal exclusiv în Emiratele Arabe Unite și a nu mai datora impozit pe venitul mondial în România, este obligatoriu să parcurgeți procedura oficială reglementată de Ministerul Finanțelor:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li><strong>Obținerea rezidenței în UAE:</strong> Titularul trebuie să dețină o viză validă (Golden Visa sau viză de rezidență) și <em>Emirates ID</em>.</li>
            <li><strong>Locuință permanentă și prezență:</strong> Menținerea unei locuințe permanente în UAE (proprietate sau contract de închiriere Ejari) și petrecerea a peste 183 de zile în UAE.</li>
            <li>
              <strong>Depunerea Chestionarului la ANAF:</strong> Cu minimum 30 de zile înainte de părăsirea României (sau ulterior când condițiile sunt întrunite), se depune la administrația financiară teritorială formularul <em>„Chestionar pentru stabilirea rezidenței fiscale a persoanei fizice la plecarea din România”</em>.
            </li>
            <li><strong>Notificarea ANAF:</strong> Inspectorii fiscali analizează centrul intereselor vitale și emit o decizie oficială prin care confirmă încetarea calității de rezident fiscal român pe venitul mondial.</li>
          </ol>
          <div className="p-4 bg-amber-50/70 border border-amber-200 font-mono text-xs text-amber-900 leading-relaxed">
            <strong>Important:</strong> Simpla mutare sau deținerea unui cont bancar în Dubai fără depunerea chestionarului și decizia ANAF vă menține în evidențele fiscale românești ca rezident fiscal răspunzător pentru venitul mondial.
          </div>
        </section>

        {/* SECTION 6: SOURCED LEGAL REFERENCES */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <ShieldCheck className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              6. Surse Primare și Baza Legală Consultată
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">România &bull; Legislație Primară</span>
              <ul className="text-slate-600 font-sans space-y-1 pt-1 list-disc pl-4 text-xs">
                <li>Legea nr. 74 din 3 noiembrie 1993 (M. Of. nr. 262 din 9 noiembrie 1993) &bull; Ratificare Convenție RO–UAE (semnată la Abu Dhabi la 11 aprilie 1993; actualizată prin Legea nr. 26/2016, M. Of. nr. 225 din 25 martie 2016)</li>
                <li>Legea nr. 227/2015 &bull; Codul Fiscal (art. 7, 59, 130)</li>
                <li>Ordinul MFP nr. 1099/2016 &bull; Procedura rezidenței fiscale</li>
                <li>Ghidul ANAF privind veniturile din străinătate</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block">UAE &bull; Legislație Primară</span>
              <ul className="text-slate-600 font-sans space-y-1 pt-1 list-disc pl-4 text-xs">
                <li>Federal Decree-Law No. 47 of 2022 on Corporate Tax</li>
                <li>Cabinet Decision No. 49 of 2023 on Natural Persons</li>
                <li>Cabinet Resolution No. 65 of 2022 on Residence</li>
                <li>Federal Tax Authority (FTA) Official Decrees</li>
              </ul>
            </div>
          </div>
        </section>

        {/* NAVIGATION / CTA */}
        <section className="pt-8 border-t border-slate-200 flex flex-wrap gap-4 font-mono text-xs">
          <Link
            href="/ghiduri/golden-visa-uae"
            className="px-5 py-3 bg-slate-950 hover:bg-slate-800 text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Ghid Golden Visa UAE</span>
          </Link>
          <Link
            href="/ghiduri/dubai-vs-bucuresti"
            className="px-5 py-3 border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 transition-colors flex items-center gap-2"
          >
            <span>Comparație Dubai vs București</span>
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
