async function blogMainControllerMain(req, res, next) {
  res.json({ Welcome: `Welcome To Blog API, Date is ${new Date()}` });
  next();
}

export { blogMainControllerMain };
