import express from "express";

import { createSignup ,deleteSignup,getSignup} from "../controllers/signupController.js";

const signupRoutes = express.Router();

signupRoutes.post("/createSignup", createSignup);
signupRoutes.get("/",getSignup);

signupRoutes.delete("/deleteSignup/:id",deleteSignup)

export default signupRoutes;
