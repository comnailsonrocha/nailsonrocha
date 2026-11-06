import React from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Database,
  Code2,
  GitBranch,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#f7faff]"
    >
      <div className="absolute inset-0 grid-paper opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-24 grid lg:grid-cols-[1.08fr_.92fr] items-center gap-16">
        <div>
          <div className="inline-flex items-center gap-2 text-[#155eef] bg-[#eaf1ff] border border-[#d7e5ff] rounded-full px-4 py-2 text-xs font-bold tracking-wide mb-8">
            <span className="h-2 w-2 bg-[#155eef] rounded-full" />
            PORTFÓLIO · SALVADOR, BA
          </div>

          <h1 className="display text-[clamp(3rem,6vw,5.5rem)] leading-[1.04] font-bold tracking-[-.055em] text-[#0b2448]">
            Dados que geram{" "}
            <span className="text-[#155eef]">clareza.</span>
            <br />
            Código que cria{" "}
            <span className="text-[#155eef]">soluções.</span>
          </h1>

          <p className="mt-7 text-[#536783] text-lg leading-relaxed max-w-xl">
            Sou Nailson Rocha. Estudo Ciência de Dados e
            desenvolvo projetos de engenharia de dados,
            aplicações web e infraestrutura, conectando
            análise e tecnologia a desafios reais.
          </p>

          <div className="flex flex-wrap gap-3 mt-9">
            <a
              href="#projects"
              className="bg-[#155eef] hover:bg-[#0c48cb] text-white font-bold text-sm rounded-xl px-6 py-4 flex items-center gap-2"
            >
              Conhecer projetos
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="border border-[#cbd8ed] bg-white hover:border-[#155eef] text-[#0e2b54] font-bold text-sm rounded-xl px-6 py-4"
            >
              Entrar em contato
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-[#5d718d]">
            {[
              "Engenharia de Dados",
              "Desenvolvimento Web",
            ].map(item => (
              <span
                key={item}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  size={17}
                  className="text-[#155eef]"
                />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[30px] bg-[#0b2e67] p-5 sm:p-8 shadow-[0_28px_70px_#123e812b] relative overflow-hidden">
            <div className="absolute right-15 top-17.5 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl" />

            <div className="relative flex items-center justify-between text-white/70 text-xs font-mono mb-7">
              <span>workflow / arquitetura</span>
              <span className="flex gap-1.5">
                {[1, 2, 3].map(i => (
                  <i
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#6ea4ff]"
                  />
                ))}
              </span>
            </div>

            <div className="relative grid grid-cols-3 gap-2 sm:gap-3 items-center">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-3 sm:p-5 text-white text-center">
                <Database className="mx-auto mb-3 text-[#9fc4ff]" />
                <div className="text-xs font-bold">Origem</div>
                <div className="text-[10px] text-white/60 mt-1">
                  SQL / APIs
                </div>
              </div>

              <div className="bg-[#3177ff] border border-[#6a9eff] rounded-2xl p-3 sm:p-5 text-white text-center shadow-lg">
                <GitBranch className="mx-auto mb-3" />
                <div className="text-xs font-bold">Pipeline</div>
                <div className="text-[10px] text-white/80 mt-1">
                  Python / ETL
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-3 sm:p-5 text-white text-center">
                <Code2 className="mx-auto mb-3 text-[#9fc4ff]" />
                <div className="text-xs font-bold">Entrega</div>
                <div className="text-[10px] text-white/60 mt-1">
                  Web / BI
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-[#071d43] border border-white/10 p-4 font-mono text-[11px] sm:text-xs leading-7">
              <div className="text-[#79b4ff]">
                $ pipeline.run()
              </div>
              {["extract", "transform", "load"].map(
                (step, i) => (
                  <div
                    key={step}
                    className="text-[#b9cce8]"
                  >
                    → {step}{" "}
                    <span className="text-[#6ee7b7]">
                      {i === 2 ? "ready" : "success"}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 sm:-left-8 rounded-xl bg-white shadow-xl border border-[#e4ebf6] px-5 py-4">
            <span className="text-[#155eef] font-bold text-sm">
              Python · SQL · React
            </span>
            <div className="text-[#74849b] text-xs mt-1">
              Tecnologias em prática
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#e1eaf8] bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-4 justify-between items-center text-[#5c7190] text-sm">
          <span className="font-semibold">
            Aprendendo. Construindo. Evoluindo.
          </span>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-[#155eef] font-bold"
          >
            Conheça minha trajetória
            <ArrowDown size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}