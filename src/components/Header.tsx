"use client"
import React from 'react'
import './Header.css'

interface HeaderProps {
  scrolled: boolean
  toggleMenu: () => void
}

const Header = ({ scrolled, toggleMenu }: HeaderProps) => {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <a href="/">NovosTalentos</a>
        </div>

        <nav className="desktop-nav">
          <ul>
            <li><a href="#features">Recursos</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#download" className="download-link">Baixar</a></li>
          </ul>
        </nav>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
