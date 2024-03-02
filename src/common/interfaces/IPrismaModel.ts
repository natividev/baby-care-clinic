import { Prisma } from '@prisma/client';

export interface IPrismaModel<T> {
  findMany: (args?: object) => Prisma.PrismaPromise<T[]>;
  count: (args?: object) => Prisma.PrismaPromise<number>;
}
