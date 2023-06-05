import React from 'react'
import Navbar from './Navbar'
import {FaLongArrowAltDown} from 'react-icons/fa'

function Header() {
  return (
    <div className='h-[43rem] border bg-gradient-to-r from-cyan-500 to-blue-500 bg-header bg-cover bg-center text-center'>
        <Navbar/>
        <h1 className='text-6xl font-bold  text-white uppercase place-items-center items-center'>We are creativrs</h1>
        <div className='flex justify-center mt-[50px]'>
          <FaLongArrowAltDown className='text-white text-8xl'/>
        </div>
    </div>
  )
}

export default Header