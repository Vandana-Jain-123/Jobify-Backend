import express from "express";
import cors from "cors";
import conncetionDB from "./conncetionDB.js";
import signupRoutes from "./routes/signupRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";

const app = express();
app.use(express.json());

const port = 4000;
const BaseURL = process.env.DATABASE_URL || "mongodb://localhost:27017/Jobify";

conncetionDB(BaseURL);

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use("/", signupRoutes);
app.use("/checkLogin", loginRoutes);
console.log("hello backend");

app.listen(port, () => {
  console.log(`this is my port ${port}`);
});
