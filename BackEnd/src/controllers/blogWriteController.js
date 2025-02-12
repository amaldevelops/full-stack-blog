import {
  createPostDb,
  loadAllDraftPostsFromDb,
  draftSavePostDb,
  updatePostDb,
  updatePostStatusDb,
  deletePostDb,
} from "../prisma/prismaQueries.js";

async function blogWriteControllerMain(req, res, next) {
  res.json({ Welcome: "Write Route!" });
}

async function blogWriteControllerCreate(req, res, next) {
  const postToBeSaved = {
    blog_post_title: "Test Title 6",
    blog_post_content: "Test Content about Software Development 6",
    blog_post_publish_status: false,
    blog_post_author_id: 1,
  };

  createPostDb(postToBeSaved);
  res.json({ WriteRoute: "Welcome To Create Post!" });
}

// This middleware will load all Drafts as JSON from the DB and send to the frontEnd

async function blogWriteControllerLoadAllDrafts(req, res, next) {
  try {
    const loadAllDrafts = await updatePostStatusDb();
    res.json({ AllDrafts: loadAllDrafts });
  } catch (error) {
    throw error;
  }
}

async function blogWriteControllerDraft(req, res, next) {
  // This middleware will load a Post based on post ID and sent as JSON so it can be edited
  try {
    //Test Object, remove after front end is connected
    const postToBeSaved = {
      blog_post_title: "Test Title 6",
      blog_post_content: "Test Content about Software Development 6",
      blog_post_publish_status: false,
      blog_post_author_id: 1,
    };

    const draftToEdit = parseInt(req.params.id);
    // console.log(draftToEdit);
    const returnedPost = await draftSavePostDb(draftToEdit, postToBeSaved);
    res.json({ Route: returnedPost });
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
  blogWriteControllerLoadAllDrafts,
  blogWriteControllerDraft,
  blogWriteControllerSave,
  blogWriteControllerEdit,
  blogWriteControllerDelete,
  blogWriteControllerPublish,
  blogWriteControllerUnpublish,
};
