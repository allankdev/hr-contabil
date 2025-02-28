import { ContactSection } from "@/components/contact-section";

export default function Mercados() {
  const features = [
    { title: "Redução de Custos", description: "Maximize a lucratividade do seu mercado com uma gestão tributária eficiente." },
    { title: "Gestão Financeira", description: "Controle seu fluxo de caixa, contas a pagar e receber de forma estratégica." },
    { title: "Compliance Fiscal", description: "Evite problemas fiscais e garanta conformidade com todas as exigências tributárias." }
  ];

  const faqs = [
    { question: "Quais são os impostos para mercados e supermercados?", answer: "Os tributos variam conforme o regime tributário, incluindo Simples Nacional, Lucro Presumido ou Lucro Real." },
    { question: "Como reduzir os custos do meu mercado?", answer: "Nossa equipe analisa suas operações e propõe estratégias para otimizar sua carga tributária." },
    { question: "Vocês oferecem suporte para gestão de estoque?", answer: "Sim, auxiliamos na gestão contábil e fiscal para um controle de estoque eficiente." }
  ];

  return (
    <>
      {/* Seção Principal */}
      <section 
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white sm:h-[50vh] md:h-[70vh]" 
        style={{ backgroundImage: "url('mercado.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700 to-blue-500 opacity-75"></div>
        <div className="text-center relative z-10 p-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mt-2 drop-shadow-lg">Contabilidade para Mercados e Supermercados</h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg mx-auto drop-shadow-lg">
            A contabilidade para mercados e supermercados exige precisão na gestão financeira e tributária.
            Nossa equipe oferece suporte especializado para reduzir custos e maximizar lucros de forma estratégica.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="#features" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg text-sm sm:text-base">CONHEÇA MAIS</a>
            <a href="#contact-section" className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg text-sm sm:text-base">SOLICITE UMA PROPOSTA</a>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section id="features" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Benefícios para Seu Negócio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Perguntas Frequentes */}
      <section className="py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Dúvidas Frequentes</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <details key={index} className="border border-gray-300 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">{faq.question}</summary>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">{faq.answer}</p>
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
