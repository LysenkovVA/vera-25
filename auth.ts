import NextAuth from "next-auth";
import { authConfig } from "@/shared/config/authConfig";

// signIn, signOut, auth ???
export const { handlers, signIn, auth } = NextAuth({
  ...authConfig,
});
