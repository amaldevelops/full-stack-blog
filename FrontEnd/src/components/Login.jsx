import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User Name </label>
        <br></br>
        <input
          name="username"
          id="username"
          type="email"
          value={formData.username}
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <label htmlFor="password">Password </label> <br></br>
        <input
          name="password"
          id="password"
          type="password"
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
