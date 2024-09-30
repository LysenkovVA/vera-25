import prisma from "../../../../../prisma/db";
import { NextRequest, NextResponse } from "next/server";
import { ServerResponse } from "@/shared/lib/responses/ServerResponse";
import { Document } from "@/entities/Document";

/**
 * Получение документа по id
 * @param request
 * @param params
 * @constructor
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    // Выборка из БД
    const data = await prisma.document.findFirst({
      where: { id: params.id },
      include: {
        controlParameters: {
          include: {
            controlParameterValues: true,
          },
        },
      },
    });

    if (data) {
      // Возвращаем документ
      return NextResponse.json(ServerResponse.Ok<Document>(data as Document));
    } else {
      // Документ не найден
      return NextResponse.json(
        ServerResponse.NotFound(
          undefined,
          `Документ с id=${params.id} не найден`,
        ),
      );
    }
  } catch (error) {
    return NextResponse.json(
      ServerResponse.ServerError(
        error,
        undefined,
        `Неизвестная ошибка при получении документа с id=${params.id}`,
      ),
    );
  }
}

/**
 * Удаление документа по id
 * @param request
 * @param params
 * @constructor
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const data = await prisma.document.delete({ where: { id: params.id } });
    return NextResponse.json(
      ServerResponse.Ok<Document>(
        data as Document,
        undefined,
        "Документ удален",
      ),
    );
  } catch (error) {
    return NextResponse.json(
      ServerResponse.ServerError(
        error,
        undefined,
        `Неизвестная ошибка при удалении документа с id=${params.id}`,
      ),
    );
  }
}
