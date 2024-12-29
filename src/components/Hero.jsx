import React from "react";

const Hero = () => {
  return (
    <div className="w-full mt-20 bg-gradient-to-b from-darkPink to-primaryPink">
      <div className="container grid grid-cols-1 gap-16 py-10 md:grid-cols-2 md:gap-28 place-items-center">
        {/* Hero Content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Hi, I’m Aya Killiah. A Junior Web Developer passionate about building clean, interactive websites.
            </h1>
            <p className="text-lg font-medium text-lightGray md:text-2xl">
              I focus on front-end and back-end development to create seamless user experiences.
            </p>
          </div>
          <a href="#Projects" className="px-6 py-4 text-xl font-bold text-white border CTA_button font-custom bg-secondaryPink border-darkOpacityPink rounded-2xl w-fit hover:scale-105">
            See My Work
          </a>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[300px] md:h-[350px]">
          <img 
            src="images/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg" 
            alt="Web development workspace with a laptop" 
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
