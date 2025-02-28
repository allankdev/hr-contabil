"use server"; 

import { NextResponse } from "next/server";
const nodemailer = require("nodemailer"); // Usando require()

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Preencha todos os campos obrigatórios." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "meusitebr1@gmail.com",
        pass: "cmmc mnrp qovk htmm",
      },
    });

    const mailOptions = {
      from: `"Contato do Site" <${email}>`,
      to: "henriquerodriguescontabilidade@gmail.com",
      subject: "Nova Solicitação de Proposta",
      text: `📌 Nome: ${name}\n📌 E-mail: ${email}\n📌 Mensagem:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Proposta enviada com sucesso!" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ error: "Erro ao enviar e-mail. Tente novamente mais tarde." }, { status: 500 });
  }
}
