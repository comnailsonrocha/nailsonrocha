import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

export default function CertificadosView({ onBack }) {
  const allCertificates = [
    {
      id: 1,
      title: 'Formação Prática em Engenharia de Dados',
      issuer: 'DataEngineer.Help',
      category: 'Dados & Infra',
      hours: 'Em andamento',
      description: 'Módulos práticos focados em SQL Avançado, Modelagem de Dados, Pipelines ETL, Pandas, Docker e Python.',
      link: 'https://dataengineer.help'
    },
    {
      id: 2,
      title: 'Graduação em Ciência de Dados',
      issuer: 'Gran Faculdade',
      category: 'Acadêmico',
      hours: 'Ensino Superior',
      description: 'Formação superior focada em análise, tratamento de dados, matemática aplicada e tecnologias modernas.',
      link: 'https://granfaculdade.edu.br'
    },
    {
      id: 3,
      title: 'Curso de Scrum Básico (Agile & Scrum Master)',
      issuer: 'Udemy',
      category: 'Metodologias Ágeis',
      hours: '39 minutos',
      description: 'Fundamentos de Scrum, dinâmicas de Product Owner, Scrum Master, Sprint Planning, Daily, Review e Retrospective.',
      link: 'https://www.udemy.com'
    },
    {
      id: 4,
      title: 'Certificado Unificado: JavaScript',
      issuer: 'DevMedia',
      category: 'Desenvolvimento Web',
      hours: '127 horas',
      description: 'Trilha completa com AJAX, Arrays, Funções, Manipulação de Strings, Estruturas Condicionais e Lógica.',
      link: 'https://www.devmedia.com.br/certificado/unificado/javascript/nailson-rocha'
    },
    {
      id: 5,
      title: 'Certificado Unificado: React',
      issuer: 'DevMedia',
      category: 'Frontend',
      hours: '68 horas',
      description: 'Estudos aprofundados em Componentização, Props, State Hook, Eventos e arquitetura de aplicações React.',
      link: 'https://www.devmedia.com.br/certificado/unificado/react/nailson-rocha'
    },
    {
      id: 6,
      title: 'Certificado Unificado: Front-end Web',
      issuer: 'DevMedia',
      category: 'Frontend',
      hours: 'Trilha Completa',
      description: 'Domínio em HTML5, CSS3, Flexbox, Posicionamento, Tabelas, Formulários e boas práticas de estilização.',
      link: 'https://www.devmedia.com.br/certificado/unificado/front-end-web/nailson-rocha'
    },
    {
      id: 7,
      title: 'Certificado Unificado: Angular',
      issuer: 'DevMedia',
      category: 'Frameworks',
      hours: '42 horas',
      description: 'Componentes, Tooltips, Ligação de Eventos, Estruturas e gerenciamento de dados em Angular.',
      link: 'https://www.devmedia.com.br/certificado/unificado/angular/nailson-rocha'
    },
    {
      id: 8,
      title: 'Certificado Unificado: Algoritmo',
      issuer: 'DevMedia',
      category: 'Lógica',
      hours: '49 horas',
      description: 'Lógica de programação, Portugol, estruturas de repetição, condicionais e operadores aritméticos.',
      link: 'https://www.devmedia.com.br/certificado/unificado/algoritmo/nailson-rocha'
    },
    {
      id: 9,
      title: 'Certificado Unificado: Outros Cursos (Backend & Web)',
      issuer: 'DevMedia',
      category: 'Backend',
      hours: '15 horas',
      description: 'Publicação de sites na internet e introdução ao desenvolvimento Back-end.',
      link: 'https://www.devmedia.com.br/certificado/unificado/outros/nailson-rocha'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#f2f2f2] text-slate-900 py-24 px-6 lg:px-12 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-b border-slate-300 pb-8">
          <div className="space-y-3">
            <span className="text-blue-600 font-sans text-sm font-medium tracking-wide">
              Acervo oficial de formação
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold font-sans tracking-tight text-slate-900 leading-[1.1]">
              Certificações & Cursos
            </h1>
          </div>
          <button
            onClick={onBack}
            className="px-6 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-800 font-sans text-sm font-semibold hover:bg-slate-100 transition-all cursor-pointer flex items-center gap-2 shadow-sm"
          >
            <span>← Voltar ao Início</span>
          </button>
        </div>

        {/* Grade de Certificados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {allCertificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full font-semibold">
                    {cert.category}
                  </span>
                  <span className="text-slate-500 bg-slate-100 px-3.5 py-1 rounded-full font-medium">
                    {cert.hours}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-sans text-slate-900 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-sans text-slate-500 font-medium">
                  Emissor: <span className="text-slate-800 font-semibold">{cert.issuer}</span>
                </p>

                <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-sans">
                <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
                  <span>Verificado</span> ✓
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all flex items-center gap-1.5 shadow-sm group/link"
                >
                  <span>Ver Oficial</span>
                  <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}