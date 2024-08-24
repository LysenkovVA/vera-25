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
