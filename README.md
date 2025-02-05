# FullStack Blog API and Clients

This project is a full-stack blog application built with a Node.js/Express API and two separate React-based front-end clients: one for readers and one for writers.

## Live Demo

## Features

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
