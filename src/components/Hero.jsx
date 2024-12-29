import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-b from-darkPink to-primaryPink mt-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 py-10 gap-32 place-items-center">
        <div className="content flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-5xl text-white">
              Hello, I’m Aya Killiah. I’m a Web Developer who builds clean,
              interactive websites and web apps.
            </h1>
            <p className="text-lightGray font-medium text-2xl">
              I specialize in both front-end and back-end development, and I’m
              passionate about creating seamless user experiences.
            </p>
          </div>
          <button className="CTA_button font-custom bg-secondaryPink border border-darkOpacityPink rounded-2xl w-fit px-6 py-4 font-bold text-xl text-white">
            See My Work
          </button>
        </div>
        <div className="w-full h-[400px] md:h-[350px]">
          <img src="/images/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg" alt="" className="object-cover w-[100%] h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
