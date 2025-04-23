import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { queryApiLogin } from "../utils/apiAdminQueries";
import UserDetailsDisplay from "./UserDetails";

function Login() {
  const [formData, setFormData] = useState({ user_email: "", password: "" });
  const [loginStatus, setLoginStatus] = useState("");
  const [reloadKey, setReloadKey] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Logging in With", formData);
    // Add authentication logic here
    queryApiLogin(formData);
    setLoginStatus("User Details Submitted");
    setReloadKey((prevKey) => prevKey + 1); // Trigger re-mount
    navigate("/full-stack-blog/reader");
  };
  return (
    <div className="card">
      <h1>Single Sign on to Blog reader / Blog writer</h1>
      <UserDetailsDisplay key={reloadKey} />
      <p>
        While you can read posts and comments on this blog, you will need to
        login with a valid username and password to Create/Read/Update/Delete
        (CRUD) posts and comments
      </p>
      <p>
        Only Admin / Author users can create, edit, publish and delete Posts.
        Normal user accounts can only create new comments,edit own comments and
        delete own comments
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="user_email">User E-Mail </label>
        <br></br>
        <input
          name="user_email"
          id="user_email"
          type="email"
          value={formData.user_email}
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
      </form>
      <p>{loginStatus}</p>

      <Link to="/full-stack-blog/register">Register new user</Link>
    </div>
  );
}

export default Login;
