import {
  registerNewUserDb,
  loginUserDb,
  logOutUserDb,
} from "../prisma/prismaQueries.js";

async function blogMainControllerMain(req, res, next) {
  // console.log(await readAllPostsDb());
  res.json([
    { Welcome: `Welcome To Blog API, Date is ${new Date()}` },
    { Select: "Please select Route: /reader or /writer To continue!" },
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

    const userDetailsObject={
      user_email: 'maverick5@gmail.com',
      password: 'encryptThePassword',
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
