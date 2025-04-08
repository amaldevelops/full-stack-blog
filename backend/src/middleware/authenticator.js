function authenticateUserRoute() {
  try {
    console.log("Authenticate route called");

    //   passport.authenticate("jwt", { session: false });
  } catch (error) {
    throw error;
  }
}

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    console.log("bearearHeader Ok");
    // Split the Bearer <access_token> and get the <access_token>
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    console.log("Forbidden, No valid JSON Web Token found");
    res.sendStatus(403);
  }
}

export { authenticateUserRoute, verifyToken };
