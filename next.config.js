/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // Unlinked "secret" route: design options gallery served from public/options.
  // Nothing links here — you have to know the URL. Redirect to index.html so the
  // relative links/assets inside the static pages resolve under /options/.
  async redirects() {
    return [
      {
        source: '/options',
        destination: '/options/index.html',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
