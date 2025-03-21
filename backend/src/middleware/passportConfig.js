import passport from "passport";
import passportJwt from "passport-jwt";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
let token = jwt.sign({ foo: "bar" }, "shhhhh");

import { newPrismaClient } from "../prisma/prismaQueries.js";

// For more information on configuring the JWT passport strategy visit https://www.passportjs.org/packages/passport-jwt/

// This code will configure the Passport authentication strategies
let JwtStrategy = passportJwt.Strategy,
  ExtractJwt = passportJwt.ExtractJwt;

// This will configure the passport-jwt options
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret-key5949439";
opts.issuer = "amalk.au";
opts.audience = "amalk.au/full-stack-blog";

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);



/////

// const passportInstance = passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "user_name",
//       passwordField: "password",
//       passReqToCallback: true,
//     },
//     async (req, username, password, done) => {
//       try {
//         const findUser = await newPrismaClient.users.findUnique({
//           where: {
//             user_name: username,
//           },
//         });
//         console.log(findUser);

//         if (!findUser) {
//           return done(null, false, { message: "Incorrect Username" });
//         }

//         const match = await bcrypt.compare(password, findUser.password);

//         if (!match) {
//           console.log("Incorrect Password");
//           return done(null, false, { message: "Incorrect Password" });
//         }

//         return done(null, findUser);
//       } catch (error) {
//         return done(err);
//       }
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await newPrismaClient.users.findUnique({
//       where: { id },
//     });

//     if (!user) {
//       return done(null, false);
//     }

//     done(null, user);
//   } catch (err) {
//     done(err);
//   }
// });

// export { passportInstance, passport };

