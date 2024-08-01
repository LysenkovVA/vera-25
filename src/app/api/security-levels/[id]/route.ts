import prisma from "../../../../../prisma/db";
import { NextRequest, NextResponse } from "next/server";

/**
 * Получение Уровня защищенности по id
 * @param request
 * @param params
 * @constructor
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.securityLevel.findFirst({
    where: { id: params.id },
  });
  return NextResponse.json(data);
}
