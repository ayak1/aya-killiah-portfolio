
import React from 'react';

const UI_UX = () => {
    const projects = [
        {
            image: 'img1.jpg',
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
        <div className="linear_lightPink_to_darkPink py-10 px-4 w-full -mt-1" id='UI&UX'>
            <div className='container'>
            <h2 className="font-bold text-4xl text-white text-center mb-10">UI & UX</h2>
            <div className="flex flex-col items-start gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`relative z-10 w-[70%] h-64 bg-white shadow-lg rounded group  ui_image ${
                            index % 2 === 0 ? 'self-start' : 'self-end'
                        }`}
                    >
                        {/* Link that slides in from underneath based on position */}
                        <a
                            href={project.linkToFigma}
                            target="_blank"
                            rel=""
                            className={` ${
                                index % 2 === 0
                                    ? 'right-0 translate-x-0 group-hover:translate-x-full rounded-r-md'
                                    : 'left-0 translate-x-full group-hover:-translate-x-full rounded-l-md'
                            } absolute z-0 w-[90px] mt-[60px] transition-transform duration-300  bg-darkGray link_to_figma text-lightPink text-base font-medium py-4 px-4`}
                        >
                        
                            View Full Project on Figma
                        </a>
                        <img
                            src={`/images/${project.image}`}
                            alt="project cover"
                            className="w-full h-full object-cover absolute z-10  ui_image"
                        />
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default UI_UX;
