import signupModel from "../models/signupModel.js";
const createSignup = async (req, res) => {
  try {
    const { fullName, mobile, email, password } = req.body;
    const data = await signupModel.create({
      fullName: fullName,
      mobile: mobile,
      email: email,
      password: password,
    });

    // await res.save()
    // res.send(data); already json likh diya h to do bar request send krne ki need nhi h
    return res.status(201).json({
      message: " new user signup successfully ",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal serever error",
      error: error.message,
    });
  }
};

const deleteSignup = async (req, res) => {
  try {
    const result = await signupModel.findByIdAndDelete(req.param.id);
    res.send(result);
  } catch (error) {
    return res.status(500).json({
      message: "internal serever error",
      error: error.message,
    });
  }
};

const getSignup = async (req, res) => {
  try {
    const data = await signupModel.find({});

    return res.status(200).json({
      message: "data get successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal serever error",
      error: error.message,
    });
  }
};

export { createSignup, deleteSignup, getSignup };
