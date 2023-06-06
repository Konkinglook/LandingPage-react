import React from 'react'
import Emily from '../assets/img/Emily.avif'
import Tom from '../assets/img/Tom.avif'
import Jennie from '../assets/img/Jennie.avif'


const userData = [
    {
        img:Emily,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore ipsam neque distinctio illo hic rerum non ullam ut et!',
        name:'Emily R.',
        position:'Marketing Director'
    },
    {
        img:Tom,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore ipsam neque distinctio illo hic rerum non ullam ut et!',
        name:'Tom S.',
        position:'Chief Operating Officer'
    },
    {
        img: Jennie,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore ipsam neque distinctio illo hic rerum non ullam ut et!',
        name:'Jennie F.',
        position:'Business Owner'
    }
]

function Review() {
  return (
    <div className='text-center py-[7rem] px-[5rem]'>
        <h3 className='uppercase text-3xl py-[5rem]'>Client Testimoials</h3>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-[5rem]'>
            {userData.map((data,key)=>(
                <div key={data.name} className='text-center'>
                    <img className='h-[200px] w-[200px] inline-block rounded-full' src={data.img} alt={data.name} />
                    <p className='py-[3rem] font-bold'>{data.content}</p>
                    <h4 className='font-bold'>{data.name}</h4>
                    <p className='text-slate-400'>{data.position}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Review