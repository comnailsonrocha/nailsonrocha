import React from "react";
import {
  ArrowUpRight,
  GraduationCap,
  MapPin,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-24">
        <div>
          <div className="text-[#155eef] font-bold text-xs uppercase tracking-[.2em] mb-5">
            01 / Sobre mim
          </div>

          <h2 className="display text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-[#0b2448]">
            Uma trajetória em evolução, guiada pela{" "}
            <span className="text-[#155eef]">
              curiosidade.
            </span>
          </h2>

          <p className="text-[#536783] mt-6 leading-8">
            Minha experiência em diferentes áreas me ensinou
            disciplina, responsabilidade e resolução de problemas.
            Hoje aplico essa bagagem na construção de uma carreira
            em tecnologia, com foco em dados e desenvolvimento web.
          </p>

          <a
            href="#education"
            className="mt-8 inline-flex items-center gap-2 text-[#155eef] font-bold hover:gap-3"
          >
            Ver minha formação
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-[#dfe9f7] bg-[#f7faff] p-7">
            <GraduationCap
              className="text-[#155eef] mb-4"
              size={28}
            />
            <h3 className="font-bold text-[#0b2448] text-lg">
              Formação em andamento
            </h3>
            <p className="text-[#536783] mt-2 leading-7">
              Graduação em Ciência de Dados na Gran Faculdade
              e formação prática em Engenharia de Dados pela
              DataEngineer.Help.
            </p>
          </div>

          <div className="rounded-2xl border border-[#dfe9f7] p-7">
            <MapPin
              className="text-[#155eef] mb-4"
              size={28}
            />
            <h3 className="font-bold text-[#0b2448] text-lg">
              De Salvador para o digital
            </h3>
            <p className="text-[#536783] mt-2 leading-7">
              Desenvolvendo soluções, estudando continuamente
              e aberto a projetos, colaborações e oportunidades
              profissionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}