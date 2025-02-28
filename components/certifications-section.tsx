import Image from "next/image"

export function CertificationsSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container">
        <div className="text-center">
          <h4 className="text-sm font-medium uppercase tracking-wider text-emerald-600">NOSSAS</h4>
          <h2 className="mt-3 text-3xl font-bold">Certificações</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-emerald-600"></div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-8 text-center shadow-lg">
            <Image src="/placeholder.svg?height=300&width=300" alt="RNC" width={300} height={300} className="mx-auto" />
            <h3 className="mt-6 text-xl font-bold">RNC</h3>
            <p className="mt-4 text-gray-600">
              Somos associados à Rede Nacional de Contabilidade (RNC), trabalhando com grandes parceiros de Norte a Sul
              do Brasil.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 text-center shadow-lg">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="ISO 9001:2015"
              width={300}
              height={300}
              className="mx-auto"
            />
            <h3 className="mt-6 text-xl font-bold">ISO 9001:2015</h3>
            <p className="mt-4 text-gray-600">Investimos em processos eficientes e qualidade comprovada.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

