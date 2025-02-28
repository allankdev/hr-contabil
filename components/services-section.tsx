"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Soluções contábeis completas para o sucesso do seu negócio</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Imagem responsiva */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/abertura.jpg"
                alt="Serviços Contábeis"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Tabs de Serviços */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Tabs defaultValue="abertura" className="w-full">
              {/* Lista de Tabs */}
              <TabsList className="flex w-full h-auto p-1 bg-white shadow-md rounded-lg mb-6">
                <TabsTrigger
                  value="abertura"
                  className="flex-1 py-3 px-2 text-xs sm:text-sm md:text-base font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  ABERTURA DE EMPRESAS
                </TabsTrigger>
                <TabsTrigger
                  value="migracao"
                  className="flex-1 py-3 px-2 text-xs sm:text-sm md:text-base font-medium transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  MIGRAÇÃO DE EMPRESAS
                </TabsTrigger>
              </TabsList>

              {/* Conteúdo - Abertura de Empresas */}
              <TabsContent value="abertura" className="mt-2 focus-visible:outline-none focus-visible:ring-0">
                <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Abra sua empresa sem burocracia</h2>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Na HR Contabilidade, a abertura de sua empresa é feita por especialistas que analisam todos os
                    aspectos importantes para o sucesso do seu negócio.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Papel zero",
                      "Inteligência artificial",
                      "Armazenamento de dados em nuvem",
                      "Atendimento rápido",
                      "Equipe treinada",
                      "Atendimento humanizado",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link href="/abertura">
                      <Button className="px-6 py-6 h-auto text-sm sm:text-base font-medium group">
                        SAIBA MAIS
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>

              {/* Conteúdo - Migração de Empresas */}
              <TabsContent value="migracao" className="mt-2 focus-visible:outline-none focus-visible:ring-0">
                <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Traga sua empresa para a HR Contabilidade
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed">
                    O processo de migração de sua contabilidade para HR Contabilidade é feito por profissionais
                    especializados, através de processos certificados.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Papel zero",
                      "Inteligência artificial",
                      "Armazenamento de dados em nuvem",
                      "Atendimento rápido",
                      "Equipe treinada",
                      "Atendimento especializado",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Link href="/abertura">
                      <Button className="px-6 py-6 h-auto text-sm sm:text-base font-medium group">
                        SAIBA MAIS
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

