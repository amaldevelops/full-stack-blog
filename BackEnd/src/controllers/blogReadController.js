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

async function blogReadControllerGetAllPosts(req, res, next) {
  try {
    res.json({ Allposts: await readAllPostsDb() });
  } catch (error) {
    throw error;
  }
}

async function blogReadControllerGetPostById(req, res, next) {
  try {
    const IdToSearch = parseInt(req.params.id);
    if (Number.isInteger(IdToSearch)) {
      const returnedPost = await readPostByIdDb(IdToSearch);
      res.json({ PostById: [returnedPost] });
    } else {
      res.json({ Error: "Invalid Id Format, ID should be a number" });
    }
  } catch (error) {
    next(error);
  }
}

async function blogReadControllerComment(req, res, next) {
  try {
    const allComments = await readCommentDb();
    res.json({ Comment: allComments });
  } catch (error) {
    throw error;
  }
}

async function blogReadControllerUpdateComment(req, res, next) {
  try {
    res.json({ UpdateComment: "Reader Comment update Route" });
  } catch (error) {
    throw error;
  }
}

async function blogReadControllerDeleteComment(req, res, next) {
  try {
    res.json({ DeleteComment: "Reader Delete Comment Route" });
  } catch (error) {
    throw error;
  }
}

async function blogReadControllerCreateComment(req, res, next) {
  try {
    res.json({ Message: "Create Comment" });
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
