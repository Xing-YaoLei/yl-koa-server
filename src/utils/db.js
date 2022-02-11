import { PrismaClient } from '@prisma/client'

const db = new PrismaClient();

db.$connect().catch((err) => console.error(err));

export default db
