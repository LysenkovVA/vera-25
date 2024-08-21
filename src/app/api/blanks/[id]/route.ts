import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.blank.findUnique({
    include: {
      securityLevel: true,
      manufacturer: true,
      country: true,
      covers: true,
      blocks: true,
      fastenings: true,
    },
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(data);
}
