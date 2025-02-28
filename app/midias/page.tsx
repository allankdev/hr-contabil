import { ContactSection } from "@/components/contact-section";

export default function Midias() {

  const features = [
    { title: "Planejamento Tributário", description: "Auxiliamos na escolha do melhor regime tributário para empresas de mídia e comunicação." },
    { title: "Gestão Financeira", description: "Controle de receitas, despesas e fluxo de caixa para maior estabilidade financeira." },
    { title: "Conformidade Fiscal", description: "Garantimos que sua empresa esteja em conformidade com todas as obrigações contábeis e fiscais." }
  ];

  const faqs = [
    { question: "Quais impostos afetam empresas de mídia?", answer: "Depende do tipo de serviço prestado. Fazemos um estudo para identificar o melhor enquadramento fiscal." },
    { question: "Como otimizar a contabilidade de uma agência de publicidade?", answer: "Ajudamos a organizar o fluxo de caixa, faturamento e controle de despesas para melhor gestão financeira." },
    { question: "Vocês oferecem suporte na emissão de notas fiscais?", answer: "Sim, auxiliamos na emissão correta de notas fiscais para garantir conformidade com a legislação." }
  ];

  return (
    <>
      {/* Seção Principal */}
      <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('midias.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700 to-blue-500 opacity-75"></div>
        <div className="text-center relative z-10 p-6">
          <h1 className="text-4xl font-bold mt-2 drop-shadow-lg">Contabilidade para Empresas de Mídia</h1>
          <p className="mt-4 max-w-2xl mx-auto drop-shadow-lg">
            No mercado de mídia e comunicação, ter um planejamento contábil eficiente é essencial para garantir a lucratividade e evitar problemas fiscais. Nossa equipe oferece suporte especializado para que você foque no crescimento do seu negócio.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="#features" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg">CONHEÇA MAIS</a>
            <a href="#contact-section" className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg">SOLICITE UMA PROPOSTA</a>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section id="features" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Benefícios para Empresas de Mídia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Perguntas Frequentes */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Dúvidas Frequentes</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <details key={index} className="border border-gray-300 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">{faq.question}</summary>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Contato com ID para rolagem */}
      <div id="contact-section">
        <ContactSection />
      </div>
    </>
  );
}
