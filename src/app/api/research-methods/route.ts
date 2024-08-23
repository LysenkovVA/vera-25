import prisma from "../../../../prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json(
    await prisma.researchMethod.findMany({ orderBy: { position: "asc" } }),
  );
}
