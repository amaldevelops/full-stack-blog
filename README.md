````markdown
# Full Stack Blog Project

## 📘 Project Introduction

This demo project is designed to strengthen technical proficiency in building a secure RESTful API with:

- **Authentication & Authorization** via **JWT**
- **Role-Based Access Control**
- REST principles (statelessness, resource-based routing, uniform interface)

It supports two front-ends:

- **Blog Reader**
- **Blog Writer**

> ⚠️ **Note**: As the front end is hosted on GitHub Pages using React Router, directly accessing nested routes (e.g., `/writer/edit`) may lead to a 404 error. Please use the navigation within the site.

---

## 🚀 Live Demo

- **Front End (GitHub Pages):** [https://www.amalk.au/full-stack-blog](https://www.amalk.au/full-stack-blog)
- **Database (Neon):** [https://neon.tech/](https://neon.tech/)
- **Backend (Render):** [https://full-stack-blog-t1n4.onrender.com](https://full-stack-blog-t1n4.onrender.com)
  > Note: Free hosting tiers may cause delays of up to 50 seconds on first load.

---

## 💻 Source Code

- **Main GitHub Repository:** [Main GitHub Repository](https://github.com/amaldevelops/full-stack-blog)
- **Front End Code:** [Front End Source Code](https://github.com/amaldevelops/full-stack-blog/tree/main/frontend)
- **Back End Code:** [Back End Source Code](https://github.com/amaldevelops/full-stack-blog/tree/main/backend)

---

## 🧱 Tech Stack

### Front End

- JavaScript, React, Vite, HTML, CSS

#### Blog Reader

- React-based client for browsing blog posts and leaving comments.

#### Blog Writer

- Manage blog posts (create, edit, delete)
- Moderate comments

### Back End

- Node.js, Express, PostgreSQL, Prisma, Postman
- REST API with JWT auth
- Database interaction via Prisma
- Endpoints for managing posts, comments, and users

---

## ⚙️ Deployment Guide

### Local Setup

```bash
git clone git@github.com:amaldevelops/full-stack-blog.git

# Front End
cd frontend
npm install

# Back End
cd ../backend
npm install
npx prisma generate
npx prisma db push
npm run seed  # (Optional)
```
````

### Neon (Database Hosting)

Follow [Neon docs](https://neon.tech/docs) to set up a PostgreSQL instance. Set your `.env` as:

```
DATABASE_URL="postgresql://alex:AbC123dEf@ep-cool-darkness-a1b2c3d4.us-east-2.aws.neon.tech/dbname"
```

### Render.com (Backend Hosting)

Settings:

- **Repo:** `https://github.com/amaldevelops/full-stack-blog`
- **Branch:** `main`
- **Root Directory:** `backend/src`
- **Build Command:** `npm install`
- **Start Command:** `npm start`

Env Variables:

```
CORS_URL=https://www.amalk.au
DATABASE_URL=your_neon_db_url
PORT=3000
JWT_SECRET_KEY=your_secret_key
```

### GitHub Pages (Frontend Hosting)

```bash
npm run deploy
```

---

## 📑 Blog API Info

RESTful API with JSON responses. Usable with either or both front ends.

Prefix all routes with your backend URL (e.g., `http://localhost:3000/reader/posts`)

### Admin Routes

- **Register:** `POST /register`
- **Login:** `POST /login`
- **Logout:** Remove JWT from client storage

### Reader Routes

- **All Reader Routes:** `GET /reader`
- **All Published Posts:** `GET /reader/posts`
- **Post by ID:** `GET /reader/posts/:id`
- **All Comments for Post:** `GET /reader/posts/:id/comment`
- **Create Comment:** `POST /reader/posts/:id/comment/create`
- **Update Comment:** `PUT /reader/posts/:id/comment/:id/update`
- **Delete Comment:** `DELETE /reader/posts/:id/comment/:id/delete`

### Writer Routes

- **All Writer Routes:** `GET /writer`
- **Create Post:** `GET /writer/posts/create`
- **Save Draft:** `GET /writer/posts/drafts`
- **Get Draft by ID:** `POST /writer/posts/:id/drafts`
- **Update Draft by ID:** `PUT /writer/posts/:id/drafts`
- **Delete Post:** `DELETE /writer/posts/:id/delete`
- **Publish/Unpublish Post:** `PUT /writer/posts/:id/publish`

---
