import React from "react";
import { useAuth } from "../../../context/AuthContext";
const EditProfileModal = ({ onClose }) => {
  const { user } = useAuth();
  return (
    <>
     
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center rounded z-100">
        <div className="bg-white w-5xl  max-h-[85vh] overflow-y-auto rounded">
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
            onClick={() => onClose()}
            className="border px-5 py-1 text-amber-50 bg-red-700 rounded "
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;
