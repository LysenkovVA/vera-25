import Credentials from "@auth/core/providers/credentials";
import prisma from "../../../../prisma/db";
import type { Adapter } from "next-auth/adapters"; // Нужно это добавить, чтоб не было ошибки в adapter https://stackoverflow.com/questions/76503606/next-auth-error-adapter-is-not-assignable-to-type-adapter-undefined
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma) as Adapter,
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    // Для Credentials поддерживается только эта стратегия
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // Set the session max age 7 days
  },
  secret: process.env.AUTH_SECRET,
  debug: true,
  providers: [
    Credentials({
      name: "Credentials",
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        login: {
          label: "Login",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials.login || !credentials.password) {
          return null;
        }

        const candidate = await prisma.user.findFirst({
          where: {
            login: credentials.login,
          },
          include: { role: true, profile: true },
        });

        if (!candidate) {
          throw new Error("Пользователь не найден!");
        }

        const bcrypt = require("bcryptjs");
        const match = bcrypt.compareSync(
          credentials.password,
          candidate.password,
        );

        if (!match) {
          throw new Error("Неверный пароль!");
        }

        const { password, ...userWithoutPass } = candidate;

        return userWithoutPass as any;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      try {
        if (user) {
          token.id = user.id!;
          token.login = user.login;
          token.role = user.role;
          token.profile = user.profile;
        }
        return token;
      } catch (error) {
        console.log("ERROR JWT Callback (authConfig)", JSON.stringify(error));
        return null;
      }
    },
    // Для использования в клиентских приложениях
    async session({ session, token }) {
      try {
        if (session.user) {
          session.user.id = token.id;
          session.user.login = token.login;
          session.user.role = token.role;
          session.user.profile = token.profile;
        }

        return session;
      } catch (error) {
        console.log(
          "ERROR Session Callback (authConfig)",
          JSON.stringify(error),
        );
        return session;
      }
    },
  },
};
