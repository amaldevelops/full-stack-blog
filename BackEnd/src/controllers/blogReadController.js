async function blogReadControllerMain(req, res, next) {
  res.send("Welcome to Blog API!");
  next();
}

export { blogReadControllerMain };
