import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/db";
import { Blank } from "@/entities/Blank";
import { Prisma } from "@prisma/client";

export async function POST(request: Request, response: Response) {
  const data: Blank = await request.json();

  if (!data.name) {
    return NextResponse.json("name is required");
  }

  let result = {};
  if (data.id) {
    const blankQuery: Prisma.BlankUpdateInput = {
      name: data.name,
    };

    if (data.blankTypeId) {
      blankQuery.blankType = { connect: { id: data.blankTypeId } };
    } else {
      blankQuery.blankType = undefined;
    }

    if (data.countryId) {
      blankQuery.country = { connect: { id: data.countryId } };
    } else {
      blankQuery.country = undefined;
    }

    if (data.manufacturerId) {
      blankQuery.manufacturer = { connect: { id: data.manufacturerId } };
    } else {
      blankQuery.manufacturer = undefined;
    }

    if (data.securityLevelId) {
      blankQuery.securityLevel = { connect: { id: data.securityLevelId } };
    } else {
      blankQuery.securityLevel = undefined;
    }

    // data.covers?.map((cover) => {
    //   blankQuery.covers = {
    //     update: {
    //       data: {
    //         coverColor: { connect: { id: cover.coverColorId } },
    //         coverDesign: { connect: { id: cover.coverDesignId } },
    //         coverTexture: { connect: { id: cover.coverTextureId } },
    //         coverFormat: cover.coverFormat,
    //         coverImageMethod: { connect: { id: cover.coverImageMethodId } },
    //         notes: cover.notes,
    //       },
    //       where: { id: cover.id },
    //     },
    //   };
    // });

    // update
    result = await prisma.blank.update({
      data: blankQuery,
      where: { id: data.id },
    });
  } else {
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

    // ДОБАВЛЕНИЕ ОБЛОЖЕК
    const covers = data.covers?.map((cover) => {
      const input: Prisma.CoverCreateManyBlankInput = {
        coverColorId: cover.coverColor?.id,
        coverDesignId: cover.coverDesign?.id,
        coverTextureId: cover.coverTexture?.id,
        coverFormat: cover.coverFormat,
        coverImageMethodId: cover.coverImageMethod?.id,
        notes: cover.notes,
      };

      return input;
    });

    if (covers) {
      blankQuery.covers = {
        createMany: {
          data: covers,
        },
      };
    }

    // ДОБАВЛЕНИЕ БЛОКОВ
    const blocks = data.blocks?.map((block) => {
      const input: Prisma.BlockCreateManyBlankInput = {
        blockDesignId: block.blockDesign?.id,
        blockFormat: block.blockFormat,
        blockCornersDesignId: block.blockCornersDesign?.id,
        blockPagesMaterialId: block.blockPagesMaterial?.id,
        pagesInBlock: block.pagesInBlock,
        pagesNumbered: block.pagesNumbered,
        hasEndPapers: block.hasEndPapers,
        notes: block.notes,
      };

      return input;
    });

    if (blocks) {
      blankQuery.blocks = {
        createMany: {
          data: blocks,
        },
      };
    }

    // ДОБАВЛЕНИЕ СКРЕПЛЕНИЙ
    const fastenings = data.fastenings?.map((fastening) => {
      // НИТИ
      const fibers = fastening.fasteningFibers?.map((fiber) => {
        const fiberInput: Prisma.FasteningFiberCreateManyFasteningInput = {
          fiberColorId: fiber.fiberColor?.id,
          fiberMorphologyId: fiber.fiberMorphology?.id,
          fiberStepId: fiber.fiberStep?.id,
          notes: fiber.notes,
        };
        return fiberInput;
      });

      // СКОБЫ
      const staples = fastening.fasteningStaples?.map((staples) => {
        const staplesInput: Prisma.FasteningStaplesCreateManyFasteningInput = {
          staplesMaterialId: staples.staplesMaterial?.id,
          staplesDistanceId: staples.staplesDistance?.id,
          staplesBackSizeId: staples.staplesBackSize?.id,
          notes: staples.notes,
        };
        return staplesInput;
      });

      // TODO Здесь надо айдишникам присваивать
      const fasteningInput: Prisma.FasteningCreateInput = {
        blockAndCoverFasteningMethod: {
          connect: { id: fastening.blockAndCoverFasteningMethod?.id },
        },
        blockPagesFasteningMethod: {
          connect: { id: fastening.blockPagesFasteningMethod?.id },
        },
        notes: fastening.notes,
      };

      if (fibers) {
        fasteningInput.fasteningFibers = { createMany: { data: fibers } };
      }

      if (staples) {
        fasteningInput.fasteningStaples = { createMany: { data: staples } };
      }

      return fasteningInput;
    });

    if (fastenings) {
      blankQuery.fastenings = { createMany: { data: fastenings } };
    }

    // data.covers?.map((cover) => {
    //   blankQuery.covers = {
    //     create: {
    //       coverColor: { connect: { id: cover.coverColor?.id } },
    //       coverDesign: { connect: { id: cover.coverDesign?.id } },
    //       coverTexture: { connect: { id: cover.coverTexture?.id } },
    //       coverFormat: cover.coverFormat,
    //       coverImageMethod: { connect: { id: cover.coverImageMethod?.id } },
    //       notes: cover.notes,
    //     },
    //   };
    // });

    // data.blocks?.map((block) => {
    //   blankQuery.blocks = {
    //     create: {
    //       blockDesign: { connect: { id: block.blockDesign?.id } },
    //       blockFormat: block.blockFormat,
    //       blockCornersDesign: { connect: { id: block.blockCornersDesign?.id } },
    //       blockPagesMaterial: { connect: { id: block.blockPagesMaterial?.id } },
    //       pagesInBlock: block.pagesInBlock,
    //       pagesNumbered: block.pagesNumbered,
    //       hasEndPapers: block.hasEndPapers,
    //       notes: block.notes,
    //     },
    //   };
    // });

    // data.fastenings?.map((fastening) => {
    //   // TODO выяснить как добавлять в запрос большую вложенность объектов при создании
    //   const fibers = fastening.fasteningFibers?.map((fiber) => {});
    //
    //   blankQuery.fastenings = {
    //     create: {
    //       blockPagesFasteningMethod: {
    //         connect: { id: fastening.blockPagesFasteningMethod?.id },
    //       },
    //       blockAndCoverFasteningMethod: {
    //         connect: { id: fastening.blockAndCoverFasteningMethod?.id },
    //       },
    //       notes: fastening.notes,
    //       // fasteningFibers: fastening.fasteningFibers?.map(
    //       //   (
    //       //     fiber,
    //       //   ):
    //       //     | Prisma.FasteningFiberCreateNestedManyWithoutFasteningInput
    //       //     | undefined => {
    //       //     return {
    //       //       create: {
    //       //         fiberColor: { connect: { id: fiber.fiberColor?.id } },
    //       //       },
    //       //     };
    //       //   },
    //       // ),
    //     },
    //   };
    // });

    result = await prisma.blank.create({
      data: blankQuery,
      // Что возвращаем на выходе
      include: { blankType: true },
    });
  }

  return NextResponse.json(result);
}
