-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Alimento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "proteinas" TEXT NOT NULL,
    "carboidratos" TEXT NOT NULL,
    "lipideos" TEXT NOT NULL,
    "kcal" TEXT NOT NULL,
    "tipo" TEXT,
    "magnesio" TEXT,
    "calcio" TEXT,
    "cinzas" TEXT,
    "fibras" TEXT,
    "colesterol" TEXT,
    "kj" TEXT,
    "umidade" TEXT
);
INSERT INTO "new_Alimento" ("calcio", "carboidratos", "cinzas", "colesterol", "fibras", "id", "kcal", "kj", "lipideos", "magnesio", "nome", "proteinas", "umidade") SELECT "calcio", "carboidratos", "cinzas", "colesterol", "fibras", "id", "kcal", "kj", "lipideos", "magnesio", "nome", "proteinas", "umidade" FROM "Alimento";
DROP TABLE "Alimento";
ALTER TABLE "new_Alimento" RENAME TO "Alimento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
