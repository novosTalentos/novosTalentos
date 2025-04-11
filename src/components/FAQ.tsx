"use client"

import React, { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    question: 'O aplicativo é gratuito?',
    answer: 'Sim, o aplicativo é totalmente gratuito para download e uso. Oferecemos recursos básicos sem custo e uma versão premium com funcionalidades adicionais.'
  },
  {
    question: 'Como faço para baixar o aplicativo?',
    answer: 'Você pode baixar o aplicativo diretamente da Google Play Store. Basta clicar no botão "Baixar para Android" e seguir as instruções.'
  },
  {
    question: 'Meus dados estão seguros?',
    answer: 'Sim, a segurança dos seus dados é nossa prioridade. Utilizamos criptografia avançada e seguimos as melhores práticas de segurança para proteger suas informações.'
  },
  {
    question: 'Posso usar o aplicativo offline?',
    answer: 'Sim, o aplicativo funciona offline para funções básicas. Algumas funcionalidades que requerem sincronização com a nuvem precisarão de conexão com a internet.'
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="faq-header">
        <h2>Perguntas Frequentes</h2>
        <p>Tire suas dúvidas sobre o aplicativo</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div
              className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
