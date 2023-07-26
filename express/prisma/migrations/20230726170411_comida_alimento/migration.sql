/*
  Warnings:

  - You are about to drop the `Comida` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Comida";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Alimento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "magnesio" TEXT NOT NULL,
    "calcio" TEXT NOT NULL,
    "cinzas" TEXT NOT NULL,
    "fibras" TEXT NOT NULL,
    "carboidratos" TEXT NOT NULL,
    "colesterol" TEXT NOT NULL,
    "lipideos" TEXT NOT NULL,
    "proteinas" TEXT NOT NULL,
    "kj" TEXT NOT NULL,
    "kcal" TEXT NOT NULL,
    "umidade" TEXT NOT NULL
);
