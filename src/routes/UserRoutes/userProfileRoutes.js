import express from "express"
import { createUserProfile } from "../../controllers/userController/userProfileController.js"


const  userProfileRoutes = express.Router()


 userProfileRoutes.post("/createUserProfile",createUserProfile)


export default userProfileRoutes;