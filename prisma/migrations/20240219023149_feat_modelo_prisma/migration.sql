-- CreateTable
CREATE TABLE "pacientes" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" TEXT NOT NULL,
    "correo" TEXT,
    "telefono" TEXT NOT NULL,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,
    "correo" TEXT,

    CONSTRAINT "medicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "citas" (
    "id" SERIAL NOT NULL,
    "fecha_hora" TEXT NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "idMedico" INTEGER NOT NULL,
    "observaciones" TEXT NOT NULL,

    CONSTRAINT "citas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_correo_key" ON "pacientes"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "medicos_correo_key" ON "medicos"("correo");

-- AddForeignKey
ALTER TABLE "citas" ADD CONSTRAINT "citas_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "citas" ADD CONSTRAINT "citas_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "medicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
