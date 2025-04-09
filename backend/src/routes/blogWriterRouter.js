import { Router } from "express";
import {
  authenticateUserRoute,
  authenticateToken,
  extractToken,
} from "../middleware/authenticator.js";

import {
  blogWriteControllerMain,
  blogWriteControllerCreate,
  blogWriteControllerLoadAllDrafts,
  blogWriteControllerDraftLoadById,
  blogWriteControllerDraftSaveById,
  // blogWriteControllerSave,
  blogWriteControllerEdit,
  blogWriteControllerDelete,
  blogWriteControllerPublishToggle,
  // blogWriteControllerUnpublish,
} from "../controllers/blogWriteController.js";

const blogWriterRouter = Router();

blogWriterRouter.get("/", blogWriteControllerMain);

blogWriterRouter.post(
  "/post/create",
  extractToken,
  authenticateToken,
  blogWriteControllerCreate
);

blogWriterRouter.get("/post/drafts", blogWriteControllerLoadAllDrafts);

blogWriterRouter.post("/post/:id/draft", blogWriteControllerDraftSaveById);

// blogWriterRouter.post("/post/:id/save", blogWriteControllerSave);

blogWriterRouter.put("/post/:id/edit", blogWriteControllerEdit);

blogWriterRouter.delete("/post/:id/delete", blogWriteControllerDelete);

blogWriterRouter.post("/post/:id/publish", blogWriteControllerPublishToggle);

// blogWriterRouter.post("/post/:id/unpublish", blogWriteControllerUnpublish);

blogWriterRouter.get("/auth", authenticateUserRoute);

export default blogWriterRouter;
