import {
  createPostDb,
  updatePostDb,
  updatePostStatusDb,
  deletePostDb,
} from "../prisma/prismaQueries.js";

async function blogWriteControllerMain(req, res, next) {
  res.json({ Welcome: "Write Route!" });
}

async function blogWriteControllerCreate(req, res, next) {
  const postToBeSaved = {blog_post_title:"Test Title 6",
    blog_post_content:"Test Content about Software Development 6",
    blog_post_publish_status:false,
    blog_post_author_id:1,
  };

  createPostDb(postToBeSaved);
  res.json({ WriteRoute: "Welcome To Create Post!" });
}

async function blogWriteControllerDraft(req, res, next) {
  try {
    res.json({ Route: "Draft Route" });
  } catch (error) {
    throw error;
  }
}

async function blogWriteControllerSave(req, res, next) {
  try {
    res.json({ Route: "Save Route" });
  } catch (error) {
    throw error;
  }
}

async function blogWriteControllerEdit(req, res, next) {
  try {
    res.json({ Route: "Edit Route" });
  } catch (error) {
    throw error;
  }
}

async function blogWriteControllerDelete(req, res, next) {
  try {
    res.json({ Route: "Delete Route" });
  } catch (error) {
    throw error;
  }
}

async function blogWriteControllerPublish(req, res, next) {
  try {
    res.json({ Route: "Publish Route" });
  } catch (error) {
    throw error;
  }
}

async function blogWriteControllerUnpublish(req, res, next) {
  try {
    res.json({ Route: "Unpublish Route" });
  } catch (error) {
    throw error;
  }
}

export {
  blogWriteControllerMain,
  blogWriteControllerCreate,
  blogWriteControllerDraft,
  blogWriteControllerSave,
  blogWriteControllerEdit,
  blogWriteControllerDelete,
  blogWriteControllerPublish,
  blogWriteControllerUnpublish,
};
