"use client"

import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Updates from "./components/Updates"
import Download from "./components/Download"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import MobileMenu from "./components/MobileMenu"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="app-container">
      <Header scrolled={scrolled} toggleMenu={toggleMenu} />
      {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      <main>
        <Hero />
        <Features />
        <Updates />
        <Download />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
