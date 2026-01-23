import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, SetIsEditProfileModalOpen] = useState(false);

  const { user } = useAuth();
  return (
    <>
      <div className="mt-40 ms-110  p-5 w-[560px] bg-white rounded-2xl shadow-2xl">
        <div className="flex gap-3">
          <div className="border border-red-900 shadow-2xl rounded-[50%] w-25 h-25"></div>
          <div className="mt-8">
            <div className="ms-2 text-2xl">
             
              <span>{user.fullName}</span>
            </div>
            <div>
    
              <span>{user.email}</span>
            </div>
          </div> 
        </div>
        <div className="">
          <div className="flex justify-between mb-2 mt-7 ">
            <span className="bold">Name</span>
            <span>{user.fullName}</span>
          </div> 
          <hr />
          <div className="flex justify-between mb-2 mt-5 ">
            <span>Email:</span>
            <span>{user.email}</span>
          </div>
          <hr />
          <div className="flex justify-between mb-2 mt-5 ">
            <span>Phone:</span>
            <span>{user.mobileNumber}</span>
          </div>
          <hr />
          <button
            className="border rounded-xl px-7 py-2 bg-amber-100 mt-5 hover:bg-amber-800 hover:text-amber-50 hover:cursor-pointer"
            onClick={() => SetIsEditProfileModalOpen(true)}
          >
            Edit Profile
          </button>
        </div>
      </div>
      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => SetIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
