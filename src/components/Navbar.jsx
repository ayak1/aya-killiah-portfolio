import React, { useState, useEffect } from "react";

const Navbar = () => {
  const sections = [
    { title: "About", href: "#About", id: "AboutNav" },
    { title: "Skills", href: "#Skills", id: "SkillsNav" },
    { title: "Projects", href: "#Projects", id: "ProjectNav" },
    { title: "Experience", href: "#Experience", id: "ExperienceNav" },
    { title: "UI & UX", href: "#UI_UX", id: "UI_UXNav" },
    { title: "Certificates", href: "#Certificates", id: "CertificatesNav" },
    { title: "Contact", href: "#Contact", id: "ContactNav" },
  ];

  const [activeLink, setActiveLink] = useState("About");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Adjust for navbar height

      let foundActive = false;

      for (let section of sections) {
        const sectionElement = document.querySelector(section.href);

        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop;
          const offsetBottom = offsetTop + sectionElement.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveLink(section.title);
            foundActive = true;
            break;
          }
        }
      }

      // If no section is active and we're near the bottom, set "Contact" as active
      if (
        !foundActive &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10
      ) {
        setActiveLink("Contact");
      }
      if (
        !foundActive &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50
      ) {
        setActiveLink("Contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const handleLinkClick = (title) => {
    setActiveLink(title);
    setToggle(false);

    const targetElement = document.querySelector(
      sections.find((section) => section.title === title).href
    );
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-darkGray">
    <div className="container flex justify-between py-6 text-white">
      <div>
        <h1 className="container text-2xl font-bold">Aya Killiah</h1>
      </div>
        {/* Toggle Button */}
        <button
          onClick={() => setToggle(!toggle)}
          type="button"
          className="flex items-center justify-center w-10 h-10 p-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-expanded={toggle}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-darkGray lg:bg-transparent transition-all duration-300 ${
            toggle ? "block" : "hidden lg:block"
          }`}
        >
          <ul className="flex flex-col items-start gap-4 p-6 lg:p-0 lg:flex-row lg:items-center">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  id={section.id}
                  onClick={() => handleLinkClick(section.title)}
                  className={`block hover:text-lightPink transition-colors duration-200 text-lg font-semibold ${
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
    </nav>
  );
};

export default Navbar;
