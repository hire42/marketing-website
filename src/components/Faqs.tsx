import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does Hire42 work?',
      answer:
        'Hire42 is a peer-to-peer equipment rental marketplace. Renters browse listings, select their dates, and pay securely online. Lenders confirm the rental, hand over the equipment, and get paid after the rental is complete.',
    },
    {
      question: 'Is it free to list equipment?',
      answer:
        'Yes — listing your equipment on Hire42 is completely free. We only take a small platform fee when a rental is successfully completed, so you only pay when you earn.',
    },
    {
      question: 'How do I get paid as a lender?',
      answer:
        'Payments are processed securely through Stripe. Once you complete identity verification and connect your bank account, funds from completed rentals are transferred directly to you.',
    },
  ],
  [
    {
      question: 'What if the equipment is damaged?',
      answer:
        'We recommend lenders document the condition of their equipment before and after each rental. If damage occurs, this provides a clear record to support any resolution between the parties.',
    },
    {
      question: 'Can I cancel a rental?',
      answer:
        'Yes. If a lender declines or cancels a confirmed rental, the renter receives a full refund. If the renter cancels, refund eligibility depends on how close to the rental start date the cancellation occurs.',
    },
    {
      question: 'How does Hire42 verify lenders?',
      answer:
        'All lenders complete identity verification through Stripe before their listings go live. Lenders can verify as an individual or as a business, and must agree to our Lender\'s Declaration.',
    },
  ],
  [
    {
      question: 'What equipment can I list?',
      answer:
        'You can list almost any type of equipment — tools, trailers, vehicles, earthmoving machinery, concrete equipment, access equipment, and more. If it\'s useful and rentable, it belongs on Hire42.',
    },
    {
      question: 'Is my payment information secure?',
      answer:
        'Yes. All payments are processed by Stripe, a global leader in secure payment infrastructure. Hire42 never stores your card details, and all transactions are encrypted end-to-end.',
    },
    {
      question: 'How do I leave a review?',
      answer:
        'After each completed rental, both the renter and lender receive an email invitation to rate the experience. Ratings help build trust across the Hire42 community and improve future matches.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Still have questions?{' '}
            <a
              href="mailto:support@hire42.com"
              className="text-gray-900 underline"
            >
              Reach out to our support team
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
