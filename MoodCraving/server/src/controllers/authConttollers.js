import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genToken } from "../utils/authToken.js";

export const UserRegister = async (req, res, next) => {
  try {
    //accept data exist
    const { fullName, email, mobileNumber, password } = req.body;
    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("All feilds reuired");
      error.statusCode = 400;
      return next(error);
    }
    console.log({ fullName, email, mobileNumber, password });
    
    //Check for duplicate use before registation
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already register");
      error.statusCode = 409;
      return next(error);
    }

    //encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //save data to databse

    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
    });

    //sand response to frontend

    console.log(newUser);

    res.status(201).json({ message: "Registration Seccessfull" });
    //End
  } catch (error) {
    next(error);
  }
};
export const UserLogin = async (req, res, next) => {
  try {
    //Fetch data fronted
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All feilds reuired");
      error.statusCode = 400;
      return next(error);
    }
    //check is user regi\der or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email already registerd");
      error.statusCode = 401;
      return next(error);
    }
    //verfy the password

    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("Email didn't match");
      error.statusCode = 401;
      return next(error);
    }

    //Token generation

    await genToken(existingUser,res);

    //send message to frontend
    res.status(200).json({ message: "Login Successfull", data: existingUser });

    //End
  } catch (error) {
    next(error);
  }
};
export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Login Successfull" });
  } catch (error) {
    next(error);
  }
};