import Image from "next/image";
import Link from "next/link";

const segments = [
  {
    title: "CONSTRUÇÃO CIVIL",
    image: "/civil.jpg",
    href: "/construcao",
  },
  {
    title: "BARES E RESTAURANTES",
    image: "/restaurante.jpg",
    href: "/restaurantes",
  },
  {
    title: "HOLDINGS",
    image: "/holding.jpg",
    href: "/holding",
  },
  {
    title: "MÍDIAS",
    image: "/midias.jpg",
    href: "/midias",
  },
  {
    title: "PROFISSIONAIS DE SAÚDE",
    image: "/saude.jpg",
    href: "/saude",
  },
];

export function SegmentsSection() {
  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden" id="segmentos">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-600">CONHEÇA A</h2>
        <h3 className="mb-20 text-[44px] font-bold text-slate-800">HR CONTABILIDADE DE PERTO</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <Link key={segment.title} href={segment.href} className="group relative block overflow-hidden rounded-lg shadow-lg">
              <Image
                src={segment.image}
                alt={segment.title}
                width={500}
                height={400}
                className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 transition-colors group-hover:bg-black/70">
                <h3 className="text-xl font-bold text-white text-center px-4">{segment.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
