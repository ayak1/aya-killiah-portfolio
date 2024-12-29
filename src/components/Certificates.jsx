import React from 'react'
import CardsSlider from './CardsSlider'

const Certificates = () => {
  return (
    <div className='linear_darkPink_to_darkGray w-full -mt-1' id='Certificates'>
        <h2 className="font-bold text-4xl text-white pt-10 text-center ">
            Certificates
        </h2>
        <div className='py-10'>
            <CardsSlider/>
        </div>
    </div>
  )
}

export default Certificates