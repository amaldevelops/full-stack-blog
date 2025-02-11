import { Router } from "express";

import {
  blogWriteControllerMain,
  blogWriteControllerCreate,
  blogWriteControllerDraft,
  blogWriteControllerSave,
  blogWriteControllerEdit,
  blogWriteControllerDelete,
  blogWriteControllerPublish,
  blogWriteControllerUnpublish,
} from "../controllers/blogWriteController.js";

const blogWriterRouter = Router();

blogWriterRouter.get("/", blogWriteControllerMain);

blogWriterRouter.post("/post/create", blogWriteControllerCreate);

blogWriterRouter.post("/post/:id/draft", blogWriteControllerDraft);

blogWriterRouter.post("/post/:id/save", blogWriteControllerSave);

blogWriterRouter.put("/post/:id/edit", blogWriteControllerEdit);

blogWriterRouter.delete("/post/:id/delete", blogWriteControllerDelete);

blogWriterRouter.post("/post/:id/publish", blogWriteControllerPublish);

blogWriterRouter.post("/post/:id/unpublish", blogWriteControllerUnpublish);

export default blogWriterRouter;
