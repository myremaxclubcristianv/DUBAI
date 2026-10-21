'use client'

import * as React from 'react'
import { ContactModal } from '@/components/layout/contact-modal'
import { ArrowRight } from 'lucide-react'

export function HomeConsultationCta() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2.5 px-7 py-4 bg-slate-950 hover:bg-slate-800 text-white text-xs font-mono uppercase tracking-[0.18em] font-semibold transition-all shadow-md cursor-pointer group"
      >
        <span>REQUEST INFORMATION</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
