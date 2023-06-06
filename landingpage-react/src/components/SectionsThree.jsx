import React from 'react'

function SectionsThree() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='left h-[500px] bg-sec-three-left bg-cover bg-center flex justify-center items-end  p-[2rem] lg:px-[10rem] lg:pb-[5rem]'>
        <div> 
            <h3 className='text-center text-bold text-5xl mb-4'>
              Graphic Design
            </h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates mollitia soluta temporibus aut? Incidunt ducimus iusto itaque voluptatibus. Modi.
            </p>
        </div>
      </div>
      <div className='right h-[500px] bg-sec-three-right bg-cover bg-center flex justify-center items-end  p-[2rem] lg:px-[10rem] lg:pb-[5rem]'>
        <div>
          <h3 className='text-center text-bold text-5xl mb-4'>
              Photography
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed animi illum explicabo, officiis dolores culpa velit perferendis et pariatur!
            </p>
        </div>
      </div>
    </div>
  )
}

export default SectionsThree