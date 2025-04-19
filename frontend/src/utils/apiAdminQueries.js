const apiURL = import.meta.env.VITE_API_URL;
const loginURL = import.meta.env.VITE_API_LOGIN_URL;

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

export { queryApiLogin };
