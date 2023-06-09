import React from 'react'
import { FaFacebookSquare, FaPinterest, FaTwitter, FaInstagram } from 'react-icons/fa'


function Footer() {
    return (
        <footer className='bg-[#458c7e] flex text-center justify-center text-white'>
            <div>
                <h3 className='font-bold text-3xl m-[2rem]'>sunnyside</h3>
                <ul className='flex my-[2rem]'>
                    <li><a className='mx-[1rem]' href="#">About</a></li>
                    <li><a className='mx-[1rem]' href="#">Service</a></li>
                    <li><a className='mx-[1rem]' href="#">Project</a></li>
                </ul>
                <ul className='grid grid-cols-4 mb-[2rem] place-items-center'>
                    <li><a className='mx-[1rem]' href="#"><FaFacebookSquare /></a></li>
                    <li><a className='mx-[1rem]' href="#"><FaInstagram /></a></li>
                    <li><a className='mx-[1rem]' href="#"><FaTwitter /></a></li>
                    <li><a className='mx-[1rem]' href="#"><FaPinterest /></a></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer