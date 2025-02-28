import { ContactSection } from "@/components/contact-section";

export default function AberturaMigracao() {
  const features = [
    { title: "Entre em Contato", description: "Solicite um orçamento e analisamos o seu caso para te enviar a proposta mais adequada." },
    { title: "Assinatura do Contrato", description: "Após aprovação da proposta, enviamos o contrato para assinatura e iniciamos o serviço." },
    { title: "Início das Atividades", description: "Assim que o CNPJ for emitido ou a migração finalizada, você poderá operar sem preocupações." },
    { title: "Suporte Especializado", description: "Nossa equipe estará disponível para tirar dúvidas e te orientar durante todo o processo." }
  ];

  const faqs = [
    { question: "Quanto tempo leva para abrir uma empresa?", answer: "O tempo pode variar conforme o estado e tipo de empresa, mas geralmente ocorre entre 5 a 15 dias úteis." },
    { question: "O que é necessário para migrar minha empresa?", answer: "Precisamos de todos os documentos contábeis e fiscais para realizar uma análise e garantir que a migração ocorra de forma segura." },
    { question: " Hc Contabilidade oferece suporte após a abertura?", answer: "Sim! Durante e após a abertura ou migração, oferecemos suporte completo para garantir que tudo funcione corretamente." }
  ];

  return (
    <>
      {/* Seção Principal */}
      <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('abertura.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700 to-blue-500 opacity-75"></div>
        <div className="text-center relative z-10 p-6">
          <h3 className="text-2xl font-bold drop-shadow-lg">SUPORTE ÁGIL E ESPECIALIZADO</h3>
          <h1 className="text-4xl font-bold mt-2 drop-shadow-lg">Abertura e Migração de Empresas</h1>
          <p className="mt-4 max-w-2xl mx-auto drop-shadow-lg">
            Não importa se você vai abrir uma empresa do zero ou migrar sua empresa para a Hr Contabilidade. Nós cuidamos de todos os detalhes para garantir uma transição segura e eficiente.
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
          <h2 className="text-3xl font-bold mb-6">Conheça de Perto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Somos parceiros de negócios e trabalhamos juntos para que seu negócio cresça e acompanhe as inovações do mercado.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
