import { ContactSection } from "@/components/contact-section";

export default function Holding() {

  const features = [
    { title: "Planejamento Tributário", description: "Estratégias para otimizar impostos e proteger o patrimônio." },
    { title: "Gestão Patrimonial", description: "Controle eficiente de bens, investimentos e participações societárias." },
    { title: "Conformidade Legal", description: "Garantia de que sua holding esteja em total conformidade fiscal e regulatória." }
  ];

  const faqs = [
    { question: "Quais são os benefícios de ter uma holding?", answer: "Holdings ajudam a proteger patrimônio, reduzir a carga tributária e organizar sucessões familiares." },
    { question: "Quais os regimes tributários mais indicados para holdings?", answer: "O melhor regime depende da estrutura da holding. Avaliamos cada caso para encontrar a opção mais vantajosa." },
    { question: "Vocês oferecem suporte para planejamento sucessório?", answer: "Sim, auxiliamos na estruturação de holdings familiares para facilitar a sucessão de bens e empresas." }
  ];

  return (
    <>
      {/* Seção Principal */}
      <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('holding.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700 to-blue-500 opacity-75"></div>
        <div className="text-center relative z-10 p-6">
          <h1 className="text-4xl font-bold mt-2 drop-shadow-lg">Contabilidade para Holdings</h1>
          <p className="mt-4 max-w-2xl mx-auto drop-shadow-lg">
            Ter uma holding é uma estratégia eficiente para proteção patrimonial e planejamento sucessório. Nossa equipe especializada oferece suporte completo para garantir a segurança e o crescimento do seu patrimônio.
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
          <h2 className="text-3xl font-bold mb-6">Benefícios para Sua Holding</h2>
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
