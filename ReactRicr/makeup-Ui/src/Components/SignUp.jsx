import React, { useState } from "react";

const SignUp = () => {
    const [fullname , setfullname] = useState("");
    const [email , setemail] = useState("");
    const [number , setnumber] = useState("");

    const SubmitData = (e) =>{
        e.preventDefault();
        const data = {
            fullname,
            email, 
            number,
        }
        console.log(data);
        setfullname("");
        setemail("");
        setnumber("");
    }
  return (
    <>
      <div>
        <h1 className="flex justify-center items-center mt-8">Login Page</h1>
        <form onSubmit={SubmitData}>
          <div className="mt-7 flex justify-center items-center gap-3.5 ">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={fullname}
              onChange={(e) =>setfullname(e.target.value)}
              placeholder="Enter First Name"
              className="border border-r-blue-300 py-1 px-3"
            />
          </div>
          <div className="mt-2 flex justify-center items-center gap-3.5 ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=>{ setemail(e.target.value)}}
              placeholder="Enter First Email"
              className="border border-r-blue-300 py-1 px-3"
            />
          </div>
          <div className="mt-2 flex justify-center items-center gap-3.5 ">
            <label htmlFor="number">Phone Number</label>
            <input
              type="number"
              name="number"
              id="number"
              value={number}
              onChange={(e)=>{setnumber(e.target.value)}}
              placeholder="Enter First Number"
              className="border border-r-blue-300 py-1 px-3"

            />
          </div>
          <div className="flex justify-center items-center mt-2.5 rounded">
            <button className="border-none w-1xl px-3 py-1.5 bg-amber-500 rounded-8">Login Now</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
