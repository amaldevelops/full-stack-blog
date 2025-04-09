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

blogWriterRouter.get(
  "/post/drafts",
  extractToken,
  authenticateToken,
  blogWriteControllerLoadAllDrafts
);

blogWriterRouter.post(
  "/post/:id/draft",
  extractToken,
  authenticateToken,
  blogWriteControllerDraftSaveById
);

// blogWriterRouter.post("/post/:id/save", blogWriteControllerSave);

blogWriterRouter.put(
  "/post/:id/edit",
  extractToken,
  authenticateToken,
  blogWriteControllerEdit
);

blogWriterRouter.delete(
  "/post/:id/delete",
  extractToken,
  authenticateToken,
  blogWriteControllerDelete
);

blogWriterRouter.post(
  "/post/:id/publish",
  extractToken,
  authenticateToken,
  blogWriteControllerPublishToggle
);

// blogWriterRouter.post("/post/:id/unpublish", blogWriteControllerUnpublish);

blogWriterRouter.get(
  "/auth",
  extractToken,
  authenticateToken,
  authenticateUserRoute
);

export default blogWriterRouter;
