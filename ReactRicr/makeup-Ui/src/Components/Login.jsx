import React, { useState } from "react";

const Login = () => {
    const [fullname , setfullname] = useState("");
    const [email , setemail] = useState("");
    const [password , setpassword] = useState("");

    const SubmitData = (e) =>{
        e.preventDefault();
        const data = {
            fullname,
            email, 
            password,
        }
        console.log(data);
        setfullname("");
        setemail("");
        setpassword("");
    }
  return (
    <>
      <div>
        <h1>Login Page</h1>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
              placeholder="Enter First Password"
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

export default Login;
