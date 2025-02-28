import Image from "next/image"
import Link from "next/link"

const segments = [
  {
    title: "CONSTRUÇÃO CIVIL",
    image: "/placeholder.svg?height=400&width=500",
    href: "#",
  },
  {
    title: "BARES E RESTAURANTES",
    image: "/placeholder.svg?height=400&width=500",
    href: "#",
  },
  {
    title: "HOLDINGS",
    image: "/placeholder.svg?height=400&width=500",
    href: "#",
  },
  {
    title: "MÍDIAS",
    image: "/placeholder.svg?height=400&width=500",
    href: "#",
  },
  {
    title: "PROFISSIONAIS DE SAÚDE",
    image: "/placeholder.svg?height=400&width=500",
    href: "#",
  },
]

export function Segments() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {segments.map((segment) => (
        <Link key={segment.title} href={segment.href} className="group relative block overflow-hidden rounded-lg">
          <Image
            src={segment.image || "/placeholder.svg"}
            alt={segment.title}
            width={500}
            height={400}
            className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 transition-colors group-hover:bg-black/70">
            <h3 className="text-xl font-bold text-white">{segment.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

