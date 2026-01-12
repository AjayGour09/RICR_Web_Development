import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const UserRegister = async (req, res, next) => {
  try {
    //Accept data from frontend
    const { fullName, email, mobileNumber, password } = req.body;
    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("All Fields required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Already Registred");
      error.statusCode = 409;
      return next(error);
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //save data to database
    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
    });

    //send response tp frontend
    console.log(newUser);
    res.status(201).json({ message: "Registration Successfull" });

    //End
  } catch (error) {
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("All Fields required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Not Registred");
      error.statusCode = 402;
      return next(error);
    }

    //password varify

    const isVarified = await bcrypt.compare(password, existingUser.password);
    if (!isVarified) {
      const error = new Error("Password didn't Match"); 
      error.statusCode = 402;
      return next(error);
    }

    //Send Message to Frontend
    res.statusCode(204).json({ message: "Login Successfull", data:existingUser });
    //End 

  } catch (error) {
    next(error);
  }
};

export const UserLogout = async (req, res,next) => {
  try {
    res.statusCode(204).json({ message: "Logout Successfull" });
  } catch (error) {
    next(error);
  }
};
