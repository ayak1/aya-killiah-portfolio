import React from 'react'
import { FaTelegramPlane, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
        <footer className="text-white bg-darkGray">
      <div className="container py-10 mx-auto -mt-1 text-center">
        <h2 className="mb-2 text-2xl font-bold">Let’s work together</h2>
        <p className="mb-6 text-gray-400">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="flex justify-center space-x-6 text-2xl">
          {/* Telegram */}
          <a
            href="https://t.me/aya_killiah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondaryPink"
          >
            <FaTelegramPlane />
          </a>
          {/* Email */}
          <a
            href="mailto:ayakilliah2163@gmail.com"
            className="hover:text-secondaryPink"
          >
            <FaEnvelope />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aya-killiah-020a921b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondaryPink"
          >
            <FaLinkedin />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondaryPink"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer