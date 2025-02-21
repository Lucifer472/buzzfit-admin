import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const globalForPrisma = global as unknown as { db: typeof db };

if (process.env.NODE_ENV !== "production") globalForPrisma.db = db;

export default db;
