import React, { useState } from "react";

const Navbar = () => {
  const sections =[
    {
      title: "About",
      href:"#About"
    },
    {
      title: "Projects",
      href:"#Projects"
    },
    {
      title: "Skills",
      href: "#Skills"
    },
    {
      title: "Experience",
      href: "#Experience"
    },
    {
      title: "Certificates",
      href: "#Certificates"
     },
     {
      title: "UI & UX",
      href: "#UI&UX"
    },
    {
      title: "Contact",
      href: "#Contact"
    } 
  ]
  const [activeLink, setActiveLink] = useState("About");
  const [toggle, setToggle] = useState(false);
  const handleClick = (section) => {
    setActiveLink(section);
    setToggle(false);
  };
 const toggleNavbar=(() => {
    setToggle(!toggle);
  });
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-darkGray">
      <div className="container flex justify-between py-6 text-white">
        <div>
          <h1 className="container text-2xl font-bold">Aya Killiah</h1>
        </div>
        <button onClick={toggleNavbar} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
          <ul className="flex gap-5">
          {sections.map((section) => (
              <li key={section}>
                <a
                  onClick={() => handleClick(section.title)}
                  className={`hover:text-lightPink transition-colors duration-200 text-lg font-semibold ${
                    activeLink === section.title ? "text-lightPink" : ""
                  }`}
                  href={section.href}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
        <ul className={toggle==true?"w-full flex lg:hidden text-center text-white flex-col pb-4 gap-3":"hidden"}>
            {sections.map((section) => (
              <li key={section}>
                <a
                  onClick={() => handleClick(section.title)}
                  className={`hover:text-lightPink transition-colors duration-200 text-lg font-semibold ${
                    activeLink === section.title ? "text-lightPink" : ""
                  }`}
                  href={section.href}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
    </nav>
  );
};

export default Navbar;
