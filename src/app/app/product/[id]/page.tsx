import { type Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { AppStoreLink } from '@/components/AppStoreLink'
import { GooglePlayLink } from '@/components/GooglePlayLink'
import { getProductForShare, resolveImageUrl } from '@/lib/products'

const CANONICAL_HOST = 'https://hire42.com'

function shareUrl(id: string): string {
  return `${CANONICAL_HOST}/app/product/${id}`
}

function imageUrl(mainImageUri: string | null): string | null {
  const supabaseUrl = process.env.SUPABASE_URL
  if (!supabaseUrl) return null
  return resolveImageUrl(mainImageUri, supabaseUrl)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = await getProductForShare(id)
  // Deleted, unknown, or de-listed listings must not be indexed.
  if (!product || !product.isActive) return { robots: 'noindex' }

  const image = imageUrl(product.mainImageUri)
  const url = shareUrl(id)
  const description = product.description?.slice(0, 160) ?? undefined

  return {
    title: `${product.name} — Hire42`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: product.name,
      description,
      url,
      images: image ? [{ url: image }] : [],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description,
      images: image ? [image] : [],
    },
  }
}

export default async function ProductSharePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await getProductForShare(id)
  // Only active listings are shareable; anything else 404s (with noindex above).
  if (!product || !product.isActive) notFound()

  const image = imageUrl(product.mainImageUri)
  const price =
    product.pricePerDay != null ? product.pricePerDay.toFixed(2) : null

  // Product + Offer structured data so the listing is eligible for product rich
  // results. Location is intentionally omitted — the share surface never leaks
  // the exact address (see ADDRESS_MASKING).
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    ...(product.description ? { description: product.description } : {}),
    ...(image ? { image } : {}),
    ...(product.pricePerDay != null
      ? {
          offers: {
            '@type': 'Offer',
            price: product.pricePerDay,
            priceCurrency: 'NZD',
            availability: 'https://schema.org/InStock',
            url: shareUrl(id),
          },
        }
      : {}),
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-white px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full max-w-2xl">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-100">
          {image ? (
            <Image
              src={image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42rem"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-300">
              <svg
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>

        <h1 className="mt-8 text-3xl font-medium tracking-tight text-gray-900">
          {product.name}
        </h1>
        {price && (
          <p className="mt-2 text-lg font-medium text-cyan-600">
            ${price} / day
          </p>
        )}
        {product.description && (
          <p className="mt-4 whitespace-pre-line text-lg text-gray-600">
            {product.description}
          </p>
        )}

        <div className="mt-10">
          <p className="text-base font-semibold text-gray-900">
            Get the Hire42 app to book this listing.
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <AppStoreLink />
            <GooglePlayLink />
          </div>
        </div>
      </div>
    </main>
  )
}
