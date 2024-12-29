declare global {
  namespace NodeJS {
    interface ProcessEnv {
      /** public */
      PORT: 8080;

      /** private */
      MONGO_URI: string;
    }
  }
}

export {};
