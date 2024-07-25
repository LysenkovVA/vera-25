import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Уровни безопасности
 */
const securityLevels = ["А", "Б", "В", "Г"];

/**
 * Страны
 */
const countries = ["Российская Федерация"];

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
