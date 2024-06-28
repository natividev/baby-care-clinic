/*
  Warnings:

  - A unique constraint covering the columns `[especialidad]` on the table `medicos` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `especialidad` on the `medicos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "medicos" DROP COLUMN "especialidad",
ADD COLUMN     "especialidad" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "medicos_especialidad_key" ON "medicos"("especialidad");

-- AddForeignKey
ALTER TABLE "medicos" ADD CONSTRAINT "medicos_especialidad_fkey" FOREIGN KEY ("especialidad") REFERENCES "specialties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
