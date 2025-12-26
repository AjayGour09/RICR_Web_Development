import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <>
     
      <div className="bg-info text-white d-flex justify-content-around align-items-center p-3">
        <div className="d-flex gap-3">
            <Link to={"/"} className="text-decoration-none">Home</Link>
            <Link to={"/About"}>About</Link>
            <Link to={"/Contact"}>Contact</Link>
            <Link to={"/Product"}>Services</Link>
        </div>
      </div>
    </>
  );
};
export default Header;
