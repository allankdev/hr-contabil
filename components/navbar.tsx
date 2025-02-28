"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Segmentos",
    submenu: [
      { name: "Construção Civil", href: "/construcao" },
      { name: "Holding", href: "/holding" },
      { name: "Mídias", href: "/midias" },
      { name: "Restaurantes", href: "/restaurantes" },
      { name: "Saúde", href: "/saude" },
    ],
  },
  { name: "Abertura de Empresas", href: "/abertura" },
  { name: "Outros Serviços", href: "/servicos" },
  { name: "Contato", href: "/contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menuName: string) => {
    setOpenSubmenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-[120px] items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo1.png"
            alt="HR Contabilidade"
            width={420}
            height={120}
            className="h-[140px] w-[420px] object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item, index) => (
            item.submenu ? (
              <div key={index} className="relative group">
                <button
                  onClick={() => toggleSubmenu(item.name)}
                  className="flex items-center text-base font-medium text-slate-700 transition-colors hover:text-emerald-600"
                >
                  {item.name} <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                {openSubmenu === item.name && (
                  <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-100"
                        onClick={() => setOpenSubmenu(null)} // Fecha o submenu ao clicar
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="text-base font-medium text-slate-700 transition-colors hover:text-emerald-600"
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu principal</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 pt-8">
              {navigation.map((item, index) => (
                item.submenu ? (
                  <div key={index}>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full text-left text-lg font-medium text-slate-700 flex items-center justify-between"
                    >
                      {item.name} <ChevronDown className="h-5 w-5" />
                    </button>
                    {openSubmenu === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block text-base text-slate-700 hover:text-emerald-600"
                            onClick={() => {
                              setOpenSubmenu(null); // Fecha o submenu
                              setIsOpen(false); // Fecha o menu lateral
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-lg font-medium text-slate-700 hover:text-emerald-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
