// Расширение стандартных интерфейсов AuthJS

import { DefaultJWT } from "next-auth/jwt";

/**
 * https://authjs.dev/getting-started/typescript#module-augmentation
 */

export declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      login: string;
      role: {
        id: string;
        name: string;
      };
      profile: {
        id: string;
        surname: string | undefined;
        name: string | undefined;
        avatar: string | undefined;
      };
    };
  }

  interface User {
    id: string;
    login: string;
    role: {
      id: string;
      name: string;
    };
    profile: {
      id: string;
      surname: string | undefined;
      name: string | undefined;
      avatar: string | undefined;
    };
  }
}

export declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    login: string;
    role: {
      id: string;
      name: string;
    };
    profile: {
      id: string;
      surname: string | undefined;
      name: string | undefined;
      avatar: string | undefined;
    };
  }
}
