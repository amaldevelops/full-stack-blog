import { readAllPostsDb } from "../prisma/prismaQueries.js";

async function blogMainControllerMain(req, res, next) {
  console.log(await readAllPostsDb());
  res.json([
    { Welcome: `Welcome To Blog API, Date is ${new Date()}` },
    { Select: "Please select Blog Reader or Writer To continue!" },
    
  ]);
  next();
}

async function blogMainControllerRegister(req, res, next) {
  try {
    res.json({ Register: "Register User Route" });
  } catch (error) {
    throw error;
  }
}

async function blogMainControllerLogin(req, res, next) {
  try {
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
