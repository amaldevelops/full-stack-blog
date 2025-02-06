-- CreateTable
CREATE TABLE "BlogUsers" (
    "id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "author" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "BlogUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogContent" (
    "id" SERIAL NOT NULL,
    "blog_post_title" TEXT NOT NULL,
    "blog_post_content" TEXT NOT NULL,
    "blog_post_publish_status" BOOLEAN NOT NULL DEFAULT false,
    "blog_post_publish_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blog_post_author_id" INTEGER NOT NULL,

    CONSTRAINT "BlogContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogComments" (
    "id" SERIAL NOT NULL,
    "comment_text" TEXT NOT NULL,
    "comment_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "blog_post_id" INTEGER NOT NULL,
    "comment_author_id" INTEGER NOT NULL,

    CONSTRAINT "BlogComments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BlogUsers_user_email_key" ON "BlogUsers"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "BlogUsers_user_name_key" ON "BlogUsers"("user_name");

-- AddForeignKey
ALTER TABLE "BlogContent" ADD CONSTRAINT "BlogContent_blog_post_author_id_fkey" FOREIGN KEY ("blog_post_author_id") REFERENCES "BlogUsers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogComments" ADD CONSTRAINT "BlogComments_blog_post_id_fkey" FOREIGN KEY ("blog_post_id") REFERENCES "BlogContent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogComments" ADD CONSTRAINT "BlogComments_comment_author_id_fkey" FOREIGN KEY ("comment_author_id") REFERENCES "BlogUsers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
