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
        className={`fixed bottom-0 left-0 right-0 z-40 bg-[#ffffff] border-t border-[#e5e5ea] pb-[env(safe-area-inset-bottom)] transition-all duration-300 ${
          isModalOpen ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]'
        }`}
      >
        {/* Desktop Contact Bar */}
        <div className="hidden sm:flex items-center justify-between w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-2.5">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9f8144]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#111111] font-medium">
                Private Client Desk
              </span>
            </div>
            <span className="text-[12px] text-[#6b6b6b] font-light hidden md:inline">
              Tell us what you are looking for
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
                  className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.08em] text-[#6b6b6b] hover:text-[#111111] bg-[#f5f5f3] hover:bg-[#e5e5ea] transition-colors rounded-none cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleOpenWithInterest('PRIVATE CLIENT')}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-[#111111] text-[#ffffff] hover:bg-[#9f8144] transition-colors text-[11px] font-mono uppercase tracking-[0.14em] font-medium cursor-pointer shrink-0"
          >
            <span>Contact Desk</span>
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </button>
        </div>

        {/* Mobile Contact Bar */}
        <div className="sm:hidden flex items-center justify-between px-4 py-2.5 w-full">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9f8144]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#111111] font-medium">
              Private Client
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleOpenWithInterest('PRIVATE CLIENT')}
            className="flex items-center gap-1 px-3.5 py-1.5 bg-[#111111] text-[#ffffff] hover:bg-[#9f8144] transition-colors text-[10px] font-mono uppercase tracking-[0.14em] font-medium cursor-pointer"
          >
            <span>Contact</span>
            <ArrowUpRight className="h-2.5 w-2.5 opacity-60" />
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
