import dotenv from "dotenv";
dotenv.config();
import connectDB from "../config/db.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

import { DummyAdmin } from "./Dummy.js";
const seedAdmin = async () => {
  try {
    await connectDB();
    const salt = await bcrypt.genSalt(10);

    const existingAdmin = await User.findOne({ email: DummyAdmin.email });

    if (existingAdmin) {
      if (existingAdmin.role === "admin") {
        await existingAdmin.deleteOne();
        console.log("Old admin removed");
      } else {
        console.log("Email already register");
        return;
      }
    }

    console.log("Adding new admin User");

    const AdminUser = await User.create({
      ...DummyAdmin,
      password: await bcrypt.hash(DummyAdmin.password, salt),
    });

    console.log("Admin seeded SuccessFully");

    console.log("Admin Name ", AdminUser.name);
    console.log("Admin Email", AdminUser.email);
    console.log("Admin Password", DummyAdmin.password);
  } catch (error) {
    console.log(error);
    console.log("Error Seeding Admin");
  }
  process.exit(1);
};
