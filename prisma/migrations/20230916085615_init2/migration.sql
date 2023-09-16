-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Car" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "registerPlate" TEXT NOT NULL,
    "VIN" TEXT NOT NULL
);
INSERT INTO "new_Car" ("VIN", "brand", "id", "model", "registerPlate", "year") SELECT "VIN", "brand", "id", "model", "registerPlate", "year" FROM "Car";
DROP TABLE "Car";
ALTER TABLE "new_Car" RENAME TO "Car";
CREATE UNIQUE INDEX "Car_registerPlate_key" ON "Car"("registerPlate");
CREATE UNIQUE INDEX "Car_VIN_key" ON "Car"("VIN");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
