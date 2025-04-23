const apiURL = import.meta.env.VITE_API_URL;

import { loadJwtTokenToHttpHeader } from "./apiAdminQueries";

async function queryApiReadPosts(apiPath) {
  try {
    // let response = await fetch(`${apiURL}/reader/posts`);
    let response = await fetch(`${apiURL}/${apiPath}`);

    if (!response.ok) {
      throw new Error(`HTTP Error! status:${response.status}`);
    }

    const queryResult = await response.json();
    // console.log(allPosts);
    return queryResult;
  } catch (error) {
    console.error("Error catching posts:", error);
    throw error;
  }
}

async function queryApiCreateComment(comment, postID, authorId) {
  try {
    const loadedJwtToken = loadJwtTokenToHttpHeader();
    console.log("Loaded JWT:", loadedJwtToken);
    console.log("FormData is: ", comment);
    let response = await fetch(
      `${apiURL}/${`reader/posts/${postID}/comment/create`}`,
      {
        method: "POST",
        headers: { ...loadedJwtToken, "Content-Type": "application/json" },
        body: JSON.stringify({
          comment_text: comment,
          blog_post_id: postID,
          comment_author_id: authorId,
        }),
      }
    );

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function deleteComment() {
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

async function editComment(formData) {
  try {
    const loadedJwtToken = loadJwtTokenToHttpHeader();
    // console.log("Loaded JWT:", loadedJwtToken);
    console.log("FormData is: ", formData);
    let response = await fetch(`${apiURL}/writer/posts/${formData.id}/drafts`, {
      method: "PUT",
      headers: { ...loadedJwtToken, "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formData.postTitle,
        content: formData.postContent,
      }),
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export { queryApiReadPosts, queryApiCreateComment, editComment, deleteComment };
