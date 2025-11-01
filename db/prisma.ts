import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

// Configure WebSocket for local development only
if (process.env.NODE_ENV !== "production") {
  const ws = require("ws");
  neonConfig.webSocketConstructor = ws;
}

const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);

export const prisma = (new PrismaClient({ adapter } as any) as PrismaClient).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
