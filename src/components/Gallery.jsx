import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";

export default function Gallery() {
  const scrollRef = useRef(null);

  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80', caption: 'Desenvolvimento' },
    { id: 2, url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80', caption: 'Análise de Dados' },
    { id: 3, url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', caption: 'Infraestrutura' },
    { id: 4, url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80', caption: 'Dashboards' },
    { id: 5, url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', caption: 'Processamento' },
    { id: 6, url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80', caption: 'Arquitetura' },
    { id: 7, url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80', caption: 'Estudos' },
    { id: 8, url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80', caption: 'DevOps' },
    { id: 9, url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', caption: 'Clean Code' },
    { id: 10, url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80', caption: 'Foco' },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#101c3a] text-slate-100 relative overflow-hidden py-8">
      
      {/* Cabeçalho Refinado da Galeria */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-400 font-sans text-xs font-semibold uppercase tracking-wider">
              Bastidores & Rotina
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-white">
            Galeria de Atuação
          </h3>
          <p className="text-slate-300 text-sm sm:text-base font-sans max-w-xl leading-relaxed">
            Registros visuais do ambiente profissional, frentes de estudo e tecnologias aplicadas.
          </p>
        </div>

        {/* Botões de Navegação do Carrossel (Mobile) */}
        <div className="flex items-center gap-3 sm:hidden self-end">
          <button
            onClick={() => scroll('left')}
            className="w-11 h-11 rounded-2xl bg-slate-800/80 border border-slate-700 text-white flex items-center justify-center hover:bg-slate-700 transition-all cursor-pointer shadow-lg backdrop-blur-sm"
            aria-label="Anterior"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-11 h-11 rounded-2xl bg-slate-800/80 border border-slate-700 text-white flex items-center justify-center hover:bg-slate-700 transition-all cursor-pointer shadow-lg backdrop-blur-sm"
            aria-label="Próximo"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Conteúdo com Afastamento de 0.5rem (p-2 / p-3) nas bordas e entre os itens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div 
          ref={scrollRef}
          className="flex sm:grid sm:grid-cols-3 md:grid-cols-5 gap-4 overflow-x-auto sm:overflow-visible snap-x sm:snap-none scrollbar-none py-2 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="relative group overflow-hidden rounded-3xl bg-slate-900 aspect-square border border-slate-700/60 shadow-xl transition-all shrink-0 w-64 sm:w-auto snap-start hover:scale-[1.03] hover:border-blue-500/50"
            >
              <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0 opacity-85 group-hover:opacity-100" 
              />
              
              {/* Overlay com Efeito Gradiente e Legenda */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101c3a] via-[#101c3a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold text-white tracking-wide">
                    {photo.caption}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                    <FiMaximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      
    </div>
  );
}