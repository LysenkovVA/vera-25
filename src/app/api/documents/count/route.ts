import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/db";

export async function GET(request: Request, response: Response) {
  const data = await prisma.document.count();
  return NextResponse.json(data);
}
