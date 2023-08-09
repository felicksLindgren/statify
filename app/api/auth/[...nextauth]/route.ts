import NextAuth from 'next-auth/next';
import SpotifyProvider from 'next-auth/providers/spotify'

const handler = NextAuth({
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID || '',
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET || '',
            authorization: {
                params: {
                    scope: 'user-read-email user-top-read'
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account?.access_token) {
                token.access_token = account.access_token;
                token.expires_at = account.expires_at;
            }

            if (token?.expires_at) {
                if (Date.now() > token.expires_at * 1000) {
                    token.error = 'RefreshAccessTokenError';
                    return token;
                }
            }

            return token;
        },
        async session({ session, token}) {
            session.error = token.error;
            return session;
        }
    },
    session: {
        strategy: 'jwt'
    }
})

export { handler as GET, handler as POST }