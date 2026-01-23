import React, { useState, useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from  "../../../config/Api.jsx"
const EditProfileModal = ({ onClose }) => {
  const { user } = useAuth();

  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  
  useEffect(() => {
    if (user) {
      setFullName(user.fullName || "");
      setMobileNumber(user.mobileNumber || "");
    }
  }, [user]);

  const handleSave =async (e) => {
    e.preventDefault();
    console.log("Updated Data:", { fullName, mobileNumber });
    onClose();

    try {
      const res = await api.put("/user/update",FormData)
    } catch (error) {
      console.log(error);
      
    }finally{
      onClose();
    }
  };



  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-[500px] rounded">

        <h2 className="text-xl mb-4">Edit Profile</h2>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border w-full px-2 py-1"
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            value={user?.email || ""}
            disabled
            className="border w-full px-2 py-1 bg-gray-100"
          />
        </div>

       
        <div className="mb-4">
          <label>Phone</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="border w-full px-2 py-1"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="border px-4 py-1">
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-1"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default EditProfileModal;
