import React, { useState } from "react";
import {
  ArrowUpRight,
  Database,
  Container,
  Monitor,
  Timer,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "Pipeline de Dados e Modelagem",
    category: "Dados",
    status: "Em andamento",
    icon: Database,
    desc: "Estudo de um fluxo ETL com Python, Pandas, SQL e PostgreSQL, da extração à modelagem relacional.",
    tags: ["Python", "SQL", "Pandas", "PostgreSQL"],
  },
  {
    title: "Ambiente com Docker",
    category: "Infraestrutura",
    status: "Em andamento",
    icon: Container,
    desc: "Estrutura de desenvolvimento com containers, Docker Compose e scripts Bash em ambiente Linux.",
    tags: ["Docker", "Linux", "Bash"],
  },
  {
    title: "Sistema de Gestão Clínica",
    category: "Web",
    status: "Status a confirmar",
    icon: Monitor,
    desc: "Projeto de aplicação para fluxo de atendimento clínico, com interface e integração de dados.",
    tags: ["Vue.js", "Node.js", "MongoDB"],
  },
  {
    title: "Pomodoro no Terminal",
    category: "Web",
    status: "Status a confirmar",
    icon: Timer,
    desc: "Interface de produtividade inspirada em terminal, com temporizador e organização de tarefas.",
    tags: ["React", "JavaScript", "Vite"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("Todos");

  const filtered =
    filter === "Todos"
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-[#155eef] font-bold text-xs uppercase tracking-[.2em] mb-5">
          03 / Portfólio
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <h2 className="display text-4xl sm:text-5xl font-bold tracking-tight text-[#0b2448]">
              Projetos que contam
              <br />
              <span className="text-[#155eef]">
                minha evolução.
              </span>
            </h2>

            <p className="text-[#61738d] mt-5 max-w-xl leading-7">
              Experimentos, estudos e aplicações. Os projetos
              em andamento estão identificados.
            </p>
          </div>

          <a
            href="https://github.com/nailsonengineer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-2 items-center text-[#155eef] font-bold"
          >
            Ver GitHub
            <ExternalLink size={17} />
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mt-10 mb-8">
          {["Todos", "Dados", "Infraestrutura", "Web"].map(
            category => (
              <button
                key={category}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
                className={`rounded-xl px-5 py-2.5 text-sm font-bold border cursor-pointer ${
                  filter === category
                    ? "bg-[#155eef] text-white border-[#155eef]"
                    : "bg-white text-[#58708f] border-[#dce6f4] hover:border-[#155eef]"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map(project => (
            <article
              key={project.title}
              className="rounded-2xl overflow-hidden border border-[#e0e9f6] bg-white transition-shadow hover:shadow-xl hover:shadow-blue-100/60"
            >
              <div className="relative h-52 bg-[#edf4ff] grid-paper flex items-center justify-center">
                <div className="rounded-3xl bg-white border border-[#dce7f7] shadow-lg w-24 h-24 flex items-center justify-center text-[#155eef]">
                  <project.icon
                    size={46}
                    strokeWidth={1.5}
                  />
                </div>

                <span className="absolute top-5 left-5 bg-white text-[#155eef] rounded-lg px-3 py-1.5 text-xs font-bold">
                  {project.category}
                </span>
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="display font-bold text-[#0b2448] text-xl">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-[#155eef] shrink-0"
                  />
                </div>

                <span className="text-xs text-[#7c8da4] font-semibold mt-2 block">
                  {project.status}
                </span>

                <p className="text-[#61738d] mt-4 leading-7">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-bold text-[#3d5f8c] bg-[#f2f6fc] rounded-lg px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#8291a5]">
          Revise o status dos projetos web antes de publicar.
          Links individuais podem ser adicionados quando disponíveis.
        </p>
      </div>
    </section>
  );
}