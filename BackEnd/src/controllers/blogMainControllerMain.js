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
        "/POST:reader/posts/comment/:id/create",
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
    // Following is just Some sample data for testing
    const userDetailsObject = {
      user_email: "maverick5@gmail.com",
      user_name: "maverick5",
      password: "encryptThePassword",
      author: false,
    };

    // const userDetailsObject=req.body;

    registerNewUserDb(userDetailsObject);
    res.json({ Register: "Register User Route" });
  } catch (error) {
    throw error;
  }
}

async function blogMainControllerLogin(req, res, next) {
  try {
    // const userDetailsObject=req.body;

    const userDetailsObject = {
      user_email: "maverick5@gmail.com",
      password: "encryptThePassword",
    };

    loginUserDb(userDetailsObject);
    res.json({ Login: "Login Route" });
  } catch (error) {
    throw error;
  }
}

async function blogMainControllerLogout(req, res, next) {
  try {
    res.json({ Logout: "Logout Route" });
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
