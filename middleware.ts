import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  try {
    const url = request.nextUrl.clone()
    
    if (url.pathname === '/') {
      url.pathname = '/home'
      return NextResponse.redirect(url)
    }
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.error()  // Return a 500 response in case of an error
  }
}
