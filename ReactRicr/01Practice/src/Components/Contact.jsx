import React, { useState } from "react";

const Contact = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [dob, setdob] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const ClearForm = () => {
    setfirstname("");
    setlastname("");
    setemail("");
    setnumber("");
    setdob("");
  };

  const Submitform = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      setTimeout(() => {
        const data = {
          firstname,
          lastname,
          email,
          number,
          dob,
        };
        console.log(data);
      }, 1000);
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
        <form onReset={ClearForm} onSubmit={Submitform}>
          <div className="flex items-center justify-center mt-5 gap-3.5">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstname}
              onChange={(e) =>setfirstname(e.target.value)}
              placeholder="Enter First Name"
              className=" py-3 px-5 rounded-md border-red-500 text-black"
            />
          </div>
          <div className="flex items-center justify-center mt-5 gap-3.5">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
              placeholder="Enter Last Name"
              className="w-[350px] h-6 pt-4 rounded-md border-red-500 text-emerald-300"
            />
          </div>
          <div className="flex items-center justify-center mt-5 gap-3.5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>setemail( e.target.value)}
              value={email}
              placeholder="Enter Email"
              className="w-[350px] h-6 pt-4 rounded-md border-red-500 text-emerald-300"
            />
          </div>
          <div className="flex items-center justify-center mt-5 gap-3.5">
            <label htmlFor="number">Number</label>
            <input
              type="number"
              name="number"
              id="number"
              onChange={(e) =>setnumber( e.target.value)}
              value={number}
              placeholder="Enter Number"
              className="w-[350px] h-6 pt-4 rounded-md border-red-500 text-emerald-300"
            />
          </div>
          <div className="flex items-center justify-center mt-5 gap-3.5">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={dob}
              onChange={(e) => setdob(e.target.value)}
              placeholder="Enter Date of Birth"
              className="w-[350px] h-6 pt-4 rounded-md border-red-500 text-emerald-300"
            />
          </div>
          <div className="flex items-center justify-center mt-5 gap-3.5">
            <button
              type="submit"
              className="w-24 h-9 bg-red-400 rounded text-blue-800 border-none"
            >
              Submit
            </button>
            <button
              type="reset"
              className="w-24 h-9 bg-red-400 rounded text-blue-800 border-none"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
