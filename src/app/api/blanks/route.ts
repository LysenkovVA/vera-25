import prisma from "../../../../prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const skip = Number(request.nextUrl.searchParams.get("skip")) || undefined;
  const take = Number(request.nextUrl.searchParams.get("take")) || undefined;

  const data = await prisma.blank.findMany({
    include: { covers: true },
    orderBy: { name: "asc" },
    skip,
    take,
  });
  return NextResponse.json(data);
}
