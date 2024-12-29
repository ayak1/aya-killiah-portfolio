import React from 'react'
import CardsSlider from './CardsSlider'

const Certificates = () => {
  return (
    <div className='w-full -mt-1 from_darkPink_to_darkGray' id='Certificates'>
        <h2 className="pt-10 text-4xl font-bold text-center text-white ">
            Certificates
        </h2>
        <div className='py-10'>
            <CardsSlider/>
        </div>
    </div>
  )
}

export default Certificates