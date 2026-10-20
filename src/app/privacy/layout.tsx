import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Privacy & Protection Policy',
  description: 'Statutory data governance and client privacy protocols under UAE Federal Decree-Law No. 45/2021 (PDPL).',
  alternates: {
    canonical: 'https://dubai.cristianvaduva.com/privacy',
  },
  openGraph: {
    title: 'Data Privacy & Protection Policy | Dubai Platform',
    description: 'Privacy policy, client confidentiality, and local storage governance.',
    url: 'https://dubai.cristianvaduva.com/privacy',
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
