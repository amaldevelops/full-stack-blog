async function blogReadControllerMain(req, res, next) {
  res.json({ Welcome: `Welcome To Blog API, Date is ${new Date()}` });
  next();
}

async function blogReadControllerPostLogin(req, res, next) {
  try {
    res.json({ Login: "Reader Login Route" });
  } catch (error) {
    throw error;
  }
}

async function blogReadControllerPostComment(req, res, next) {
  try {
    res.json({ Comment: "Reader Comment Route" });
  } catch (error) {
    throw error;
  }
}

async function blogReadControllerPostLogout(req, res, next) {
  try {
    res.json({ Logout: "Reader Logout Route" });
  } catch (error) {
    throw error;
  }
}

export {
  blogReadControllerMain,
  blogReadControllerPostLogin,
  blogReadControllerPostComment,
  blogReadControllerPostLogout,
};
