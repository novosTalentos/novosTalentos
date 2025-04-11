"use client"

import React from 'react'
import './MobileMenu.css'

interface MobileMenuProps {
  toggleMenu: () => void
}

const MobileMenu = ({ toggleMenu }: MobileMenuProps) => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-content">
        <nav>
          <ul>
            <li><a href="#features" onClick={toggleMenu}>Recursos</a></li>
            <li><a href="#testimonials" onClick={toggleMenu}>Depoimentos</a></li>
            <li><a href="#faq" onClick={toggleMenu}>FAQ</a></li>
            <li><a href="#download" onClick={toggleMenu} className="download-link">Baixar</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu
