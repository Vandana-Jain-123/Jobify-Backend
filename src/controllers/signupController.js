import signupModel from "../models/signupModel.js";
const createSignup=async(req,res)=>{
 
    try{
     
        const {fullName,mobile,email,password}=req.body
        const  data = await signupModel.create({
            fullName:fullName,
            mobile:mobile,
            email:email,
            password:password
        })

        // await res.save()
        res.send(data)
        console.log("new signup ")

    }catch(error){
       console.log(error)
    }

}
 const deleteSignup=async(req,res)=>{
    try{
         const result =await signupModel.findByIdAndDelete(req.param.id)
         res.send(result)

    }catch(error){
   console.log(error)
    }
 }





export  {createSignup,deleteSignup }