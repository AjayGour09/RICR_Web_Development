
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
      <>
      <div className='flex justify-between  text-2xl bg-pink-300 p-2 position-fixed w-full top-0 scrollbar-hide'>
        <div>
            Makeup UI
        </div>
        <div className='flex gap-6 me-7.5'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
            <Link to="/Login">Login</Link>
            <Link to="/SignUp">SignUp</Link>
        </div>
      </div>
      </>
  );
};

export default Header;
