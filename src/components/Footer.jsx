import React from 'react'
import { FaTelegramPlane, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
        <footer className="bg-darkGray text-white">
      <div className="container mx-auto text-center pt-10">
        <h2 className="text-2xl font-bold mb-2">Let’s work together</h2>
        <p className="text-gray-400 mb-6">
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