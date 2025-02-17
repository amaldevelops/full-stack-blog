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

      <div className="card">
        <h1>Blog Reader - Front End Technical Information</h1>

        <h2>Frontend Stack</h2>
        <ul>
          <li>JavaScript,React, Vite HTML, CSS</li>
          <li>
            React-based front-end for reading blog posts and leaving comments.
          </li>
          <li>
            User-friendly interface for browsing and interacting with content.
          </li>
        </ul>

        <h2>Reader/Writer Client</h2>
        <ul>
          <li>
            Reader Client: Provides a user-friendly interface for consuming blog
            content.
          </li>
          <li>
            Writer Client: Features for managing posts (publishing/unpublishing,
            editing), comments (deleting, editing). Offers a dedicated interface
            for authors to manage blog content and administrative tasks.
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
