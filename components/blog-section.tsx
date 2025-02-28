import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    title: "A Contabilidade é igual no Brasil inteiro?",
    excerpt:
      "Essa é uma pergunta que a gente escuta muito. E a resposta é: não. A contabilidade não é igual no Brasil inteiro...",
    image: "/placeholder.svg?height=400&width=600",
    href: "#",
  },
  {
    title: "Quer aumentar a rentabilidade da sua empresa?",
    excerpt: "Chegou a hora de investir em assessoria contábil. Descubra como podemos ajudar seu negócio a crescer...",
    image: "/placeholder.svg?height=400&width=600",
    href: "#",
  },
  {
    title: "Imposto de Renda: prazo para envio da declaração",
    excerpt: "Fique por dentro dos prazos e não perca a data limite para enviar sua declaração do Imposto de Renda...",
    image: "/placeholder.svg?height=400&width=600",
    href: "#",
  },
]

export function BlogSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center">
          <h4 className="text-sm font-medium uppercase tracking-wider text-emerald-600">BLOG</h4>
          <h2 className="mt-3 text-3xl font-bold">Artigos e Notícias</h2>
          <p className="mt-4 text-gray-600">Acompanhe nosso blog</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.href}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

