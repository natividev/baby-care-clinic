-- CreateTable
CREATE TABLE "pais" (
    "codigo" VARCHAR(4) NOT NULL,
    "nombre" VARCHAR(100),
    "estado" CHAR(12) NOT NULL DEFAULT 'Activo',
    "creado_por" VARCHAR(15) NOT NULL,
    "fecha_creacion" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modificado_por" VARCHAR(15),
    "fecha_modificacion" TIMESTAMP(6),

    CONSTRAINT "pk_sv_cat_020" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "departamento" (
    "codigo" VARCHAR(2) NOT NULL,
    "nombre" VARCHAR(100),
    "estado" CHAR(12) NOT NULL DEFAULT 'Activo',
    "creado_por" VARCHAR(15) NOT NULL,
    "fecha_creacion" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modificado_por" VARCHAR(15),
    "fecha_modificacion" TIMESTAMP(6),

    CONSTRAINT "pk_sv_cat_012" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "municipio" (
    "codigo" VARCHAR(2) NOT NULL,
    "nombre" VARCHAR(100),
    "codigo_departamento" VARCHAR(2) NOT NULL,
    "estado" CHAR(12) NOT NULL DEFAULT 'Activo',
    "creado_por" VARCHAR(15) NOT NULL,
    "fecha_creacion" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modificado_por" VARCHAR(15),
    "fecha_modificacion" TIMESTAMP(6),

    CONSTRAINT "pk_sv_cat_013" PRIMARY KEY ("codigo","codigo_departamento")
);

-- AddForeignKey
ALTER TABLE "municipio" ADD CONSTRAINT "municipio" FOREIGN KEY ("codigo_departamento") REFERENCES "departamento"("codigo") ON DELETE NO ACTION ON UPDATE NO ACTION;
