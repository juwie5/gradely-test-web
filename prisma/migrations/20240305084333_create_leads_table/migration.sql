-- CreateTable
CREATE TABLE "Lead" (
    "phone_number" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Lead_phone_number_key" ON "Lead"("phone_number");
