import prisma from "../../../../../prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.securityLevel.findFirst({
    where: { id: Number(params.id) },
  });
  return NextResponse.json(data);
}
