import { type Metadata } from 'next'

import { CallToAction } from '@/components/CallToAction'
import { Faqs, faqs } from '@/components/Faqs'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

// Mirror the visible FAQ copy into FAQPage structured data for rich results.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flat().map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

export default function Home() {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <FeaturedProducts />
      <Faqs />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
