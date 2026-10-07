import  {checkLogin} from "../controllers/loginController.js"
import express from "express"
const  loginRoutes= express.Router()


loginRoutes.post("/checkLogin",checkLogin)


export default loginRoutes; 