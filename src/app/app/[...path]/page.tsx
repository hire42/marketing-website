import { type Metadata } from 'next'

import { APP_STORE_ID } from '@/lib/appStore'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ path: string[] }>
}): Promise<Metadata> {
  const { path } = await params
  return {
    robots: 'noindex',
    // Safari Smart App Banner: universal links don't trigger from Safari's
    // address bar, so this banner is how a Safari visitor with the app
    // installed gets into it — `app-argument` carries the deep link through.
    itunes: {
      appId: APP_STORE_ID,
      appArgument: `https://hire42.com/app/${path.join('/')}`,
    },
  }
}

export default function AppFallback() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Open in the Hire42 app
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Download Hire42 to continue.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="https://apps.apple.com/nz/app/hire42/id6763940838"
          className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Download on the App Store
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.hire42.mobile.app"
          className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Get it on Google Play
        </a>
      </div>
    </main>
  )
}
