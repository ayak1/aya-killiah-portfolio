import React from "react";

const CardProject = ({
  image,
  title,
  description,
  repoLink,
  demoLink,
}) => {
  return (
    <div className="relative z-10 flex flex-col items-center group ">
      {/* Card Content */}
      <div className="flex flex-col items-center gap-6 border cursor-default projectCard bg-bgColor">
        <img
          src={`images/${image}`}
          alt="project cover"
          className="w-full h-[188px]"
        />
        <h3 className="text-2xl font-bold text-center text-lightBlack lg:text-2xl md:text-xl">
          {title}
        </h3>
        <p className="px-5 mb-10 text-sm leading-6 md:text-base md:mb-8 sm:mb-5 line-clamp-5 md:line-clamp-4">{description}</p>
      </div>

      {/* Hover Links - Slide Up on Hover */}
      <div className="rounded-b-xl w-[80%] overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-300 ease-in-out flex items-center">
        <a
        target="_blank"
          href={repoLink}
          className=" cursor-pointer bg-lightPink text-white py-4 w-[50%] text-center rounded-bl-3xl text-lg font-semibold leading-6"
        >
          Repo
        </a>
        <a
         target="_blank"
          href={demoLink}
          className=" cursor-pointer bg-darkGray text-lightPink py-4 w-[50%] text-center rounded-br-3xl text-lg font-semibold leading-6"
        >
          Demo
        </a>
      </div>
    </div>
  );
};

export default CardProject;
