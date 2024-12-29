import React from "react";

const CardProject = ({
  image,
  title,
  description,
  repoLink,
  demoLink,
}) => {
  return (
    <div className="relative z-10 group flex flex-col items-center ">
      {/* Card Content */}
      <div className="projectCard bg-bgColor flex items-center cursor-default flex-col gap-6 border">
        <img
          src={`/images/${image}`}
          alt="project cover"
          className="w-full h-[188px]"
        />
        <h3 className="text-lightBlack text-center font-bold text-2xl lg:text-2xl md:text-xl">
          {title}
        </h3>
        <p className="text-sm md:text-base  leading-6 px-5 mb-10 md:mb-8 sm:mb-5 line-clamp-5 md:line-clamp-4">{description}</p>
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
