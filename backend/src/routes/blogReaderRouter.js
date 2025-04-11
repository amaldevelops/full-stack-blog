import { Router } from "express";

import {
  authenticateJWT,
  checkAuthorStatus,
} from "../middleware/authenticator.js";

import {
  blogReadControllerMain,
  blogReadControllerGetAllPosts,
  blogReadControllerGetPostById,
  blogReadControllerCreateComment,
  blogReadControllerComment,
  blogReadControllerUpdateComment,
  blogReadControllerDeleteComment,
} from "../controllers/blogReadController.js";

const blogReaderRouter = Router();

blogReaderRouter.get("/", blogReadControllerMain);

blogReaderRouter.get("/posts", blogReadControllerGetAllPosts);

blogReaderRouter.get("/posts/:id/comment", blogReadControllerComment);

blogReaderRouter.post(
  "/posts/:id/comment/:id/create",
  authenticateJWT,
  blogReadControllerCreateComment
);

blogReaderRouter.put(
  "/posts/:id/comment/:id/update",
  authenticateJWT,
  blogReadControllerUpdateComment
);

blogReaderRouter.delete(
  "/posts/:id/comment/:id/delete",
  authenticateJWT,
  blogReadControllerDeleteComment
);

blogReaderRouter.get("/posts/:id", blogReadControllerGetPostById);

export default blogReaderRouter;
