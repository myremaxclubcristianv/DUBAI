import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const response = NextResponse.next()
  const isDev = process.env.NODE_ENV !== 'production'
  const isLocalhost = request.nextUrl.hostname === 'localhost' || request.nextUrl.hostname === '127.0.0.1'

  // 1. Content Security Policy
  const scriptSrc = isDev ? "'self' 'unsafe-inline' 'unsafe-eval'" : "'self' 'unsafe-inline'"
  const connectSrc = "'self' ws: wss: http: https: blob: data:"
  const upgradeInsecure = (!isDev && !isLocalhost) ? 'upgrade-insecure-requests;' : ''

  const cspHeader = `
    default-src 'self';
    script-src ${scriptSrc};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://images.unsplash.com;
    font-src 'self' data:;
    connect-src ${connectSrc};
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    ${upgradeInsecure}
  `.replace(/\s{2,}/g, ' ').trim()

  response.headers.set('Content-Security-Policy', cspHeader)

  // 2. Production Security Headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  if (!isLocalhost && !isDev) {
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  }

  // 3. Cache Isolation for Sensitive / Private Routes
  const pathname = request.nextUrl.pathname
  if (
    pathname.startsWith('/api/client/') ||
    pathname.startsWith('/api/leads') ||
    pathname.startsWith('/api/viewings') ||
    pathname.startsWith('/client') ||
    pathname.startsWith('/admin')
  ) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
  }

  return response
}

export const middleware = proxy

export const config = {
  matcher: [
    /*
     * Match all request paths except for static files, _next, favicon.ico
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}