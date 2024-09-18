import { PrismaClient } from "@prisma/client";
import { securityLevels } from "./seedData/securityLevelsData.seed";
import { countries } from "./seedData/countriesData.seed";
import { documents } from "./seedData/documentsData.seed";
import { coverDesignDataSeed } from "./seedData/cover/coverDesignData.seed";
import { coverTextureDataSeed } from "./seedData/cover/coverTextureData.seed";
import { coverImageMethodDataSeed } from "./seedData/cover/coverImageMethodData.seed";
import { researchMethods } from "./seedData/researchMethods.seed";
import { manufacturers } from "./seedData/manufacturers.seed";
import { coverColorDataSeed } from "./seedData/cover/coverColorData.seed";
import { blockDesignDataSeed } from "./seedData/block/blockDesignData.seed";
import { blockCornersDesignDataSeed } from "./seedData/block/blockCornersDesignData.seed";
import { blockPagesMaterialDataSeed } from "./seedData/block/blockPagesMaterialData.seed";
import { blockAndCoverFasteningMethodDataSeed } from "./seedData/fastening/blockAndCoverFasteningMethodData.seed";
import { blockPagesFasteningMethodDataSeed } from "./seedData/fastening/blockPagesFasteningMethodData.seed";
import { fiberColorsDataSeed } from "./seedData/fastening/fiber/fiberColorsDataSeed";
import { fiberMorphologyDataSeed } from "./seedData/fastening/fiber/fiberMorphologyDataSeed";
import { fiberStepDataSeed } from "./seedData/fastening/fiber/fiberStepDataSeed";
import { staplesMaterialsDataSeed } from "./seedData/fastening/staples/staplesMaterialsDataSeed";
import { staplesBackSizesDataSeed } from "./seedData/fastening/staples/staplesBackSizesDataSeed";
import { staplesDistancesDataSeed } from "./seedData/fastening/staples/staplesDistancesDataSeed";
import { detailTypesDataSeed } from "./seedData/detailTypesData.seed";
import { laminateTypesDataSeed } from "./seedData/laminateTypesData.seed";
import { laminateMethodsDataSeed } from "./seedData/laminateMethodsData.seed";
import { applyingDataMethodsDataSeed } from "./seedData/applyingDataMethodsData.seed";
import { blankTypesDataSeed } from "./seedData/blankTypesData.seed";

const prisma = new PrismaClient();

async function main() {
  // Добавление пользователей

  const bcrypt = require("bcryptjs");

  const admin = await prisma.user.create({
    data: {
      login: "admin",
      password: bcrypt.hashSync("123456", 10),
      role: {
        create: {
          name: "admin",
        },
      },
      profile: {
        create: {
          surname: "Иванов",
          name: "Сергей",
          avatar: "",
        },
      },
    },
  });

  const user = await prisma.user.create({
    data: {
      login: "user",
      password: bcrypt.hashSync("123456", 10),
      role: {
        create: {
          name: "user",
        },
      },
      profile: {
        create: {
          surname: "Петров",
          name: "Николай",
          avatar: "",
        },
      },
    },
  });

  for (const value of blankTypesDataSeed) {
    await prisma.blankType.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Добавление уровней безопасности
  for (const value of securityLevels) {
    await prisma.securityLevel.create({
      data: {
        name: value,
      },
    });
  }

  // Добавление стран
  for (const value of countries) {
    await prisma.country.create({
      data: {
        name: value,
      },
    });
  }

  for (const value of researchMethods) {
    await prisma.researchMethod.create({
      data: {
        name: value.name,
        position: value.position,
      },
    });
  }

  for (const value of manufacturers) {
    await prisma.manufacturer.create({
      data: {
        name: value,
      },
    });
  }

  // Добавление документов
  for (const value of documents) {
    const document = await prisma.document.create({
      data: {
        name: value.name,
        number: value.number,
        date: value.date,
        startDate: value.startDate,
        endDate: value.endDate,
        notes: value.notes,
      },
    });

    for (const group of value.requirementGroups) {
      const reqGroup = await prisma.requirementGroup.create({
        data: {
          name: group.name,
          position: group.position,
          notes: group.notes,
          document: { connect: document },
        },
      });

      for (const req of group.requirements) {
        await prisma.requirement.create({
          data: {
            name: req.name,
            position: req.position,
            notes: req.notes,
            requirementGroup: { connect: reqGroup },
          },
        });
      }
    }

    for (const cp of value.controlParameters) {
      const controlParameter = await prisma.controlParameter.create({
        data: {
          name: cp.name,
          position: cp.position,
          notes: cp.notes,
          document: { connect: document },
        },
      });

      for (const parValue of cp.controlParameterValues) {
        await prisma.controlParameterValue.create({
          data: {
            name: parValue.name,
            position: parValue.position,
            notes: parValue.notes,
            controlParameter: { connect: controlParameter },
          },
        });
      }
    }
  }

  // ОБЛОЖКИ
  // Конструкция обложек
  for (const value of coverDesignDataSeed) {
    await prisma.coverDesign.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Цвет покровного материала
  for (const value of coverColorDataSeed) {
    await prisma.coverColor.create({
      data: {
        name: value,
      },
    });
  }

  // Фактура покровного материла обложек
  for (const value of coverTextureDataSeed) {
    await prisma.coverTexture.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Способ нанесения изображений
  for (const value of coverImageMethodDataSeed) {
    await prisma.coverImageMethod.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // БЛОКИ
  // Конструкция блока
  for (const value of blockDesignDataSeed) {
    await prisma.blockDesign.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Конструкция углов
  for (const value of blockCornersDesignDataSeed) {
    await prisma.blockCornersDesign.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Материал страниц
  for (const value of blockPagesMaterialDataSeed) {
    await prisma.blockPagesMaterial.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // СКРЕПЛЕНИЕ
  // Скрепление блока с обложкой
  for (const value of blockAndCoverFasteningMethodDataSeed) {
    await prisma.blockAndCoverFasteningMethod.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Скрепление страниц блока
  for (const value of blockPagesFasteningMethodDataSeed) {
    await prisma.blockPagesFasteningMethod.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Цвет нити
  for (const value of fiberColorsDataSeed) {
    await prisma.fiberColor.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Морфология нити
  for (const value of fiberMorphologyDataSeed) {
    await prisma.fiberMorphology.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Шаг нити
  for (const value of fiberStepDataSeed) {
    await prisma.fiberStep.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Материал скрепок
  for (const value of staplesMaterialsDataSeed) {
    await prisma.staplesMaterial.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Размер спинок скрепок
  for (const value of staplesBackSizesDataSeed) {
    await prisma.staplesBackSize.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Расстояние между скрепками
  for (const value of staplesDistancesDataSeed) {
    await prisma.staplesDistance.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // РЕКВИЗИТЫ
  // Расстояние между скрепками
  for (const value of detailTypesDataSeed) {
    await prisma.detailType.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // ПЕРСОНАЛИЗАЦИЯ
  // Тип ламината
  for (const value of laminateTypesDataSeed) {
    await prisma.laminateType.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Способ ламинирования
  for (const value of laminateMethodsDataSeed) {
    await prisma.laminateMethod.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }

  // Способ нанесения данных
  for (const value of applyingDataMethodsDataSeed) {
    await prisma.applyingDataMethod.create({
      data: {
        name: value.name,
        notes: value.notes,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
