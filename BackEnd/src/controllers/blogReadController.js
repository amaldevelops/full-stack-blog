
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
  blogReadControllerPostLogin,
  blogReadControllerPostComment,
  blogReadControllerPostLogout,
};
