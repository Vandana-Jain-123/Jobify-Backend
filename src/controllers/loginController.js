import { response } from "express";
import signupModel from "../models/signupModel.js";
const checkLogin = async (req, res) => {
  try {
        console.log("BODY:", req.body);
    const { email, password } = req.body;
    const signupUserData = await signupModel.findOne({ email });

    if (!signupUserData) {
      return res.status(404).json({
        message: "user not found please signup",
      });
    }

    if (
      signupUserData.password === password &&
      signupUserData.email === email
    ) {
      return res.status(200).json({
        message: "login successfully",
      });
    }

  } catch (error) {
    console.log(error);
   return res.status(500).json({
      message: "internal serever error",
      error: error.message,
    });
}

  
};
export { checkLogin };
