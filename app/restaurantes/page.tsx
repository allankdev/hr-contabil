import { ContactSection } from "@/components/contact-section";

export default function Restaurantes() {
  const features = [
    { title: "Redução de Impostos", description: "Aproveite incentivos fiscais e o melhor enquadramento tributário." },
    { title: "Assessoria Financeira", description: "Gestão de fluxo de caixa, contas a pagar e a receber." },
    { title: "Conformidade Legal", description: "Evite riscos trabalhistas e fiscais com suporte especializado." }
  ];

  const faqs = [
    { question: "Quais são os impostos para bares e restaurantes?", answer: "A carga tributária pode variar conforme o regime tributário, incluindo Simples Nacional, Lucro Presumido ou Lucro Real." },
    { question: "Como reduzir os impostos do meu restaurante?", answer: "Nossa equipe analisa sua operação e propõe estratégias para otimizar a carga tributária." },
    { question: "Vocês oferecem suporte para folha de pagamento?", answer: "Sim, gerenciamos toda a parte trabalhista, incluindo folha de pagamento, encargos e benefícios." }
  ];

  return (
    <>
      {/* Seção Principal */}
      <section 
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white sm:h-[50vh] md:h-[70vh]" 
        style={{ backgroundImage: "url('restaurante.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700 to-blue-500 opacity-75"></div>
        <div className="text-center relative z-10 p-4 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mt-2 drop-shadow-lg">Contabilidade para Bares e Restaurantes</h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg mx-auto drop-shadow-lg">
            Ter uma empresa no setor de gastronomia não é uma tarefa fácil. Existem diferentes assuntos para cuidar: escala de trabalho, estoque etc, além de diferentes formas de tributação no âmbito federal e estadual. 
            Nossos especialistas estão aptos para assessorar a sua empresa na eliminação de riscos e no enquadramento na melhor forma de tributação para o seu negócio.
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
