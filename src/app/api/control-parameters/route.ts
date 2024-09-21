import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/db";

/**
 * Получение Контрольных параметров
 * @param request
 * @constructor
 */
export async function GET(request: NextRequest) {
  const data = await prisma.controlParameter.findMany({
    orderBy: { position: "asc" },
  });
  return NextResponse.json(data);
}
