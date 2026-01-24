import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const Protect = async (req, res, next) => {
  try {
    const biscut = req.cookies.parleG;
    console.log("Token received in cookies:", biscut);

    if (!biscut) {
      const error = new Error("Unauthorized! Please login again");
      error.statusCode = 401;
      return next(error);
    }

    const tea = jwt.verify(biscut, process.env.JWT_SECRET);
    console.log("Decoded token:", tea);

    const verifiedUser = await User.findById(tea.id);

    if (!verifiedUser) {
      const error = new Error("Unauthorized! Please login again");
      error.statusCode = 401;
      return next(error);
    }

    req.user = verifiedUser;
    next();
  } catch (error) {
    next(error);
  }
};
