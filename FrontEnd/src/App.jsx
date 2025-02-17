import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Blog API Front End</h1>
      <div className="card">
        <form>
          <label id="username">User Name </label>
          <br></br>
          <input name="username" id="username" type="email"></input>
          <br></br>
          <label id="password">Password </label> <br></br>
          <input name="password" id="password" type="password"></input>
          <br></br>
          <button>Login</button>
          <button>Register</button>
        </form>
      </div>
    </>
  );
}

export default App;
