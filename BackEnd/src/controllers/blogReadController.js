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

async function blogReadControllerGetAllPosts(req, res, next) {
  try {
    res.json({ Allposts: "Reader All posts Route" });
  } catch (error) {
    throw error;
  }
}

async function blogReadControllerGetPostById(req, res, next) {
  try {
    res.json({ PostById: "Reader post by ID Route" });
  } catch (error) {
    throw error;
  }
}

async function blogReadControllerUpdateComment(req, res, next) {
  try {
    res.json({ UpdateComment: "Reader Comment update Route" });
  } catch (error) {
    throw error;
  }
}

async function blogReadControllerDeleteComment(req, res, next) {
  try {
    res.json({ DeleteComment: "Reader Delete Comment Route" });
  } catch (error) {
    throw error;
  }
}

export {
  blogReadControllerPostLogin,
  blogReadControllerPostComment,
  blogReadControllerPostLogout,
  blogReadControllerGetAllPosts,
  blogReadControllerGetPostById,
  blogReadControllerUpdateComment,
  blogReadControllerDeleteComment,
};
