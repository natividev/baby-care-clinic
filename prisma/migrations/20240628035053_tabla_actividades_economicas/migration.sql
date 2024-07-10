/*
  Warnings:

  - A unique constraint covering the columns `[jvpm]` on the table `medicos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[documentoDeIdentidad]` on the table `medicos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nrc]` on the table `medicos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `actividadEconomicaCodigo` to the `medicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apellidos` to the `medicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documentoDeIdentidad` to the `medicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jvpm` to the `medicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nrc` to the `medicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefono` to the `medicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "medicos" ADD COLUMN     "actividadEconomicaCodigo" VARCHAR(5) NOT NULL,
ADD COLUMN     "apellidos" TEXT NOT NULL,
ADD COLUMN     "documentoDeIdentidad" TEXT NOT NULL,
ADD COLUMN     "jvpm" TEXT NOT NULL,
ADD COLUMN     "nrc" TEXT NOT NULL,
ADD COLUMN     "telefono" TEXT NOT NULL,
ALTER COLUMN "estado" SET DEFAULT true;

-- CreateTable
CREATE TABLE "actividad_economica" (
    "codigo" VARCHAR(5) NOT NULL,
    "nombre" VARCHAR(200),
    "pais" CHAR(2) NOT NULL DEFAULT 'SV',
    "estado" CHAR(12) NOT NULL DEFAULT 'Activo',
    "creado_por" VARCHAR(15) NOT NULL,
    "fecha_creacion" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modificado_por" VARCHAR(15),
    "fecha_modificacion" TIMESTAMP(6),

    CONSTRAINT "pk_sv_cat_019" PRIMARY KEY ("codigo")
);

-- CreateIndex
CREATE UNIQUE INDEX "medicos_jvpm_key" ON "medicos"("jvpm");

-- CreateIndex
CREATE UNIQUE INDEX "medicos_documentoDeIdentidad_key" ON "medicos"("documentoDeIdentidad");

-- CreateIndex
CREATE UNIQUE INDEX "medicos_nrc_key" ON "medicos"("nrc");

-- AddForeignKey
ALTER TABLE "medicos" ADD CONSTRAINT "medicos_actividadEconomicaCodigo_fkey" FOREIGN KEY ("actividadEconomicaCodigo") REFERENCES "actividad_economica"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
