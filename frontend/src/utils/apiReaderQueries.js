const apiURL = "http://localhost:3000";
async function getReadRouteQueries(apiPath) {
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

export { getReadRouteQueries };
