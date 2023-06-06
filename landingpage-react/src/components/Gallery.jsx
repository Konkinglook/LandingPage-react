import React from 'react'
import imgMike from '../assets/img/image-gallery-milkbottles.jpg'
import imgOrange from '../assets/img/image-gallery-orange.jpg'
import imgSugar from '../assets/img/image-gallery-sugarcubes.jpg'
import imgCone from '../assets/img/image-gallery-cone.jpg'


function Gallery() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <img src={imgMike} alt="Mike" />
        <img src={imgOrange} alt="Orange" />
        <img src={imgCone} alt="Cone" />
        <img src={imgSugar} alt="Sugar" />
    </div>
  )
}

export default Gallery