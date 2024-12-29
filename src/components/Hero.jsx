import React from "react";

const Hero = () => {
  return (
    <div className="w-full mt-20 bg-gradient-to-b from-darkPink to-primaryPink">
      <div className="container grid grid-cols-1 gap-32 py-10 md:grid-cols-2 place-items-center">
        <div className="flex flex-col gap-10 content">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold text-white">
              Hello, I’m Aya Killiah. I’m a Web Developer who builds clean,
              interactive websites and web apps.
            </h1>
            <p className="text-2xl font-medium text-lightGray">
              I specialize in both front-end and back-end development, and I’m
              passionate about creating seamless user experiences.
            </p>
          </div>
          <a href="#Projects" className="px-6 py-4 text-xl font-bold text-white border CTA_button font-custom bg-secondaryPink border-darkOpacityPink rounded-2xl w-fit">
            See My Work
          </a>
        </div>
        <div className="w-full h-[400px] md:h-[350px]">
          <img src="images/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg" alt="" className="object-cover w-[100%] h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
