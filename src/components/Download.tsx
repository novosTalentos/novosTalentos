import React from 'react'
import './Download.css'

const Download = () => {
  return (
    <section className="download">
      <div className="download-content">
        <h2>Baixe agora e comece a controlar suas finanças</h2>
        <p>Disponível gratuitamente na Google Play Store</p>
        <div className="download-buttons">
          <a href="#" className="download-button android">
            <img src="/android-icon.svg" alt="Android" />
            <div className="button-text">
              <span className="small">Disponível no</span>
              <span className="large">Google Play</span>
            </div>
          </a>
        </div>
        <div className="download-stats">
          <div className="stat">
            <span className="number">10.000+</span>
            <span className="label">Downloads</span>
          </div>
          <div className="stat">
            <span className="number">4.8</span>
            <span className="label">Avaliação</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
