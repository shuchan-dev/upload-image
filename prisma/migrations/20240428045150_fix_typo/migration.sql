/*
  Warnings:

  - You are about to drop the column `titel` on the `Upload` table. All the data in the column will be lost.
  - Added the required column `title` to the `Upload` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Upload" DROP COLUMN "titel",
ADD COLUMN     "title" TEXT NOT NULL;
