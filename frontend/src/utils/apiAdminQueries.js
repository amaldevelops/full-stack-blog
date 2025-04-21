const apiURL = import.meta.env.VITE_API_URL;
const loginURL = import.meta.env.VITE_API_LOGIN_URL;
const createUserURL = import.meta.env.VITE_API_CREATE_USER_URL;
const createPostURL = import.meta.env.VITE_API_CREATE_POST_URL;

async function queryApiLogin(formData) {
  try {
    // This will send a query with Authentication data from login form and will save the received JWT in the browser local storage
    let response = await fetch(`${apiURL}/${loginURL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_email: formData.user_email,
        password: formData.password,
      }),
    });
    console.log("API Login query", formData);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const queryResult = await response.json();
    localStorage.setItem("jwtToken", queryResult.token); // Save to local storage

    const ReadLocalStorageToken = localStorage.getItem("jwtToken"); // Read from Local storage

    console.log(ReadLocalStorageToken);
  } catch (error) {
    console.error(error);
  }
}

async function clearJwtLogOut() {
  localStorage.removeItem("jwtToken");
  return "loggedOut";
}

async function queryApiCreateUser(formData) {
  try {
    let response = await fetch(`${apiURL}/${createUserURL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_email: formData.email,
        password: formData.password,
        user_name: formData.userName,
      }),
    });
    console.log("Create New user Response: ", response);

    const responseData = await response.json();
    console.log("Create New User Response Data:", responseData);

    return responseData.status;
  } catch (error) {
    console.error(error);
  }
}

function decodeJWTPayload(runOnRequest) {
  try {
    const jwtToken = localStorage.getItem("jwtToken"); // Read from Local storage
    console.log(runOnRequest);

    if (jwtToken !== null) {
      const jwtExtractPayLoad = jwtToken.split(".")[1];

      function base64UrlToJsonString(string) {
        string = string.replace(/-/g, "+").replace(/_/g, "/");
        const pad = string.length % 4;

        if (pad) string += "=".repeat(4 - pad);
        return decodeURIComponent(
          atob(string)
            .split("")
            .map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"))
            .join("")
        );
      }

      const payLoad = JSON.parse(base64UrlToJsonString(jwtExtractPayLoad));
      // console.log(payLoad);
      return payLoad;
    } else {
      return "Error";
    }
  } catch (error) {
    console.error("Failed to Decode JWT payload", error);
    return null;
  }
}

function loadJwtTokenToHttpHeader() {
  try {
    const jwtToken = localStorage.getItem("jwtToken"); // Read from Local storage

    if (!jwtToken) {
      console.log("JWT Token Invalid");
    }

    const Headers = { Authorization: `Bearer ${jwtToken}` };
    // console.log(Headers);
    return Headers;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function queryApiCreatePost(formData) {
  try {
    const loadedJwtToken = loadJwtTokenToHttpHeader();
    console.log("Loaded JWT:", loadedJwtToken);
    console.log("FormData is: ", formData);
    let response = await fetch(`${apiURL}/${createPostURL}`, {
      method: "POST",
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

export {
  queryApiLogin,
  clearJwtLogOut,
  queryApiCreateUser,
  decodeJWTPayload,
  loadJwtTokenToHttpHeader,
  queryApiCreatePost,
};
