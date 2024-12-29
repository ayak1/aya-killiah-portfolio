import React from "react";

const About = () => {
  return (
    <div className="w-full " id="About">
      <h2 className="font-bold text-4xl text-lightBlack pt-10 text-center">
        About Me
      </h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 py-10 gap-10 place-items-center">
        <div className="content flex flex-col gap-3 text-xl font-medium">
        <p className="text-primaryGray leading-7">
          I'm Aya Killiah, a passionate web developer with a degree in Computer
          Engineering and Automatic Control. Since graduating, I’ve worked on
          various projects and gained hands-on experience in front-end and
          back-end development. I enjoy creating user-friendly, responsive web
          interfaces and am skilled in using tools like React.js, Vue.js, and
          Laravel. My experience includes working with design tools like Figma
          to ensure smooth, visually appealing layouts.
        </p>
        <p className="text-primaryGray leading-7">
          I'm always eager to learn new technologies and improve my skills, and
          I’m ready to bring fresh ideas and dedication to a professional team.
          Whether it's building dynamic applications or collaborating with a
          team to deliver high-quality results, I’m excited to keep growing and
          contribute meaningfully to web development projects.
        </p>
        </div>
        <div className="img w-full h-full">
          <img src="/images/img2.jpg" alt="" className="object-cover w-[100%] h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default About;
