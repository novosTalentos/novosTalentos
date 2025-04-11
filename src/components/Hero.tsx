import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Encontre sua primeira oportunidade no mercado de trabalho</h1>
        <p>Conectamos iniciantes com empresas que valorizam o potencial e a vontade de aprender</p>
        <button className="cta-button">Começar Agora</button>
      </div>
      <div className="hero-image">
        <img src="/hero-image.png" alt="Jovem profissional" />
      </div>
    </section>
  )
}

export default Hero
