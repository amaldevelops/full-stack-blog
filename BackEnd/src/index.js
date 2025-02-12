import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";

import blogMainRouter from "./routes/blogMainRouter.js";

import blogReaderRouter from "./routes/blogReaderRouter.js";

import blogWriterRouter from "./routes/blogWriterRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json()); // Parses application/json
app.use(urlencoded({extended:true})) // Parses application/x-www-form-urlencoded
app.use(cors());

app.use("/", blogMainRouter);
app.use("/reader", blogReaderRouter);
app.use("/writer", blogWriterRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);

  res
    .status(500)
    .json({ message: "Something Went Wrong !", error: err.message });
});

app.listen(port, () => {
  console.log(`Blog API is running on port ${port}`);
});
