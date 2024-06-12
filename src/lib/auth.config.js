import { NextResponse } from 'next/server';

export const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {

            if (user) {
                token.id = user.id
                token.username = user.username
                token.isAdmin = user.isAdmin

            }

            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
                session.user.username = token.username
                session.user.isAdmin = token.isAdmin
            }
            return session
        },
        authorized({ auth, request }) {
            const user = auth?.user;
            const isOnRootPage = request.nextUrl?.pathname.startsWith("/")
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login")
            const isOnRegisterPage = request.nextUrl?.pathname.startsWith("/register")
            const isOnSecurePage = request.nextUrl?.pathname.startsWith("/secure")


            if (isOnSecurePage && !user) {
                return false

            }
            if (isOnLoginPage && user) {
                return NextResponse.redirect(new URL('/', request.nextUrl))

            }


            // if (isOnRegisterPage && user) {
            //     return Response.redirect(new URL('/adm',request.nextUrl))

            // }



            return true;
        }
    }
}   