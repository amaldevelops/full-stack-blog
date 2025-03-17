import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import TechnicalInfo from "./TechnicalInfo";
// import NavigationBar from "./NavigationBar";

function Login() {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in With", formData);
    // Add authentication logic here
  };
  return (
    <div className="card">
      {/* <NavigationBar /> */}
      <h1>Blog Web App Login</h1>
      <p>
        While you can read posts and comments on this blog, you will need to
        login with a valid username and password to Create/Read/Update/Delete
        (CRUD) posts and comments
      </p>
      <p>
        Only Admin/Author users can create, edit, publish and delete Posts.
        Normal user accounts can only create new comments,edit own comments and
        delete own comments
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="currentUserName">User Name </label>
        <br></br>
        <input
          name="currentUserName"
          id="currentUserName"
          type="email"
          value={formData.username}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <label htmlFor="currentPassword">Password </label> <br></br>
        <input
          name="currentPassword"
          id="currentPassword"
          type="currentPassword"
          value={formData.password}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <button type="submit">Login</button>
        <button type="button" onClick={() => navigate("/register")}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Login;
