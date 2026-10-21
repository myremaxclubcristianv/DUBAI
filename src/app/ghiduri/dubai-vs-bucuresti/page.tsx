import * as React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Scale,
  TrendingUp,
  Coins,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dubai vs București: Randament Net, Riscuri și Costuri Reale | Ghid Comparativ 2026',
  description:
    'Comparație obiectivă între investițiile imobiliare în Dubai și București: randamente brute vs nete, costuri de achiziție, service charges, risc valutar EUR/USD și fiscalitate.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/ghiduri/dubai-vs-bucuresti',
  },
  openGraph: {
    title: 'Dubai vs București: Randament Net, Riscuri și Costuri Reale | DUBAI',
    description:
      'Studiu comparativ independent: analiză detaliată a randamentelor nete, taxelor, riscurilor valutare și lichidității între Dubai și piața imobiliară din București.',
    url: 'https://dubai.cristianvaduva.com/ghiduri/dubai-vs-bucuresti',
    siteName: 'DUBAI — Independent Real Estate Research',
    locale: 'ro_RO',
    type: 'article',
  },
}

export default function DubaiVsBucurestiPage() {
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
            Analiză Comparată &bull; Modul 05
          </span>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-800 font-semibold uppercase">
              Studiu Comparativ Independent
            </span>
            <span>&bull;</span>
            <span>Timp lectură: 13 minute</span>
            <span>&bull;</span>
            <span>Ultima revizuire: Octombrie 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-slate-950 font-serif tracking-tight leading-tight max-w-4xl">
            Dubai vs București: randament net, riscuri și costuri reale
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
            O analiză educațională neutră și documentată pentru investitorul român. Separăm randamentele brute din reclame de randamentele nete reale și evaluăm costurile ascunse pe ambele piețe.
          </p>

          <div className="p-4 bg-slate-50 border-l-2 border-slate-900 text-xs font-mono text-slate-700 leading-relaxed">
            <strong>Premisă editorială:</strong> Dubaiul și Bucureștiul nu sunt piețe concurente directe, ci instrumente de diversificare cu profiluri de risc, monede de referință și cadre legale distincte. Nicio piață nu oferă „câștiguri garantate”.
          </div>
        </div>
      </header>

      {/* 3. MAIN CONTENT */}
      <main className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-12 text-slate-800 font-sans leading-relaxed text-sm sm:text-base">

        {/* SECTION 1: THE GROSS VS NET ILLUSION */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <TrendingUp className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              1. Iluzia Randamentului Brut: De ce Cifrele din Marketing Induc în Eroare
            </h2>
          </div>
          <p>
            Cea mai răspândită capcană în marketingul imobiliar este prezentarea <strong>randamentului brut</strong> (Gross Rental Yield) ca și cum ar fi venitul pe care investitorul îl încasează efectiv în cont.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-1">
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900 block uppercase">Randament Brut (Gross Yield)</span>
              <p className="text-slate-600 font-sans">
                Chiria anuală totală împărțită la prețul de achiziție. Ignoră complet taxele de achiziție, mentenanța (service charges), perioadele fără chiriaș, asigurarea, reparațiile și impozitele.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
              <span className="font-bold text-emerald-800 block uppercase">Randament Net (Net Yield)</span>
              <p className="text-slate-600 font-sans">
                Venitul net din chirii (după deducerea tuturor costurilor de operare, mentenanță, comision management și taxe) raportat la <strong>investiția totală inițială</strong> (preț + taxe de transfer DLD/notar).
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMPARATIVE MATRIX TABLE */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Scale className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              2. Matricea Comparativă pe 10 Dimensiuni Cheie
            </h2>
          </div>
          <p>
            Comparația directă a parametrilor fundamentali între cele două piețe imobiliare:
          </p>

          <div className="overflow-x-auto border border-slate-200 text-xs font-mono">
            <table className="w-full text-left">
              <thead className="bg-slate-100 border-b border-slate-200">
                <tr>
                  <th className="p-3 uppercase">Dimensiune</th>
                  <th className="p-3 uppercase">Dubai (EAU)</th>
                  <th className="p-3 uppercase">București (România)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-sans">
                <tr>
                  <td className="p-3 font-mono font-semibold">1. Costuri de achiziție inițială</td>
                  <td className="p-3">~6.5% – 7.2% pe piața secundară (DLD 4%, Trustee, NOC, broker 2%)</td>
                  <td className="p-3">~3.35% – 3.5% (Onorariu notarial ~1.2%, ANCPI 0.15%, comision 2%)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold">2. Mentenanță anuală (Service Charges)</td>
                  <td className="p-3">Ridicată: AED 15–40/sq.ft anual (acoperă pază, piscină, sală, fațadă)</td>
                  <td className="p-3">Redusă: întreținere curentă bloc, dar reparațiile capitale cad direct pe proprietar</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold">3. Gestiune proprietate (Property Mgmt)</td>
                  <td className="p-3">5% – 10% din chiria anuală (necesară la distanță)</td>
                  <td className="p-3">8% – 10% dacă este externalizată, sau 0% dacă o administrați personal</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold">4. Risc valutar</td>
                  <td className="p-3">AED legat fix de USD (3.6725); expunere pe cursul EUR/USD</td>
                  <td className="p-3">Prețuri ancorate în EUR, cheltuieli în RON; supraveghere curs BNR</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold">5. Perioadă fără chiriaș (Vacancy)</td>
                  <td className="p-3">Medie 2–4 săptămâni în hub-uri prime; rotație mai mare la expați</td>
                  <td className="p-3">Medie 1–2 luni între chiriași; contracte pe termen mai lung (1–2 ani)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold">6. Finanțare bancară nerezidenți</td>
                  <td className="p-3">Băncile locale cer avans 40% – 50% pentru investitori străini</td>
                  <td className="p-3">Credite ipotecare accesibile rezidenților cu avans 15% – 25%</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold">7. Fiscalitate pe venitul din chirii</td>
                  <td className="p-3">0% impozit pe venit persoane fizice în UAE (dar supus ANAF în RO dacă sunteți rezident)</td>
                  <td className="p-3">10% impozit pe venit (cu cotă forfetară 20%) + CASS dacă depășește plafoanele</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold">8. Protecție legală dezvoltator (Off-Plan)</td>
                  <td className="p-3">Strictă: Legea 8/2007 obligă cont escrow individual auditat de DLD</td>
                  <td className="p-3">Protecție contractuală standard, dar fără cerință generalizată de cont escrow</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold">9. Drepturi proprietar vs chiriaș</td>
                  <td className="p-3">Legislație RERA strictă; evacuarea necesită notificare notarială de 12 luni</td>
                  <td className="p-3">Contractele înregistrate la ANAF sunt titlu executoriu pentru chirie</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold">10. Lichiditatea pieței secundare</td>
                  <td className="p-3">Lichiditate mare în prime locations, dar dependentă de noile livrări masive</td>
                  <td className="p-3">Timp mediu de vânzare 3–6 luni, ofertă limitată în zonele centrale consacrate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3: HYPOTHETICAL EDUCATIONAL SIMULATION */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <Coins className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              3. Simulare Ipotetică Educațională: Randament Brut vs Randament Net
            </h2>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            *Exemplu educațional simulat cu scop pur ilustrativ. Nu constituie garanție de randament sau promisiune de rentabilitate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            {/* DUBAI SIMULATION */}
            <div className="p-6 bg-slate-50 border border-slate-200 space-y-4">
              <span className="font-bold text-slate-900 block uppercase text-sm border-b border-slate-200 pb-2">
                Simulare Dubai &bull; Apartament 1BR (Prime Hub)
              </span>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Preț achiziție ipotetic:</span>
                  <span className="font-bold">1.200.000 AED (~300.000 €)</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Taxe achiziție (~7% DLD, trustee, fees):</span>
                  <span>+84.000 AED</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2 font-bold">
                  <span>Investiție totală de capital:</span>
                  <span>1.284.000 AED</span>
                </div>
                <div className="flex justify-between text-emerald-800">
                  <span>Chirie brută anuală ipotetică (barem zonal):</span>
                  <span>90.000 AED (~7.5% brut simulat)</span>
                </div>
                <div className="flex justify-between text-rose-700">
                  <span>Service charge (750 sqft @ AED 20):</span>
                  <span>-15.000 AED</span>
                </div>
                <div className="flex justify-between text-rose-700">
                  <span>Property management (7% din chirie):</span>
                  <span>-6.300 AED</span>
                </div>
                <div className="flex justify-between text-rose-700">
                  <span>Rezervă neocupare / mentenanță (~5%):</span>
                  <span>-4.500 AED</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-slate-900 text-sm">
                  <span>Venit Net din Exploatare:</span>
                  <span>64.200 AED / an</span>
                </div>
                <div className="p-3 bg-white border border-slate-200 text-center font-bold text-emerald-900">
                  RANDAMENT NET REAL PE CAPITAL INVESTIT: ~5.00%
                </div>
              </div>
            </div>

            {/* BUCHAREST SIMULATION */}
            <div className="p-6 bg-slate-50 border border-slate-200 space-y-4">
              <span className="font-bold text-slate-900 block uppercase text-sm border-b border-slate-200 pb-2">
                Simulare București &bull; Apartament 2 Camere (Nord)
              </span>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Preț achiziție ipotetic:</span>
                  <span className="font-bold">180.000 € (~895.000 RON)</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Taxe achiziție (~3.5% notar, ANCPI):</span>
                  <span>+6.300 €</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2 font-bold">
                  <span>Investiție totală de capital:</span>
                  <span>186.300 €</span>
                </div>
                <div className="flex justify-between text-emerald-800">
                  <span>Chirie brută anuală estimată:</span>
                  <span>11.400 € (950 €/lună, 6.3% brut)</span>
                </div>
                <div className="flex justify-between text-rose-700">
                  <span>Impozit pe venit (10% cu forfetară):</span>
                  <span>-912 €</span>
                </div>
                <div className="flex justify-between text-rose-700">
                  <span>CASS estimat (plafon aplicabil):</span>
                  <span>-396 €</span>
                </div>
                <div className="flex justify-between text-rose-700">
                  <span>Perioadă neocupare / reparații (1 lună):</span>
                  <span>-950 €</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-slate-900 text-sm">
                  <span>Venit Net din Exploatare:</span>
                  <span>9.142 € / an</span>
                </div>
                <div className="p-3 bg-white border border-slate-200 text-center font-bold text-emerald-900">
                  RANDAMENT NET REAL PE CAPITAL INVESTIT: ~4.91%
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-600 font-light leading-relaxed pt-2">
            <strong>Concluzia simulării:</strong> După scăderea taxelor de mentenanță consistente din Dubai (care acoperă facilități superioare) și a impozitelor din România, <strong>diferența dintre randamentele nete reale este substanțial mai mică</strong> decât diferența dintre randamentele brute din reclame. Decizia de alocare trebuie să se bazeze pe obiective de diversificare valutară și profil de risc, nu pe cifre brute iluzorii.
          </p>
        </section>

        {/* SECTION 4: STRATEGIC RECOMMENDATIONS */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-2">
            <CheckCircle2 className="h-5 w-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-light text-slate-950 font-serif">
              4. Recomandări Strategice pentru Investitorul Român
            </h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Nu investiți toți banii într-o singură piață:</strong> Dacă dețineți deja proprietăți în România, o alocare în Dubai aduce expunere pe moneda ancorată la dolar și pe o economie globală în creștere.</li>
            <li><strong>Verificați service charge-ul înainte de a semna:</strong> O proprietate cu randament brut de 8% dar cu service charge de AED 35/sq ft va avea un randament net similar cu una mai conservatoare cu service charge mic.</li>
            <li><strong>Luați în calcul distanța:</strong> Administrarea la 4.000 km distanță presupune colaborarea cu o companie de încredere de property management autorizată RERA.</li>
          </ul>
        </section>

        {/* NAVIGATION / CTA */}
        <section className="pt-8 border-t border-slate-200 flex flex-wrap gap-4 font-mono text-xs">
          <Link
            href="/ghiduri/impozitare-romania-dubai"
            className="px-5 py-3 bg-slate-950 hover:bg-slate-800 text-white transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Ghid Fiscal România–Dubai</span>
          </Link>
          <Link
            href="/ghiduri/riscuri-off-plan-dubai"
            className="px-5 py-3 border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 transition-colors flex items-center gap-2"
          >
            <span>Riscurile Off-Plan în Dubai</span>
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
