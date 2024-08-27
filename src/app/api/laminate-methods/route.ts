import prisma from "../../../../prisma/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  const data = await prisma.laminateMethod.findMany({
    orderBy: { name: "asc" },
  });
  return NextResponse.json(data);
}
