import prisma from "../../../../../prisma/db";
import { NextRequest, NextResponse } from "next/server";

/**
 * Получение Страны по id
 * @param request
 * @param params
 * @constructor
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.document.findFirst({
    where: { id: params.id },
    include: {
      requirementGroups: {
        include: {
          requirements: true,
        },
      },
    },
  });
  return NextResponse.json(data);
}
