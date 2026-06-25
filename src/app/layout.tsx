import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hire42.com'),
  title: {
    template: '%s - Hire42',
    default: 'Hire42 — Put your gear to work.',
  },
  description:
    'Hire42 is the marketplace where New Zealand businesses and tradespeople hire out idle equipment to each other — making kit that sits unused earn its keep.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Hire42',
    title: 'Hire42 — Put your gear to work.',
    description:
      'New Zealand’s marketplace for hiring out idle equipment. List your gear, earn when it’s not in use; hire what you need from people nearby.',
    url: 'https://hire42.com',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire42 — Put your gear to work.',
    description: 'NZ’s marketplace for hiring out idle equipment.',
  },
  // Add the Google Search Console token here once the domain is verified:
  // verification: { google: '<token-from-search-console>' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hire42',
  url: 'https://hire42.com',
  logo: 'https://hire42.com/icon.png',
  description: 'New Zealand marketplace for peer-to-peer equipment hire.',
  areaServed: { '@type': 'Country', name: 'New Zealand' },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@hire42.com',
    contactType: 'customer support',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased', inter.variable)}
    >
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  )
}
