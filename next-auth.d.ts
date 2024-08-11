// Расширение стандартных интерфейсов AuthJS

/**
 * https://authjs.dev/getting-started/typescript#module-augmentation
 */

import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
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
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
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

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
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
