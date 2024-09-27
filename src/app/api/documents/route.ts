import prisma from "../../../../prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { Document } from "@/entities/Document";

export interface DocumentsResponse {
  pagination?: {
    take?: number;
    skip?: number;
    search?: string;
    total?: number;
  };
  data?: Document[];
}

export async function GET(request: NextRequest, response: Response) {
  const skip = Number(request.nextUrl.searchParams.get("skip")) || undefined;
  const take = Number(request.nextUrl.searchParams.get("take")) || undefined;
  const search = request.nextUrl.searchParams.get("search") || "";

  // Базовый запрос
  const query: Prisma.DocumentFindManyArgs = {
    include: {
      controlParameters: {
        include: { controlParameterValues: true },
      },
    },
    orderBy: { createdAt: "asc" },
    skip,
    take,
  };

  // Поисковый запрос
  if (search) {
    query.where = { name: { startsWith: search } };
  }

  // Результат
  const [documents, count] = await prisma.$transaction([
    prisma.document.findMany(query),
    search
      ? prisma.document.count({ where: query.where })
      : prisma.document.count(),
  ]);

  const responseBody: DocumentsResponse = {
    pagination: {
      take,
      skip,
      search,
      total: count,
    },
    data: documents as Document[],
  };

  return NextResponse.json(responseBody);
}
