import User from "../models/userModel.js";

export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber } = req.body;

    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All feild requrid");
      error.statusCode = 400;
      return next(error);
    }
    // console.log("OldData:",currentUser);

    // currentUser.fullName = fullName;
    // currentUser.email = email;
    // currentUser.mobileNumber = mobileNumber;

    // await currentUser.save();

    // console.log("NewData:", currentUser);

    //second way

    const updateUser = await User.findByIdAndUpdate(
      { _id: currentUser._id },
      {
        fullName,
        email,
        mobileNumber,
      },
      { new: true },
    );

    res
      .status(200)
      .json({ message: "User updateed Sucessfully", data: updateUser });

    console.log("Updating the user");
  } catch (error) {
    next(error);
  }
};
