import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate Investment Calculators | Net Yield & Cash Flow Engines',
  description: 'Nine mathematical financial engines modeling DLD acquisition outlays, mortgage schedules, Mollak service charges, and net ROI.',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/investment/calculators',
  },
}

export default function CalculatorsLayout({ children }: { children: React.ReactNode }) {
  return children
}
