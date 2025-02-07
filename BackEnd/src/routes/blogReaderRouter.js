import { Router } from "express";

import {
  blogReadControllerPostLogin,
  blogReadControllerPostComment,
  blogReadControllerPostLogout,
} from "../controllers/blogReadController.js";

const blogReaderRouter = Router();

blogReaderRouter.post("/reader/login", blogReadControllerPostLogin);

blogReaderRouter.post("/reader/comment", blogReadControllerPostComment);

blogReaderRouter.post("/reader/logout", blogReadControllerPostLogout);

export default blogReaderRouter;
