import React from 'react'
import imgTransform from '../assets/img/image-transform.jpg'

function SectionsOne() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='left p-[5rem] flex justify-center items-center'>
          <div>
            <h3 className='text-5xl' >Transfrom your brand</h3>
            <p className='text-gray-500 my-[5rem]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur veritatis officiis nihil deserunt, omnis ea. Consequuntur in vel magni.</p>
            <a className='border-b-4 border-b-yellow-500 ' href="#">Learn More</a>
          </div>
        </div>
        <div className='right'>
          <img className='w-full' src={imgTransform} alt="Transfrom your brand" />
        </div>
    </div>
  )
}

export default SectionsOne