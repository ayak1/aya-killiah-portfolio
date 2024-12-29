import React from 'react'

const Skills = () => {
  return (
    <div className="w-full " id='Skills'>
      <h2 className="font-bold text-4xl text-lightBlack pt-10 text-center">
        Skills
      </h2>
      <div className="container grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 py-10 gap-10 place-items-center items-start">
        <div className='flex flex-col gap-5'>
            <p className='text-lightBlack text-2xl font-medium ml-8'>Frontend</p>
            <ul className='text-primaryGray font-semibold text-lg list-disc leading-7'>
                <li>HTML </li>
                <li>CSS</li>
                <li>JavaScript </li>
                <li>React.js </li>
                <li>Vue.js</li>
                <li>Nuxt.js</li>
            </ul>
        </div>
        <div className='flex flex-col gap-5'>
            <p className='text-lightBlack text-2xl font-medium ml-8'>Backend</p>
            <ul className='text-primaryGray font-semibold text-lg list-disc leading-7'>
                <li>PHP </li>
                <li>Laravel</li>
            </ul>
        </div>
        <div className='flex flex-col gap-5'>
            <p className='text-lightBlack text-2xl font-medium ml-8'>UI & UX</p>
            <ul className='text-primaryGray font-semibold text-lg list-disc leading-7'>
                <li>Figma  </li>
                <li>Responsive Design </li>
                <li>Wireframing </li>
            </ul>
        </div>
        <div className='flex flex-col gap-5'>
            <p className='text-lightBlack text-2xl font-medium ml-8'>Other</p>
            <ul className='text-primaryGray font-semibold text-lg list-disc leading-7'>
                <li>Version Control (Git)  </li>
                <li>Teamwork </li>
                <li>Creative Thinking  </li>
                <li>Quick Learning </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills