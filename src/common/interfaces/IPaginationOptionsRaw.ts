import { Sql } from '@prisma/client/runtime/library';

export interface IPaginationOptionsRaw {
  query?: Sql;
  limit?: number;
  page?: number;
}
