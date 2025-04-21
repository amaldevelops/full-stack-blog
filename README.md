# FullStack Blog API and Clients

This demo project is designed to strengthen technical proficiency in building an API that adheres to REST architectural principles, with a strong emphasis on authentication, route protection, and role-based access control using JSON Web Tokens (JWTs). The API follows REST constraints such as a stateless client-server architecture, resource-based routing, uniform interfaces via standard HTTP methods (GET, POST, PUT, DELETE), and cacheable responses where applicable. The core objective is to implement a secure and RESTful backend that can effectively differentiate between various types of users—such as readers and writers—while enforcing access restrictions accordingly through clear and predictable endpoint behavior. Two front ends can be connected (one for Blog Reader and one for Blog Writer).

## Live Demo

- Please note that the backend code and database are hosted on the free tiers of Neon PaaS and Render PaaS. Due to the limitations of their plans, response times may be slower than usual.

- Front End Hosted on GitHub Pages: https://www.amalk.au/full-stack-blog
- Database hosted on Neon:https://neon.tech/
- Backend hosted on Render (Please note: As this hosted on a free instance, it will spin down with inactivity, which can delay requests by 50 seconds or more. ): https://full-stack-blog-t1n4.onrender.com

## Source Code

Both Back End and Front End code are hosted as an monolithic repository (Back End code and Front End Code)

GitHub Main Repository: [Main GitHub Repository](https://github.com/amaldevelops/full-stack-blog)
GitHub Front End Source Code: [Front End Source Code](https://github.com/amaldevelops/full-stack-blog/tree/main/frontend)
GitHub Backend Source Code:[Back End Source Code](https://github.com/amaldevelops/full-stack-blog/tree/main/backend)

### Blog API

- RESTful API built with Node.js and Express.
- Prisma ORM for database interaction.
- JWT authentication for secure access to protected routes.
- Endpoints for managing blog posts, comments, and user accounts.
- The API serves as the central data and logic hub, handling requests from both front-end clients.

#### Reader Client

- React-based front-end for reading blog posts and leaving comments.
- User-friendly interface for browsing and interacting with content.
- Reader Client: Provides a user-friendly interface for consuming blog content.

### Writer Client

- Separate React-based front-end for authors to write, edit, and publish posts.
- Features for managing posts (publishing/unpublishing, editing), comments (deleting, editing), and user accounts.
- Writer Client: Offers a dedicated interface for authors to manage blog content and administrative tasks.

## Architecture

The project follows a clear separation of concerns with a distinct API layer and two separate front-end clients. This architecture provides flexibility, security, and maintainability.

### Technologies Used

- Backend: Node.js, Express.js, Prisma ORM, PostgreSQL, Passport and JWT (JSON Web Tokens) for authentication
- Frontend: JavaScript,React, HTML, CSS

## Getting Started

- Clone the repository: ``` git clone https://github.com/1Amal/FullStackBlog ```
- Install dependencies: npm install
- Set up the database: Follow the instructions in the prisma directory.
- Start the development server: npm run dev

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests

## License

This project is licensed under the GPL v3.0 License.
