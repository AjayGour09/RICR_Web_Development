import User from "../models/userModel.js";
export const UserRegister = async (req, res) => {
  try {
    const { fullname, email, phone, password } = req.body;
    if (!fullname || !email || !phone || !password) {
      res.status(400).json({ message: "All fields required" });
      return;
    }
    const newUser = await User.create({
      fullname,
      email,
      phone,
      password,
    });

    console.log(newUser);
    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const UserLogin = async (req, res) => {
  try {
    const {  email, password } = req.body;
    if ( !email || !password) {
      res.status(400).json({ message: "All fields required" });
      return;
    }
   const existingUser = await User.find({email});
   if(!existingUser){
    res.status(400).json({message :"User not found"});
    return;
   }
//    const isVarified = password === existingUser.password;
   if(!password ===existingUser.password){
    res.status(402).json({message:"User not Athorized"})
    return;
   }

    console.log(existingUser);
    res.status(200).json({ message: "Welcome back" , data:existingUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const UserLogout = async (req, res) => {
  try {
      res.status(200).json({ message: "LogOut Successfull" });
      return;
    } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
