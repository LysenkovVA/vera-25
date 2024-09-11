import prisma from "../../../../prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { Blank } from "@/entities/Blank";

export interface BlanksResponse {
  pagination?: {
    take?: number;
    skip?: number;
    search?: string;
    total?: number;
  };
  data?: Blank[];
}

export async function GET(request: NextRequest) {
  const skip = Number(request.nextUrl.searchParams.get("skip")) || undefined;
  const take = Number(request.nextUrl.searchParams.get("take")) || undefined;
  const search = request.nextUrl.searchParams.get("search") || "";
  const countryId = request.nextUrl.searchParams.get("countryId") || undefined;
  const manufacturerId =
    request.nextUrl.searchParams.get("manufacturerId") || undefined;
  const securityLevelId =
    request.nextUrl.searchParams.get("securityLevelId") || undefined;

  // Базовый запрос
  const query: Prisma.BlankFindManyArgs = {
    include: {
      blankType: true,
      securityLevel: true,
    },
    orderBy: { name: "asc" },
    skip,
    take,
  };

  // Поисковый запрос
  if (search) {
    query.where = { name: { startsWith: search } };
  }

  // TODO ФИЛЬТРЫ ВЫШЕ!

  // Результат
  const [blanks, count] = await prisma.$transaction([
    prisma.blank.findMany(query),
    search ? prisma.blank.count({ where: query.where }) : prisma.blank.count(),
  ]);

  const responseBody: BlanksResponse = {
    pagination: {
      take,
      skip,
      search,
      total: count,
    },
    data: blanks as Blank[],
  };

  return NextResponse.json(responseBody);
}
