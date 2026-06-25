import { type Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Hire42 Privacy Policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy-policy' },
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-gray-600">
        {children}
      </div>
    </section>
  )
}

function SubSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-6">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <div className="mt-2 space-y-3">{children}</div>
    </div>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-500">
            Effective date: 26 April 2026 &nbsp;·&nbsp; Last updated: 26 April
            2026
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Hire42 Limited (<strong>&quot;Hire42&quot;</strong>,{' '}
            <strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong>, or{' '}
            <strong>&quot;our&quot;</strong>) operates the Hire42 mobile
            application and website (collectively, the{' '}
            <strong>&quot;Platform&quot;</strong>). This Privacy Policy explains
            how we collect, use, disclose, and protect your personal information
            when you use our Platform, and describes your rights in relation to
            that information.
          </p>
          <p className="mt-4 text-base leading-7 text-gray-600">
            By creating an account or using the Platform, you agree to the
            collection and use of your information in accordance with this
            policy. If you do not agree, please do not use the Platform.
          </p>

          <div className="mt-10 rounded-2xl border border-cyan-100 bg-cyan-50 px-6 py-5">
            <p className="text-sm font-medium text-cyan-800">
              <strong>Summary:</strong> We collect only the information needed
              to operate a safe, trusted equipment-hire marketplace. We do not
              sell your personal information to third parties.
            </p>
          </div>

          {/* 1 */}
          <Section title="1. Who We Are">
            <p>
              Hire42 Limited is a company incorporated in New Zealand. Our
              Platform connects equipment owners (
              <strong>&quot;Lenders&quot;</strong>) with people who want to hire
              that equipment (<strong>&quot;Renters&quot;</strong>) across New
              Zealand.
            </p>
            <p>
              For questions about this policy, contact us at{' '}
              <a
                href="mailto:support@hire42.com"
                className="text-cyan-600 hover:text-cyan-500"
              >
                support@hire42.com
              </a>
              .
            </p>
          </Section>

          {/* 2 */}
          <Section title="2. Information We Collect">
            <SubSection title="2.1 Information you provide directly">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Account information:</strong> your name, email
                  address, and password when you register.
                </li>
                <li>
                  <strong>Phone number:</strong> collected and verified by SMS
                  one-time passcode for account security and trust.
                </li>
                <li>
                  <strong>Identity verification:</strong> a photo of your
                  driver&apos;s licence or other government-issued ID together
                  with a selfie, used to verify your identity before completing
                  a rental.
                </li>
                <li>
                  <strong>Business information:</strong> business name, NZBN,
                  and related details if you register as a business entity.
                </li>
                <li>
                  <strong>Equipment listings:</strong> photos, descriptions,
                  pricing, and pickup location for items you list.
                </li>
                <li>
                  <strong>Payment and banking information:</strong> bank account
                  details for Stripe Connect payouts (Lenders) and payment card
                  details for rentals (Renters). Card details are handled
                  entirely by Stripe and are never stored on our servers.
                </li>
                <li>
                  <strong>Communications:</strong> messages sent through the
                  in-app chat between Lenders and Renters.
                </li>
                <li>
                  <strong>Support correspondence:</strong> emails or messages
                  you send to our support team.
                </li>
              </ul>
            </SubSection>

            <SubSection title="2.2 Information collected automatically">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Location:</strong> suburb or locality selected during
                  search. We do not collect precise GPS location in the
                  background.
                </li>
                <li>
                  <strong>Usage data:</strong> pages viewed, features used, and
                  interactions within the app to help us improve the Platform.
                </li>
                <li>
                  <strong>Device information:</strong> device type, operating
                  system version, and app version, used for troubleshooting and
                  compatibility.
                </li>
                <li>
                  <strong>Log data:</strong> server logs including IP address,
                  timestamps, and request details, retained for security
                  purposes.
                </li>
              </ul>
            </SubSection>

            <SubSection title="2.3 Information from third parties">
              <p>
                We may receive information about you from third-party services
                integrated into the Platform, such as Stripe (payment
                verification status) and Google (location autocomplete
                selections). We only receive information necessary to operate
                those integrations.
              </p>
            </SubSection>
          </Section>

          {/* 3 */}
          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Create and manage your account.</li>
              <li>
                Facilitate rentals, payments, and communications between Lenders
                and Renters.
              </li>
              <li>
                Verify your identity and phone number to maintain a trusted
                community.
              </li>
              <li>
                Process payments and transfer rental proceeds to Lenders via
                Stripe Connect.
              </li>
              <li>
                Send transactional emails (rental confirmations, invoices,
                payment receipts, and account notifications).
              </li>
              <li>Respond to your support requests and resolve disputes.</li>
              <li>
                Detect, investigate, and prevent fraudulent activity, abuse, and
                breaches of our Terms and Conditions.
              </li>
              <li>
                Improve, personalise, and develop the Platform and new features.
              </li>
              <li>Comply with our legal obligations.</li>
            </ul>
            <p>
              We will not use your personal information for purposes
              incompatible with those listed above without first obtaining your
              consent.
            </p>
          </Section>

          {/* 4 */}
          <Section title="4. Legal Bases for Processing (where applicable)">
            <p>
              Where required by applicable privacy law, we rely on the following
              bases to process your personal information:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Contract:</strong> processing necessary to perform our
                agreement with you (operating your account, processing rentals,
                and facilitating payments).
              </li>
              <li>
                <strong>Legitimate interests:</strong> fraud prevention,
                Platform security, and improving our services, where those
                interests are not overridden by your rights.
              </li>
              <li>
                <strong>Legal obligation:</strong> complying with applicable
                law, including financial record-keeping obligations.
              </li>
              <li>
                <strong>Consent:</strong> for any optional communications or
                uses where we ask for your consent.
              </li>
            </ul>
          </Section>

          {/* 5 */}
          <Section title="5. Sharing Your Information">
            <p>
              We do not sell, rent, or trade your personal information. We share
              information only in the following circumstances:
            </p>

            <SubSection title="5.1 With other users">
              <p>
                When you initiate or receive a rental, certain information (your
                name, contact details, and equipment listing details) is shared
                with the other party to facilitate the rental.
              </p>
            </SubSection>

            <SubSection title="5.2 With service providers">
              <p>
                We share information with trusted third-party service providers
                who process data on our behalf:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Supabase</strong> — cloud database and authentication
                  infrastructure.
                </li>
                <li>
                  <strong>Stripe</strong> — payment processing and Stripe
                  Connect for Lender payouts. Stripe&apos;s privacy policy is
                  available at{' '}
                  <a
                    href="https://stripe.com/privacy"
                    className="text-cyan-600 hover:text-cyan-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    stripe.com/privacy
                  </a>
                  .
                </li>
                <li>
                  <strong>Google</strong> — location autocomplete via the Google
                  Places API. Google&apos;s privacy policy is available at{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    className="text-cyan-600 hover:text-cyan-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    policies.google.com/privacy
                  </a>
                  .
                </li>
                <li>
                  <strong>Tendzin</strong> — inventory and date-range
                  reservation management.
                </li>
              </ul>
              <p>
                These providers are contractually bound to use your information
                only to provide services to us and to maintain appropriate
                security standards.
              </p>
            </SubSection>

            <SubSection title="5.3 For legal reasons">
              <p>
                We may disclose your information if required to do so by law,
                regulation, legal process, or governmental request, or where
                necessary to protect the rights, property, or safety of Hire42,
                our users, or the public.
              </p>
            </SubSection>

            <SubSection title="5.4 Business transfers">
              <p>
                If Hire42 is involved in a merger, acquisition, or sale of
                assets, your information may be transferred as part of that
                transaction. We will notify you via email and/or a prominent
                notice on the Platform before your information becomes subject
                to a different privacy policy.
              </p>
            </SubSection>
          </Section>

          {/* 6 */}
          <Section title="6. Data Retention">
            <p>
              We retain your personal information for as long as your account is
              active or as needed to provide you with the Platform. We also
              retain data to comply with our legal obligations (including
              financial records required under New Zealand law), resolve
              disputes, and enforce our agreements.
            </p>
            <p>
              When you delete your account, we will delete or anonymise your
              personal information within 90 days, except where we are required
              to retain it by law or for legitimate business purposes (for
              example, records of completed transactions).
            </p>
            <p>
              Identity verification documents are retained only for as long as
              necessary to complete verification and are then deleted.
            </p>
          </Section>

          {/* 7 */}
          <Section title="7. Data Security">
            <p>
              We take reasonable technical and organisational measures to
              protect your personal information against unauthorised access,
              alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Encryption of data in transit using TLS/HTTPS.</li>
              <li>Encryption of data at rest.</li>
              <li>
                Access controls limiting who within Hire42 can access personal
                information.
              </li>
              <li>
                Regular review of our security practices and infrastructure.
              </li>
            </ul>
            <p>
              No method of transmission over the internet or electronic storage
              is completely secure. While we strive to use commercially
              acceptable means to protect your information, we cannot guarantee
              absolute security.
            </p>
          </Section>

          {/* 8 */}
          <Section title="8. Your Rights">
            <p>
              Subject to applicable law, you have the following rights in
              relation to your personal information:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Access:</strong> request a copy of the personal
                information we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> request that we correct any
                inaccurate or incomplete information.
              </li>
              <li>
                <strong>Deletion:</strong> request deletion of your personal
                information, subject to our legal retention obligations.
              </li>
              <li>
                <strong>Portability:</strong> receive a copy of your data in a
                structured, machine-readable format where technically
                practicable.
              </li>
              <li>
                <strong>Objection / restriction:</strong> object to or request
                restriction of certain processing activities.
              </li>
              <li>
                <strong>Withdraw consent:</strong> where processing is based on
                consent, withdraw that consent at any time without affecting the
                lawfulness of prior processing.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a
                href="mailto:support@hire42.com"
                className="text-cyan-600 hover:text-cyan-500"
              >
                support@hire42.com
              </a>
              . We will respond within 20 working days as required under the New
              Zealand Privacy Act 2020. We may need to verify your identity
              before fulfilling a request.
            </p>
            <p>
              You may also lodge a complaint with the Office of the Privacy
              Commissioner of New Zealand at{' '}
              <a
                href="https://www.privacy.org.nz"
                className="text-cyan-600 hover:text-cyan-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy.org.nz
              </a>
              .
            </p>
          </Section>

          {/* 9 */}
          <Section title="9. Children's Privacy">
            <p>
              The Platform is not directed at children under the age of 18. We
              do not knowingly collect personal information from anyone under
              18. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us at{' '}
              <a
                href="mailto:support@hire42.com"
                className="text-cyan-600 hover:text-cyan-500"
              >
                support@hire42.com
              </a>{' '}
              and we will take steps to delete that information promptly.
            </p>
          </Section>

          {/* 10 */}
          <Section title="10. International Data Transfers">
            <p>
              Hire42 operates primarily in New Zealand. Our service providers
              may process your data in other countries, including the United
              States. Where data is transferred internationally, we ensure
              appropriate safeguards are in place consistent with the New
              Zealand Privacy Act 2020 and applicable information privacy
              principles.
            </p>
          </Section>

          {/* 11 */}
          <Section title="11. Cookies and Tracking">
            <p>
              Our website may use cookies and similar technologies to maintain
              session state and improve your experience. The Hire42 mobile
              application does not use third-party advertising trackers or
              cross-app tracking. You can control cookie settings in your
              browser preferences.
            </p>
          </Section>

          {/* 12 */}
          <Section title="12. Third-Party Links">
            <p>
              The Platform may contain links to third-party websites or
              services. This Privacy Policy does not apply to those external
              sites. We encourage you to review the privacy policies of any
              third-party services you visit.
            </p>
          </Section>

          {/* 13 */}
          <Section title="13. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we make
              material changes, we will notify you by updating the effective
              date at the top of this page and, where appropriate, by sending
              you an email notification or an in-app notice. Your continued use
              of the Platform after any changes constitutes your acceptance of
              the updated policy.
            </p>
          </Section>

          {/* 14 */}
          <Section title="14. Governing Law">
            <p>
              This Privacy Policy is governed by the laws of New Zealand,
              including the Privacy Act 2020.
            </p>
          </Section>

          {/* Contact */}
          <div className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">Contact Us</h2>
            <p className="mt-2 text-base text-gray-600">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our handling of your personal information,
              please contact our privacy team:
            </p>
            <p className="mt-4 text-base font-medium text-gray-900">
              Hire42 Limited
            </p>
            <a
              href="mailto:support@hire42.com"
              className="mt-1 block text-cyan-600 hover:text-cyan-500"
            >
              support@hire42.com
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
