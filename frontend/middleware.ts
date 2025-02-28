import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export default async function middleware(req: NextRequest) {
    // 1. Specify protected and public routes
    const protectedRoutes = ['/dashboard']
    const publicRoutes = ['/', '/register']

    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    // 3. Get cookie and getAuthenticated
    const sp2dktoken = (await cookies()).get('sp2dktoken')?.value

    const response = await fetch('http://localhost:3001/user/getisauthenticated', {
        headers: { Authorization: 'Bearer ' + sp2dktoken },
        cache: 'no-cache'
    })

    let isAuthenticated = false

    if (response.ok)
        isAuthenticated = true

    // 4. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !isAuthenticated) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    // 5. Redirect to /dashboard if the user is authenticated
    if (isPublicRoute && isAuthenticated) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
    }
    
    return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}