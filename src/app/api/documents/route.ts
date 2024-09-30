import prisma from "../../../../prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { Document } from "@/entities/Document";
import { ServerResponse } from "@/shared/lib/responses/ServerResponse";

export async function GET(request: NextRequest, response: Response) {
  const skip = Number(request.nextUrl.searchParams.get("skip")) || undefined;
  const take = Number(request.nextUrl.searchParams.get("take")) || undefined;
  const search = request.nextUrl.searchParams.get("search") || "";

  try {
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

    return NextResponse.json(
      ServerResponse.Ok(documents as Document[], {
        take,
        skip,
        search,
        total: count,
      }),
    );
  } catch (error) {
    return NextResponse.json(
      ServerResponse.ServerError(
        error,
        {
          take,
          skip,
          search,
          total: 0,
        },
        `Неизвестная ошибка при получении списка документов`,
      ),
    );
  }
}
