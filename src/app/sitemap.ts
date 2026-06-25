import { type MetadataRoute } from 'next'

const BASE = 'https://hire42.com'

// Only public marketing pages that return 200. /lenders, /borrowers and /terms
// are API/markdown routes consumed by the app, not crawlable pages, so they are
// intentionally omitted. Add dynamic per-listing URLs here once those exist.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/support', '/careers', '/privacy-policy']
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.6,
  }))
}
