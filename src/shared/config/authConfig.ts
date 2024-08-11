import { NextAuthConfig, User } from "next-auth";
import Credentials from "@auth/core/providers/credentials";
import prisma from "../../../prisma/db";
import type { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma) as Adapter,
  secret: process.env.AUTH_SECRET,
  debug: true,
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        login: {},
        password: {},
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

        console.log(
          "Found Candidate at authorize (auth config)",
          JSON.stringify(candidate, null, 2),
        );

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

        return candidate as User;
      },
    }),
  ],
  pages: {
    signIn: "/",
    // error: "/error",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("JWT callback executing (authConfig)...");
      try {
        if (user) {
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
      console.log("Session callback executing (authConfig)...");
      try {
        if (session.user) {
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
    // async authorized({ auth }) {
    //   // Пользователь в прниципе авторизован,
    //   // далее все проверки по ролям в middleware
    //   return !!auth;
    // },
  },
};
