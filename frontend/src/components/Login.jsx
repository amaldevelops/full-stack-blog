import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TechnicalInfo from "./TechnicalInfo";


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
      <h1>Blog Web App Login</h1>
      <p>
        Create/Read/Update/Delete (CRUD), Publish/Unpublish and comment on Blog
        Posts
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
      <TechnicalInfo />
    </div>
  );
}

export default Login;
