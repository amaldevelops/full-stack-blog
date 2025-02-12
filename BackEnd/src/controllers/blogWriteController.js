import {
  createPostDb,
  loadAllDraftPostsFromDb,
  loadDraftByIdDb,
  updateDraftByIdDb,
  updatePostStatusDb,
  deletePostDb,
} from "../prisma/prismaQueries.js";

// This function will send the available Writer routes
async function blogWriteControllerMain(req, res, next) {
  res.json({
    WriterRoutes: [
      "GET:/writer",
      "GET:/writer/post/create",
      "GET:/writer/post/drafts",
      "POST:/writer/post/:id/draft",
      "POST:/writer/post/:id/save",
      "POST:/writer/post/:id/edit",
      "DELETE:/writer/post/:id/delete",
      "POST:/writer/post/:id/publish",
      "POST:/writer/post/:id/unpublish",
    ],
  });
}

// This function will create a New Post by receiving form data from the front end as JSON and will create a new Database post entry
async function blogWriteControllerCreate(req, res, next) {
  const postToBeSaved = {
    blog_post_title: "Test Title 6",
    blog_post_content: "Test Content about Software Development 6",
    blog_post_publish_status: false,
    blog_post_author_id: 1,
  };

  createPostDb(postToBeSaved);
  res.json({ status: postToBeSaved });
}

// This middleware will load all Drafts as JSON from the DB and send to the frontEnd, this will enable frontend to select a post to edit or publish

async function blogWriteControllerLoadAllDrafts(req, res, next) {
  try {
    const loadAllDrafts = await loadAllDraftPostsFromDb();
    res.json({ AllDrafts: loadAllDrafts });
  } catch (error) {
    throw error;
  }
}

// This middleware will load a Post based on post ID and send as JSON so it can be edited using the post ID
async function blogWriteControllerDraftLoadById(req, res, next) {
  try {
    const draftIdToEdit = parseInt(req.params.id);
    const returnedPost = await loadDraftByIdDb(draftIdToEdit);
    res.json({ Route: returnedPost });
  } catch (error) {
    throw error;
  }
}

//blogWriteControllerDraft
// This middleware will Update a Post/Draft based on post ID into the DB
async function blogWriteControllerDraftSaveById(req, res, next) {
  try {
    //Test Object, remove after front end is connected
    const draftDataToEdit = {
      blog_post_title: "Test Title 9887",
      blog_post_content: "Test Content about Software Development 88",
      blog_post_publish_status: false,
      blog_post_author_id: 1,
    };

    const draftIdToEdit = parseInt(req.params.id);
    console.log(draftIdToEdit);
    const returnedPost = await updateDraftByIdDb(
      draftIdToEdit,
      draftDataToEdit
    );

    res.json({ Status: returnedPost });

    // res.json({ Route: returnedPost });
  } catch (error) {
    throw error;
  }
}

// This function will save Blog posts as Drafts
// async function blogWriteControllerSave(req, res, next) {
//   try {
//     res.json({ Route: "Save Route" });
//   } catch (error) {
//     throw error;
//   }
// }


// This middleware function will edit existing posts
async function blogWriteControllerEdit(req, res, next) {
  try {
    res.json({ Route: "Edit Route" });
  } catch (error) {
    throw error;
  }
}

// This middleware function will Delete existing posts
async function blogWriteControllerDelete(req, res, next) {
  try {
    res.json({ Route: "Delete Route" });
  } catch (error) {
    throw error;
  }
}

// This middleware function will toggle database flag to publish/unpublish existing posts
async function blogWriteControllerPublishToggle(req, res, next) {
  try {
    res.json({ Route: "Publish Route" });
  } catch (error) {
    throw error;
  }
}

// async function blogWriteControllerUnpublish(req, res, next) {
//   try {
//     res.json({ Route: "Unpublish Route" });
//   } catch (error) {
//     throw error;
//   }
// }

export {
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
};
