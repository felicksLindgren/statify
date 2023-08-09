import { JWT, getToken as nextGetToken } from 'next-auth/jwt';
import { signIn } from 'next-auth/react';
import { headers, cookies } from 'next/headers';

export const getToken = async () => {
    const token = await nextGetToken({
        req: {
            headers: Object.fromEntries(headers()),
            cookies: Object.fromEntries(cookies().getAll().map((cookie) => [cookie.name, cookie.value]))
        } as any
    });

    if (token?.error === 'RefreshAccessTokenError') {
        void signIn('spotify');
    }

    return token;
}