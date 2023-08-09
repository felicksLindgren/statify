declare namespace NodeJS {
    export interface ProcessEnv {
        SPOTIFY_CLIENT_ID: string;
        SPOTIFY_CLIENT_SECRET: string;
        NEXTAUTH_SECRET: string;
        NEXTAUTH_URL: string;
        SPOTIFY_API_URL: string;
        API_URL: string;
        NODE_ENV: 'development' | 'production';
    }
}
