import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="card">
      <form method="post" action="/login">
        <label id="username">User Name </label>
        <br></br>
        <input name="username" id="username" type="email"></input>
        <br></br>
        <label id="password">Password </label> <br></br>
        <input name="password" id="password" type="password"></input>
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
