import { useState } from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import "../assets/App.css";

import Login from "./Login";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Blog Web App </h1>
      <p>
        Create/Read/Update/Delete (CRUD), Publish/Unpublish and comment on Blog
        Posts
      </p>
<ErrorBoundary>
<Login/>
</ErrorBoundary>

      

      <div className="card">
        <h2>Project Technical Information</h2>

        <h3>Frontend Reader/Writer</h3>
        <ul>
          <li>JavaScript,React, Vite HTML, CSS</li>
          <li>
            React-based front-end for reading blog posts and leaving comments.
          </li>
          <li>
            User-friendly interface for browsing and interacting with content.
          </li>
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
      <div>
        <h3>Back End RESTful API Technical Information</h3>
        <ul>
          <li>RESTful API built with Node.js, Express and PostgreSQL.</li>
          <li>Prisma ORM for database interaction.</li>
          <li>JWT authentication for secure access to protected routes.</li>
          <li>
            Endpoints for managing blog posts, comments, and user accounts.
          </li>
          <li>
            The API serves as the central data and logic hub, handling requests
            from both front-end clients.
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
