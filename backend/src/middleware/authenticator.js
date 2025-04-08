function authenticateUserRoute() {
  try {
    console.log("Authenticate route called");

    //   passport.authenticate("jwt", { session: false });
  } catch (error) {
    throw error;
  }
}

// Client will need to save the token in the browser local storage
// When authorizing routes with JWT token will need to be sent as an "Authorization" header
// It is required to use format "Bearer <JWT>" as below;
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDQwOTcyOTYsImV4cCI6MTc0NDA5OTA5Nn0.PboRrhU7xFTzQUltX_ZA59eWs-pxXfH8JHC_tU7jIKA

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    console.log("bearerHeader Ok");
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
