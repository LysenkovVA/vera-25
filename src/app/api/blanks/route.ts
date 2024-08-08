import prisma from "../../../../prisma/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  const data = await prisma.blank.findMany({
    include: { covers: true },
    orderBy: { name: "asc" },
  });
  return NextResponse.json(data);
}
