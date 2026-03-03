-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "proyectoTipo" TEXT NOT NULL,
    "madurezDigital" TEXT NOT NULL,
    "presupuesto" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "web" TEXT,
    "descripcion" TEXT,
    "tierCalculado" TEXT NOT NULL,
    "sourceUrl" TEXT
);
