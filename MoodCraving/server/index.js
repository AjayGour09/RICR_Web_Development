import express from "express";
import cors from "cors";
import morgan from "morgan";
import cloudinary from "./src/config/cloundinary.js";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/db.js";
import Authrouter from "./src/routers/authRouter.js";
import publicRouter from "./src/routers/publicRouter.js";
import UserRouter from "./src/routers/userRouter.js";
const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth", Authrouter);
app.use("/public", publicRouter);
app.use("/user", UserRouter);

app.get("/", (req, res) => {
  console.log("Server is Working");
});

app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const StatusCode = err.statusCode || 500;

  res.status(StatusCode).json({ message: ErrorMessage });
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log("Server Started at Port :", port);
  connectDB();
  try {
    const res = await cloudinary.api.ping();
    console.log("Cloudinary API is working", res);
  } catch (error) {
    console.error("Error Connecting cloudinary Api", error);
  }
});
