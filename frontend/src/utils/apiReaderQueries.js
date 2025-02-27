const apiURL = "http://localhost:3000";
async function getAllPosts() {
  try {
    let response = await fetch(`${apiURL}/reader`);

    if (!response.ok) {
      throw new Error(`HTTP Error! status:${response.status}`);
    }

    const allPosts = await response.json();
    return allPosts;
  } catch (error) {
    console.error("Error catching posts:", error);
    throw error;
  }
}

export { getAllPosts };
