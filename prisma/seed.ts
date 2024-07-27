import { PrismaClient } from "@prisma/client";
import { securityLevels } from "./seedData/securityLevelsData.seed";
import { countries } from "./seedData/countriesData.seed";
import { documents } from "./seedData/documentsData.seed";

const prisma = new PrismaClient();

async function main() {
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
