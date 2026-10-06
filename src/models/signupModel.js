import express from "express";
import mongoose, { Schema } from "mongoose";
const signupSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const signupModel = mongoose.model("signup", signupSchema);
export default signupModel;
