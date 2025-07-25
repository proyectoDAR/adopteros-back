import { Logger } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import * as seedUsers from "./users.json";

const prisma = new PrismaClient();

async function main() {
  const seedUserPromises = seedUsers.map((user) =>
    prisma.user.upsert({
      where: { user: user.user },
      update: {},
      create: {
        user: user.user,
        password: user.password,
      },
    })
  );

  try {
    await Promise.allSettled(seedUserPromises);
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    Logger.log("Database seeded", "Seeder");
  })
  .catch(async (e) => {
    Logger.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
