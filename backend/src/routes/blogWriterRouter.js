import { Router } from "express";
import { authenticateJWT } from "../middleware/authenticator.js";

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
  authenticateJWT,
  blogWriteControllerCreate
);

blogWriterRouter.get(
  "/post/drafts",
  authenticateJWT,
  blogWriteControllerLoadAllDrafts
);

blogWriterRouter.post(
  "/post/:id/draft",
  authenticateJWT,
  blogWriteControllerDraftSaveById
);

// blogWriterRouter.post("/post/:id/save", blogWriteControllerSave);

blogWriterRouter.put(
  "/post/:id/edit",
  authenticateJWT,
  blogWriteControllerEdit
);

blogWriterRouter.delete(
  "/post/:id/delete",
  authenticateJWT,
  blogWriteControllerDelete
);

blogWriterRouter.post(
  "/post/:id/publish",
  authenticateJWT,
  blogWriteControllerPublishToggle
);

// blogWriterRouter.post("/post/:id/unpublish", blogWriteControllerUnpublish);

blogWriterRouter.get("/auth", authenticateJWT);

export default blogWriterRouter;
