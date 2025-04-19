const apiURL = import.meta.env.VITE_API_URL;
const loginURL = import.meta.env.VITE_API_LOGIN_URL;

async function queryApiLogin(formData) {
  try {
    let response = await fetch(`${apiURL}/${loginURL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { user_email: "dev1@example.com", password: "password123" },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const queryResult = await response.json();
    console.log(queryResult);
  } catch (error) {
    console.error(error);
  }
}

export { queryApiLogin };
