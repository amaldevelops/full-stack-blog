import { Router } from "express";

import { blogReadControllerMain } from "../controllers/blogReadController.js";

const blogReaderRouter = Router();

blogReaderRouter.get("/", blogReadControllerMain);

export default blogReaderRouter;
