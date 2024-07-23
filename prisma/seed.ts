import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // РОЛИ
  // const roleAdmin = await prisma.role.create({
  //   data: {
  //     name: "ADMIN",
  //   },
  // });
  //
  // const roleUser = await prisma.role.create({
  //   data: {
  //     name: "USER",
  //   },
  // });
  //
  // // ПОЛЬЗОВАТЕЛИ
  // // Админ
  // const admin = await prisma.user.upsert({
  //   where: { email: "admin@email.com" },
  //   update: {},
  //   create: {
  //     email: "admin@email.com",
  //     // name: "Лысенков Виктор",
  //     password: await bcrypt.hash("123456", Number(process.env.BCRYPT_SALT)),
  //     role: { connect: roleAdmin },
  //     profile: {
  //       create: {
  //         surname: "Лысенков",
  //         name: "Виктор",
  //         birthDate: dayjs("1986-03-30").toDate(),
  //         avatar: null,
  //       },
  //     },
  //   },
  // });
  //
  // await prisma.user.upsert({
  //   where: { email: "user@email.com" },
  //   update: {},
  //   create: {
  //     email: "user@email.com",
  //     // name: "Лысенков Виктор",
  //     password: await bcrypt.hash("123456", Number(process.env.BCRYPT_SALT)),
  //     role: { connect: roleUser },
  //     profile: {
  //       create: {
  //         surname: "Иванов",
  //         name: "Иван",
  //         birthDate: dayjs("1999-07-11").toDate(),
  //         avatar: null,
  //       },
  //     },
  //   },
  // });
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
