'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import Image from 'next/image'

import { Container } from '@/components/Container'

export type ProductCard = {
  id: string
  name: string
  imageUrl: string | null
  pricePerDay: number | null
  location: string | null
  ownerName: string | null
  rating: number | null
}

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }: { rating: number }) {
  const rounded = Math.min(5, Math.max(1, Math.round(rating)))
  return (
    <div className="flex">
      {[...Array(5).keys()].map((i) => (
        <StarIcon
          key={i}
          className={clsx('h-5 w-5', rounded > i ? 'fill-cyan-500' : 'fill-gray-300')}
        />
      ))}
    </div>
  )
}

function ProductCardFigure({
  product,
  className,
  'aria-hidden': ariaHidden,
  ...props
}: { product: ProductCard; className?: string } & Omit<
  React.ComponentPropsWithoutRef<'a'>,
  'className' | 'href'
>) {
  const animationDelay = useMemo(() => {
    const delays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return delays[Math.floor(Math.random() * delays.length)]
  }, [])

  return (
    <a
      href="/#get-started-today"
      aria-hidden={ariaHidden}
      tabIndex={ariaHidden ? -1 : undefined}
      className={clsx(
        'animate-fade-in block rounded-3xl bg-white opacity-0 shadow-md shadow-gray-900/5 overflow-hidden transition hover:shadow-lg hover:shadow-gray-900/10',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <div className="relative aspect-[4/3] bg-gray-100">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6">
        {product.rating != null && product.rating > 0 && (
          <StarRating rating={product.rating} />
        )}
        <p className="mt-3 text-lg font-semibold leading-6 text-gray-900 line-clamp-2">
          {product.name}
        </p>
        {product.pricePerDay != null && (
          <p className="mt-2 text-base font-medium text-cyan-600">
            ${product.pricePerDay.toFixed(2)} / day
          </p>
        )}
        {product.location && (
          <p className="mt-1 text-sm text-gray-500">{product.location}</p>
        )}
      </div>
      {product.ownerName && (
        <p className="px-6 pb-6 text-sm text-gray-600 before:content-['Listed_by_']">
          {product.ownerName}
        </p>
      )}
    </a>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    const index = i % numParts
    if (!result[index]) result[index] = []
    result[index].push(array[i])
  }
  return result
}

function ProductColumn({
  products,
  className,
  cardClassName,
  msPerPixel = 0,
}: {
  products: Array<ProductCard>
  className?: string
  cardClassName?: (index: number) => string
  msPerPixel?: number
}) {
  const columnRef = useRef<HTMLDivElement>(null)
  const [columnHeight, setColumnHeight] = useState(0)
  const duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) return
    const observer = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })
    observer.observe(columnRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {products.concat(products).map((product, i) => (
        <ProductCardFigure
          key={`${product.id}-${i}`}
          product={product}
          aria-hidden={i >= products.length}
          className={cardClassName?.(i % products.length)}
        />
      ))}
    </div>
  )
}

function ProductGrid({ products }: { products: Array<ProductCard> }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.4 })
  const columns = splitArray(products, 3)
  const col1 = columns[0] ?? []
  const col2 = columns[1] ?? []
  const col3 = splitArray(columns[2] ?? [], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ProductColumn
            products={[...col1, ...col3.flat(), ...col2]}
            cardClassName={(i) =>
              clsx(
                i >= col1.length + (col3[0]?.length ?? 0) && 'md:hidden',
                i >= col1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ProductColumn
            products={[...col2, ...(col3[1] ?? [])]}
            className="hidden md:block"
            cardClassName={(i) => (i >= col2.length ? 'lg:hidden' : '')}
            msPerPixel={15}
          />
          <ProductColumn
            products={col3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function FeaturedProductsGrid({ products }: { products: Array<ProductCard> }) {
  if (products.length === 0) return null

  return (
    <section
      id="featured-products"
      aria-labelledby="featured-products-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="featured-products-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Gear available to hire near you.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Browse equipment listed by locals in your community.
        </p>
        <ProductGrid products={products} />
      </Container>
    </section>
  )
}
