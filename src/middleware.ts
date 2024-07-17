import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "@/config/authConfig";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;

  const isAuthenticated = !!req.auth;

  // Если пользователь не авторизонван, перенаправляем на страницу входа
  if (!isAuthenticated) {
    return Response.redirect(new URL("/", nextUrl));
  }
});

// Матчер для защищенных маршрутов
export const config = {
  matcher: ["/collection"],
};
