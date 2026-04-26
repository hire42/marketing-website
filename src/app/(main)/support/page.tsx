import { type Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with Hire42. Contact our support team.',
}

export default function SupportPage() {
  return (
    <div className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Support
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Need help with Hire42? Our support team is here for you. Whether you
            have a question about a rental, a listing, payments, or anything
            else — just reach out and we&apos;ll get back to you as soon as we
            can.
          </p>

          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-cyan-50">
                <svg
                  className="h-6 w-6 text-cyan-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email us at</p>
                <a
                  href="mailto:support@hire42.com"
                  className="text-lg font-semibold text-cyan-600 hover:text-cyan-500"
                >
                  support@hire42.com
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            We aim to respond to all enquiries within one business day.
          </p>
        </div>
      </Container>
    </div>
  )
}
