"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["/", "Inicio"],
  ["/que-es-eje", "Qué es EJE®"],
  ["/sobre-sol", "Sobre Sol"],
  ["/diario", "Diario"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container header-inner">
        <Link className="logo" href="/" aria-label="EJE®, ir al inicio">
          EJE®
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span aria-hidden="true">{open ? "Cerrar" : "Menú"}</span>
          <span className="sr-only">navegación principal</span>
        </button>
        <nav
          id="main-navigation"
          className={open ? "is-open" : undefined}
          aria-label="Navegación principal"
        >
          <ul>
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href} onClick={() => setOpen(false)}>{label}</Link>
              </li>
            ))}
            <li>
              <Link href="/test" className="btn btn-primary btn-nav" onClick={() => setOpen(false)}>
                Test
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
