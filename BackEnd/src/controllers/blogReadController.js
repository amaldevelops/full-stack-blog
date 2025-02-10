import {
  readAllPostsDb,
  readPostByIdDb,
  createCommentDb,
  readCommentDb,
  updateCommentDb,
  deleteCommentDb,
} from "../prisma/prismaQueries.js";

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
    const returnedPost = await readPostByIdDb(IdToSearch);
    res.json({ PostById: [returnedPost] });
  } catch (error) {
    throw error;
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
  } catch (error) {
    next(error);
  }
}

export {
  blogReadControllerComment,
  blogReadControllerGetAllPosts,
  blogReadControllerGetPostById,
  blogReadControllerUpdateComment,
  blogReadControllerDeleteComment,
  blogReadControllerCreateComment,
};
