import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5edf8]">
      <div className="max-w-7xl mx-auto px-6 py-9 flex flex-col sm:flex-row gap-5 items-center justify-between">
        <div>
          <strong className="text-[#0b2448]">
            Nailson Rocha
          </strong>

          <p className="text-[#7b8ba1] text-xs mt-1">
            © {new Date().getFullYear()} ·
            Dados & Desenvolvimento Web
          </p>
        </div>

        <a
          href="#hero"
          className="text-sm font-bold text-[#155eef]"
        >
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}