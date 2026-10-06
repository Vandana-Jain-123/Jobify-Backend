import mongoose from "mongoose";

const conncetionDB = async (DATABASE_URL) => {
  try {
    const dbOption = {
      dbName: "Jobify",
    };
    await mongoose.connect(DATABASE_URL, dbOption);
  } catch (error) {
    console.log(error);
  }
};
export default conncetionDB;
