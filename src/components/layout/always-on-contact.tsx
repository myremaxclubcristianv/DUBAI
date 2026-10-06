'use client'

import * as React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { ContactModal, InterestCategory } from './contact-modal'

export function AlwaysOnContact() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [selectedInterest, setSelectedInterest] = React.useState<InterestCategory>('PRIVATE CLIENT')

  const handleOpenWithInterest = (cat: InterestCategory) => {
    setSelectedInterest(cat)
    setIsModalOpen(true)
  }

  return (
    <>
      {/* Fixed Bottom Contact Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 pb-[env(safe-area-inset-bottom)] transition-all duration-300 ${
          isModalOpen ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 shadow-[0_-4px_24px_rgba(15,23,42,0.08)]'
        }`}
      >
        {/* Desktop Contact Bar */}
        <div className="hidden sm:flex items-center justify-between w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-2.5">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-900 font-semibold">
                Private Client Desk
              </span>
            </div>
            <span className="text-[12px] text-slate-500 font-light hidden md:inline">
              Direct access to Dubai real estate intelligence and verified advisory
            </span>
            <div className="hidden lg:flex items-center gap-1.5">
              {(
                [
                  { label: 'Property', cat: 'PROPERTY' },
                  { label: 'Investment', cat: 'INVESTMENT' },
                  { label: 'Residency', cat: 'RESIDENCY' },
                  { label: 'Private Client', cat: 'PRIVATE CLIENT' },
                ] as const
              ).map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleOpenWithInterest(item.cat as InterestCategory)}
                  className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.08em] text-slate-600 hover:text-[#0284c7] bg-slate-100 hover:bg-sky-50 transition-colors rounded-xs cursor-pointer border border-slate-200/80"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleOpenWithInterest('PRIVATE CLIENT')}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-[#0284c7] text-white hover:bg-[#0369a1] transition-all text-[11px] font-mono uppercase tracking-[0.14em] font-semibold cursor-pointer shrink-0 rounded-xs shadow-[0_2px_10px_rgba(2,132,199,0.3)]"
          >
            <span>Contact Desk</span>
            <ArrowUpRight className="h-3 w-3 opacity-90" />
          </button>
        </div>

        {/* Mobile Contact Bar */}
        <div className="sm:hidden flex items-center justify-between px-4 py-2.5 w-full">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-900 font-semibold">
              Private Client Desk
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleOpenWithInterest('PRIVATE CLIENT')}
            className="flex items-center gap-1 px-3.5 py-1.5 bg-[#0284c7] text-white hover:bg-[#0369a1] transition-colors text-[10px] font-mono uppercase tracking-[0.14em] font-semibold cursor-pointer rounded-xs shadow-xs"
          >
            <span>Contact</span>
            <ArrowUpRight className="h-2.5 w-2.5 opacity-90" />
          </button>
        </div>
      </div>

      {/* Editorial Contact Intake Sheet / Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialInterest={selectedInterest}
      />
    </>
  )
}
