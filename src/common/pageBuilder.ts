import { IPaginationOptionsRaw } from './interfaces/IPaginationOptionsRaw';
import { IPageResponse } from './interfaces/IPageResponse';
//import { PrismaService } from '@/src/prisma.service';
import { IPrismaModel } from './interfaces/IPrismaModel';
import { IPaginationOptions } from './interfaces/IPaginationOptions';

async function pageBuilder<T>(
  model: IPrismaModel<T>, //| PrismaService,
  options: IPaginationOptions | IPaginationOptionsRaw,
): Promise<IPageResponse<T>> {
  const { page, limit } = options;

  if (
    typeof page !== 'number' ||
    typeof limit !== 'number' ||
    page <= 0 ||
    limit <= 0
  ) {
    throw new Error('Las opciones de paginación son inválidas');
  }

  const total = await model.count();
  const lastPage = Math.ceil(total / limit);
  const currentPage = Math.min(Math.max(1, page), lastPage);
  const skip = (currentPage - 1) * limit;

  const data = await model.findMany({
    skip,
    take: limit,
  });

  const prev = currentPage > 1 ? currentPage - 1 : null;
  const next = currentPage < lastPage ? currentPage + 1 : null;

  return {
    data,
    meta: {
      // Número total de elementos disponibles
      total,
      // Número total de páginas
      lastPage,
      // Página actual que se está mostrando
      currentPage,
      // Límite de elementos por página
      perPage: limit,
      // Enlace o indicador para ir a la página anterior
      prev,
      // Enlace o indicador para ir a la página siguiente
      next,
    },
  };
}

export { pageBuilder };
