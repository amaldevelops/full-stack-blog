import { Router } from "express";

import {
  blogReadControllerGetAllPosts,
  blogReadControllerGetPostById,
  blogReadControllerCreateComment,
  blogReadControllerComment,
  blogReadControllerUpdateComment,
  blogReadControllerDeleteComment,
} from "../controllers/blogReadController.js";

const blogReaderRouter = Router();

blogReaderRouter.get("/posts", blogReadControllerGetAllPosts);

blogReaderRouter.get("/posts/comment", blogReadControllerComment);

blogReaderRouter.post(
  "posts/comment/:id/create",
  blogReadControllerCreateComment
);

blogReaderRouter.put(
  "/posts/comment/:id/update",
  blogReadControllerUpdateComment
);

blogReaderRouter.delete(
  "/posts/comment/:id/delete",
  blogReadControllerDeleteComment
);

blogReaderRouter.get("/posts/:id", blogReadControllerGetPostById);

export default blogReaderRouter;
