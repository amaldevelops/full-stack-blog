import jwt from "jsonwebtoken";

import { createJWT } from "../middleware/authenticator.js";

import {
  registerNewUserDb,
  loginUserDb,
  logOutUserDb,
} from "../prisma/prismaQueries.js";

async function blogMainControllerMain(req, res, next) {
  // console.log(await readAllPostsDb());
  res.json([
    { Welcome: `Welcome To Blog API by Amal K, Date is ${new Date()}` },
    { AvailableRoutes: "Please select Route: /reader or /writer To continue!" },
    {
      ReaderRoutes: [
        "GET:/reader/posts",
        "GET:reader/posts/:id",
        "GET:/reader/posts/comment",
        "POST:reader/posts/comment/:id/create",
        "PUT:/reader/posts/comment/:id/update",
        "DELETE:/reader/posts/comment/:id/delete",
      ],
    },
    {
      WriterRoutes: [
        "GET:/writer",
        "GET:/writer/post/create",
        "GET:/writer/post/drafts",
        "POST:/writer/post/:id/draft",
        "POST:/writer/post/:id/save",
        "POST:/writer/post/:id/edit",
        "DELETE:/writer/post/:id/delete",
        "POST:/writer/post/:id/publish",
        "POST:/writer/post/:id/unpublish",
      ],
    },
  ]);
  next();
}

async function blogMainControllerRegister(req, res, next) {
  try {
    // Test Data, remove after Front End is connected and tested
    const userDetailsObject = {
      user_email: "maverick5@gmail.com",
      user_name: "maverick5",
      password: "encryptThePassword",
      author: false,
    };

    registerNewUserDb(userDetailsObject);

    res.json({ status: "Register User Route" });
  } catch (error) {
    throw error;
  }
}

async function blogMainControllerLogin(req, res, next) {
  try {
    // This will destructure form data from req.body
    const { user_email, user_name, password } = req.body;

    //This will assign the destructured form data into a object which can be sent to the Prisma to query database for user submitted login details
    const userDetailsObject = {
      user_email: user_email,
      user_name: user_name,
      password: password,
    };

    let loginStatus = await loginUserDb(userDetailsObject);

    console.log(`User details Object:${userDetailsObject.id}`);

    if (loginStatus.status === "successLogin") {
      let JWT = await createJWT(loginStatus);
      res.json(JWT);
    } else {
      res.json({ Login: "Login Unsuccessful" });
    }
  } catch (error) {
    throw error;
  }
}

async function blogMainControllerLogout(req, res, next) {
  try {
    res.json({ status: "Logout Route" });
  } catch (error) {
    throw error;
  }
}

export {
  blogMainControllerMain,
  blogMainControllerRegister,
  blogMainControllerLogin,
  blogMainControllerLogout,
};
