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
