/*
  Warnings:

  - You are about to alter the column `author` on the `book` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `book` MODIFY `author` JSON NOT NULL;
