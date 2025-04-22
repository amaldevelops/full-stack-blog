const apiURL = import.meta.env.VITE_API_URL;
const apiDraftURL = import.meta.env.VITE_API_DRAFTS_URL;
const createPostURL = import.meta.env.VITE_API_CREATE_POST_URL;
const SaveEditPostURL = import.meta.env.VITE_API_DRAFTS_URL;

import { loadJwtTokenToHttpHeader } from "./apiAdminQueries";

async function queryApiCreatePost(formData) {
  try {
    const loadedJwtToken = loadJwtTokenToHttpHeader();
    // console.log("Loaded JWT:", loadedJwtToken);
    // console.log("FormData is: ", formData);
    let response = await fetch(`${apiURL}/${createPostURL}`, {
      method: "POST",
      headers: { ...loadedJwtToken, "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formData.postTitle,
        content: formData.postContent,
      }),
    });

    // console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function queryApiEditPost(formData) {
  try {
    const loadedJwtToken = loadJwtTokenToHttpHeader();
    // console.log("Loaded JWT:", loadedJwtToken);
    // console.log("FormData is: ", formData);
    let response = await fetch(`${apiURL}/${SaveEditPostURL}`, {
      method: "PUT",
      headers: { ...loadedJwtToken, "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formData.postTitle,
        content: formData.postContent,
      }),
    });

    // console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function queryApiDeletePost(postID) {
  try {
    const loadedJwtToken = loadJwtTokenToHttpHeader();
    console.log("Loaded JWT:", loadedJwtToken);

    let response = await fetch(`${apiURL}/${`writer/posts/${postID}/delete`}`, {
      method: "DELETE",
      headers: { ...loadedJwtToken, "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function queryApiReadDrafts() {
  try {
    const loadedJwtToken = loadJwtTokenToHttpHeader();

    let response = await fetch(`${apiURL}/${apiDraftURL}`, {
      method: "GET",
      headers: { ...loadedJwtToken, "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! status:${response.status}`);
    }

    const queryResult = await response.json();
    // console.log("This is from queryAPIDrafts Function:",queryResult);
    return queryResult;
  } catch (error) {
    console.error("Error catching posts:", error);
    throw error;
  }
}

async function togglePublishStatus(postID, publishStatus) {
  try {
    const loadedJwtToken = loadJwtTokenToHttpHeader();
    console.log("Loaded JWT:", loadedJwtToken);
    console.log(postID, publishStatus);
    let response = await fetch(
      `${apiURL}/${`writer/posts/${postID}/publish`}`,
      {
        method: "PUT",
        headers: { ...loadedJwtToken, "Content-Type": "application/json" },
        body: JSON.stringify({ Publish: publishStatus }),
      }
    );

    console.log(response);
  } catch (error) {
    console.error("Error Toggling posts", error);
  }
}

export {
  queryApiCreatePost,
  queryApiEditPost,
  queryApiDeletePost,
  queryApiReadDrafts,
  togglePublishStatus,
};
