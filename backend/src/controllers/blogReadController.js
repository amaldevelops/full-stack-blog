import {
  readAllPostsDb,
  readPostByIdDb,
  createCommentDb,
  readCommentDb,
  updateCommentDb,
  deleteCommentDb,
} from "../prisma/prismaQueries.js";

async function blogReadControllerMain(req, res, next) {
  try {
    res.json({
      ReaderRoutes: [
        "GET:/reader/posts",
        "GET:reader/posts/:id",
        "GET:/reader/posts/comment",
        "/POST:reader/posts/comment/:id/create",
        "PUT:/reader/posts/comment/:id/update",
        "DELETE:/reader/posts/comment/:id/delete",
      ],
    });
  } catch {}
}

// This middleware will send all posts as JSON
async function blogReadControllerGetAllPosts(req, res, next) {
  try {
    res.json({ data: await readAllPostsDb() });
  } catch (error) {
    throw error;
  }
}

// This middleware will send posts by Post Id as JSON
async function blogReadControllerGetPostById(req, res, next) {
  try {
    const IdToSearch = parseInt(req.params.id);
    if (Number.isInteger(IdToSearch)) {
      const returnedPost = await readPostByIdDb(IdToSearch);
      res.json({ data: [returnedPost] });
    } else {
      res.json({ error: "Invalid Id Format, ID should be a number" });
    }
  } catch (error) {
    next(error);
  }
}

// This middleware will send all post with comments by Post Id as JSON

async function blogReadControllerComment(req, res, next) {
  try {
    const PostId = parseInt(req.params.id);
    console.log(`Comment ID: ${PostId}`);
    const ReturnedComments = await readCommentDb(PostId);
    res.json({ data: ReturnedComments });
  } catch (error) {
    throw error;
  }
}

async function blogReadControllerUpdateComment(req, res, next) {
  try {
    res.json({ status: "Reader Comment update Route" });
  } catch (error) {
    throw error;
  }
}

async function blogReadControllerDeleteComment(req, res, next) {
  try {
    res.json({ status: "Reader Delete Comment Route" });
  } catch (error) {
    throw error;
  }
}

async function blogReadControllerCreateComment(req, res, next) {
  try {
    res.json({ status: "Create Comment" });
  } catch (error) {
    next(error);
  }
}

export {
  blogReadControllerMain,
  blogReadControllerComment,
  blogReadControllerGetAllPosts,
  blogReadControllerGetPostById,
  blogReadControllerUpdateComment,
  blogReadControllerDeleteComment,
  blogReadControllerCreateComment,
};
