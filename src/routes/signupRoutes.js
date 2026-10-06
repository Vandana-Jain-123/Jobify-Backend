import express from "express";

import { createSignup ,deleteSignup} from "../controllers/signupController.js";

const signupRoutes = express.Router();

signupRoutes.post("/createSignup", createSignup);
signupRoutes.delete("/deleteSignup/:id",deleteSignup)

export default signupRoutes;
