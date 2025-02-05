import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
console.log(process.env.PORT)

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Blog API!");
});

app.listen(port, () => {
  console.log(`Blog API is running on port ${port}`);
});
