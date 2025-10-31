import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

config();

async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });

  console.log("database seeded succesfully");
}

main();
