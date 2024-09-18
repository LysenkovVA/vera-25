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
    // СОЗДАНИЕ НОВОГО БЛАНКА -------------------------------
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
    const covers: Prisma.CoverCreateWithoutBlankInput[] | undefined =
      data.covers?.map((cover) => {
        const input: Prisma.CoverCreateWithoutBlankInput = {
          coverColor: { connect: { id: cover.coverColor?.id } },
          coverDesign: { connect: { id: cover.coverDesign?.id } },
          coverTexture: { connect: { id: cover.coverTexture?.id } },
          coverFormat: cover.coverFormat,
          coverImageMethod: { connect: { id: cover.coverImageMethod?.id } },
          notes: cover.notes,
        };

        return input;
      });

    if (covers) {
      blankQuery.covers = {
        create: covers,
      };
    }

    // ДОБАВЛЕНИЕ БЛОКОВ
    const blocks: Prisma.BlockCreateWithoutBlankInput[] | undefined =
      data.blocks?.map((block) => {
        const input: Prisma.BlockCreateWithoutBlankInput = {
          blockDesign: { connect: { id: block.blockDesign?.id } },
          blockFormat: block.blockFormat,
          blockCornersDesign: { connect: { id: block.blockCornersDesign?.id } },
          blockPagesMaterial: { connect: { id: block.blockPagesMaterial?.id } },
          pagesInBlock: block.pagesInBlock,
          pagesNumbered: block.pagesNumbered,
          hasEndPapers: block.hasEndPapers,
          notes: block.notes,
        };

        return input;
      });

    if (blocks) {
      blankQuery.blocks = {
        create: blocks,
      };
    }

    // ДОБАВЛЕНИЕ СКРЕПЛЕНИЙ
    const fastenings: Prisma.FasteningCreateWithoutBlankInput[] | undefined =
      data.fastenings?.map((fastening) => {
        // НИТИ
        const fibers:
          | Prisma.FasteningFiberCreateWithoutFasteningInput[]
          | undefined = fastening.fasteningFibers?.map((fiber) => {
          const fiberInput: Prisma.FasteningFiberCreateWithoutFasteningInput = {
            fiberColor: { connect: { id: fiber.fiberColor?.id } },
            fiberMorphology: { connect: { id: fiber.fiberMorphology?.id } },
            fiberStep: { connect: { id: fiber.fiberStep?.id } },
            notes: fiber.notes,
          };
          return fiberInput;
        });

        // СКОБЫ
        const staples:
          | Prisma.FasteningStaplesCreateWithoutFasteningInput[]
          | undefined = fastening.fasteningStaples?.map((staples) => {
          const staplesInput: Prisma.FasteningStaplesCreateWithoutFasteningInput =
            {
              staplesMaterial: { connect: { id: staples.staplesMaterial?.id } },
              staplesDistance: { connect: { id: staples.staplesDistance?.id } },
              staplesBackSize: { connect: { id: staples.staplesBackSize?.id } },
              notes: staples.notes,
            };
          return staplesInput;
        });

        const fasteningInput: Prisma.FasteningCreateWithoutBlankInput = {
          blockAndCoverFasteningMethod: {
            connect: { id: fastening.blockAndCoverFasteningMethod?.id },
          },
          blockPagesFasteningMethod: {
            connect: { id: fastening.blockPagesFasteningMethod?.id },
          },
          notes: fastening.notes,
        };

        if (fibers) {
          fasteningInput.fasteningFibers = { create: fibers };
        }

        if (staples) {
          fasteningInput.fasteningStaples = { create: staples };
        }

        return fasteningInput;
      });

    if (fastenings) {
      blankQuery.fastenings = { create: fastenings };
    }

    // ДОБАВЛЕНИЕ РЕКВИЗИТОВ
    const details: Prisma.DetailCreateWithoutBlankInput[] | undefined =
      data.details?.map((detail) => {
        const input: Prisma.DetailCreateWithoutBlankInput = {
          detailType: { connect: { id: detail.detailType?.id } },
          location: detail.location,
          notes: detail.notes,
        };

        return input;
      });

    if (details) {
      blankQuery.details = {
        create: details,
      };
    }

    // ДОБАВЛЕНИЕ ПЕРСОНАЛИЗАЦИИ
    blankQuery.pagesCount = data.pagesCount;
    blankQuery.personalizationDataContents = data.personalizationDataContents;

    if (data.applyingDataMethod) {
      blankQuery.applyingDataMethod = {
        connect: { id: data.applyingDataMethod?.id },
      };
    }

    // Ламинат
    const laminates: Prisma.LaminateCreateWithoutBlankInput[] | undefined =
      data.laminates?.map((laminate) => {
        const input: Prisma.LaminateCreateWithoutBlankInput = {
          laminateType: { connect: { id: laminate.laminateType?.id } },
          laminateMethod: { connect: { id: laminate.laminateMethod?.id } },
        };

        return input;
      });

    if (laminates) {
      blankQuery.laminates = {
        create: laminates,
      };
    }

    result = await prisma.blank.create({
      data: blankQuery,
      // Что возвращаем на выходе
      include: {
        blankType: true,
        country: true,
        securityLevel: true,
        manufacturer: true,
        covers: true,
        blocks: true,
        fastenings: {
          include: {
            fasteningFibers: true,
            fasteningStaples: true,
          },
        },
        details: true,
      },
    });
  }

  return NextResponse.json(result);
}
