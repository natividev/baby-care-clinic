/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `pacientes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `apellidos` to the `pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_nacimiento` to the `pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `pacientes` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "genero" AS ENUM ('Masculino', 'Femenino');

-- AlterTable
ALTER TABLE "pacientes" ADD COLUMN     "apellidos" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "genero" "genero" NOT NULL,
ALTER COLUMN "estado" SET DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_email_key" ON "pacientes"("email");
