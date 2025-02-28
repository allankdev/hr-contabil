import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a2f3b] text-white py-12">
      {/* Container principal */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-center">
          
          {/* 📌 Coluna 1 - Logo e Descrição */}
          <div className="flex flex-col items-center md:items-center">
            <Image
              src="/logo1.png"
              alt="HR Contabilidade"
              width={250}
              height={90}
              className="mb-4 invert"
            />
            <p className="text-gray-300 max-w-xs text-center md:text-left">
              Cuidamos da sua contabilidade para que você tenha tempo de cuidar do seu negócio.
            </p>
          </div>

          {/* 📌 Coluna 2 - Informações de Contato */}
          <div className="flex flex-col items-center md:items-center text-center">
            <h3 className="mb-4 text-lg font-semibold uppercase">Endereço</h3>
            <p className="text-gray-300 max-w-xs leading-relaxed">
              R. João Lélis, 11 A  - Castelo Branco <br />
              João Pessoa - PB, 58050-130
            </p>
            <p className="text-gray-300 mt-4 font-semibold">(83) 98825-8541</p>
          </div>

          {/* 📌 Coluna 3 - Redes Sociais */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="mb-4 text-lg font-semibold uppercase">Redes Sociais</h3>
            <div className="flex space-x-6">
              <SocialLink href="https://www.facebook.com/share/166XDrrVoj/?mibextid=wwXIfr" icon={<Facebook />} />
              <SocialLink href="https://www.instagram.com/hrcontabilidade?igsh=MXFjeGw4NDduN2djdw" icon={<Instagram />} />
              <SocialLink href="https://youtube.com/@henriquerodrigues-contadorjp?si=lVJfQEvnl7N1-PZC" icon={<Youtube />} />
            </div>
          </div>

        </div>
      </div>

      {/* 📌 Barra de Copyright */}
      <div className="border-t border-gray-700 bg-[#152630] mt-12">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-sm text-gray-400">
            ©2024 HR Contabilidade - Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

/* Componente para os ícones de redes sociais */
const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <Link href={href} target="_blank" className="text-white hover:text-emerald-400">
    <span className="h-6 w-6">{icon}</span>
  </Link>
);
