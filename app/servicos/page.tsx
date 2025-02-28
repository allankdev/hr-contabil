import { ContactSection } from "@/components/contact-section";

export default function OutrosServicos() {
  const features = [
    { title: "BPO Financeiro", description: "Terceirize a gestão financeira do seu negócio e ganhe tempo para focar no crescimento da sua empresa." },
    { title: "Endereço Fiscal", description: "Reduza custos e riscos utilizando um endereço fiscal seguro e confiável para sua empresa." },
    { title: "Certificado Digital", description: "Emitimos seu Certificado Digital com segurança e autenticidade garantida por criptografia." },
    { title: "Revisões Tributárias", description: "Analisamos sua carga tributária e identificamos oportunidades para reduzir impostos e otimizar a gestão fiscal." }
  ];

  const faqs = [
    { question: "O que é BPO Financeiro?", answer: "É a terceirização da gestão financeira da sua empresa, incluindo contas a pagar, a receber e fluxo de caixa." },
    { question: "Como funciona o Endereço Fiscal?", answer: "Sua empresa pode usar nosso endereço como sede fiscal, garantindo economia e praticidade." },
    { question: "Quais os benefícios do Certificado Digital?", answer: "Ele permite assinar documentos eletronicamente com validade jurídica, garantindo segurança nas transações online." },
    { question: "Por que fazer uma revisão tributária?", answer: "A revisão pode identificar impostos pagos a mais e garantir maior eficiência fiscal para sua empresa." }
  ];

  return (
    <>
      {/* Seção Principal */}
      <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('servicos.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700 to-blue-500 opacity-75"></div>
        <div className="text-center relative z-10 p-6">
          <h3 className="text-2xl font-bold drop-shadow-lg">SUPORTE ÁGIL E ESPECIALIZADO</h3>
          <h1 className="text-4xl font-bold mt-2 drop-shadow-lg">Outros Serviços</h1>
          <p className="mt-4 max-w-2xl mx-auto drop-shadow-lg">
            Estamos constantemente buscando soluções que auxiliam o seu negócio a crescer com competitividade. Oferecemos serviços integrados à contabilidade para uma melhor gestão da sua empresa.
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
            Gerir um negócio de sucesso é estar sempre à frente e pronto para inovações. Oferecemos soluções complementares à contabilidade que facilitam sua vida.
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
