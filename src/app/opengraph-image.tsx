import { ImageResponse } from 'next/og'

// Static metadata for the generated image.
export const alt = 'Hire42 — Put your gear to work.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Hire42 brand teal (see .b fill in styles/tailwind.css).
const BRAND = '#00aaae'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: `linear-gradient(135deg, ${BRAND} 0%, #007e81 100%)`,
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 120, fontWeight: 700, letterSpacing: '-4px' }}>
          Hire42
        </div>
        <div style={{ fontSize: 56, fontWeight: 600, marginTop: 8 }}>
          Put your gear to work.
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 28,
            maxWidth: 900,
            opacity: 0.92,
            lineHeight: 1.3,
          }}
        >
          New Zealand’s marketplace for hiring out idle equipment — hire what you
          need from people nearby.
        </div>
      </div>
    ),
    size,
  )
}
