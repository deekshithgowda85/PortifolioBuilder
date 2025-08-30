-- CreateTable
CREATE TABLE "public"."Page" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_userId_path_key" ON "public"."Page"("userId", "path");
