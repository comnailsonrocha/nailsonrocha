
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  const links = [
    ["Sobre", "about"],
    ["Especialidades", "skills"],
    ["Projetos", "projects"],
    ["Formação", "education"],
  ];

  const sectionHref = (id) =>
    isHome ? `#${id}` : `/#${id}`;

  return (
    <header className="sticky top-0 z-50 border-b border-[#e4ebf6] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 h-20.5 flex items-center justify-between">
        <Link
          to="/#hero"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="w-11 h-11 rounded-xl bg-[#155eef] text-white display font-bold text-xl flex items-center justify-center">
            nr.
          </span>

          <span className="leading-tight">
            <strong className="block text-[#0d2346] text-[15px]">
              Nailson Rocha
            </strong>
            <small className="block text-[#6c7d96] text-xs mt-1">
              Dados & Desenvolvimento
            </small>
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-8"
        >
          {links.map(([label, id]) => (
            <a
              key={id}
              className="text-sm font-semibold text-[#52627c] hover:text-[#155eef]"
              href={sectionHref(id)}
            >
              {label}
            </a>
          ))}

          <a
            className="bg-[#155eef] text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#0c48cb] inline-flex gap-2 items-center"
            href={sectionHref("contact")}
          >
            Vamos conversar
            <ArrowUpRight size={17} />
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden border border-[#dce5f4] rounded-xl p-2"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t border-[#e4ebf6] p-6 flex flex-col gap-5">
          {[...links, ["Contato", "contact"]].map(([label, id]) => (
            <a
              key={id}
              onClick={() => setOpen(false)}
              href={sectionHref(id)}
              className="font-semibold text-[#12345b]"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
