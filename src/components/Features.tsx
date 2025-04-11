import React from 'react'
import './Features.css'

const features = [
  {
    title: 'Vagas Exclusivas',
    description: 'Acesso a oportunidades exclusivas para quem está começando a carreira.',
    icon: '💼'
  },
  {
    title: 'Perfil Profissional',
    description: 'Crie seu perfil destacando suas habilidades e experiências iniciais.',
    icon: '📝'
  },
  {
    title: 'Mentoria',
    description: 'Conecte-se com profissionais experientes para orientação na carreira.',
    icon: '👥'
  },
  {
    title: 'Dicas de Carreira',
    description: 'Receba conteúdos exclusivos para se preparar para o mercado de trabalho.',
    icon: '📚'
  }
]

const Features = () => {
  return (
    <section className="features">
      <div className="features-header">
        <h2>Recursos que vão impulsionar sua carreira</h2>
        <p>Conheça as funcionalidades que vão te ajudar a dar os primeiros passos no mercado de trabalho</p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
