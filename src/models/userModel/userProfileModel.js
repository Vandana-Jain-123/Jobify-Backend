import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: false,
  },
  education: 
    {
      schoolOrCollege: {
        type: String,
        
      },
      bachelorDegree: {
        type: String,
      },
     
      
    },
  
  experience: {
    type: String,
    required: true,
  },
  portfolio: {
    type: String,
    required: false,
  },
  about: {
    type: String,
    required: true,
  },
});

const userProfileModel=mongoose.model("UserProfileDetails",userProfileSchema)
export default userProfileModel;
