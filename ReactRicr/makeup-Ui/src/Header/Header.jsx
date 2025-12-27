
import React from 'react'

const Header = () => {
  return (
    
      <>
      <div className='flex justify-between  text-2xl bg-pink-300 p-2'>
        <div>
            Makeup UI
        </div>
        <div className='flex gap-6 me-7.5'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
        </div>
      </div>
      </>
  )
}

export default Header
