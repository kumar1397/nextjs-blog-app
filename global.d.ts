// global.d.ts
import { PrismaClient } from '@prisma/client';

declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

// This export is necessary to make TypeScript treat this file as a module
export {};
