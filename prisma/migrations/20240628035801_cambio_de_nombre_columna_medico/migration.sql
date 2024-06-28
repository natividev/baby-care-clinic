/*
  Warnings:

  - You are about to drop the column `documentoDeIdentidad` on the `medicos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[documento_de_identidad]` on the table `medicos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `documento_de_identidad` to the `medicos` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "medicos_documentoDeIdentidad_key";

-- AlterTable
ALTER TABLE "medicos" DROP COLUMN "documentoDeIdentidad",
ADD COLUMN     "documento_de_identidad" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "medicos_documento_de_identidad_key" ON "medicos"("documento_de_identidad");
