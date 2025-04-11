import { Calendar } from "lucide-react"

const Updates = () => {
  const updatesList = [
    {
      date: "15 de Abril, 2023",
      version: "v2.5.0",
      title: "Nova Interface de Usuário",
      description: "Redesenhamos completamente a interface para uma experiência mais moderna e intuitiva.",
      changes: [
        "Design atualizado com novo esquema de cores",
        "Navegação simplificada com menu inferior",
        "Modo escuro aprimorado",
      ],
    },
    {
      date: "28 de Março, 2023",
      version: "v2.4.2",
      title: "Melhorias de Desempenho",
      description: "Otimizamos o aplicativo para carregamento mais rápido e menor consumo de bateria.",
      changes: [
        "Tempo de inicialização reduzido em 40%",
        "Correção de bugs de sincronização",
        "Menor consumo de memória",
      ],
    },
    {
      date: "10 de Fevereiro, 2023",
      version: "v2.3.0",
      title: "Novos Recursos de Compartilhamento",
      description: "Adicionamos novas opções para compartilhar conteúdo com amigos e nas redes sociais.",
      changes: [
        "Integração com WhatsApp e Telegram",
        "Compartilhamento direto para Instagram Stories",
        "Opção de convite para amigos com código promocional",
      ],
    },
  ]

  return (
    <section id="updates" className="section">
      <div className="container">
        <h2 className="section-title">Últimas Atualizações</h2>
        <p className="section-subtitle">
          Estamos constantemente melhorando nosso aplicativo com novos recursos e correções. Confira o que há de novo!
        </p>

        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {updatesList.map((update, index) => (
            <div key={index} className="card text-left">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block bg-blue bg-opacity-10 text-blue text-sm font-semibold py-1 px-3 rounded-full mb-2">
                    {update.version}
                  </span>
                  <h3 className="text-xl font-bold">{update.title}</h3>
                </div>
                <div className="flex items-center text-gray text-sm">
                  <Calendar size={16} className="mr-1" />
                  {update.date}
                </div>
              </div>

              <p className="text-gray mb-4">{update.description}</p>

              <ul className="list-disc pl-5 text-gray">
                {update.changes.map((change, changeIndex) => (
                  <li key={changeIndex} className="mb-1">
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn btn-outline">
            Ver Todas as Atualizações
          </a>
        </div>
      </div>
    </section>
  )
}

export default Updates
