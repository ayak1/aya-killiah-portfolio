import React from "react";
import CardProject from "./CardProject";

const Projects = () => {
  const projects = [
    {
      image: "asila-cover.png",
      title: "ASILA Tourism Website",
      description:
        "A professional tourism website with a clean and responsive design, built to showcase various travel destinations and services.",
      repoLink: "https://github.com/ayak1/ASILA",
      demoLink: "https://ayak1.github.io/ASILA",
    },
    {
      image: "ican_landing_cover.png",
      title: "ICAN Landing Page",
      description:
        "A professional landing page designed for a technical solutions company, focusing on cross-browser compatibility and responsive design. Created using React.js with a clean, corporate look.",
      repoLink: "https://github.com/ayak1/ICAN_landing_page",
      demoLink: "https://ayak1.github.io/ICAN_landing_page/",
    },
    {
      image: "focalX-records-web-app-cover.png",
      title: "FocalX Records Web App",
      description:
        "An application for managing records, built to emphasize functionality and ease of use. Developed using Vue.js and Laravel to handle backend data management.",
      repoLink: "https://github.com/ayak1/focalX-records-web-app",
      demoLink: "https://ayak1.github.io/focalX-records-web-app/",
    },
    {
      image: "alaa_darwish_portfolio_cover.png",
      title: "Portfolio",
      description:"A personalized portfolio website for Mr. Alaa Darwish, developed to match the design exactly with great attention to detail.",
      repoLink: "https://github.com/ayak1/focalX-portfolio_alaa_darwish",
      demoLink: "https://ayak1.github.io/focalX-portfolio_alaa_darwish/",
    },
    {
      image: "uae_id_card_extractor.png",
      title: "UAE ID Card Extractor",
      description:
        "The UAE ID Card Extractor is a React component that uses Optical Character Recognition (OCR) to extract and display information from UAE ID cards. This component leverages Tesseract.js to perform OCR on uploaded images, processes the extracted text to identify and clean relevant information, and presents it in an editable form",
      repoLink: "https://github.com/ayak1/aya_killiah_assignment",
      demoLink: "https://ayak1.github.io/aya_killiah_assignment/",
    },
    {
      image: "3d-space-cover.png",
      title: "3D Space Hero",
      description:
        "An immersive, space-themed 3D application built with React.js, Vite, and Tailwind CSS. It provides interactive animations and a visually captivating experience.",
      repoLink: "https://github.com/ayak1/3D-Space-Hero",
      demoLink: "https://ayak1.github.io/3D-Space-Hero/",
    },
    {
      image: "cookies-project-cover.png",
      title: "Cookie Shop Landing Page",
      description:
        "A visually appealing landing page for a cookie shop, created using React.js, Vite, and Tailwind CSS. The project showcases a clean, inviting interface with responsive design.",
      repoLink: "https://github.com/ayak1/Cookie-Shop-Landing-Page",
      demoLink: "https://ayak1.github.io/Cookie-Shop-Landing-Page/",
    },
    {
      image: "car-hero-cover.png",
      title: "Car Hero",
      description:
        "A responsive, car-themed web application that features interactive animations for a smooth user experience. Built using React.js and AOS for seamless transitions.",
      repoLink: "https://github.com/ayak1/Car-Hero",
      demoLink: "https://ayak1.github.io/Car-Hero/",
    },
    
    // {
    //   image: "meals_menu.png",
    //   title: "Meals Menu",
    //   description:
    //     "A user-friendly meal menu app built with Vue.js and Vite, offering smooth navigation and intuitive meal selection with a clear, structured layout.",
    //   repoLink: "https://github.com/ayak1/meals-menu",
    //   demoLink: "https://ayak1.github.io/meals-menu/",
    // },
    
    // {
    //   image: "simple_calculator.png",
    //   title: "Simple Calculator",
    //   description:
    //     "A minimalist calculator created with Vue.js and Vite, focusing on basic functionality and clean design, demonstrating fundamental JavaScript operations and UI components.",
    //   repoLink: "https://github.com/ayak1/vite-vueJS_simple-calculator",
    //   demoLink: "https://simple-calculator-demo.com",
    // },
    // {
    //   image: "donate_take_blood_api.png",
    //   title: "Donate-Take Blood API",
    //   description:
    //     "An API developed using Laravel to facilitate blood donations, designed with RESTful principles and efficient data handling in mind.",
    //   repoLink: "https://github.com/ayak1/donate-take-BloodApi-laravel",
    //   demoLink: "https://donate-take-blood-api.com",
    // },
    
  ];

  return (
    <div className="w-full bg-darkPink " id="Projects">
      <h2 className="pt-10 text-4xl font-bold text-center text-white">
        My Projects
      </h2>
      <div className="container grid items-start grid-cols-1 gap-10 py-10 place-items-center projects_ md:grid-cols-3 sm:grid-cols-2 ">
        {projects.map((project, index) => (
            <div key={index} className="relative group">
              <CardProject
                image={project.image}
                title={project.title}
                description={project.description}
                repoLink={project.repoLink}
                demoLink={project.demoLink}
              />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
