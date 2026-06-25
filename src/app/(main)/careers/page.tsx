import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Hire42 as a Listing Agent. Sign up equipment owners in your region and earn an ongoing share of the revenue they generate.',
  alternates: { canonical: '/careers' },
}

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  )
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul role="list" className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-gray-600">
          <CheckIcon className="mt-1 h-5 w-5 flex-none text-cyan-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
      <div className="mt-4 text-base leading-7 text-gray-600">{children}</div>
    </section>
  )
}

const regions: { name: string; status: string; open: boolean }[] = [
  { name: 'Far North District', status: 'Open now', open: true },
  { name: 'Whangārei District', status: 'Open now', open: true },
  { name: 'Kaipara District', status: 'Opening soon', open: false },
  { name: 'Auckland', status: 'Register interest', open: false },
  { name: 'Waikato', status: 'Register interest', open: false },
  { name: 'Bay of Plenty', status: 'Register interest', open: false },
  { name: 'Wellington', status: 'Register interest', open: false },
  { name: 'Canterbury', status: 'Register interest', open: false },
  { name: 'Otago', status: 'Register interest', open: false },
]

const applyHref =
  'mailto:support@hire42.com?subject=Listing%20Agent%20application'

export default function CareersPage() {
  return (
    <div className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <p className="text-base font-semibold text-cyan-600">
            Careers at Hire42
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Listing Agent
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm">
            <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-700">
              Contract · Commission-only
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-700">
              Part-time · Flexible
            </span>
            <span className="rounded-full bg-cyan-50 px-3 py-1 font-medium text-cyan-700">
              Far North &amp; Whangārei — open now
            </span>
          </div>
          <p className="mt-8 text-lg leading-8 text-gray-600">
            Hire42 turns idle equipment into income — letting people hire out the
            gear sitting in their shed, and letting their neighbours rent it
            instead of buying it. We&apos;re looking for locally connected people
            to bring equipment owners onto the platform across New Zealand, and
            to share in the revenue they generate.
          </p>

          <div className="mt-10">
            <Button href={applyHref} color="cyan">
              Apply now
            </Button>
          </div>

          {/* The opportunity */}
          <Section title="The opportunity">
            <p>
              Think of it like being a real estate agent — but for equipment
              hire. You work a region, sign up the equipment owners in it, and
              get them listing their gear on Hire42. For every owner you bring
              on, you earn an ongoing percentage of the revenue their rentals
              generate. The more active listers in your book, the more you earn,
              month after month.
            </p>
            <p className="mt-4">
              It&apos;s a build-your-own-book role for someone who knows their
              patch and likes talking to people. There&apos;s no cold,
              corporate sales script — just helping locals get value out of gear
              that&apos;s otherwise gathering dust.
            </p>
          </Section>

          {/* How it works */}
          <Section title="How it works">
            <ol className="mt-2 space-y-6">
              {[
                [
                  'Work your territory',
                  'You hold an exclusive region — a district council area such as the Far North. You reach out to the equipment owners in it: farmers, tradespeople, event operators, lifestyle-block owners.',
                ],
                [
                  'Sign them up',
                  'You help them get verified and list their gear — trailers, diggers, compressors, generators, whatever they own. Each owner you sign is attributed to you.',
                ],
                [
                  'Earn on every rental',
                  'When their gear gets hired, you earn a share of the platform fee on that booking — for 18 months from their first rental. Paid monthly, with a statement showing exactly where it came from.',
                ],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-cyan-500 text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="mt-1 leading-7">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          {/* What you earn */}
          <Section title="What you earn">
            <FeatureList
              items={[
                'A trailing commission of 25% of Hire42’s net revenue on every booking made by the listers you sign — for 18 months from each lister’s first rental.',
                'A one-off activation bonus when a lister you signed completes their first rental.',
                'Paid monthly, with a clear statement of the listers and bookings behind every payment.',
                'Uncapped and compounding — the more active listers you build and retain, the more your monthly income grows.',
              ]}
            />
            <p className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm leading-6 text-gray-600">
              Be clear-eyed about this: it&apos;s a commission-only, part-time
              role best suited to someone already embedded in their community.
              Early on it&apos;s supplementary income — but it builds into a real
              residual as your book of active listers grows with the region.
            </p>
          </Section>

          {/* Who we're looking for */}
          <Section title="Who we’re looking for">
            <p>
              You don&apos;t need a sales background. You need to know your
              region and be the kind of person locals already trust. This suits:
            </p>
            <FeatureList
              items={[
                'People embedded in rural and trade communities — rural supply store staff, contractors, farmers with wide networks.',
                'Real estate and rural property agents looking for a complementary income stream using the same skills.',
                'Community connectors active in local groups, clubs, and Chambers of Commerce.',
                'Existing Hire42 lenders who want to bring their peers onto the platform.',
              ]}
            />
          </Section>

          {/* Where */}
          <Section title="Where we’re hiring">
            <p>
              Territories follow district council boundaries and open as Hire42
              launches in each area. The Far North and Whangārei are live now;
              other regions are opening on a rolling basis — register your
              interest and
              we&apos;ll be in touch when yours opens.
            </p>
            <ul
              role="list"
              className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {regions.map((region) => (
                <li
                  key={region.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
                >
                  <span className="font-medium text-gray-900">
                    {region.name}
                  </span>
                  <span
                    className={
                      region.open
                        ? 'rounded-full bg-cyan-50 px-2.5 py-0.5 text-xs font-medium text-cyan-700'
                        : 'rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500'
                    }
                  >
                    {region.status}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Apply */}
          <Section title="How to apply">
            <p>
              Send us a short note about your region and why you&apos;d be a
              great fit. Tell us who you already know in the local equipment,
              farming, or trade community — that&apos;s what matters most.
            </p>
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Email your application to
                  </p>
                  <a
                    href={applyHref}
                    className="text-lg font-semibold text-cyan-600 hover:text-cyan-500"
                  >
                    support@hire42.com
                  </a>
                </div>
                <Button href={applyHref} color="cyan" className="flex-none">
                  Apply now
                </Button>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Hire42 is an equal-opportunity workplace. We welcome applicants
              from every background and community across Aotearoa.
            </p>
          </Section>
        </div>
      </Container>
    </div>
  )
}
