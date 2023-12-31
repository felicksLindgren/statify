'use client';

import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'

export default function SignIn() {
    const { push } = useRouter()
    const { status, data } = useSession();
    const searchParams = useSearchParams();

    const callbackUrl = searchParams.get('callbackUrl');

    useEffect(() => {
        if (data?.error === 'RefreshAccessTokenError') {
            void signIn('spotify');
        }

        switch (status) {
            case 'authenticated':
                push(callbackUrl ?? '/');
                break;
            case 'loading':
                break;
            case 'unauthenticated':
                void signIn('spotify');
                break;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    return <></>
}