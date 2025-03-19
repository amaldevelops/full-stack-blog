import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

console.log(process.env.DATABASE_URL);
const prisma = new PrismaClient();

async function main() {
  // Hash passwords
  const password1 = await bcrypt.hash("password123", 10);
  const password2 = await bcrypt.hash("securepass456", 10);

  // Seed users
  const user1 = await prisma.blogUsers.upsert({
    where: { user_email: "dev1@example.com" },
    update: {},
    create: {
      user_email: "dev1@example.com",
      user_name: "DevGuru",
      password: password1,
      author: true,
    },
  });

  const user2 = await prisma.blogUsers.upsert({
    where: { user_email: "dev2@example.com" },
    update: {},
    create: {
      user_email: "dev2@example.com",
      user_name: "CodeMaster",
      password: password2,
      author: false,
    },
  });

  // Seed blog posts
  const post1 = await prisma.blogContent.create({
    data: {
      blog_post_title: "The Basics of JavaScript",
      blog_post_content:
        "JavaScript is a versatile programming language used in web development...",
      blog_post_publish_status: true,
      blog_post_author_id: user1.id,
    },
  });

  const post2 = await prisma.blogContent.create({
    data: {
      blog_post_title: "Understanding Asynchronous Programming",
      blog_post_content:
        "Asynchronous programming is essential for handling network requests efficiently...",
      blog_post_publish_status: true,
      blog_post_author_id: user1.id,
    },
  });

  const post3 = await prisma.blogContent.create({
    data: {
      blog_post_title: "NodeJs Basics",
      blog_post_content:
        "Node.js is an open-source, cross-platform JavaScript runtime environment designed for building scalable network applications. Here are key aspects of Node.js: Features 1) Asynchronous and event-driven: Handles multiple operations concurrently without blocking. 2) Single-threaded: Uses an event loop to manage requests efficiently. 3)V8 engine: Runs on Google Chrome's V8 JavaScript engine for high performance. 4)NPM (Node Package Manager): Provides access to a vast ecosystem of open-source libraries.        Advantages 1)High performance: Non-blocking I/O and V8 engine optimization. 2) Full-stack JavaScript: Allows using JavaScript for both client and server-side development. 3)Scalability: Efficiently handles concurrent connections. 4) Cross-platform compatibility: Runs on various operating systems. 5) Large and active community: Provides continuous support and updates",
      blog_post_publish_status: true,
      blog_post_author_id: user2.id,
    },
  });

  const post4 = await prisma.blogContent.create({
    data: {
      blog_post_title: "React Basics",
      blog_post_content:
        "React is a popular JavaScript library for building user interfaces, developed by Facebook and released in 2013. It has become a cornerstone of modern web development due to its efficiency and flexibility.       1) Component-Based Architecture: React uses reusable components as building blocks for UIs, promoting modularity and maintainability 2) Virtual DOM: React employs a lightweight in-memory representation of the actual DOM, optimizing rendering performance. 3) JSX: A syntax extension allowing HTML-like code within JavaScript, simplifying component creation.4) Unidirectional Data Flow: Ensures predictable behavior and clear data hierarchy. 5)React Hooks: Enables state management and other functionalities in function components",
      blog_post_publish_status: true,
      blog_post_author_id: user2.id,
    },
  });

  // Seed comments
  await prisma.blogComments.createMany({
    data: [
      {
        comment_text: "Great article! JavaScript is awesome.",
        blog_post_id: post1.id,
        comment_author_id: user2.id,
      },
      {
        comment_text: "I love using async/await in JavaScript.",
        blog_post_id: post2.id,
        comment_author_id: user2.id,
      },
      {
        comment_text: "Well Written Article",
        blog_post_id: post2.id,
        comment_author_id: user2.id,
      },
      {
        comment_text: "I learned a lot",
        blog_post_id: post2.id,
        comment_author_id: user1.id,
      },
      {
        comment_text: "Well Written Article",
        blog_post_id: post3.id,
        comment_author_id: user2.id,
      },
      {
        comment_text: "I learned a lot",
        blog_post_id: post3.id,
        comment_author_id: user1.id,
      },
      {
        comment_text: "Well Written Article",
        blog_post_id: post4.id,
        comment_author_id: user2.id,
      },
      {
        comment_text: "I learned a lot",
        blog_post_id: post4.id,
        comment_author_id: user1.id,
      },
    ],
  });

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
