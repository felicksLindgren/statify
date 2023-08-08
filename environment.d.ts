declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SPOTIFY_CLIENT_ID: string;
            SPOTIFY_CLIENT_SECRET: string;
            NEXTAUTH_SECRET: string;
            NEXTAUTH_URL: string;
            NODE_ENV: 'development' | 'production';
        }
    }
}