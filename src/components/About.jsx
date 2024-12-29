import React from "react";

const About = () => {
  return (
    <div className="w-full" id="About">
      <h2 className="pt-10 text-4xl font-bold text-center text-lightBlack">
        About Me
      </h2>
      <div className="container grid grid-cols-1 gap-10 py-10 md:grid-cols-2 place-items-center">
        {/* About Text */}
        <div className="flex flex-col gap-6 text-xl font-medium">
          <p className="leading-7 text-primaryGray">
            Hi, I’m Aya Killiah, a web developer with a degree in Computer Engineering and Automatic Control. Since graduating, I’ve worked on a variety of projects that have helped me grow in both front-end and back-end development.
          </p>
          <p className="leading-7 text-primaryGray">
            I’m passionate about building user-friendly, responsive web interfaces. I have experience with tools like React.js, Vue.js, and Laravel, and I’m always looking to learn new technologies. My design skills in Figma help me create visually appealing layouts that enhance user experiences.
          </p>
          <p className="leading-7 text-primaryGray">
            I’m excited to continue learning and contributing to web development projects. Whether it's building dynamic applications or collaborating with a team, I’m ready to bring fresh ideas and dedication to every project I work on.
          </p>
        </div>

        {/* About Image */}
        <div className="w-full h-full">
          <img 
            src="images/img2.jpg" 
            alt="A professional photo of Aya Killiah, a junior web developer" 
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
