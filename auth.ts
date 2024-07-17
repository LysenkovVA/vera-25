import NextAuth from "next-auth";
import Credentials from "@auth/core/providers/credentials";
import { authConfig } from "@/config/authConfig";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
});
