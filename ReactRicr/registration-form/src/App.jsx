import React, { useState } from "react";

const App = () => {
  const [SubmitRegistrationForm, setSubmitRegistrationForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    dob: "",
    State: "",
    District: "",
    gender: "",
    address: "",
  });

  const [isLoading, setisLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmitRegistrationForm((prev) => ({ ...prev, [name]: value }));
  };
  const ClearForm = () => {
    setSubmitRegistrationForm({
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      dob: "",
      State: "",
      District: "",
      gender: "",
      address: "",
    });
  };

  const SubmitData = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      console.log(SubmitRegistrationForm);
    } catch (error) {
      console.log(error.message);
    } finally {
      setisLoading(false);
    }
    ClearForm();
  };
  return (
    <>
      <div>
        <div className="container border w-200 h-160 border-blue-300 flex mx-auto mt-15 rounded-2xl shadow-lg">
        <form onSubmit={SubmitData} onReset={ClearForm}>
          <h4 className="ps-60 mt-1.5 text-2xl">Registration Form</h4>
          <div  className="flex gap-5 justify-center mt-3 ms-5">
            <div >
              <label htmlFor="firstname" className="text-2xl p-3 mt-1">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={SubmitRegistrationForm.firstname}
                onChange={handleChange}
                placeholder="Enter your First Name"
                className="border p-1 mt-2 w-90 rounded-[7px] border-blue-400 shadow-lg"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="text-2xl p-3 mt-1" >Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={SubmitRegistrationForm.lastname}
                onChange={handleChange}
                placeholder="Enter your Last Name"
                className="border p-1 mt-2 w-90 rounded-[7px] border-blue-400 shadow-lg"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-xl p-3 mt-1 ms-5">Enter Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={SubmitRegistrationForm.email}
              onChange={handleChange}
              placeholder="Enter Your Mail"
              className="border p-1 mt-8 w-160 rounded-[7px] border-blue-400 shadow-lg"
            />
          </div>
          <div>
            <label htmlFor="number"className="text-xl p-3 mt-1" >Your Number</label>
            <input
              type="number"
              name="number"
              id="number"className="border p-1 mt-8 w-160 rounded-[7px] border-blue-400 shadow-lg"
              value={SubmitRegistrationForm.number}
              onChange={handleChange}
              placeholder="Enter Your Number"
            />
          </div>
          <div>
            <label htmlFor="dob" className="text-xl p-3 mt-1">Date-Of-Birth</label>
            <input
              type="date"
              name="dob"
              id="dob"
              className="border p-1 mt-8 w-160 rounded-[7px] border-blue-400 shadow-lg"
              value={SubmitRegistrationForm.dob}
              onChange={handleChange}
              placeholder="Date Of Brith"
            />
          </div>
          <div className="flex gap-2 justify-center mt-3">
            <div className="me-25">
              <label htmlFor="State" className="text-xl me-4">State</label>
              <select
                name="State"
                id="State"
                className="border p-1 mt-8 w-60 rounded-[7px] border-blue-400 shadow-lg"
                value={SubmitRegistrationForm.State}
                onChange={handleChange}
              >
                <option value="--Select--"></option>
                <option value="Madhya-Pradesh">Madhya-Pradesh</option>
                <option value="Bihar">Bihar</option>
                <option value="Uttar-Pradesh">Uttar-Pradesh</option>
                <option value="Delhi">Delhi</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Jammu-Kashmir">Jammu-Kashmir</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="District" className="text-xl me-5">District</label>
              <select
                name="District"
                id="District"
                className="border p-1 mt-8 w-60 rounded-[7px] border-blue-400 shadow-lg"
                value={SubmitRegistrationForm.District}
                onChange={handleChange}
              >
                <option value="--Select--"></option>
                <option value="Bhopal">Bhopal</option>
                <option value="Reeva">Reeva</option>
                <option value="Morena">Morena</option>
                <option value="Sheopur">Sheopur</option>
                <option value="Shivpuri">Shivpuri</option>
                <option value="Indore">Indore</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="flex gap-5 mt-8">
              <label htmlFor="gender" className="text-2xl ms-8 ">Gender</label>
              <input
                type="radio"
                name="gender"
                value="male"
                className="w-5"
                onChange={handleChange}
                checked={SubmitRegistrationForm.gender === "male"}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                className="w-5"
                onChange={handleChange}
                checked={SubmitRegistrationForm.gender === "female"}
              />{" "}
              Female
              <input
                type="radio"
                name="gender"
                className="w-5"
                value="other"
                onChange={handleChange}
                checked={SubmitRegistrationForm.gender === "other"}
              />{" "}
              Other
            </div>

          <div className="flex mt-1 gap-8">
            <div className="text-2xl mt-1 ms-8"><label htmlFor="Address">Address</label></div>
           <div> <textarea
              name="address"
              id="address"
               className="border p-1 mt-2 w-150 rounded-[7px] border-blue-400 shadow-lg" 
              value={SubmitRegistrationForm.address}
              onChange={handleChange}
            ></textarea></div>
          </div>
          <div className="flex gap-5 justify-center mt-5 mb-5">
            <button type="submit" className="border p-3 rounded-2xl text-blue-300 border-blue-500 hover:border-amber-200 shadow-lg">Submit Data</button>
            <button type="reset" className="border p-3 rounded-2xl text-blue-300 border-blue-500 hover:border-amber-200 shadow-lg">Reset Data</button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default App;
