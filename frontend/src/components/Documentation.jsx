// import NavigationBar from "./NavigationBar";
import logoReact from "../assets/react.svg";
import logoJs from "../assets/logo-js.svg";
import logoCSS from "../assets/logo-css.svg";
import logoHtml from "../assets/logo-html.svg";
import logoNodejs from "../assets/logo-nodejs.svg";
import logoPostgresql from "../assets/logo-postgressql.svg";
import logoPostman from "../assets/logo-postman.svg";
import logoPrisma from "../assets/logo-prisma.svg";
import logoVite from "../assets/logo-vite.svg";
function APIDocs() {
  return (
    <div>
      <div>
        <h2>Project Introduction</h2>
        <p>
          This demo project is designed to strengthen technical proficiency in
          building an API that adheres to REST architectural principles, with a
          strong emphasis on authentication, route protection, and role-based
          access control using JSON Web Tokens (JWTs). The API follows REST
          constraints such as a stateless client-server architecture,
          resource-based routing, uniform interfaces via standard HTTP methods
          (GET, POST, PUT, DELETE), and cacheable responses where applicable.
          The core objective is to implement a secure and RESTful backend that
          can effectively differentiate between various types of users—such as
          readers and writers—while enforcing access restrictions accordingly
          through clear and predictable endpoint behavior. Two front ends can be
          connected (one for Blog Reader and one for Blog Writer).
        </p>
        <div></div>
      </div>
      <div>
        <h2>Live Demo</h2>
        <p>
          <strong>
            Please note that the backend code and database are hosted on the
            free tiers of Neon PaaS and Render PaaS. Due to the limitations of
            their plans, response times may be slower than usual.
          </strong>
        </p>
        <ul>
          <li>
            Front End Hosted on GitHub Pages:{" "}
            <a href="https://www.amalk.au/full-stack-blog" target="_blank">
              https://www.amalk.au/full-stack-blog
            </a>
          </li>
          <li>
            Database hosted on Neon:
            <a href="https://neon.tech/" target="_blank">
              https://neon.tech/
            </a>
          </li>
          <li>
            Backend hosted on Render (Please note: As this hosted on a free
            instance, it will spin down with inactivity, which can delay
            requests by 50 seconds or more. ):{" "}
            <a href="https://full-stack-blog-t1n4.onrender.com" target="_blank">
              https://full-stack-blog-t1n4.onrender.com
            </a>{" "}
          </li>
        </ul>
      </div>
      <div>
        <h2>Source Code</h2>
        <p>
          Both Back End and Front End code are hosted as an monolithic
          repository (Back End code and Front End Code)
        </p>
        <ul>
          <li>
            GitHub Main Repository:{" "}
            <a
              href="https://github.com/amaldevelops/full-stack-blog"
              target="_blank"
            >
              Main GitHub Repository
            </a>
          </li>
          <li>
            GitHub Front End Source Code:{" "}
            <a
              href="https://github.com/amaldevelops/full-stack-blog/tree/main/frontend"
              target="_blank"
            >
              Front End Source Code
            </a>
          </li>
          <li>
            GitHub Backend Source Code:
            <a
              href="https://github.com/amaldevelops/full-stack-blog/tree/main/backend"
              target="_blank"
            >
              Back End Source Code
            </a>
          </li>
        </ul>
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
              <li>Stack: JavaScript,React, Vite HTML, CSS</li>
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
              <li>Stack: JavaScript,React, Vite HTML, CSS</li>
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

          <h3>API Information</h3>
          <ul>
            <li>
              REST architecture based API built with Node.js, Express and
              PostgreSQL, Prisma ORM.
            </li>
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

      <h2>How to deploy to a PaaS (Platform As A Service)</h2>
      <ul>
        <li>Database, set up your Prisma schema: npx prisma generate</li>
        <li>Push schema to Neon: npx prisma db push</li>
        <li>
          Seed sample data (This script is saved in the package.json) : npm run
          seed
        </li>
        <li>
          Environment Variable setup
          <ul>
            <li>CORS_URL: i.e. https://www.amalk.au </li>
            <li>DATABASE_URL: Input the database URL</li>
            <li>PORT : This is the Port that the program will run on</li>
            <li>
              JWT_SECRET_KEY: This is the custom secret key used to
              encrypt/decrypt JWT
            </li>
          </ul>
        </li>
      </ul>

      <div className="documentationDiv">
        <h2>Blog API</h2>

        <p>
          Blog API is developed using Restful principles and is designed to be
          used with either one or two front ends. i.e Blog Reader and a Blog
          Writer
        </p>
        <p>
          Output is given as standard JSON so it can be integrated into any
          front end without much effort.
        </p>
        <p>
          <strong>
            Make sure to insert the main server url in front of the routes i.e
            http://localhost:3000/writer/posts/create To create a new Post{" "}
          </strong>
        </p>
        <div>
          <h2>Admin Routes</h2>

          <div>
            <h3>Register New User</h3>
            <p>
              <strong>HTTP Method : </strong>POST
            </p>
            <p>
              <strong>Route :</strong> /register
            </p>
          </div>

          <div>
            <h3>Login User</h3>
            <p>
              <strong>HTTP Method : </strong>POST
            </p>
            <p>
              <strong>Route :</strong> /login
            </p>
          </div>

          <div>
            <h3>LogOut User</h3>
            <p>
              <strong>
                Since User authentication is handled by JWT, user log out is
                handled by removing JWT from the front end Local storage
              </strong>
            </p>
          </div>
        </div>

        <div>
          <h2>Reader routes</h2>
          <div>
            <h3>List all the reader routes</h3>
            <p>
              <strong>HTTP Method : </strong>GET
            </p>
            <p>
              <strong>Route :</strong> /reader
            </p>
          </div>

          <div>
            <h3>Get all published posts</h3>
            <p>
              <strong>HTTP Method : </strong>GET
            </p>
            <p>
              <strong>Route : </strong>/reader/posts
            </p>
            <p>
              <strong>Output Format : </strong>
              <code>
                {`
    "data": [
        {
            "id": 13,
            "blog_post_title": "The Basics of JavaScript",
            "blog_post_content": "JavaScript is a versatile programming language used in web development...",
            "blog_post_publish_status": true,
            "blog_post_publish_timestamp": "2025-02-13T02:47:01.180Z",
            "blog_post_author_id": 10
        },
        {
            "id": 14,
            "blog_post_title": "Understanding Asynchronous Programming",
            "blog_post_content": "Asynchronous programming is essential for handling network requests efficiently...",
            "blog_post_publish_status": true,
            "blog_post_publish_timestamp": "2025-02-13T02:47:01.182Z",
            "blog_post_author_id": 10
        }
    ]`}
              </code>
            </p>
          </div>
          <div>
            <h3>Get posts by ID</h3>
            <p>
              <strong>HTTP Method : </strong>GET
            </p>
            <p>
              <strong>Route : </strong>/reader/posts/:id
            </p>
          </div>

          <div>
            <h3>Get Post all Comments</h3>
            <p>
              <strong>HTTP Method : </strong>GET
            </p>
            <p>
              <strong>Route : </strong>/reader/posts/:id/comment
            </p>
          </div>

          <div>
            <h3>Create a new comment</h3>
            <p>
              <strong>HTTP Method : </strong>POST
            </p>
            <p>
              <strong>Route : </strong>/reader/posts/:id/comment/create
            </p>
          </div>

          <div>
            <h3>Update Blog post comment</h3>
            <p>
              <strong>HTTP Method : </strong>PUT
            </p>
            <p>
              <strong>Route : </strong>/reader/posts/:id/comment/:id/update
            </p>
          </div>

          <div>
            <h3>Delete Comment</h3>
            <p>
              <strong>HTTP Method : </strong>DELETE
            </p>
            <p>
              <strong>Route : </strong>/reader/posts/:id/comment/:id/delete
            </p>
          </div>
        </div>

        <div>
          <h2>Writer Routes</h2>

          <div>
            <h3>List all the writer routes</h3>
            <p>
              <strong>HTTP Method : </strong>GET
            </p>
            <p>
              <strong>Route : </strong>/writer
            </p>
          </div>

          <div>
            <h3>Create New Post</h3>
            <p>
              <strong>HTTP Method : </strong>GET
            </p>
            <p>
              <strong>Route : </strong>/writer/posts/create
            </p>
          </div>

          <div>
            <h3>Save New Post as Draft</h3>
            <p>
              <strong>HTTP Method : </strong>GET
            </p>
            <p>
              <strong>Route : </strong>/writer/posts/drafts
            </p>
          </div>

          <div>
            <h3>Get Draft Post by Draft/Post ID</h3>
            <p>
              <strong>HTTP Method : </strong>POST
            </p>
            <p>
              <strong>Route : </strong>/writer/posts/:id/drafts
            </p>
          </div>

          <div>
            <h3>Save Updated Draft Post by Draft/Post ID</h3>
            <p>
              <strong>HTTP Method : </strong>PUT
            </p>
            <p>
              <strong>Route : </strong>/writer/posts/:id/drafts
            </p>
          </div>

          <div>
            <h3>Delete Post by ID </h3>
            <p>
              <strong>HTTP Method : </strong>DELETE
            </p>
            <p>
              <strong>Route : </strong>/writer/posts/:id/delete
            </p>
          </div>

          <div>
            <h3>
              Publish/Unpublish Draft by ID (blog_post_publish_status
              :true/false)
            </h3>
            <p>
              <strong>HTTP Method : </strong>PUT
            </p>
            <p>
              <strong>Route : </strong>/writer/posts/:id/publish
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default APIDocs;
