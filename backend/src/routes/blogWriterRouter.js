import { Router } from "express";
import {
  authenticateJWT,
  checkAuthorStatus,
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
  authenticateJWT,
  checkAuthorStatus,
  blogWriteControllerCreate
);

blogWriterRouter.get(
  "/post/drafts",
  authenticateJWT,
  checkAuthorStatus,
  blogWriteControllerLoadAllDrafts
);

blogWriterRouter.get(
  "/post/:id/drafts",
  authenticateJWT,
  checkAuthorStatus,
  blogWriteControllerDraftLoadById
);

blogWriterRouter.post(
  "/post/:id/drafts",
  authenticateJWT,
  checkAuthorStatus,
  blogWriteControllerDraftSaveById
);

// blogWriterRouter.post("/post/:id/save", blogWriteControllerSave);

blogWriterRouter.put(
  "/post/:id/edit",
  authenticateJWT,
  checkAuthorStatus,
  blogWriteControllerEdit
);

blogWriterRouter.delete(
  "/post/:id/delete",
  authenticateJWT,
  checkAuthorStatus,
  blogWriteControllerDelete
);

blogWriterRouter.post(
  "/post/:id/publish",
  authenticateJWT,
  checkAuthorStatus,
  blogWriteControllerPublishToggle
);

// blogWriterRouter.post("/post/:id/unpublish", blogWriteControllerUnpublish);

blogWriterRouter.get("/auth", authenticateJWT, checkAuthorStatus);

export default blogWriterRouter;
