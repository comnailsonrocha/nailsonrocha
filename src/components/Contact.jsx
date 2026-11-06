
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Copy,
  Check,
  Mail,
  ArrowRight,
} from "lucide-react";

const email = "comnailsonrocha@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const send = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Contato pelo portfólio — " + data.name
    );

    const body = encodeURIComponent(
      "Nome: " +
        data.name +
        "\nE-mail: " +
        data.email +
        "\n\n" +
        data.message
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Erro ao copiar e-mail:", error);
    }
  };

  return (
    <section
      id="contact"
      className="section-pad bg-[#155eef] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">

        {/* Apresentação */}
        <div>
          <div className="text-[#c3d7ff] text-xs uppercase tracking-[.2em] font-bold mb-5">
            05 / Contato
          </div>

          <h2 className="display text-4xl sm:text-6xl tracking-tight font-bold leading-tight">
            Boas ideias começam com uma conversa.
          </h2>

          <p className="text-[#d9e7ff] mt-6 leading-8 max-w-lg">
            Tem um projeto, uma oportunidade ou quer trocar
            ideias sobre tecnologia? Entre em contato.
          </p>

          {/* E-mail */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Mail size={19} />

            <span className="text-sm sm:text-base break-all">
              {email}
            </span>

            <button
              type="button"
              onClick={copy}
              title="Copiar e-mail"
              aria-label="Copiar e-mail"
              className="p-2 rounded-lg hover:bg-white/15 cursor-pointer"
            >
              {copied ? (
                <Check size={18} />
              ) : (
                <Copy size={18} />
              )}
            </button>

            {copied && (
              <span
                role="status"
                className="text-xs text-green-200"
              >
                Copiado!
              </span>
            )}
          </div>

          {/* Redes profissionais */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="https://github.com/comnailsonrocha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 transition-colors"
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-[#155eef] text-xs font-black">
                GH
              </span>

              <span className="text-sm font-bold">
                GitHub
              </span>

              <ArrowUpRight size={16} />
            </a>

            <a
              href="https://linkedin.com/in/comnailsonrocha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 transition-colors"
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-[#155eef] text-sm font-black">
                in
              </span>

              <span className="text-sm font-bold">
                LinkedIn
              </span>

              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Botão de orçamento */}
          <div className="mt-10">
            <Link
              to="/briefing"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-[#155eef] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#edf4ff] hover:shadow-lg"
            >
              Solicitar orçamento
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Formulário */}
        <form
          onSubmit={send}
          className="rounded-3xl bg-white p-7 sm:p-10 text-[#0b2448] shadow-2xl"
        >
          <h3 className="display text-2xl font-bold mb-6">
            Envie uma mensagem
          </h3>

          {/* Nome */}
          <label
            htmlFor="contact-name"
            className="block text-sm font-bold mb-2"
          >
            Seu nome
          </label>

          <input
            id="contact-name"
            type="text"
            required
            maxLength={100}
            value={data.name}
            onChange={(e) =>
              setData({
                ...data,
                name: e.target.value,
              })
            }
            className="w-full border border-[#d9e4f3] rounded-xl px-4 py-3 mb-5 outline-none focus:border-[#155eef]"
            placeholder="Como você se chama?"
          />

          {/* E-mail */}
          <label
            htmlFor="contact-email"
            className="block text-sm font-bold mb-2"
          >
            Seu e-mail
          </label>

          <input
            id="contact-email"
            type="email"
            required
            maxLength={150}
            value={data.email}
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            className="w-full border border-[#d9e4f3] rounded-xl px-4 py-3 mb-5 outline-none focus:border-[#155eef]"
            placeholder="voce@exemplo.com"
          />

          {/* Mensagem */}
          <label
            htmlFor="contact-message"
            className="block text-sm font-bold mb-2"
          >
            Sua mensagem
          </label>

          <textarea
            id="contact-message"
            required
            rows={4}
            maxLength={3000}
            value={data.message}
            onChange={(e) =>
              setData({
                ...data,
                message: e.target.value,
              })
            }
            className="w-full border border-[#d9e4f3] rounded-xl px-4 py-3 mb-5 outline-none focus:border-[#155eef] resize-y"
            placeholder="Conte sobre sua ideia..."
          />

          {/* Enviar */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-[#155eef] hover:bg-[#0c48cb] text-white rounded-xl py-4 font-bold cursor-pointer transition-colors"
          >
            Preparar e-mail
            <ArrowUpRight size={18} />
          </button>

          <p className="text-xs text-[#8190a4] text-center mt-4 leading-5">
            Seu aplicativo de e-mail abrirá para você
            revisar e enviar a mensagem.
          </p>
        </form>
      </div>
    </section>
  );
}
