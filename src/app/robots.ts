import { type MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // App-shell, auth, API and the unlinked design gallery have no SEO value.
      disallow: ['/app/', '/login', '/register', '/review', '/api/', '/options'],
    },
    sitemap: 'https://hire42.com/sitemap.xml',
    host: 'https://hire42.com',
  }
}
