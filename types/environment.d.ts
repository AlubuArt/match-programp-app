
    declare namespace NodeJS {
        interface ProcessEnv {
            EMAIL_API_KEY: string;
            YOUTUBE_API_KEY: string;
            GRAPHCMS_PROD_AUTH_TOKEN: string;
            NODE_ENV: 'development' | 'production';
            PORT?: string;
            PWD: string;
        }
    }


export {}