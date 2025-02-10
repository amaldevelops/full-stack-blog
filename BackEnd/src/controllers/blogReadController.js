import {
  newPrismaClient,
  readAllPostsDb,
  readPostById,
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
    const returnedPost = await readPostById(IdToSearch);
    res.json({ PostById: returnedPost });
  } catch (error) {
    throw error;
  }
}

async function blogReadControllerPostComment(req, res, next) {
  try {
    res.json({ Comment: "Reader Comment Route" });
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

export {
  blogReadControllerPostComment,
  blogReadControllerGetAllPosts,
  blogReadControllerGetPostById,
  blogReadControllerUpdateComment,
  blogReadControllerDeleteComment,
};
