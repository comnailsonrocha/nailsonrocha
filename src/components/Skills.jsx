import React from "react";
import { Database, Code2, Server } from "lucide-react";

const skills = [
  {
    icon: Database,
    n: "01",
    title: "Engenharia de Dados",
    text: "Extração, tratamento, consultas e modelagem de dados para transformar informação em estruturas úteis.",
    tags: ["Python", "Pandas", "SQL", "PostgreSQL", "ETL"],
  },
  {
    icon: Code2,
    n: "02",
    title: "Desenvolvimento Web",
    text: "Interfaces responsivas e aplicações web com atenção à experiência do usuário e à organização do código.",
    tags: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    icon: Server,
    n: "03",
    title: "Infraestrutura & DevOps",
    text: "Ambientes de desenvolvimento, containers, versionamento e ferramentas para fluxos reproduzíveis.",
    tags: [
      "Linux",
      "Docker",
      "Docker Compose",
      "Git",
      "Bash",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-pad bg-[#f5f9ff]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-[#155eef] font-bold text-xs uppercase tracking-[.2em] mb-5">
          02 / Especialidades
        </div>

        <div className="flex flex-wrap justify-between gap-5 items-end mb-12">
          <h2 className="display text-4xl sm:text-5xl font-bold text-[#0b2448] tracking-tight">
            Onde tecnologia
            <br />
            <span className="text-[#155eef]">
              vira prática.
            </span>
          </h2>
          <p className="max-w-md text-[#536783] leading-7">
            Uma base multidisciplinar que conecta engenharia
            de dados, aplicações e ambientes de desenvolvimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {skills.map(item => (
            <article
              key={item.n}
              className="bg-white border border-[#e0e9f6] rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-[#eaf1ff] flex items-center justify-center text-[#155eef]">
                  <item.icon size={28} />
                </div>
                <span className="text-[#9eb0c9] font-mono text-xs">
                  {item.n}
                </span>
              </div>

              <h3 className="display text-2xl font-bold text-[#0b2448] mt-8">
                {item.title}
              </h3>

              <p className="text-[#61738d] mt-4 leading-7 min-h-28">
                {item.text}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-[#f2f6fc] text-[#315a93] px-3 py-1.5 rounded-lg text-xs font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}