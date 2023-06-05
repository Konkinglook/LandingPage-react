import React from 'react'
import imgStandOut from '../assets/img/image-stand-out.jpg'


function SectionsTwo() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='left row-start-1 row-end-3 '>
            <div>
                <img className='w-full' src={imgStandOut} alt="Stand out" />
            </div>
        </div>
        <div className='right flex justify-center items-center p-[5rem] row-stat-1 ron-end-2 lg:row-start-2 row-end-3 '>
            <div>
                <h3 className='text-5xl' >Stand out to the right audience</h3>
                <p className='text-gray-500 my-[5rem]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur veritatis officiis nihil deserunt, omnis ea. Consequuntur in vel magni.</p>
                <a className='border-b-4 border-b-pink-500 ' href="#">Learn More</a>
            </div>
        </div>
    </div>
  )
}

export default SectionsTwo