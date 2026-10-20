import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ToastProvider } from "@/components/ui/toast";
import { ClientProvider } from "@/lib/context/client-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dubai Real Estate & Investment Intelligence | Cristian Văduva",
    template: "%s | Dubai Real Estate & Investment Intelligence",
  },
  description:
    "Independent Dubai real estate research, statutory investment underwriting, and private client advisory with complete data provenance.",
  metadataBase: new URL("https://dubai.cristianvaduva.com"),
  alternates: {
    canonical: "https://dubai.cristianvaduva.com",
  },
  openGraph: {
    title: "Dubai Real Estate & Investment Intelligence",
    description:
      "Independent Dubai real estate research, statutory investment underwriting, and private client advisory with complete data provenance.",
    url: "https://dubai.cristianvaduva.com",
    type: "website",
    locale: "en_US",
    siteName: "Dubai Real Estate & Investment Platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Real Estate & Investment Intelligence",
    description:
      "Independent Dubai real estate research, statutory investment underwriting, and private client advisory with complete data provenance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://dubai.cristianvaduva.com/#website",
      "url": "https://dubai.cristianvaduva.com",
      "name": "Dubai Real Estate & Investment Intelligence",
      "description":
        "Independent property research, statutory investment underwriting, and private client advisory in Dubai.",
      "publisher": {
        "@id": "https://dubai.cristianvaduva.com/#organization",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://dubai.cristianvaduva.com/#organization",
      "name": "Dubai Real Estate Intelligence",
      "url": "https://dubai.cristianvaduva.com",
      "logo": "https://dubai.cristianvaduva.com/opengraph-image",
      "founder": {
        "@type": "Person",
        "name": "Cristian Văduva",
        "url": "https://cristianvaduva.com",
      },
      "sameAs": [
        "https://cristianvaduva.com",
        "https://executive.cristianvaduva.com",
      ],
      "description":
        "Independent research and advisory platform underwriting prime Dubai real estate assets with complete data provenance.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <ToastProvider>
          <ClientProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ClientProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
