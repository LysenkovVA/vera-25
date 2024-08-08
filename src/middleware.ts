import NextAuth from "next-auth";
import { authConfig } from "@/shared/config/authConfig";

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
  matcher: ["/blanks"],
};
