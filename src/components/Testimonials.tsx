"use client"

import React from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    role: 'Desenvolvedora Junior',
    company: 'Tech Solutions',
    image: '/images/testimonials/ana-silva.jpg',
    text: 'Graças à mentoria da plataforma, consegui me preparar para entrevistas e processos seletivos. Hoje estou realizando meu sonho de trabalhar com tecnologia!'
  },
  {
    id: 2,
    name: 'Pedro Santos',
    role: 'Analista de Marketing',
    company: 'Digital Agency',
    image: '/images/testimonials/pedro-santos.jpg',
    text: 'Como recém-formado, estava com dificuldades para encontrar oportunidades. A plataforma me conectou com empresas que valorizam talentos iniciantes.'
  },
  {
    id: 3,
    name: 'Mariana Costa',
    role: 'Assistente Administrativo',
    company: 'Global Corp',
    image: '/images/testimonials/mariana-costa.jpg',
    text: 'As dicas de carreira e o suporte da plataforma foram fundamentais para eu conseguir minha primeira experiência profissional.'
  }
]

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <h2>Histórias de Sucesso</h2>
      <p>Conheça as experiências de quem conseguiu seu primeiro emprego através da nossa plataforma</p>
      
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role} na {testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
