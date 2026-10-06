import express from "express";
import cors from "cors";
import conncetionDB from "./conncetionDB.js";
import signupRoutes from "./routes/signupRoutes.js";

const app = express();

const port = 4000;
const BaseURL = process.env.DATABASE_URL || "mongodb://localhost:27017/Jobify";

conncetionDB(BaseURL);
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

 app.use("/createSignup",signupRoutes);
console.log("hello backend");

app.listen(port, () => {
  console.log(`this is my port ${port}`);
});
