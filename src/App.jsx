import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import UI_UX from './components/UI_UX'
import Certificates from './components/Certificates'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="font-custom">
        <Navbar />
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <UI_UX/>
        <Certificates/>
        <Footer/>
      </div>
    </>
  )
}

export default App