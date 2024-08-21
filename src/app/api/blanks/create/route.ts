import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/db";
import { Blank } from "@/entities/Blank";

export async function POST(request: Request, response: Response) {
  const data: Blank = await request.json();

  if (!data.name) {
    return NextResponse.json("name is required");
  }

  const result = await prisma.blank.create({
    data: {
      name: data.name,
    },
  });

  return NextResponse.json(result);
}
