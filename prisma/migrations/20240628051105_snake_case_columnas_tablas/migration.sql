/*
  Warnings:

  - You are about to drop the column `idMedico` on the `citas` table. All the data in the column will be lost.
  - You are about to drop the column `idPaciente` on the `citas` table. All the data in the column will be lost.
  - You are about to drop the column `actividadEconomicaCodigo` on the `medicos` table. All the data in the column will be lost.
  - You are about to alter the column `nombre` on the `medicos` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `correo` on the `medicos` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `apellidos` on the `medicos` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `jvpm` on the `medicos` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.
  - You are about to alter the column `nrc` on the `medicos` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.
  - You are about to alter the column `telefono` on the `medicos` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to drop the column `correo` on the `pacientes` table. All the data in the column will be lost.
  - You are about to alter the column `nombre` on the `pacientes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `telefono` on the `pacientes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.
  - You are about to alter the column `apellidos` on the `pacientes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `email` on the `pacientes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - Added the required column `id_medico` to the `citas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_paciente` to the `citas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actividad_economica_codigo` to the `medicos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "citas" DROP CONSTRAINT "citas_idMedico_fkey";

-- DropForeignKey
ALTER TABLE "citas" DROP CONSTRAINT "citas_idPaciente_fkey";

-- DropForeignKey
ALTER TABLE "medicos" DROP CONSTRAINT "medicos_actividadEconomicaCodigo_fkey";

-- DropIndex
DROP INDEX "pacientes_correo_key";

-- AlterTable
ALTER TABLE "citas" DROP COLUMN "idMedico",
DROP COLUMN "idPaciente",
ADD COLUMN     "id_medico" INTEGER NOT NULL,
ADD COLUMN     "id_paciente" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "medicos" DROP COLUMN "actividadEconomicaCodigo",
ADD COLUMN     "actividad_economica_codigo" VARCHAR(5) NOT NULL,
ALTER COLUMN "nombre" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "correo" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "apellidos" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "jvpm" SET DATA TYPE VARCHAR(10),
ALTER COLUMN "nrc" SET DATA TYPE VARCHAR(10),
ALTER COLUMN "telefono" SET DATA TYPE VARCHAR(15);

-- AlterTable
ALTER TABLE "pacientes" DROP COLUMN "correo",
ALTER COLUMN "nombre" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "telefono" SET DATA TYPE VARCHAR(15),
ALTER COLUMN "apellidos" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(100);

-- AddForeignKey
ALTER TABLE "medicos" ADD CONSTRAINT "medicos_actividad_economica_codigo_fkey" FOREIGN KEY ("actividad_economica_codigo") REFERENCES "actividad_economica"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "citas" ADD CONSTRAINT "citas_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "citas" ADD CONSTRAINT "citas_id_medico_fkey" FOREIGN KEY ("id_medico") REFERENCES "medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
