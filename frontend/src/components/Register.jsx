import { useState } from "react";
import {queryApiCreateUser} from "../utils/apiAdminQueries"

function Register() {
  const [queryResponse,setQueryResponse]=useState();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const passwordValidation = (value) => {
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Run password validation if the password is being updated
    if (name === "password") {
      passwordValidation(value);
    }
  };

  const formSubmission = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);

    // Optional: prevent submission if there's a password error
    if (passwordError) {
      alert("Please fix the password error before submitting.");
      return;
    }

    // Proceed with actual form handling (e.g., API call)
    setQueryResponse(queryApiCreateUser(formData));


  };
  return (
    <div>
      <h1>Register New User</h1>
      <form onSubmit={formSubmission}>
        <label htmlFor="userName">User Name:</label>
        <br />
        <input
          id="userName"
          name="userName"
          type="text"
          value={formData.userName}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="email">E-Mail:</label>
        <br />
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="password">Password:</label>
        <br />
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {passwordError && (
          <p style={{ color: "red", fontSize: "0.9em" }}>{passwordError}</p>
        )}
        <br />

        <button type="submit">Create User</button>
      </form>
      <p>{queryResponse}</p>
    </div>
  );
}

export default Register;
