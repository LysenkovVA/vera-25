declare namespace NodeJS {
  export interface ProcessEnv {
    readonly API_PATH: string;
    readonly DATABASE_URL: string;
    readonly BASE_PATH: string;
    readonly AUTH_SECRET: string;
    readonly PRIVATE_PATH: string;
  }
}
