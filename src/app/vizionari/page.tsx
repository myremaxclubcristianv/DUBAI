'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Building2,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'

export default function VizionariPage() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [dates, setDates] = React.useState('')
  const [propertyInterest, setPropertyInterest] = React.useState('')
  const [consent, setConsent] = React.useState(false)
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = React.useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!consent) {
      setErrorMessage('Este necesar să bifați acordul pentru transmiterea datelor către partenerul licențiat.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          service_category: 'Solicitare Vizionare Dubai',
          notes: `Interes: ${propertyInterest || 'Nespecificat'} | Perioadă călătorie: ${dates || 'Nespecificat'} | Acord transfer partener RERA: Confirmat`,
          source: 'VIZIONARI_FORM',
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || data.error || 'A apărut o problemă la înregistrarea solicitării.')
      }

      setStatus('success')
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Eroare de comunicare cu serverul.'
      setStatus('error')
      setErrorMessage(msg)
    }
  }

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
            Protocol Vizionări Dubai
          </span>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-slate-900 text-white font-mono text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Building2 className="h-3 w-3 text-[#c9a962]" />
              <span>PROTOCOL TRANSPARENT DE VIZIONARE</span>
            </span>
            <span className="text-xs font-mono text-slate-500">Asistență la fața locului în Dubai</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-slate-950 font-serif tracking-tight leading-tight max-w-4xl">
            Solicită o vizionare prin parteneri autorizați RERA
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
            Dacă plănuiți o deplasare în Dubai pentru inspectarea de proprietăți sau proiecte off-plan, vă punem în legătură cu profesioniști licențiați locali, după confirmarea disponibilității și a interesului dumneavoastră.
          </p>
        </div>
      </header>

      {/* 3. MAIN WORKFLOW & FORM */}
      <main className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-16 flex-1">

        {/* 5-Step Transparent Flow */}
        <section className="space-y-6">
          <div className="space-y-1 border-b border-slate-200 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
              CUM FUNCȚIONEAZĂ FLUXUL NOSTRU TRANSPARENT
            </span>
            <h2 className="text-2xl font-light text-slate-950 font-serif">
              Protocolul în 5 Pași Fără Promisiuni Fictive
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 font-mono text-xs">
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] text-slate-400 font-bold block">PASUL 01</span>
              <span className="font-bold text-slate-900 block font-sans text-xs">Solicitarea Dvs.</span>
              <p className="text-slate-600 font-sans text-[11px] leading-relaxed">
                Completați formularul cu proprietatea de interes și perioada vizitei.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] text-slate-400 font-bold block">PASUL 02</span>
              <span className="font-bold text-slate-900 block font-sans text-xs">Verificare Disponibilitate</span>
              <p className="text-slate-600 font-sans text-[11px] leading-relaxed">
                Contactăm parteneri autorizați RERA pentru a confirma disponibilitatea unității.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] text-slate-400 font-bold block">PASUL 03</span>
              <span className="font-bold text-slate-900 block font-sans text-xs">Consimțământ Explicit</span>
              <p className="text-slate-600 font-sans text-[11px] leading-relaxed">
                Vă informăm cine este partenerul și transferăm datele doar cu acordul dvs.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] text-slate-400 font-bold block">PASUL 04</span>
              <span className="font-bold text-slate-900 block font-sans text-xs">Confirmare Fermă</span>
              <p className="text-slate-600 font-sans text-[11px] leading-relaxed">
                Programarea este stabilită ferm numai după acceptul dezvoltatorului/vânzătorului.
              </p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] text-slate-400 font-bold block">PASUL 05</span>
              <span className="font-bold text-slate-900 block font-sans text-xs">Vizionare la Fața Locului</span>
              <p className="text-slate-600 font-sans text-[11px] leading-relaxed">
                Sunteți însoțit de un broker licențiat cu număr BRN activ.
              </p>
            </div>
          </div>
        </section>

        {/* Form and Disclosures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-slate-50 border border-slate-200 shadow-2xs space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
                SOLICITARE INFORMAȚII VIZIONARE
              </span>
              <h3 className="text-2xl font-light text-slate-950 font-serif">
                Transmite Solicitarea
              </h3>
            </div>

            {status === 'success' ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 font-bold text-sm text-emerald-900">
                  <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0" />
                  <span>Solicitare Înregistrată</span>
                </div>
                <p className="font-sans leading-relaxed text-slate-700">
                  Am recepționat detaliile deplasării dumneavoastră. Vom verifica disponibilitatea partenerilor noștri licențiați RERA și vă vom contacta înainte de transmiterea oricăror date, pentru a vă prezenta profilul acestora.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="space-y-1.5 font-mono text-xs">
                  <label htmlFor="name" className="text-slate-700 font-semibold block">
                    Nume și Prenume <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ex: Mihai Ionescu"
                    className="w-full p-3 bg-white border border-slate-300 text-slate-900 font-sans text-sm focus:outline-none focus:border-slate-900 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 font-mono text-xs">
                    <label htmlFor="email" className="text-slate-700 font-semibold block">
                      Adresă de E-mail <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nume@domeniu.ro"
                      className="w-full p-3 bg-white border border-slate-300 text-slate-900 font-sans text-sm focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    <label htmlFor="phone" className="text-slate-700 font-semibold block">
                      Număr de Telefon (WhatsApp) <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+40 7xx xxx xxx"
                      className="w-full p-3 bg-white border border-slate-300 text-slate-900 font-sans text-sm focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <label htmlFor="dates" className="text-slate-700 font-semibold block">
                    Perioada Estimată a Vizitei în Dubai
                  </label>
                  <input
                    id="dates"
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    placeholder="ex: 15–22 Noiembrie 2026"
                    className="w-full p-3 bg-white border border-slate-300 text-slate-900 font-sans text-sm focus:outline-none focus:border-slate-900 transition-colors"
                  />
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <label htmlFor="interest" className="text-slate-700 font-semibold block">
                    Proprietatea sau Zona de Interes
                  </label>
                  <textarea
                    id="interest"
                    rows={3}
                    value={propertyInterest}
                    onChange={(e) => setPropertyInterest(e.target.value)}
                    placeholder="Menționați proiecte sau zone (ex: Downtown Dubai, Palm Jumeirah, off-plan vs ready)..."
                    className="w-full p-3 bg-white border border-slate-300 text-slate-900 font-sans text-sm focus:outline-none focus:border-slate-900 transition-colors"
                  />
                </div>

                {/* Consent */}
                <div className="pt-2 space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-600 leading-relaxed font-sans">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded-xs border-slate-300 text-slate-950 focus:ring-slate-900 shrink-0"
                    />
                    <span>
                      Înțeleg că DUBAI este o platformă independentă de cercetare și că vizionarea va fi preluată de un partener local autorizat RERA, după confirmarea disponibilității acestuia. Sunt de acord cu transmiterea datelor de contact în acest scop. <span className="text-rose-600">*</span>
                    </span>
                  </label>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-slate-950 hover:bg-slate-800 text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <span>{status === 'loading' ? 'Se înregistrează...' : 'SOLICITĂ INFORMAȚII VIZIONARE'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

              </form>
            )}
          </div>

          {/* Right Column: Transparent Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
              ANGAJAMENTUL NOSTRU DE TRANSPARENȚĂ
            </span>

            <div className="divide-y divide-slate-200 border border-slate-200 bg-white font-mono text-xs shadow-2xs">
              <div className="p-5 space-y-1.5">
                <span className="font-bold text-slate-900 block font-sans text-sm">
                  Nu Vindem „Pachete de Vizionare” Oarbe
                </span>
                <p className="text-slate-600 font-sans text-xs leading-relaxed">
                  Nu vă cerem taxe în avans pentru vizionări și nu pretindem că avem parteneriate exclusive acolo unde nu există confirmare fermă.
                </p>
              </div>

              <div className="p-5 space-y-1.5">
                <span className="font-bold text-slate-900 block font-sans text-sm">
                  Verificarea Prealabilă a Brokerului
                </span>
                <p className="text-slate-600 font-sans text-xs leading-relaxed">
                  Înainte de a vă trimite la o întâlnire, vă comunicăm numărul BRN al agentului și numărul ORN al agenției pentru a le putea verifica pe Dubai REST.
                </p>
              </div>

              <div className="p-5 space-y-1.5">
                <span className="font-bold text-slate-900 block font-sans text-sm">
                  Fără Presiune de Semnare
                </span>
                <p className="text-slate-600 font-sans text-xs leading-relaxed">
                  O vizionare nu vă obligă la nicio achiziție. Vă recomandăm să citiți întotdeauna ghidurile noastre de due diligence înainte de a semna un MOU Form F.
                </p>
              </div>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 space-y-2">
              <span className="font-bold text-slate-900 uppercase block text-[11px]">CONTACT DIRECT EDITORIAL</span>
              <p className="text-slate-600 font-sans text-xs">
                Pentru întrebări referitoare la cercetarea de piață sau documentație, ne puteți contacta direct:
              </p>
              <div className="pt-1 space-y-1 text-slate-950 font-bold">
                <div>E-mail: cristianvaduva@duck.com</div>
                <div>WhatsApp: +43 650 953 6345</div>
              </div>
            </div>
          </div>

        </div>

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
