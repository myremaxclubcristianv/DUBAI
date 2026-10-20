import { ImageResponse } from 'next/og'

export const alt = 'Dubai Real Estate & Investment Intelligence'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#070e1c',
          padding: '80px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span
            style={{
              fontSize: '28px',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            DUBAI
          </span>
          <span style={{ height: '24px', width: '2px', backgroundColor: '#334155' }} />
          <span
            style={{
              fontSize: '14px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#94a3b8',
              fontFamily: 'monospace',
            }}
          >
            REAL ESTATE &amp; INVESTMENT INTELLIGENCE
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '960px' }}>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 300,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#ffffff',
              margin: 0,
            }}
          >
            Dubai, with better decisions.
          </h1>
          <p
            style={{
              fontSize: '22px',
              fontWeight: 300,
              lineHeight: 1.5,
              color: '#cbd5e1',
              margin: 0,
            }}
          >
            Source-led intelligence, statutory due diligence, and private advisory for prime UAE property assets.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '32px',
            borderTop: '1px solid #1e293b',
            fontFamily: 'monospace',
            fontSize: '14px',
            color: '#64748b',
          }}
        >
          <span>dubai.cristianvaduva.com</span>
          <span style={{ color: '#0284c7' }}>DLD Statutory Benchmarks • Central Bank UAE Peg</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
