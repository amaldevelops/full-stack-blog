import { PrismaClient } from "@prisma/client";

import bcrypt from "bcryptjs";

const newPrismaClient = new PrismaClient();

//Table Operations for 'BlogUsers'

// This function will save user registration details to the DB
async function registerNewUserDb(userDetailsObject) {
  try {
    const encryptThePassword = await bcrypt.hash(
      userDetailsObject.password,
      10
    );
    const ProcessedUserRegistrationData = {
      user_email: userDetailsObject.user_email,
      user_name: userDetailsObject.user_name,
      password: encryptThePassword,
      author: userDetailsObject.author,
    };

    await newPrismaClient.blogUsers.create({
      data: ProcessedUserRegistrationData,
    });
  } catch (error) {
    throw error;
  }
}

// This function will Authenticate user using e-mail and Password
async function loginUserDb(userDetailsObject) {
  try {
    const ProcessedUserLoginData = {
      user_email: userDetailsObject.user_email,
      password: userDetailsObject.password,
    };

    const DataBaseRecord = await newPrismaClient.blogUsers.findUnique({
      where: { user_email: userDetailsObject.user_email },
    });

    const PasswordMatch = await bcrypt.compare(
      userDetailsObject.password,
      DataBaseRecord["password"]
    );
    if (PasswordMatch) {
      console.log("Passwords Matched!");
    } else {
      console.log("Passwords DO NOT Match !");
    }
  } catch (error) {
    throw error;
  }
}

// This function will Log user out of all authenticated routes, only required if using session based authentication
async function logOutUserDb() {
  try {
  } catch (error) {
    throw error;
  }
}

//Table Operations for 'BlogContent'

// This function will read all published posts from DB
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

// This function will read posts by ID from DB
async function readPostByIdDb(ID) {
  try {
    const postById = await newPrismaClient.blogContent.findUnique({
      where: { id: ID },
    });
    return postById;
  } catch (error) {
    throw error;
  }
}

// This function will save new posts to the db
async function createPostDb(postDetailsObject) {
  try {
    // console.log(postDetailsObject)
    await newPrismaClient.blogContent.create({
      data: postDetailsObject,
    });
  } catch (error) {
    throw error;
  }
}

// This function will load all draft posts (blog_post_publish_status:false) from DB and send to front End as a JSON so they can be edited
async function loadAllDraftPostsFromDb() {
  try {
    const blogPostDraft = await newPrismaClient.blogContent.findMany({
      where: { blog_post_publish_status: false },
    });
    console.log(blogPostDraft);
    return blogPostDraft;
  } catch (error) {
    throw error;
  }
}

// This function will load the drafts from the DB based on postID to Edit the post
async function loadDraftByIdDb(postID) {
  try {
    const blogPostDraft = await newPrismaClient.blogContent.findUnique({
      where: { id: postID },
    });
    return blogPostDraft;
  } catch (error) {
    throw error;
  }
}

async function updateDraftByIdDb(draftIdToEdit, draftDataToEdit) {
  try {
    console.log(draftDataToEdit);
    const updatePost = await newPrismaClient.blogContent.update({
      where: {
        id: draftIdToEdit,
      },
      data: draftDataToEdit,
    });
    return `Successfully updated record ID: ${draftIdToEdit}`;
  } catch (error) {
    throw error;
  }
}

async function updatePostStatusDb() {
  try {
  } catch (error) {
    throw error;
  }
}

async function deletePostDb() {
  try {
  } catch (error) {
    throw error;
  }
}

//Table Operations for 'BlogComments'
async function createCommentDb() {
  try {
  } catch (error) {
    throw error;
  }
}

async function readCommentDb() {
  try {
    const readComment = await newPrismaClient.blogComments.findMany();
    return readComment;
  } catch (error) {
    throw error;
  }
}

async function updateCommentDb() {
  try {
  } catch (error) {
    throw error;
  }
}

async function deleteCommentDb() {
  try {
  } catch (error) {
    throw error;
  }
}

export {
  newPrismaClient,
  registerNewUserDb,
  loginUserDb,
  logOutUserDb,
  createPostDb,
  loadDraftByIdDb,
  loadAllDraftPostsFromDb,
  readAllPostsDb,
  readPostByIdDb,
  updateDraftByIdDb,
  updatePostStatusDb,
  deletePostDb,
  createCommentDb,
  readCommentDb,
  updateCommentDb,
  deleteCommentDb,
};
