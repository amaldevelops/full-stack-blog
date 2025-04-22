const apiURL = import.meta.env.VITE_API_URL;
const apiDraftURL = import.meta.env.VITE_API_DRAFTS_URL;

import { loadJwtTokenToHttpHeader } from "./apiAdminQueries";

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

async function togglePublishStatus(postID)
{
    try{
        const loadedJwtToken = loadJwtTokenToHttpHeader();
        console.log("Loaded JWT:", loadedJwtToken);
    
        let response = await fetch(`${apiURL}/${`writer/posts/${postID}/delete`}`, {
          method: "DELETE",
          headers: { ...loadedJwtToken, "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });
    
        console.log(response);
    }

    catch(error)
    {
        console.error("Error Toggling posts")
    }
}

export { queryApiDeletePost, queryApiReadDrafts };
