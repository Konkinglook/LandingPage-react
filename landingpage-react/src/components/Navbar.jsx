import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-col md:flex-row lg:flex-row justify-between px-[10rem] py-[3rem]'>
        <div className="logo" >
          <a href="#" className='font-bold text-white text-3xl'>sunnyside</a>
        </div>
        <ul className="menu flex flex-col md:flex-row lg:flex-row items-center text-white">
          <li className='mx-[40px] my-[10px]'><a href="#">About</a></li>
          <li className='mx-[40px] my-[10px]'><a href="#">Services</a></li>
          <li className='mx-[40px] my-[10px]'><a href="#">Porjects</a></li>
          <li className='mx-[40px] my-[10px] flex justify-center items-center bg-white w-[100px] h-[50px] text-black rounded-full'><a href="#">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar