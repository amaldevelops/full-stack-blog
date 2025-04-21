import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TechStack from "../components/TechStack";
// import "../assets/App.css";

// import NavigationBar from "./NavigationBar";
// import Login from "./Login";
// import AllPosts from "./AllPostsReader";
// import TechnicalInfo from "./TechnicalInfo";
import Documentation from "./Documentation";
import UserDetails from "./UserDetails";

import logoReact from "../assets/react.svg";
import logoJs from "../assets/logo-js.svg";
import logoCSS from "../assets/logo-css.svg";
import logoHtml from "../assets/logo-html.svg";
import logoNodejs from "../assets/logo-nodejs.svg";
import logoPostgresql from "../assets/logo-postgressql.svg";
import logoPostman from "../assets/logo-postman.svg";
import logoPrisma from "../assets/logo-prisma.svg";
import logoVite from "../assets/logo-vite.svg";

function App() {
  return (
    <>
      {/* <AllPosts /> */}
      <UserDetails />
      <div>
        <h1>Introduction</h1>
        <p>
          This demo project is designed to strengthen the technical proficiency
          in building a RESTful API with a strong emphasis on authentication,
          route protection, and role-based access control using JSON Web Tokens
          (JWTs). The core objective is to implement a secure backend that can
          effectively differentiate between various types of users—such as
          readers and writers—while enforcing access restrictions accordingly.{" "}
        </p>
      </div>

      <div className="card">
        <div>
          <div>
            <h2>Frontend </h2>
            <img src={logoJs} className="Logos" alt="JavaScript Logo" />
            <img src={logoReact} className="Logos" alt="React logo" />
            <img src={logoCSS} className="Logos" alt="CSS logo" />
            <img src={logoHtml} className="Logos" alt="HTML logo" />
            <img src={logoVite} className="Logos" alt="Vite logo" />
            <h3>Blog Reader</h3>
            <ul>
              <li>JavaScript,React, Vite HTML, CSS</li>
              <li>
                React-based front-end for reading blog posts and leaving
                comments.
              </li>
              <li>
                User-friendly interface for browsing and interacting with
                content.
              </li>
              <li>
                Reader Client: Provides a user-friendly interface for consuming
                blog content.
              </li>
            </ul>
          </div>
          <div>
            <h3>Blog Writer</h3>
            <ul>
              <li>JavaScript,React, Vite HTML, CSS</li>
              <li>
                React-based front-end for reading blog posts and leaving
                comments.
              </li>
              <li>
                User-friendly interface for browsing and interacting with
                content.
              </li>

              <li>
                Writer Client: Features for managing posts
                (publishing/unpublishing, editing), comments (deleting,
                editing). Offers a dedicated interface for authors to manage
                blog content and administrative tasks.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2>Back End </h2>
          <img src={logoNodejs} className="Logos" alt="NodeJs logo" />
          <img src={logoPostgresql} className="Logos" alt="PostgreSQL logo" />
          <img src={logoPrisma} className="Logos" alt="Prisma logo" />
          <img src={logoPostman} className="Logos" alt="Postman logo" />

          <h3>RESTful API </h3>
          <ul>
            <li>RESTful API built with Node.js, Express and PostgreSQL.</li>
            <li>Prisma ORM for database interaction.</li>
            <li>JWT authentication for secure access to protected routes.</li>
            <li>
              Endpoints for managing blog posts, comments, and user accounts.
            </li>
            <li>
              The API serves as the central data and logic hub, handling
              requests from both front-end clients.
            </li>
          </ul>
        </div>
      </div>
      {/* <TechStack /> */}
      <Documentation />
    </>
  );
}

export default App;
