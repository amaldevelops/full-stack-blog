import index from "../routes/blogMainRouter.js";

import request from "supertest";
import express from "express";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

test("index route works", done => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect([
        { Welcome: `Welcome To Blog API by Amal K, Date is ${new Date()}` },
        { AvailableRoutes: "Please select Route: /reader or /writer To continue!" },
        {
          ReaderRoutes: [
            "GET:/reader/posts",
            "GET:reader/posts/:id",
            "GET:/reader/posts/comment",
            "POST:reader/posts/comment/:id/create",
            "PUT:/reader/posts/comment/:id/update",
            "DELETE:/reader/posts/comment/:id/delete",
          ],},])
    .expect(200, done);
});

// test("testing route works", done => {
//   request(app)
//     .post("/test")
//     .type("form")
//     .send({ item: "hey" })
//     .then(() => {
//       request(app)
//         .get("/test")
//         .expect({ array: ["hey"] }, done);
//     });
// });

