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

    const DataBaseRecord = await newPrismaClient.BlogUsers.findUnique({
      where: { user_email: ProcessedUserLoginData.user_email },
    });

    // console.log(DataBaseRecord);
    // console.log(userDetailsObject.user_email);
    // console.log(ProcessedUserLoginData.password)
    // console.log(DataBaseRecord.password)

    if (DataBaseRecord !== null) {
      const PasswordMatch = await bcrypt.compare(
        ProcessedUserLoginData.password,
        DataBaseRecord.password
      );

      console.log(PasswordMatch);

      if (PasswordMatch === true) {

        console.log("Passwords Matched!");
        return "successLogin"
      } else {
        console.log("Passwords DO NOT Match !");
        return "failureLogin";
      }
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
// This function will update posts/drafts using post ID
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

//This function will toggle between publish/unpublish
async function updatePostStatusDb(postID, publishStatus) {
  try {
    const updateStatus = await newPrismaClient.blogContent.update({
      where: { id: postID },
      data: { blog_post_publish_status: publishStatus },
    });

    console.log(updateStatus);

    return updateStatus.blog_post_publish_status;
  } catch (error) {
    throw error;
  }
}

//This function will post by ID
async function deletePostDb(PostId) {
  try {
    const DeletePost = await newPrismaClient.blogContent.delete({
      where: {
        id: PostId,
      },
    });
    return "Deleted";
  } catch (error) {
    if (error.code === "P2025") {
      // Prisma error code for "Record to delete does not exist"
      return `Post with ID ${PostId} not found.`;
    }
    throw error;
  }
}

//Table Operations for 'BlogComments'
async function createCommentDb(postDetailsObject) {
  try {
    // console.log(postDetailsObject)
    await newPrismaClient.blogComments.create({
      data: postDetailsObject,
    });
    return "Comment Created !";
  } catch (error) {
    throw error;
  }
}

async function readCommentDb(postId) {
  try {
    const postWithComments = await newPrismaClient.blogContent.findUnique({
      where: { id: postId },
      include: {
        comments: true, // Include the comments related to this post
      },
    });
    return postWithComments;
  } catch (error) {
    throw error;
  }
}

async function updateCommentDb(commentIdToEdit, commentDataToEdit) {
  try {
    console.log(draftDataToEdit);
    const updateComment = await newPrismaClient.blogComments.update({
      where: {
        id: commentIdToEdit,
      },
      data: commentDataToEdit,
    });
    return `Successfully updated record ID: ${draftIdToEdit}`;
  } catch (error) {
    throw error;
  }
}

async function deleteCommentDb(commentId) {
  try {
    const DeleteComment = await newPrismaClient.blogComments.delete({
      where: {
        id: commentId,
      },
    });
    return "Deleted";
  } catch (error) {
    if (error.code === "P2025") {
      // Prisma error code for "Record to delete does not exist"
      return `Comment with ID ${commentId} not found.`;
    }
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
