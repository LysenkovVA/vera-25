import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.blank.findFirst({
    include: {
      blankType: true,
      securityLevel: true,
      manufacturer: true,
      country: true,
      covers: {
        include: {
          coverDesign: true,
          coverColor: true,
          coverTexture: true,
          coverImageMethod: true,
        },
      },
      blocks: {
        include: {
          blockDesign: true,
          blockCornersDesign: true,
          blockPagesMaterial: true,
        },
      },
      fastenings: {
        include: {
          blockAndCoverFasteningMethod: true,
          blockPagesFasteningMethod: true,
          fasteningFibers: {
            include: {
              fiberColor: true,
              fiberMorphology: true,
              fiberStep: true,
            },
          },
          fasteningStaples: {
            include: {
              staplesMaterial: true,
              staplesBackSize: true,
              staplesDistance: true,
            },
          },
        },
      },
      details: {
        include: {
          detailType: true,
        },
      },
    },
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(data);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await prisma.blank.delete({ where: { id: params.id } });
  return NextResponse.json(data);
}
