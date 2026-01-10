import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/myRouter.js"
const app = express();

app.use(express.json());
app.use("/auth",AuthRouter);

app.get("/", (req, res) => {
  console.log("server is running");

app.use((err,req,res,next)=>{
  const Errormessage =  err.message ||"Internal server error";
  const Statuscode=err.Statuscode ||500;

  res.status(Statuscode).json({message:Errormessage});
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server started at port", port);
  connectDB();
  res.json({ message: "server is running successfully" });
});
});
