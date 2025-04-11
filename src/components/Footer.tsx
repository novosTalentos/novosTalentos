import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>NovosTalentos</h3>
          <p>Controle suas finanças de forma simples e eficiente.</p>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#features">Recursos</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#download">Baixar</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <ul>
            <li><a href="mailto:suporte@novostalentos.com">suporte@novostalentos.com</a></li>
            <li><a href="tel:+5511999999999">(11) 99999-9999</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NovosTalentos. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
