async function blogMainControllerMain(req, res, next) {
  res.json([
    { Welcome: `Welcome To Blog API, Date is ${new Date()}` },
    { Select: "Please select Blog Reader or Writer To continue" },
  ]);
  next();
}

export { blogMainControllerMain };
