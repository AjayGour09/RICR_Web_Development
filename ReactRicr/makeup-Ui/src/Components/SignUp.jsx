import React, { useState } from "react";

const SignUp = () => {
    const [SignUpData , setSignUpData] = useState({
      fullname : "",
      email :"",
      number :"",
      region:"",
    });
    const [isLoading , setisLoading] = useState(false);

    const handleChange = (e)=>
    {
      const {name , value} = e.target;
      setSignUpData((previousdata)=>({...previousdata , [name]: value}))
    };
    const handleClearform = ()=>{
      setSignUpData({
        fullname:"",
        email :"",
        number :"",
        region :"",
      })
    };
    const SubmitData =async (e)=>{
      e.preventDefault();
      setisLoading(true);
      try {
        console.log(SignUpData);
        
      } catch (error) {
        console.log(error.message);
        
      }finally{
        setisLoading(false);
      }
      handleClearform();
    }
  return (
    <>
      <div className="border  w-125 h-100 mx-auto mt-20 rounded-lg shadow-lg p-5">
        <h1 className="flex justify-center items-center text-2xl text-blue-400">Login Page</h1>
        <form onReset={handleClearform} onSubmit={SubmitData}>
          <div className="mt-7 flex justify-center items-center gap-3.5 ">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={SignUpData.fullname}
              onChange={handleChange}
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
              value={SignUpData.email}
              onChange={handleChange}
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
              value={SignUpData.number}
              onChange={handleChange}
              placeholder="Enter First Number"
              className="border border-r-blue-300 py-1 px-3"
            />
          </div> 
          <div className="mt-2 flex justify-center items-center gap-3.5 ">
            <select name="region" id="region" value={SignUpData.region} onChange={handleChange}>
              <option value="">Select Region</option>
              <option value="north america">India</option>
              <option value="south america">South Africa</option>
              <option value="europe">Europe</option>
              <option value="asia">Asia</option>
              <option value="australia">Australia</option>
            </select>
          </div> 
          <div className="flex justify-center items-center mt-2.5 rounded gap-2.5 ">
            <button type="submit" className="border-none w-1xl px-3 py-1.5 bg-amber-500 rounded-8">Login Now</button>
            <button type="reset" className="border-none w-1xl px-3 py-1.5 bg-red-800 rounded-xl text-amber-50">Reset Data</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
