/*
  Warnings:

  - Made the column `image` on table `book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `book` MODIFY `image` VARCHAR(191) NOT NULL,
    MODIFY `published` VARCHAR(191) NOT NULL;
