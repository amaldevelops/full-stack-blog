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

blogReaderRouter.get("/posts/:id", blogReadControllerGetPostById);

blogReaderRouter.post(
  "posts/comment/:id/create",
  blogReadControllerCreateComment
);

blogReaderRouter.get("posts/comment/read", blogReadControllerComment);

blogReaderRouter.put(
  "/posts/comment/:id/update",
  blogReadControllerUpdateComment
);

blogReaderRouter.delete("/comment/:id/delete", blogReadControllerDeleteComment);

export default blogReaderRouter;
