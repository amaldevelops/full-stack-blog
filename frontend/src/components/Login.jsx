import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
// import TechnicalInfo from "./TechnicalInfo";
// import NavigationBar from "./NavigationBar";

function Login() {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Logging in With", formData);
    // Add authentication logic here
  };
  return (
    <div className="card">
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
        <label htmlFor="username">User Name </label>
        <br></br>
        <input
          name="username"
          id="username"
          type="email"
          value={formData.username}
          onChange={(event) => {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            });
          }}
          required
        ></input>
        <br></br>
        <label htmlFor="password">Password </label> <br></br>
        <input
          name="password"
          id="password"
          type="password"
          value={formData.password}
          onChange={(event) => {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            });
          }}
          required
        ></input>
        <br></br>
        <button type="submit">Login</button>
        {/* <button type="button" onClick={() => navigate("/register")}>
          Register
        </button> */}
      </form>
      <Link to="/full-stack-blog/register">Register new user</Link>
    </div>
  );
}

export default Login;
