import jwt from "jsonwebtoken";

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

function extractToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    // Split the Bearer <access_token> and get the <access_token>
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;

    next();
  } else {
    console.log(
      "Forbidden path, No valid JSON Web Token found ! Please log in with a user account with higher privileges"
    );
    res.json({
      message:
        "Forbidden path, No valid JSON Web Token found ! Please log in with a user account with higher privileges",
    });
  }
}

function authenticateToken(req, res, next) {
  jwt.verify(req.token, process.env.JWT_SECRET_KEY, (err, authData) => {
    if (err) {
      // res.sendStatus(403);
      console.log("Forbidden, No valid JSON Web Token found");
      res.json({
        message:
          "Forbidden path, please log in with a user account with higher privileges",
      });
    } else {
      res.json({
        message: "Token Verified and access granted to route",
        authData,
      });

      next();
    }
  });
}

export { authenticateUserRoute, extractToken, authenticateToken };
