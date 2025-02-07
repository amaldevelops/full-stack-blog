import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import blogMainRouter from './routes/blogMainRouter.js'

import blogReaderRouter from "./routes/blogReaderRouter.js";

import blogWriterRouter from "./routes/blogWriterRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use('/', blogMainRouter);
app.use("/reader", blogReaderRouter);
app.use("/writer", blogWriterRouter);

app.listen(port, () => {
  console.log(`Blog API is running on port ${port}`);
});
