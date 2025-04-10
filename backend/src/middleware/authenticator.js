import jwt from "jsonwebtoken";

async function createJWT(loginStatus) {
  try {
    return new Promise((resolve, reject) => {
      jwt.sign(
        {
          userName: loginStatus.userName,
          status: loginStatus.status,
          author: loginStatus.author,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1800s" },
        (err, token) => {
          if (err) {
            return reject(err);
          }

          resolve({
            Login: "Login Successful",
            token: token,
          });

          // console.log(token);
        }
      );
    });
  } catch (error) {
    throw error;
  }

  // return;
}

// Client will need to save the token in the browser local storage
// When authorizing routes with JWT token will need to be sent as an "Authorization" header
// It is required to use format "Bearer <JWT>" as below;
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDQwOTcyOTYsImV4cCI6MTc0NDA5OTA5Nn0.PboRrhU7xFTzQUltX_ZA59eWs-pxXfH8JHC_tU7jIKA

function authenticateJWT(req, res, next) {
  // Split the Bearer <access_token> and get the <access_token>
  const token = req.token || req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, authData) => {
    if (err) {
      console.log("Forbidden: Invalid or expired token");
      return res.status(403).json({
        message: "Forbidden: Invalid or expired token",
      });
    }

    // Token is valid, attach user info to req object
    req.authData = authData;
    next();
  });
}

function checkAuthorStatus(req,res,next)
{

  if (req.authData.author===true)
  {
    console.log(`Are you an Author : ${req.authData.author}`);
    next();
  }

else {
  console.log("You are not an author!");
  return res.status(401).json(
    {
      message:"You are not an Author!"
    }
  )
}



}

export { createJWT, authenticateJWT,checkAuthorStatus };
