import { type Metadata } from 'next'

import { ReviewForm } from './ReviewForm'

export const metadata: Metadata = {
  title: 'Leave a Review',
}

export default async function ReviewPage({
  searchParams,
}: {
  searchParams: Promise<{ o?: string; p?: string; fn?: string }>
}) {
  const { o, p, fn } = await searchParams

  return <ReviewForm orderId={o ?? ''} profileId={p ?? ''} projectRef={fn ?? ''} />
}
