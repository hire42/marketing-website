'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { CirclesBackground } from '@/components/CirclesBackground'
import { Logo } from '@/components/Logo'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type ReviewData = {
  alreadyReviewed: false
  reviewerType: 'RENTER' | 'OWNER'
  productName: string
  startDate: string
  endDate: string
  otherPartyName: string
}

type ApiResponse = ReviewData | { alreadyReviewed: true } | { error: string }

type Status =
  | 'loading'
  | 'error'
  | 'alreadyReviewed'
  | 'ready'
  | 'submitting'
  | 'submitted'

// ---------------------------------------------------------------------------
// StarRating
// ---------------------------------------------------------------------------

function StarRating({
  label,
  value,
  onChange,
}: {
  label: string
  value: number
  onChange: (v: number) => void
}) {
  const [hovered, setHovered] = useState(0)
  const active = hovered || value

  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-gray-900">{label}</p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            aria-label={`${star} star${star !== 1 ? 's' : ''}`}
            onClick={() => onChange(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            className="text-4xl leading-none transition-colors focus:outline-none"
          >
            <span className={star <= active ? 'text-amber-400' : 'text-gray-200'}>
              ★
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Shell — mirrors AuthLayout without the static title
// ---------------------------------------------------------------------------

function Shell({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-full overflow-hidden pt-16 sm:py-28">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        <Link href="/" aria-label="Home">
          <Logo className="mx-auto h-10 w-auto" />
        </Link>
        <div className="relative mt-12 sm:mt-16">
          <CirclesBackground
            width="1090"
            height="1090"
            className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:-top-9 sm:h-auto"
          />
          <h1 className="text-center text-2xl font-medium tracking-tight text-gray-900">
            {title}
          </h1>
        </div>
        <div className="-mx-4 mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24">
          {children}
        </div>
      </div>
    </main>
  )
}

// ---------------------------------------------------------------------------
// ReviewForm
// ---------------------------------------------------------------------------

export function ReviewForm({
  orderId,
  profileId,
  projectRef,
}: {
  orderId: string
  profileId: string
  projectRef: string
}) {
  const [status, setStatus] = useState<Status>('loading')
  const [reviewData, setReviewData] = useState<ReviewData | null>(null)
  const [apiError, setApiError] = useState('')
  const [validationError, setValidationError] = useState('')

  // Renter ratings
  const [productRating, setProductRating] = useState(0)
  const [lenderRating, setLenderRating] = useState(0)
  // Owner rating
  const [renterRating, setRenterRating] = useState(0)
  // Shared
  const [comment, setComment] = useState('')

  const apiUrl =
    orderId && profileId && projectRef
      ? `https://${projectRef}.supabase.co/functions/v1/callbacks/review/${orderId}/${profileId}`
      : null

  useEffect(() => {
    if (!apiUrl) {
      setApiError('Invalid review link.')
      setStatus('error')
      return
    }

    fetch(apiUrl)
      .then((res) => res.json() as Promise<ApiResponse>)
      .then((json) => {
        if ('error' in json) {
          setApiError(json.error)
          setStatus('error')
        } else if (json.alreadyReviewed) {
          setStatus('alreadyReviewed')
        } else {
          setReviewData(json)
          setStatus('ready')
        }
      })
      .catch(() => {
        setApiError('Unable to load your review. Please try again.')
        setStatus('error')
      })
  }, [apiUrl])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setValidationError('')

    if (reviewData?.reviewerType === 'RENTER') {
      if (!productRating || !lenderRating) {
        setValidationError('Please rate both the equipment and the lender.')
        return
      }
    } else {
      if (!renterRating) {
        setValidationError('Please rate the renter.')
        return
      }
    }

    setStatus('submitting')

    const body =
      reviewData?.reviewerType === 'RENTER'
        ? { productRating, lenderRating, comment: comment.trim() || undefined }
        : { renterRating, comment: comment.trim() || undefined }

    try {
      const res = await fetch(apiUrl!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const json = (await res.json()) as { success?: boolean; error?: string }
      if (json.error) {
        setValidationError(json.error)
        setStatus('ready')
      } else {
        setStatus('submitted')
      }
    } catch {
      setValidationError('Something went wrong. Please try again.')
      setStatus('ready')
    }
  }

  // ── Loading ──────────────────────────────────────────────────────────────

  if (status === 'loading') {
    return (
      <Shell title="Loading…">
        <div className="flex justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-cyan-500" />
        </div>
      </Shell>
    )
  }

  // ── Error ────────────────────────────────────────────────────────────────

  if (status === 'error') {
    return (
      <Shell title="Something went wrong">
        <p className="text-center text-gray-600">{apiError}</p>
      </Shell>
    )
  }

  // ── Already reviewed ─────────────────────────────────────────────────────

  if (status === 'alreadyReviewed') {
    return (
      <Shell title="Already reviewed">
        <p className="text-center text-gray-600">
          You&apos;ve already submitted your review for this rental. Thanks for
          your feedback!
        </p>
      </Shell>
    )
  }

  // ── Submitted ────────────────────────────────────────────────────────────

  if (status === 'submitted') {
    return (
      <Shell title="Thanks for your review!">
        <p className="text-center text-gray-600">
          🎉 Your feedback helps build trust in the Hire42 community. We
          appreciate you taking the time.
        </p>
      </Shell>
    )
  }

  // ── Form (ready | submitting) ─────────────────────────────────────────────

  const data = reviewData!
  const isRenter = data.reviewerType === 'RENTER'
  const title = isRenter ? 'How was your rental?' : 'How was your renter?'

  return (
    <Shell title={title}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <p className="text-sm text-gray-600">
          {isRenter ? (
            <>
              You rented <strong className="text-gray-900">{data.productName}</strong>{' '}
              from <strong className="text-gray-900">{data.otherPartyName}</strong>{' '}
              ({data.startDate}&ndash;{data.endDate}).
            </>
          ) : (
            <>
              <strong className="text-gray-900">{data.otherPartyName}</strong> rented
              your <strong className="text-gray-900">{data.productName}</strong>{' '}
              ({data.startDate}&ndash;{data.endDate}).
            </>
          )}
        </p>

        {isRenter ? (
          <>
            <StarRating
              label="Rate the equipment"
              value={productRating}
              onChange={setProductRating}
            />
            <StarRating
              label="Rate the lender"
              value={lenderRating}
              onChange={setLenderRating}
            />
          </>
        ) : (
          <StarRating
            label="Rate the renter"
            value={renterRating}
            onChange={setRenterRating}
          />
        )}

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-900">
            Comments{' '}
            <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience…"
            rows={4}
            className="block w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
          />
        </div>

        {validationError && (
          <p className="text-sm text-red-600">{validationError}</p>
        )}

        <Button
          type="submit"
          color="cyan"
          className="w-full"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting…' : 'Submit review'}
        </Button>
      </form>
    </Shell>
  )
}
