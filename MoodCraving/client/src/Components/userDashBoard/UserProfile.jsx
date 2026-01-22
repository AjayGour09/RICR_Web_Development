import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, SetIsEditProfileModalOpen] = useState(false);

  const { user } = useAuth();
  return (
    <>
      <div className="flex  gap-5">
        <div>
          <span>Name:</span>
          <span>{user.fullName}</span>
        </div>
        <div>
          <span>Email:</span>
          <span>{user.email}</span>
        </div>
        <div>
          <span>Phone:</span>
          <span>{user.mobileNumber}</span>
        </div>
        <button
          className="border px-5  bg-amber-100 "
          onClick={() => SetIsEditProfileModalOpen(true)}
        >
          Edit Profile
        </button>
      </div>
      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => SetIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
