import { PrismaClient } from "@prisma/client";

const newPrismaClient = new PrismaClient();

async function readAllPostsDb() {
  try {
    const allPosts = await newPrismaClient.blogContent.findMany({
      where: { blog_post_publish_status: true },
    });
    return allPosts;
  } catch (error) {
    throw error;
  }
}

async function registerNewUserDb(userDetailsObject) {
  try {
  } catch (error) {
    throw error;
  }
}

export { newPrismaClient, readAllPostsDb };
