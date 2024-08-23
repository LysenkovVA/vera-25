import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/db";
import { Blank } from "@/entities/Blank";
import { Prisma } from "@prisma/client";

export async function POST(request: Request, response: Response) {
  const data: Blank = await request.json();

  if (!data.name) {
    return NextResponse.json("name is required");
  }

  const blankQuery: Prisma.BlankCreateInput = {
    name: data.name,
    country: { connect: { id: data.countryId } },
    manufacturer: { connect: { id: data.manufacturerId } },
    securityLevel: { connect: { id: data.securityLevelId } },
  };

  // if (data.countryId) {
  //   blankQuery.country!.connect!.id = data.countryId;
  // }

  const result = await prisma.blank.create({
    data: blankQuery,
  });

  return NextResponse.json(result);
}
