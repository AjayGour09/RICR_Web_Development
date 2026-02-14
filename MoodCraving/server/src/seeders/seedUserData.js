import dotenv from "dotenv";
dotenv.config();
import connectDB from "../config/db.js";
import User from "../models/userModel.js";
import bcrypt, { genSalt } from "bcrypt";
import { DummyManagers, DummyPartners, DummyUsers } from "./Dummy.js";

const seedManager = async () => {
  const salt = await bcrypt.genSalt(10);

  console.log("Adding Dummy restaurant");

  DummyManagers.forEach(async (manager) => {
    await User.create({
      ...manager,
      password: await bcrypt.hash(manager.password, salt),
    });
  });
  console.log("Dummy restaurant Added");
};

const seedCustomer = async () => {
  const salt = await bcrypt.genSalt(10);

  console.log("Adding Dummy Customer ");
  DummyUsers.forEach(async (customer) => {
    await User.create({
      ...DummyUsers,
      password: await bcrypt.hash(customer.password, salt),
    });
  });
  console.log("Dummy customer Added");
};

const seedRider = async () => {
  const salt = await bcrypt.genSalt(10);
  console.log("Adding dummy rider");

  DummyPartners.forEach(async (rider) => {
    await User.create({
      ...rider,
      password: await bcrypt.hash(rider.password, salt),
    });
  });
};

const seedUser = async () => {
  try {
    connectDB();

    const existingUsers = await User.find();
    if (existingUsers) {
      existingUsers.forEach(async (existingUser) => {
        if (existingUser.role !== "admin") {
          await existingUser.deleteOne();
        }
      });
      console.log("All users Removed Except admin");
    }
    await seedManager();
    await seedCustomer();
    await seedRider();
  } catch (error) {
    console.log(error);
    console.log("Error is dummy user");
  }
  process.exit(1);
};

seedUser();