import { Router } from "express";

import {
  blogReadControllerPostComment,
  blogReadControllerGetAllPosts,
  blogReadControllerGetPostById,
  blogReadControllerUpdateComment,
  blogReadControllerDeleteComment,
} from "../controllers/blogReadController.js";

const blogReaderRouter = Router();

blogReaderRouter.get("/posts", blogReadControllerGetAllPosts);

blogReaderRouter.get("/posts/:id", blogReadControllerGetPostById);

blogReaderRouter.post("/comment", blogReadControllerPostComment);

blogReaderRouter.put("/comment/:id/update", blogReadControllerUpdateComment);

blogReaderRouter.delete("/comment/:id/delete", blogReadControllerDeleteComment);

export default blogReaderRouter;
