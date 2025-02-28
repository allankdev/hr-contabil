"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setStatusMessage({ text: "⚠️ Preencha todos os campos obrigatórios.", type: "error" });
      return;
    }

    setLoading(true);
    setStatusMessage({ text: "", type: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMessage({ text: " Proposta enviada com sucesso! Em breve entraremos em contato.", type: "success" });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatusMessage({ text: data.error || " Ocorreu um erro ao enviar a proposta.", type: "error" });
      }
    } catch (error) {
      setStatusMessage({ text: " Erro ao enviar a proposta. Tente novamente mais tarde.", type: "error" });
    }

    setLoading(false);
  };

  return (
    <section className="bg-[#1a2f3b] py-24 text-white" id="contato">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Texto */}
          <div>
            <h3 className="text-3xl font-bold">Solicite uma proposta</h3>
            <div className="mt-4 h-1 w-20 bg-emerald-600"></div>
            <p className="mt-8 text-lg text-gray-300">
              Nossa equipe está pronta para atender sua necessidade com soluções eficientes.
            </p>
          </div>

          {/* Formulário */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome (obrigatório)"
                className="h-12 bg-white/10 text-white placeholder:text-gray-400"
                required
              />

              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Seu telefone (obrigatório)"
                className="h-12 bg-white/10 text-white placeholder:text-gray-400"
                required
              />
              
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu e-mail (obrigatório)"
                className="h-12 bg-white/10 text-white placeholder:text-gray-400"
                required
              />

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Sua mensagem (obrigatório)"
                className="h-32 bg-white/10 text-white placeholder:text-gray-400"
                required
              />

              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={loading}>
                {loading ? "Enviando..." : "SOLICITAR PROPOSTA"}
              </Button>
            </form>

            {/* Mensagem de resposta */}
            {statusMessage.text && (
              <p className={`mt-4 text-sm ${statusMessage.type === "success" ? "text-green-400" : "text-red-400"}`}>
                {statusMessage.text}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
