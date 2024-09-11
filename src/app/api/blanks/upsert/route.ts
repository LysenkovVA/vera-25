import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/db";
import { Blank } from "@/entities/Blank";
import { Prisma } from "@prisma/client";

export async function POST(request: Request, response: Response) {
  const data: Blank = await request.json();

  console.log("DATA", JSON.stringify(data));

  if (!data.name) {
    return NextResponse.json("name is required");
  }

  let result = {};
  if (data.id) {
    console.log("updating...");
    const blankQuery: Prisma.BlankUpdateInput = {
      name: data.name,
    };

    if (data.blankTypeId) {
      blankQuery.blankType = { connect: { id: data.blankTypeId } };
    }

    if (data.countryId) {
      blankQuery.country = { connect: { id: data.countryId } };
    }

    if (data.manufacturerId) {
      blankQuery.manufacturer = { connect: { id: data.manufacturerId } };
    }

    if (data.securityLevelId) {
      blankQuery.securityLevel = { connect: { id: data.securityLevelId } };
    }
    // update
    result = await prisma.blank.update({
      data: blankQuery,
      where: { id: data.id },
    });
  } else {
    console.log("creating...");
    const blankQuery: Prisma.BlankCreateInput = {
      name: data.name,
    };

    if (data.blankTypeId) {
      blankQuery.blankType = { connect: { id: data.blankTypeId } };
    }

    if (data.countryId) {
      blankQuery.country = { connect: { id: data.countryId } };
    }

    if (data.manufacturerId) {
      blankQuery.manufacturer = { connect: { id: data.manufacturerId } };
    }

    if (data.securityLevelId) {
      blankQuery.securityLevel = { connect: { id: data.securityLevelId } };
    }

    result = await prisma.blank.create({ data: blankQuery });
  }

  return NextResponse.json(result);
}
