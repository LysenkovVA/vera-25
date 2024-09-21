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
  const data = await prisma.controlParameter.findFirst({
    where: { id: params.id },
    include: {
      controlParameterValues: true,
    },
  });
  return NextResponse.json(data);
}
