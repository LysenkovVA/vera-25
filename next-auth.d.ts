// Расширение стандартных интерфейсов AuthJS

/**
 * https://authjs.dev/getting-started/typescript#module-augmentation
 */

import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      login: string;
      password: string;
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
    } & DefaultSession;
  }

  interface User extends DefaultUser {
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

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
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
