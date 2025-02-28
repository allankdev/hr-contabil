import { ContactSection } from "@/components/contact-section";

export default function ConstrucaoCivil() {

  const features = [
    { title: "Gestão Tributária", description: "Auxiliamos na escolha do melhor regime tributário para maximizar seus lucros." },
    { title: "Controle Financeiro", description: "Organização de fluxo de caixa, faturamento e custos operacionais." },
    { title: "Regularização de Obras", description: "Suporte na obtenção de alvarás e conformidade com normas fiscais e trabalhistas." }
  ];

  const faqs = [
    { question: "Qual o melhor regime tributário para construtoras?", answer: "Depende do faturamento e estrutura da empresa. Analisamos sua situação para definir a melhor opção." },
    { question: "Vocês ajudam na regularização de obras?", answer: "Sim, oferecemos suporte na obtenção de alvarás e adequação à legislação vigente." },
    { question: "Como manter a contabilidade da minha construtora organizada?", answer: "Trabalhamos com gestão financeira estratégica, garantindo controle sobre receitas e despesas." }
  ];

  return (
    <>
      {/* Seção Principal */}
      <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('civil.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700 to-blue-500 opacity-75"></div>
        <div className="text-center relative z-10 p-6">
          <h1 className="text-4xl font-bold mt-2 drop-shadow-lg">Contabilidade para Construção Civil</h1>
          <p className="mt-4 max-w-2xl mx-auto drop-shadow-lg">
            O setor da construção civil exige planejamento financeiro eficiente, controle de tributos e regularização de obras. Nossa equipe especializada garante segurança contábil para que sua empresa possa crescer com tranquilidade.
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
          <h2 className="text-3xl font-bold mb-6">Benefícios para Sua Construtora</h2>
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
