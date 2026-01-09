import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); //Connecting the Mongodb DataBase..
    console.log("mongoDb connected At :", conn.connection.host,":",conn.connection.port);
    console.log("Database name :",conn.connection.name);
    
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
