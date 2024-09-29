import prisma from "../../../../../prisma/db";
import { NextRequest, NextResponse } from "next/server";

/**
 * Получение Документа по id
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
      controlParameters: {
        include: {
          controlParameterValues: true,
        },
      },
      requirementGroups: {
        include: {
          requirements: true,
        },
      },
    },
  });

  return NextResponse.json(data);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.document.delete({ where: { id: params.id } });
  return NextResponse.json(data);
}
