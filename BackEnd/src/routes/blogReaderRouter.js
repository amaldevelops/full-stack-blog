import { Router } from "express";

import {
  blogReadControllerPostLogin,
  blogReadControllerPostComment,
  blogReadControllerPostLogout,
  blogReadControllerGetAllPosts,
  blogReadControllerGetPostById,
  blogReadControllerUpdateComment,
  blogReadControllerDeleteComment,
} from "../controllers/blogReadController.js";

const blogReaderRouter = Router();

blogReaderRouter.post("/login", blogReadControllerPostLogin);

blogReaderRouter.post("/logout", blogReadControllerPostLogout);

blogReaderRouter.get("/posts", blogReadControllerGetAllPosts);

blogReaderRouter.get("/posts/:id", blogReadControllerGetPostById);

blogReaderRouter.post("/comment", blogReadControllerPostComment);

blogReaderRouter.put("/comment/:id/update", blogReadControllerUpdateComment);

blogReaderRouter.delete("/comment/:id/delete", blogReadControllerDeleteComment);

export default blogReaderRouter;
