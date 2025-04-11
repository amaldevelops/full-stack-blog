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

// Test Data, remove after Front End is connected and tested

// This function will create a New Post by receiving form data from the front end as JSON and will create a new Database post entry
async function blogWriteControllerCreate(req, res, next) {
  const { title, content } = req.body;
  const { userName, UserID } = req.authData;
  console.log(
    `Title:${title} and the Content:${content} and the Author:${userName}`
  );
  // Make sure to send the form data with following structure from the front end
  // <input type="text" name="title" required>
  // <textarea name="content" required></textarea>
  //<input type="number" name="UserID" required> This is not mandatory as UserID is taken from the JWT
  const postToBeSaved = {
    blog_post_title: title,
    blog_post_content: content,
    blog_post_publish_status: false,
    blog_post_author_id: UserID,
  };
  createPostDb(postToBeSaved);
  res.json({
    message: "Successfully Saved message as Draft",
    postToBeSaved,
  });
}

// This middleware will load all Drafts as JSON from the DB and send to the frontEnd, this will enable frontend to select a post to edit or publish

async function blogWriteControllerLoadAllDrafts(req, res, next) {
  try {
    const loadAllDrafts = await loadAllDraftPostsFromDb();
    res.json({ data: loadAllDrafts });
  } catch (error) {
    throw error;
  }
}

// This middleware will load a Post based on post ID and send as JSON so it can be edited using the post ID
async function blogWriteControllerDraftLoadById(req, res, next) {
  try {
    const draftIdToEdit = parseInt(req.params.id);
    console.log(draftIdToEdit)
    const returnedPost = await loadDraftByIdDb(draftIdToEdit);
    res.json({ data: returnedPost });
  } catch (error) {
    throw error;
  }
}

// This middleware will Update a Post/Draft based on post ID into the DB
async function blogWriteControllerDraftSaveById(req, res, next) {
  try {
    const draftIdToEdit = parseInt(req.params.id);
    const { title, content } = req.body;
    const { userName, UserID } = req.authData;

    const draftDataToEdit = {
      blog_post_title: title,
      blog_post_content: content,
      blog_post_publish_status: false,
      blog_post_author_id: UserID,
    };

    
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

// This middleware function will edit existing posts
// async function blogWriteControllerEdit(req, res, next) {
//   try {
//     res.json({ data: "Edit Route" });
//   } catch (error) {
//     throw error;
//   }
// }

// This middleware function will Delete existing posts
async function blogWriteControllerDelete(req, res, next) {
  try {
    const postID = parseInt(req.params.id);
    const DeleteStatus = await deletePostDb(postID);
    res.json({ status: `Delete Post Status: ${DeleteStatus}` });
  } catch (error) {
    throw error;
  }
}

// This middleware function will toggle database flag to publish/unpublish existing posts
async function blogWriteControllerPublishToggle(req, res, next) {
  try {
    //Publish:true/false
    //Post ID: Integer
    const requiredPublishStatus = JSON.parse(req.body.Publish);
    const requiredPostId = parseInt(req.params.id, 10);

    const updatePublishStatus = await updatePostStatusDb(
      requiredPostId,
      requiredPublishStatus
    );
    res.json({ status: `Post Publish Status: ${updatePublishStatus}` });
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
  // blogWriteControllerEdit,
  blogWriteControllerDelete,
  blogWriteControllerPublishToggle,
  // blogWriteControllerUnpublish,
};
