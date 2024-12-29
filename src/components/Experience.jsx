import React from 'react'

const Experience = () => {
  const experiences = [
    {
      company: "ASILA Tourism",
      position: "Full Stack Developer / Ui & Ux",
      responsibilities: ["Designed user-friendly interfaces with Figma.","Developed front-end with Nuxt.js and back-end with Laravel for optimal user experience."]
    },
    {
      company: "Focal X Agency",
      position: "Full Stack Developer / Supervisor",
      responsibilities: ["Led and mentored a team of interns, providing guidance on web development practices.","Implemented UI designs into functional web pages, ensuring quality and alignment with project goals."]
    },
    {
      company: "Maak-Al Bot",
      position: "Web Development Intern",
      responsibilities: ["Assisted in developing web applications with Laravel and React.js.","Participated in code reviews and troubleshooting, gaining hands-on industry experience."]
    },
  ]
  return (
<div className="w-full linear_darkPink_to_lightPink -mt-1" id='Experience'>
      <h2 className="font-bold text-4xl text-white pt-10 text-center">
          Experience
      </h2>
      <div className="container grid grid-cols-1 py-10 gap-6 items-start">
      {experiences.map((experience, index) => (
        <div key={index} className="flex flex-col gap-5">
            <p className='text-bgColor font-semibold text-2xl md:text-xl sm:text-lg'>{experience.company}-{experience.position}</p>
            <ul className='text-lightGray font-semibold text-lg md:text-base sm:text-sm list-disc leading-7 ml-10'>
                {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
        </div>
      ))}
      </div>
    </div>  )
}

export default Experience