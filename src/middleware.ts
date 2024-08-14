/**
 * ПРОМЕЖУТОЧНОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ, КОТОРОЕ ВЫПОЛНЯЕТСЯ ДЛЯ ВСЕХ ЗАПРОСОВ
 * МОЖЕТ БЫТЬ ИСПОЛЬЗОВАН ТОЛЬКО ОДИН ТАКОЙ ФАЙЛ НА ВСЕ ПРИЛОЖЕНИЕ
 */

import { NextFunction } from "connect";
import { NextRequest, NextResponse } from "next/server";
import { corsOptions } from "@/shared/config/middleware/cors";
import { auth } from "../auth";

export async function middleware(
  request: NextRequest,
  response: NextResponse,
  next: NextFunction,
) {
  const { nextUrl } = request;
  console.log(">>> FETCH URL:", nextUrl.pathname);

  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      {
        middlewareError: "Пользователь не авторизован",
      },
      { status: 403 },
    );
  }

  const res = NextResponse.next();
  corsOptions(res);

  return res;
}

// specify the path regex to apply the middleware to
export const config = {
  matcher: ["/api/:path*", "/blanks", "/dashboard"],
};
