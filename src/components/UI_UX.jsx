
import React from 'react';

const UI_UX = () => {
    const projects = [
        {
            image: 'asila-cover.png',
            linkToFigma: '',
        },
        {
            image: 'img2.jpg',
            linkToFigma: '',
        },
        {
            image: 'img1.jpg',
            linkToFigma: '',
        },
    ];

    return (
        <div className="w-full px-4 py-10 -mt-1 from_lightPink_to_darkPink" id='UI_UX'>
            <div className='container'>
            <h2 className="mb-10 text-4xl font-bold text-center text-white">UI & UX</h2>
            <div className="flex flex-col items-start gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`relative z-10 w-[70%] h-64 shadow-lg rounded group  ui_image ${
                            index % 2 === 0 ? 'self-start' : 'self-end'
                        }`}
                    >
                        <img
                            src={`images/${project.image}`}
                            alt="project cover"
                            className="absolute z-10 object-cover w-full h-full bg-white ui_image"
                        />
                        {/* Link that slides in from underneath based on position */}
                        <a
                            href={project.linkToFigma}
                            target="_blank"
                            rel=""
                            className={` ${
                                index % 2 === 0
                                    ? 'right-0 translate-x-0 group-hover:translate-x-full rounded-r-md'
                                    : 'left-0 translate-x-full group-hover:-translate-x-full rounded-l-md'
                            } absolute  w-[90px] mt-[60px] transition-transform duration-300  bg-darkGray link_to_figma text-lightPink text-base font-medium py-4 px-4`}
                        >
                        
                            View Full Project on Figma
                        </a>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default UI_UX;
