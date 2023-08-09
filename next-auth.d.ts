import NextAuth, { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
    interface JWT {
        access_token?: string;
        expires_at?: number;
        error?: 'RefreshAccessTokenError';
    }
}

declare module 'next-auth' {
    interface Session {
        access_token?: string;
        error?: 'RefreshAccessTokenError';
    }
}