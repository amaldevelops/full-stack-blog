import { Router } from "express";

import {
  blogReadControllerMain,
  blogReadControllerPostLogin,
  blogReadControllerPostComment,
  blogReadControllerPostLogout,
} from "../controllers/blogReadController.js";

const blogReaderRouter = Router();

blogReaderRouter.get("/", blogReadControllerMain);

blogReaderRouter.post("/reader/login", blogReadControllerPostLogin);

blogReaderRouter.post("/reader/comment", blogReadControllerPostComment);

blogReaderRouter.post("/reader/logout", blogReadControllerPostLogout);

export default blogReaderRouter;
