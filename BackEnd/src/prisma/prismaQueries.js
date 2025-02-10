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

async function updatePostDb() {
  try {
  } catch (error) {
    next(error);
  }
}

async function updatePostStatusDb() {
  try {
  } catch (error) {
    next(error);
  }
}

async function deletePostDb() {
  try {
  } catch (error) {
    next(error);
  }
}

async function createPostDb() {
  try {
  } catch (error) {
    next(error);
  }
}

//Table Operations for 'BlogComments'
async function createCommentDb() {
  try {
  } catch (error) {
    next(error);
  }
}

async function readCommentDb() {
  try {
    const readComment = await newPrismaClient.blogComments.findMany();
    return readComment;
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
  createPostDb,
  readAllPostsDb,
  readPostByIdDb,
  updatePostDb,
  updatePostStatusDb,
  deletePostDb,
  createCommentDb,
  readCommentDb,
  updateCommentDb,
  deleteCommentDb,
};
