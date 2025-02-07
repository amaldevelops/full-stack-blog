import { Router } from "express";

import { blogMainControllerMain } from "../controllers/blogMainControllerMain.js";

const blogMainRouter = Router();

blogMainRouter.get("/", blogMainControllerMain);

export default blogMainRouter;
