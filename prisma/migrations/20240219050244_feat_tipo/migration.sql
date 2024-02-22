/*
  Warnings:

  - Changed the type of `fecha_hora` on the `citas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `edad` on the `pacientes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "citas" DROP COLUMN "fecha_hora",
ADD COLUMN     "fecha_hora" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "pacientes" DROP COLUMN "edad",
ADD COLUMN     "edad" INTEGER NOT NULL;
