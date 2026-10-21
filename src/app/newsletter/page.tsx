'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Mail,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Lock,
} from 'lucide-react'

export default function NewsletterPage() {
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [consent, setConsent] = React.useState(false)
  const [hpField, setHpField] = React.useState('') // Honeypot
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = React.useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!consent) {
      setErrorMessage('Este necesar să bifați acordul pentru prelucrarea datelor cu caracter personal.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          consent,
          hp_field: hpField,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'A apărut o problemă la înregistrare.')
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
            Abonare Analize Lunare
          </span>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-slate-900 text-white font-mono text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Mail className="h-3 w-3 text-[#c9a962]" />
              <span>CERCETARE EDITORIALĂ LUNARĂ</span>
            </span>
            <span className="text-xs font-mono text-slate-500">O singură ediție pe lună</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-slate-950 font-serif tracking-tight leading-tight max-w-4xl">
            Newsletter Lunar de Cercetare Imobiliară Dubai
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
            Date oficiale DLD, analize legislative și ghiduri obiective pentru investitorii din România. Fără promovare agresivă, fără promisiuni de randamente garantate.
          </p>
        </div>
      </header>

      {/* 3. MAIN FORM & PERKS */}
      <main className="w-full max-w-[1120px] mx-auto px-4 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-16 flex-1">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 sm:p-10 bg-slate-50 border border-slate-200 shadow-2xs space-y-6">

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
                  FORMULAR DE ÎNREGISTRARE
                </span>
                <h2 className="text-2xl font-light text-slate-950 font-serif">
                  Abonează-te la Ediția Lunarǎ
                </h2>
              </div>

              {status === 'success' ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-900">
                    <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0" />
                    <span>Înregistrare Confirmată</span>
                  </div>
                  <p className="font-sans leading-relaxed text-slate-700">
                    V-ați abonat cu succes la analiza lunară DUBAI. Veți primi următoarea ediție direct pe e-mail. Vă puteți dezabona oricând printr-un singur clic în subsolul oricărui mesaj.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-emerald-900 font-bold underline cursor-pointer"
                    >
                      Înregistrează altă adresă de e-mail
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Honeypot field (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_field">Lasă gol acest câmp</label>
                    <input
                      id="hp_field"
                      type="text"
                      value={hpField}
                      onChange={(e) => setHpField(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label htmlFor="name" className="text-slate-700 font-semibold block">
                      Nume Complet (Opțional)
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="ex: Andrei Popescu"
                      className="w-full p-3 bg-white border border-slate-300 text-slate-900 font-sans text-sm focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>

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

                  {/* GDPR Explicit Consent */}
                  <div className="pt-2 space-y-2">
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-600 leading-relaxed font-sans">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded-xs border-slate-300 text-slate-950 focus:ring-slate-900 shrink-0"
                      />
                      <span>
                        Sunt de acord cu prelucrarea datelor cu caracter personal în scopul transmiterii analizelor lunare de cercetare imobiliară. Înțeleg că mă pot dezabona în orice moment cu un singur clic. <span className="text-rose-600">*</span>
                      </span>
                    </label>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-slate-950 hover:bg-slate-800 text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-md cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <span>{status === 'loading' ? 'Se procesează...' : 'ABONEAZĂ-MĂ LA ANALIZA LUNARĂ'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 pt-1 justify-center">
                    <Lock className="h-3 w-3" />
                    <span>Date protejate &bull; Fără spam &bull; Dezabonare instantanee</span>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: What You Receive (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
              CONȚINUTUL FIECĂREI EDIȚII LUNARE
            </span>

            <div className="divide-y divide-slate-200 border border-slate-200 bg-white font-mono text-xs shadow-2xs">
              <div className="p-5 space-y-1.5">
                <span className="font-bold text-slate-900 block font-sans text-sm">
                  1. Sinteza Tranzacțiilor DLD
                </span>
                <p className="text-slate-600 font-sans text-xs leading-relaxed">
                  Date agregate din registrul deschis al Dubai Land Department: volume înregistrate, dinamica pe sectoare și indicii RERA.
                </p>
              </div>

              <div className="p-5 space-y-1.5">
                <span className="font-bold text-slate-900 block font-sans text-sm">
                  2. Modificări Legislative și Fiscale
                </span>
                <p className="text-slate-600 font-sans text-xs leading-relaxed">
                  Actualizări privind rezidența Golden Visa (Cabinet Res. 65/2022), cerințele de raportare ANAF (Declarația Unică) și noutăți de reglementare RERA.
                </p>
              </div>

              <div className="p-5 space-y-1.5">
                <span className="font-bold text-slate-900 block font-sans text-sm">
                  3. Ghiduri de Due Diligence și Riscuri
                </span>
                <p className="text-slate-600 font-sans text-xs leading-relaxed">
                  Analize practice despre verificarea conturilor escrow sub Legea 8/2007, validarea codurilor QR Trakheesi și selecția dezvoltatorilor.
                </p>
              </div>

              <div className="p-5 space-y-1.5">
                <span className="font-bold text-slate-900 block font-sans text-sm">
                  4. Ritm Redus: Zero Spam
                </span>
                <p className="text-slate-600 font-sans text-xs leading-relaxed">
                  Trimitem o singură sinteză concentrată pe lună (în ultimul joi al lunii). Datele dvs. nu sunt vândute sau cedate agențiilor de telemarketing.
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 space-y-1">
              <span className="font-bold text-slate-900 block text-[11px] uppercase">POLITICA DE CONFIDENȚIALITATE</span>
              <p className="text-[11px] font-sans leading-relaxed">
                Adresa dumneavoastră este stocată în conformitate cu GDPR. Aveți dreptul de acces, rectificare și ștergere definitivă la cerere prin dezabonare sau la adresa <a href="mailto:cristianvaduva@duck.com" className="underline font-bold text-slate-900">cristianvaduva@duck.com</a>.
              </p>
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
