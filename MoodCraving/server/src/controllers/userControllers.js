import User from "../models/userModel.js";
import cloudinary from "../config/cloundinary.js";

export const UserUpdate = async (req, res, next) => {
  try {
    //logic here

    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;
    

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All Feilds Required");
      error.statusCode = 400;
      return next(error);
    }

    console.log("OldData: ", currentUser); //old user data in JSON format
    //first Way
    // currentUser.fullName = fullName;
    // currentUser.email = email;
    // currentUser.mobileNumber = mobileNumber;
    // await currentUser.save();

    // console.log("NewData:", currentUser);

    //Second Way

    const updatedUser = await User.findByIdAndUpdate(
      { _id: currentUser._id },
      {
        fullName,
        email,
        mobileNumber,
      },
      { new: true },
    );

    console.log("Updated User: ", updatedUser);
    res
      .status(200)
      .json({ message: "User Updated Sucessfully", data: updatedUser });

    console.log("Updating the user");
  } catch (error) {
    next(error);
  }
};

export const UserChangePhoto = async (req, res, next) => {
  try {
   
  const currentUser=req.user ;
    const dp = req.file;
    
    if(!dp){
      const error = new Error("profile pic required")
      error.statusCode = 400;
      return next(error);
    }

    if(currentUser.photo.publicID){
      await cloudinary.uploader.destroy(currentUser.photo.publicID)
    }

    const b64 = Buffer.from(dp.buffer).toString("base64");
   
    const dataURI = `data:${dp.mimetype};base64,${b64}`
    
    
    const result = await cloudinary.uploader.upload(dataURI,{
      folder:"Craving/User",
      width:500,
      height:500,
      crop:"fill"
    })

    console.log("result Uploaded successfully :", result);
    currentUser.photo.url = result.secure_url;
    currentUser.photo.publicID= result.public_id;

    await currentUser.save();
    



    res.status(200).json({ message: "Photo Updated", data:currentUser });
  } catch (error) {
    console.log(error);
    
    next(error);
  }
};