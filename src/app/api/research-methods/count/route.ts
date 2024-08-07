import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/db";

export async function GET(request: Request, response: Response) {
  //const data = await prisma.researchMethod.count();
  const data = "No data";
  return NextResponse.json(data);
}
