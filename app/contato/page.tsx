"use client";

import { useState } from "react";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, CheckCircle, XCircle } from "lucide-react";

export default function Contato() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatusMessage("⚠️ Preencha todos os campos obrigatórios.");
      setSuccess(false);
      return;
    }

    setLoading(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMessage(" Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.");
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatusMessage(" Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        setSuccess(false);
      }
    } catch (error) {
      setStatusMessage(" Erro ao enviar a mensagem. Verifique sua conexão e tente novamente.");
      setSuccess(false);
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-100">
      {/* Seção Principal */}
      <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('/contato.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700 to-blue-500 opacity-75"></div>
        <div className="text-center relative z-10 p-6">
          <h2 className="text-4xl font-bold drop-shadow-lg">Entre em <b>Contato</b></h2>
          <p className="mt-2 text-lg drop-shadow-lg">SEGURANÇA, AGILIDADE E PRODUTIVIDADE</p>
        </div>
      </section>

      {/* Seção de Informações de Contato */}
      <section className="container mx-auto py-12 px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Coluna 1 - Informações */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              R. João Lélis, 11 A, Castelo Branco - João Pessoa/PB, 58050-130
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-green-600" />
              Whatsapp: (83) 98825-8541
            </li>
            <li className="flex items-center gap-3 break-words max-w-full">
              <Mail className="text-red-600 flex-shrink-0" />
              <span className="truncate">henriquerodriguescontabilidade@gmail.com</span>
            </li>
          </ul>

          {/* Redes Sociais */}
          <h3 className="text-2xl font-semibold mt-8 mb-4">Redes Sociais</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/166XDrrVoj/?mibextid=wwXIfr" target="_blank" className="text-blue-600 hover:text-blue-800"><Facebook size={28} /></a>
            <a href="https://www.instagram.com/hrcontabilidade?igsh=MXFjeGw4NDduN2djdw" target="_blank" className="text-pink-600 hover:text-pink-800"><Instagram size={28} /></a>
            <a href="https://youtube.com/@henriquerodrigues-contadorjp?si=lVJfQEvnl7N1-PZC" target="_blank" className="text-red-600 hover:text-red-800"><Youtube size={28} /></a>
          </div>

          {/* Mapa */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9709506071968!2d-34.841574099999995!3d-7.1293568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acc3a142104227%3A0xa8ad0726409103d2!2sHenrique%20Rodrigues%20Contabilidade!5e0!3m2!1spt-BR!2sbr!4v1740711066536!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              className="rounded-lg"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Coluna 2 - Formulário */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Formulário de Contato</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Seu Nome (obrigatório)" className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-blue-300" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Seu E-mail (obrigatório)" className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-blue-300" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Seu Telefone (obrigatório)" className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-blue-300" required />
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Assunto" className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-blue-300" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Sua Mensagem (obrigatório)" className="w-full px-4 py-3 border rounded-md focus:ring focus:ring-blue-300" rows={4} required></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition" disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>

          {/* Mensagem de resposta */}
          {statusMessage && (
            <div className={`mt-4 p-3 rounded-md text-center ${success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              {success ? <CheckCircle className="inline-block w-5 h-5 mr-2 text-green-600" /> : <XCircle className="inline-block w-5 h-5 mr-2 text-red-600" />}
              {statusMessage}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
