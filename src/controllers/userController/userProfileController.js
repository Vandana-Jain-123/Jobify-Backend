import userProfileModel from "../../models/userModel/userProfileModel.js";

// createUser
const createUserProfile = async (req, res) => {
    console.log(req.body,"****&&&&&")
  try{
        const  {
    fullName,
    profilePhoto,
    mobile,
    email,
    address,
    skills,
    resume,
    education,
    experience,
    portfolio,
    about,
  } = req.body;
  const data =await userProfileModel.create({
    fullName: fullName,
    profilePhoto: profilePhoto,
    mobile: mobile,
    email: email,
    address: address,
    skills: skills,
    resume: resume,
    education: education,
    experience: experience,
    portfolio: portfolio,
    about: about,
  });

  return res.status(201).json({
    message: "userProfile created successfully",
 data: data,
  });

   
  }catch(error){
    return res.status(500).json({
        message:"internal server error",
        error:error.message
    })
  }


}

export {createUserProfile}

// // deletUser

// // updateUser


// // getUser

// import userProfileModel from "../../models/userModel/userProfileModel.js";

// const createUserProfile = async (req, res) => {
//   console.log("CONTROLLER HIT");
//   console.log("BODY:", req.body);

//   try {
//     const {
//       fullName,
//       profilePhoto,
//       mobile,
//       email,
//       address,
//       skills,
//       resume,
//       education,
//       experience,
//       portfolio,
//       about,
//     } = req.body;

//     const data = await userProfileModel.create({
//       fullName,
//       profilePhoto,
//       mobile,
//       email,
//       address,
//       skills,
//       resume,
//       education,
//       experience,
//       portfolio,
//       about,
//     });

//     console.log("DATA SAVED:", data);

//     return res.status(201).json({
//       message: "userProfile created successfully",
//     });

//   } catch (error) {
//     console.log("🔥 ACTUAL ERROR:", error);

//     return res.status(500).json({
//       message: "internal server error",
//       error: error.message,
//     });
//   }
// };

// export { createUserProfile };
