import { ContactSection } from "@/components/contact-section";

export default function Saude() {

  const features = [
    { title: "Redução da Carga Tributária", description: "Auxiliamos médicos e profissionais da saúde a pagar menos impostos de forma legal." },
    { title: "Gestão Financeira", description: "Organizamos suas finanças para otimizar lucros e reduzir custos operacionais." },
    { title: "Regularização Profissional", description: "Cuidamos da abertura e regularização de clínicas e consultórios." }
  ];

  const faqs = [
    { question: "Qual é o melhor regime tributário para médicos e dentistas?", answer: "A escolha do regime depende do faturamento e modelo de trabalho. Avaliamos cada caso para definir a melhor opção." },
    { question: "Preciso de um CNPJ para atuar como profissional de saúde?", answer: "Depende da sua atividade. Podemos orientá-lo sobre as vantagens e como abrir um CNPJ para sua atuação." },
    { question: "Vocês oferecem suporte para clínicas e consultórios?", answer: "Sim, auxiliamos desde a abertura da empresa até a gestão contábil e fiscal." }
  ];

  return (
    <>
      {/* Seção Principal */}
      <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('saude.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700 to-blue-500 opacity-75"></div>
        <div className="text-center relative z-10 p-6">
          <h1 className="text-4xl font-bold mt-2 drop-shadow-lg">Contabilidade para Profissionais de Saúde</h1>
          <p className="mt-4 max-w-2xl mx-auto drop-shadow-lg">
            A contabilidade para médicos, dentistas e outros profissionais da saúde exige planejamento e segurança. Nossa equipe especializada oferece suporte completo para otimizar seus ganhos e garantir conformidade fiscal.
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
          <h2 className="text-3xl font-bold mb-6">Benefícios para Profissionais da Saúde</h2>
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
