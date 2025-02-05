import { Router } from "express";

import { blogWriteControllerMain } from "../controllers/blogWriteController.js";

const blogWriterRouter = Router();

blogWriterRouter.get("/", blogWriteControllerMain);

export default blogWriterRouter;
