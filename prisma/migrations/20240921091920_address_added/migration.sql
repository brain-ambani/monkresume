/*
  Warnings:

  - You are about to drop the column `Address` on the `Resume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Resume" DROP COLUMN "Address",
ADD COLUMN     "address" TEXT;
