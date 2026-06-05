import Link from 'next/link'
import clsx from 'clsx'

function GooglePlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3.18 23.76c.32.18.68.22 1.02.12L15.93 12 12.3 8.37 3.18 23.76z" />
      <path d="M21.37 10.28l-3.4-1.94-4.13 3.66 4.13 3.66 3.43-1.95a1.39 1.39 0 000-2.43z" />
      <path d="M4.2.12A1.41 1.41 0 002.99 1.7v20.6l9.31-10.3L4.2.12z" />
      <path d="M4.2.12l8.1 11.58 3.63-3.63L4.2.12z" />
    </svg>
  )
}

export function GooglePlayLink({
  color = 'black',
}: {
  color?: 'black' | 'white'
}) {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.hire42.mobile.app"
      aria-label="Get it on Google Play"
      className={clsx(
        'inline-flex h-10 items-center gap-2.5 rounded-lg px-4 transition-colors',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50',
      )}
    >
      <GooglePlayIcon className="h-5 w-auto flex-none" />
      <div>
        <div className="text-[9px] leading-none tracking-wide">GET IT ON</div>
        <div className="text-sm font-semibold leading-tight">Google Play</div>
      </div>
    </Link>
  )
}
