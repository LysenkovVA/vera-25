import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/db";

/**
 * Получение Значений Контрольных параметров по id Контрольного параметра
 * @param request
 * @param params
 * @constructor
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.controlParameterValue.findMany({
    where: { controlParameterId: params.id },
    orderBy: { position: "asc" },
  });
  return NextResponse.json(data);
}
