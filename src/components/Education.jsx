import React from "react";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Award,
} from "lucide-react";

const education = [
  {
    title: "Ciência de Dados",
    issuer: "Gran Faculdade",
    status: "Graduação em andamento",
    link: "https://granfaculdade.edu.br",
    icon: GraduationCap,
  },
  {
    title: "Formação Prática em Engenharia de Dados",
    issuer: "DataEngineer.Help",
    status: "Em andamento",
    link: "https://dataengineer.help",
    icon: BookOpen,
  },
  {
    title: "Trilhas de desenvolvimento web",
    issuer: "DevMedia",
    status: "JavaScript · React · Front-end · Angular",
    link: "https://www.devmedia.com.br/certificado/unificado/javascript/nailson-rocha",
    icon: Award,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section-pad bg-[#f5f9ff]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-[#155eef] font-bold text-xs uppercase tracking-[.2em] mb-5">
          04 / Formação
        </div>

        <h2 className="display text-4xl sm:text-5xl font-bold text-[#0b2448] tracking-tight mb-12">
          Aprendizado{" "}
          <span className="text-[#155eef]">
            contínuo.
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {education.map(item => (
            <article
              key={item.title}
              className="bg-white border border-[#e0e9f6] rounded-2xl p-7 flex flex-col"
            >
              <item.icon
                size={30}
                className="text-[#155eef]"
              />

              <p className="text-xs font-bold text-[#155eef] mt-7">
                {item.status}
              </p>

              <h3 className="display text-xl font-bold text-[#0b2448] mt-3">
                {item.title}
              </h3>

              <p className="text-[#6b7e98] mt-3 mb-8">
                {item.issuer}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto border-t border-[#e6edf7] pt-5 inline-flex items-center gap-2 text-[#155eef] text-sm font-bold"
              >
                Conhecer instituição / trilha
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>

        <p className="text-[#788ba4] text-xs mt-6">
          Os links de instituições e trilhas não comprovam,
          por si só, a conclusão de certificados individuais.
        </p>
      </div>
    </section>
  );
}