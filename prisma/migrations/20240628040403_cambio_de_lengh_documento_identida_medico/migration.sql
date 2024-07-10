/*
  Warnings:

  - You are about to alter the column `documento_de_identidad` on the `medicos` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(14)`.

*/
-- AlterTable
ALTER TABLE "medicos" ALTER COLUMN "documento_de_identidad" SET DATA TYPE VARCHAR(14);
