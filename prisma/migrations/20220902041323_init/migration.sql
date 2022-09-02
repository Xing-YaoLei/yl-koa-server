-- CreateTable
CREATE TABLE "adminUsers" (
    "adminId" TEXT NOT NULL PRIMARY KEY,
    "identity" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "adminUsers_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
