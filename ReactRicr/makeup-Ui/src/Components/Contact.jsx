import React, { useState } from "react";

const Contact = () => {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const handleClearForm = () => {
    setfullname("");
    setemail("");
    setnumber("");
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      const Api = await fetch("https://jsonplaceholder.typicode.com/posts");
      setTimeout(() => {
        const data = {
          fullname,
          email,
          number,
        };
        console.log(data);
      }, 500);
    } catch (error) {
      console.log(error.message);
    } finally {
      setisLoading(false);
    }
    handleClearForm();
  };
  return (
    <>
      <div className="text-center mt-25 ">
        <h1>Contact Us</h1>
        <div>
          <form onReset={handleClearForm} onSubmit={formSubmit}>
            <div className="flex items-center justify-center gap-2">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="p-2 border border-red-500 w-2xs"
                value={fullname}
                onChange={(e) => setfullname(e.target.value)}
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="flex items-center justify-center gap-2 mt-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 border border-red-500 w-2xs"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="flex items-center justify-center gap-2 mt-1">
              <label htmlFor="number">Number</label>
              <input
                type="text"
                name="number"
                id="number"
                className="p-2 border border-red-500 w-2xs"
                value={number}
                onChange={(e) => setnumber(e.target.value)}
                placeholder="Enter Number"
                required
              />
            </div>
            <div className="flex items-center justify-center gap-5">
              <button
                type="submit"
                className="border w-2.5xl p-2 mt-1.5 rounded text-blue-500"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
              <button
                type="reset"
                className="border w-2.5xl p-2 mt-1.5 rounded text-blue-500"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
