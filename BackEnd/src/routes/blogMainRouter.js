import { Router } from "express";

import {
  blogMainControllerMain,
  blogMainControllerRegister,
  blogMainControllerLogin,
  blogMainControllerLogout,
} from "../controllers/blogMainControllerMain.js";

const blogMainRouter = Router();

blogMainRouter.get("/", blogMainControllerMain);

blogMainRouter.post("/register", blogMainControllerRegister);

blogMainRouter.post("/login", blogMainControllerLogin);

blogMainRouter.post("/logout", blogMainControllerLogout);

export default blogMainRouter;
