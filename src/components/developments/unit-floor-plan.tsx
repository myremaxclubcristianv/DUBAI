'use client'

import * as React from 'react'
import { Maximize2, X, Info, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { BRABUS_FLOOR_PLANS } from '@/lib/data/developments'

interface UnitFloorPlanProps {
  planId: 'type-01-corner' | 'type-02-middle' | 'type-03-corner' | 'type-06-middle'
  unitNumber?: string
  tower?: string
  floor?: number
  hasDiscrepancy?: boolean
  discrepancyNote?: string
  showLightboxButton?: boolean
  className?: string
}

export function ArchitecturalPlanSvg({ planId }: { planId: string }) {
  if (planId === 'type-01-corner') {
    // 3-Bedroom Corner Suite (127 m2 internal + 28 m2 terrace)
    return (
      <svg
        viewBox="0 0 800 560"
        className="w-full h-auto text-slate-900 select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="terrace-hatch" width="12" height="12" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#e2e8f0" strokeWidth="2" />
          </pattern>
        </defs>

        {/* Boundary background */}
        <rect width="800" height="560" fill="#f8fafc" />

        {/* Outer Balcony / Terrace (Wrap-around Corner) */}
        <path
          d="M 40 40 L 760 40 L 760 160 L 710 160 L 710 80 L 100 80 L 100 500 L 40 500 Z"
          fill="url(#terrace-hatch)"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
        <text x="360" y="65" fill="#475569" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          WRAP-AROUND CORNER TERRACE — 28.00 m² (301.39 SQ FT)
        </text>

        {/* Main Unit Perimeter Walls */}
        <path
          d="M 100 80 L 710 80 L 710 500 L 240 500 L 240 420 L 100 420 Z"
          fill="#ffffff"
          stroke="#0f172a"
          strokeWidth="3.5"
        />

        {/* Room Partitions */}
        {/* Living & Dining Salon */}
        <rect x="100" y="80" width="360" height="220" fill="none" stroke="#334155" strokeWidth="2" />
        <text x="280" y="180" fill="#0f172a" fontSize="15" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
          LIVING &amp; DINING SALON
        </text>
        <text x="280" y="202" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">
          Dual Panoramic Glazing &bull; 44.5 m²
        </text>

        {/* Kitchen */}
        <rect x="100" y="300" width="180" height="120" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
        <text x="190" y="355" fill="#0f172a" fontSize="12" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
          GOURMET KITCHEN
        </text>
        <text x="190" y="375" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
          Integrated Island &bull; 14.2 m²
        </text>

        {/* Entrance Foyer & Powder Room */}
        <rect x="280" y="300" width="180" height="120" fill="none" stroke="#334155" strokeWidth="2" />
        <text x="370" y="350" fill="#0f172a" fontSize="12" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
          FOYER &amp; POWDER RM
        </text>
        <text x="370" y="370" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
          Guest Washroom &bull; 7.8 m²
        </text>

        {/* Master Bedroom Suite */}
        <rect x="460" y="80" width="250" height="190" fill="none" stroke="#334155" strokeWidth="2" />
        <text x="585" y="165" fill="#0f172a" fontSize="13" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
          MASTER BEDROOM SUITE
        </text>
        <text x="585" y="185" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">
          Walk-In Dressing &bull; 24.8 m²
        </text>

        {/* Master En-suite Bath */}
        <rect x="585" y="270" width="125" height="110" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
        <text x="647" y="325" fill="#0f172a" fontSize="11" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
          MASTER BATH
        </text>
        <text x="647" y="342" fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="middle">
          Dual Vanity &bull; Tub
        </text>

        {/* Bedroom 02 */}
        <rect x="460" y="270" width="125" height="110" fill="none" stroke="#334155" strokeWidth="1.5" />
        <text x="522" y="325" fill="#0f172a" fontSize="11" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
          BEDROOM 02
        </text>
        <text x="522" y="342" fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="middle">
          En-suite &bull; 15.6 m²
        </text>

        {/* Bedroom 03 */}
        <rect x="460" y="380" width="250" height="120" fill="none" stroke="#334155" strokeWidth="2" />
        <text x="585" y="440" fill="#0f172a" fontSize="13" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
          BEDROOM 03
        </text>
        <text x="585" y="460" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">
          Fitted Wardrobes &bull; 17.2 m²
        </text>

        {/* Architectural Entry Arrow */}
        <path d="M 370 470 L 370 425" stroke="#0284c7" strokeWidth="3" markerEnd="url(#arrow)" />
        <polygon points="364,435 370,420 376,435" fill="#0284c7" />
        <text x="370" y="490" fill="#0284c7" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          MAIN ENTRANCE
        </text>

        {/* Dimension & Scale Bar */}
        <line x1="100" y1="535" x2="710" y2="535" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="100" y1="530" x2="100" y2="540" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="710" y1="530" x2="710" y2="540" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="405" y="550" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">
          TOTAL INTERNAL: 127.00 m² (1,367.02 SQ FT) &bull; TOTAL WITH TERRACE: 155.00 m² (1,668.41 SQ FT)
        </text>
      </svg>
    )
  }

  if (planId === 'type-02-middle') {
    // 2-Bedroom Middle Suite (91 m2 internal + 21 m2 terrace)
    return (
      <svg
        viewBox="0 0 800 520"
        className="w-full h-auto text-slate-900 select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="terrace-hatch-2" width="12" height="12" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#e2e8f0" strokeWidth="2" />
          </pattern>
        </defs>

        <rect width="800" height="520" fill="#f8fafc" />

        {/* Full-Width Waterfront Balcony */}
        <rect x="80" y="40" width="640" height="70" fill="url(#terrace-hatch-2)" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
        <text x="400" y="78" fill="#475569" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          PRIVATE SEA-VIEW BALCONY — 21.00 m² (226.04 SQ FT)
        </text>

        {/* Main Unit Perimeter */}
        <rect x="80" y="110" width="640" height="340" fill="#ffffff" stroke="#0f172a" strokeWidth="3.5" />

        {/* Living / Dining Central Core */}
        <rect x="250" y="110" width="300" height="210" fill="none" stroke="#334155" strokeWidth="2" />
        <text x="400" y="210" fill="#0f172a" fontSize="15" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
          LIVING &amp; DINING ROOM
        </text>
        <text x="400" y="232" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">
          Direct Balcony Access &bull; 34.0 m²
        </text>

        {/* Kitchen & Entry Foyer */}
        <rect x="250" y="320" width="300" height="130" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
        <text x="400" y="375" fill="#0f172a" fontSize="13" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
          OPEN KITCHEN &amp; FOYER
        </text>
        <text x="400" y="395" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
          Breakfast Counter &bull; Entrance Alcove &bull; 15.2 m²
        </text>

        {/* Master Bedroom (Left Wing) */}
        <rect x="80" y="110" width="170" height="230" fill="none" stroke="#334155" strokeWidth="2" />
        <text x="165" y="215" fill="#0f172a" fontSize="13" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
          MASTER SUITE
        </text>
        <text x="165" y="235" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
          En-suite &bull; 18.5 m²
        </text>

        {/* Master Bath */}
        <rect x="80" y="340" width="170" height="110" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
        <text x="165" y="395" fill="#0f172a" fontSize="11" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
          MASTER BATH
        </text>
        <text x="165" y="412" fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="middle">
          Shower &bull; Vanity
        </text>

        {/* Bedroom 02 (Right Wing) */}
        <rect x="550" y="110" width="170" height="230" fill="none" stroke="#334155" strokeWidth="2" />
        <text x="635" y="215" fill="#0f172a" fontSize="13" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
          BEDROOM 02
        </text>
        <text x="635" y="235" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
          Sea Vista &bull; 16.0 m²
        </text>

        {/* Bathroom 02 / Guest Toilet */}
        <rect x="550" y="340" width="170" height="110" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
        <text x="635" y="395" fill="#0f172a" fontSize="11" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
          BATHROOM 02
        </text>
        <text x="635" y="412" fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="middle">
          Guest WC &bull; Shower
        </text>

        {/* Entry indicator */}
        <polygon points="394,475 400,460 406,475" fill="#0284c7" />
        <text x="400" y="495" fill="#0284c7" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          MAIN ENTRANCE
        </text>

        {/* Dimensions footer */}
        <text x="400" y="515" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">
          TOTAL INTERNAL: 91.00 m² (979.52 SQ FT) &bull; TOTAL WITH BALCONY: 112.00 m² (1,205.56 SQ FT)
        </text>
      </svg>
    )
  }

  if (planId === 'type-03-corner') {
    // 2-Bedroom Corner Suite (105 m2 internal + 25-32 m2 terrace)
    return (
      <svg
        viewBox="0 0 800 540"
        className="w-full h-auto text-slate-900 select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="terrace-hatch-3" width="12" height="12" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="12" stroke="#e2e8f0" strokeWidth="2" />
          </pattern>
        </defs>

        <rect width="800" height="540" fill="#f8fafc" />

        {/* Corner Wrap Balcony */}
        <path
          d="M 50 40 L 750 40 L 750 130 L 700 130 L 700 80 L 110 80 L 110 470 L 50 470 Z"
          fill="url(#terrace-hatch-3)"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeDasharray="4 2"
        />
        <text x="400" y="65" fill="#475569" fontSize="12" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          EXPANSIVE CORNER TERRACE — 25.00 m² TO 32.00 m² (269.10 – 344.45 SQ FT)
        </text>

        {/* Main Unit Body */}
        <path
          d="M 110 80 L 700 80 L 700 470 L 260 470 L 260 410 L 110 410 Z"
          fill="#ffffff"
          stroke="#0f172a"
          strokeWidth="3.5"
        />

        {/* Corner Living & Dining */}
        <rect x="110" y="80" width="340" height="230" fill="none" stroke="#334155" strokeWidth="2" />
        <text x="280" y="185" fill="#0f172a" fontSize="15" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
          CORNER LIVING &amp; DINING
        </text>
        <text x="280" y="208" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">
          Dual Aspect Panoramic Sea Exposure &bull; 40.5 m²
        </text>

        {/* Kitchen */}
        <rect x="110" y="310" width="170" height="100" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
        <text x="195" y="358" fill="#0f172a" fontSize="12" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
          GOURMET KITCHEN
        </text>
        <text x="195" y="376" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
          Island Design &bull; 12.8 m²
        </text>

        {/* Master Bedroom */}
        <rect x="450" y="80" width="250" height="200" fill="none" stroke="#334155" strokeWidth="2" />
        <text x="575" y="170" fill="#0f172a" fontSize="13" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
          MASTER BEDROOM SUITE
        </text>
        <text x="575" y="190" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">
          Walk-in Robes &bull; 21.4 m²
        </text>

        {/* Master Bath */}
        <rect x="580" y="280" width="120" height="90" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
        <text x="640" y="325" fill="#0f172a" fontSize="11" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
          MASTER BATH
        </text>
        <text x="640" y="342" fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="middle">
          Double Basin
        </text>

        {/* Foyer & Guest Bath */}
        <rect x="280" y="310" width="170" height="160" fill="none" stroke="#334155" strokeWidth="1.5" />
        <text x="365" y="380" fill="#0f172a" fontSize="12" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
          FOYER &amp; POWDER RM
        </text>
        <text x="365" y="400" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
          Guest WC &bull; Storage
        </text>

        {/* Bedroom 02 */}
        <rect x="450" y="280" width="130" height="190" fill="none" stroke="#334155" strokeWidth="2" />
        <text x="515" y="370" fill="#0f172a" fontSize="12" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
          BEDROOM 02
        </text>
        <text x="515" y="390" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
          Wardrobe &bull; 15.2 m²
        </text>

        {/* Entry */}
        <polygon points="359,495 365,480 371,495" fill="#0284c7" />
        <text x="365" y="515" fill="#0284c7" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          MAIN ENTRANCE
        </text>

        <text x="400" y="533" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">
          TOTAL INTERNAL: 105.00 m² (1,130.21 SQ FT) &bull; TOTAL AREA: 130.00 – 137.00 m²
        </text>
      </svg>
    )
  }

  // Type 06 - Middle (11th Floor Sky Residence)
  return (
    <svg
      viewBox="0 0 800 560"
      className="w-full h-auto text-slate-900 select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="terrace-hatch-6" width="12" height="12" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="12" stroke="#e2e8f0" strokeWidth="2" />
        </pattern>
      </defs>

      <rect width="800" height="560" fill="#f8fafc" />

      {/* Massive 76 m2 Panoramic Sky Terrace */}
      <rect x="60" y="40" width="680" height="130" fill="url(#terrace-hatch-6)" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
      <text x="400" y="95" fill="#0f172a" fontSize="13" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
        LEVEL 11 OVERSIZED SKY TERRACE
      </text>
      <text x="400" y="118" fill="#475569" fontSize="11" fontFamily="monospace" textAnchor="middle">
        76.00 m² (818.06 SQ FT) &bull; Full Horizon Seascape &bull; Al Raha Skyline
      </text>

      {/* Internal Penthouse Residence Body */}
      <rect x="60" y="170" width="680" height="310" fill="#ffffff" stroke="#0f172a" strokeWidth="3.5" />

      {/* Living & Entertaining Gallery */}
      <rect x="230" y="170" width="340" height="180" fill="none" stroke="#334155" strokeWidth="2" />
      <text x="400" y="250" fill="#0f172a" fontSize="15" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
        EXECUTIVE LIVING &amp; DINING GALLERY
      </text>
      <text x="400" y="272" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">
        Panoramic Glass Frontage to Sky Terrace &bull; 48.0 m²
      </text>

      {/* Master Bedroom Suite (Left) */}
      <rect x="60" y="170" width="170" height="210" fill="none" stroke="#334155" strokeWidth="2" />
      <text x="145" y="260" fill="#0f172a" fontSize="13" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
        MASTER SUITE
      </text>
      <text x="145" y="280" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
        Direct Sky Terrace Access &bull; 23.5 m²
      </text>

      {/* Master Bath */}
      <rect x="60" y="380" width="170" height="100" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
      <text x="145" y="430" fill="#0f172a" fontSize="11" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
        MASTER EN-SUITE
      </text>
      <text x="145" y="448" fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="middle">
        Dual Vanities &bull; Rain Shower
      </text>

      {/* Bedroom 02 (Right) */}
      <rect x="570" y="170" width="170" height="210" fill="none" stroke="#334155" strokeWidth="2" />
      <text x="655" y="260" fill="#0f172a" fontSize="13" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
        BEDROOM 02
      </text>
      <text x="655" y="280" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
        Terrace Access &bull; 18.0 m²
      </text>

      {/* Secondary Bath & Powder Room */}
      <rect x="570" y="380" width="170" height="100" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
      <text x="655" y="430" fill="#0f172a" fontSize="11" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
        GUEST BATH &amp; WC
      </text>
      <text x="655" y="448" fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="middle">
        Fully Tiled
      </text>

      {/* Kitchen & Foyer (Bottom Center) */}
      <rect x="230" y="350" width="340" height="130" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
      <text x="400" y="405" fill="#0f172a" fontSize="13" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">
        GOURMET ISLAND KITCHEN &amp; FOYER
      </text>
      <text x="400" y="425" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
        Premium Joinery &bull; Integrated Countertops &bull; 18.5 m²
      </text>

      {/* Entrance */}
      <polygon points="394,505 400,490 406,505" fill="#0284c7" />
      <text x="400" y="525" fill="#0284c7" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
        MAIN ENTRANCE (LEVEL 11)
      </text>

      {/* Area & Discrepancy Footnote */}
      <text x="400" y="548" fill="#64748b" fontSize="10" fontFamily="monospace" textAnchor="middle">
        PRICE SHEET INTERNAL: 108.00 m² (1,162.50 SQ FT) &bull; PLAN LABEL: ~110.51 m² &bull; TOTAL: 184.00 m² (1,980.56 SQ FT)
      </text>
    </svg>
  )
}

export function UnitFloorPlan({
  planId,
  unitNumber,
  tower,
  floor,
  hasDiscrepancy = false,
  discrepancyNote,
  showLightboxButton = true,
  className = '',
}: UnitFloorPlanProps) {
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false)
  const planInfo = BRABUS_FLOOR_PLANS.find((p) => p.id === planId)

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Floor Plan Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#0284c7] font-semibold">
              Architectural Layout
            </span>
            {unitNumber && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-xs">
                Unit {unitNumber} {tower ? `&bull; Tower ${tower}` : ''} {floor ? `&bull; Floor ${floor}` : ''}
              </span>
            )}
          </div>
          <h4 className="text-sm font-semibold text-slate-900 font-sans mt-0.5">
            {planInfo?.name || 'Verified Typical Floor Plan'}
          </h4>
        </div>

        {showLightboxButton && (
          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-xs transition-colors cursor-pointer self-start sm:self-auto"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span>Enlarge Schematic</span>
          </button>
        )}
      </div>

      {/* Discrepancy Callout if Unit has one */}
      {hasDiscrepancy && (
        <div className="p-3 bg-amber-50/90 border border-amber-200 rounded-xs flex items-start gap-2.5 text-xs text-amber-900">
          <AlertTriangle className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-amber-800 font-bold block">
              Architectural Discrepancy Flag
            </span>
            <p className="text-amber-800 text-[11px] leading-relaxed">
              {discrepancyNote ||
                'Workbook states internal area of 1,162.50 sq ft (~108.00 m²); floor plan label indicates ~110.50–110.51 m². Source investor value is preserved internally; confirm before final reservation.'}
            </p>
          </div>
        </div>
      )}

      {/* Interactive SVG Schematic Canvas */}
      <div className="relative border border-slate-200 bg-slate-50/50 rounded-xs p-4 sm:p-6 overflow-hidden shadow-inner">
        <ArchitecturalPlanSvg planId={planId} />
      </div>

      {/* Room Program List */}
      {planInfo && (
        <div className="space-y-2 pt-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500 font-semibold block">
            Room Program &amp; Architectural Features
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {planInfo.rooms.map((room, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#0284c7] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-snug">{room}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Caveat & Qualification Notice */}
      <div className="flex items-start gap-2 p-3 bg-slate-50 border border-slate-200/80 rounded-xs text-[10.5px] text-slate-500">
        <Info className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Typical Layout Schematic:</strong> Room dimensions, column sizes, and balcony dimensions are approximate and vary slightly across levels and orientations. Exact unit plan is subject to developer revision and statutory approvals.
        </p>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-white border border-slate-300 shadow-2xl rounded-xs p-6 space-y-4 max-h-[94vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0284c7] font-semibold block">
                  High-Resolution Architectural Schematic
                </span>
                <h3 className="text-base font-semibold text-slate-900 font-sans">
                  {planInfo?.name} {unitNumber ? `— Unit ${unitNumber}` : ''}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xs transition-colors"
                aria-label="Close schematic lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xs">
              <ArchitecturalPlanSvg planId={planId} />
            </div>

            <div className="p-3 bg-slate-100/80 border border-slate-200 rounded-xs text-[11px] text-slate-600 leading-relaxed">
              <strong>Source Notice:</strong> Sourced from official Floor Plans Set R02. All drawings and dimensions are approximate and not to scale. The developer reserves the right to make revisions without prior notice.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
