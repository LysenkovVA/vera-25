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
  const data = await prisma.country.findFirst({
    where: { id: Number(params.id) },
  });
  return NextResponse.json(data);
}
