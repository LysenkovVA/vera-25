import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/db";

/**
 * Получение Контрольных параметров по id документа
 * @param request
 * @param params
 * @constructor
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.controlParameter.findMany({
    where: { documentId: params.id },
    orderBy: { position: "asc" },
  });
  return NextResponse.json(data);
}
