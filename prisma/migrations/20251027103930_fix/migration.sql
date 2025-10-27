/*
  Warnings:

  - You are about to drop the column `updateddAt` on the `employe` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Employe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employe` DROP COLUMN `updateddAt`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `name` VARCHAR(255) NOT NULL;
