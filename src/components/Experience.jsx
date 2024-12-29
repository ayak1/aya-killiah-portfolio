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
<div className="w-full -mt-1 from_darkPink_to_lightPink" id='Experience'>
      <h2 className="pt-10 text-4xl font-bold text-center text-white">
          Experience
      </h2>
      <div className="container grid items-start grid-cols-1 gap-6 py-10">
      {experiences.map((experience, index) => (
        <div key={index} className="flex flex-col gap-5">
            <p className='text-2xl font-semibold text-bgColor md:text-xl sm:text-lg'>{experience.company}-{experience.position}</p>
            <ul className='ml-10 text-lg font-semibold leading-7 list-disc text-lightGray md:text-base sm:text-sm'>
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