import { PrismaClient } from "@prisma/client";

const newPrismaClient = new PrismaClient();

//Table Operations for 'BlogUsers'

async function registerNewUserDb(userDetailsObject) {
  try {
  } catch (error) {
    next(error);
  }
}

async function loginUserDb(userDetailsObject) {
  try {
  } catch (error) {
    next(error);
  }
}

async function logOutUserDb() {
  try {
  } catch (error) {
    next(error);
  }
}

//Table Operations for 'BlogContent'
async function readAllPostsDb() {
  try {
    const allPosts = await newPrismaClient.blogContent.findMany({
      where: { blog_post_publish_status: true },
    });
    return allPosts;
  } catch (error) {
    next(error);
  }
}

async function readPostByIdDb(ID) {
  try {
    const postById = await newPrismaClient.blogContent.findUnique({
      where: { id: ID },
    });
    return postById;
  } catch (error) {
    next(error);
  }
}

//Table Operations for 'BlogContent'
async function createCommentDb() {
  try {
  } catch (error) {
    next(error);
  }
}

async function readCommentDb() {
  try {
  } catch (error) {
    next(error);
  }
}

async function updateCommentDb() {
  try {
  } catch (error) {
    next(error);
  }
}

async function deleteCommentDb() {
  try {
  } catch (error) {
    next(error);
  }
}

export {
  newPrismaClient,
  registerNewUserDb,
  loginUserDb,
  logOutUserDb,
  readAllPostsDb,
  readPostByIdDb,
  createCommentDb,
  readCommentDb,
  updateCommentDb,
  deleteCommentDb,
};
