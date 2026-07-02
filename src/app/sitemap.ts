import { type MetadataRoute } from 'next'

import { getActiveProductIds } from '@/lib/products'

const BASE = 'https://hire42.com'

// Public marketing pages that return 200. /lenders, /borrowers and /terms are
// API/markdown routes consumed by the app, not crawlable pages, so they are
// intentionally omitted. Per-listing share pages are appended dynamically.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ['', '/support', '/careers', '/privacy-policy']
  const staticEntries: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.6,
  }))

  const productIds = await getActiveProductIds()
  const productEntries: MetadataRoute.Sitemap = productIds.map((id) => ({
    url: `${BASE}/app/product/${id}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.5,
  }))

  return [...staticEntries, ...productEntries]
}
