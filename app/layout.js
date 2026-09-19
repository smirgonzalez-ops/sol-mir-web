import "./globals.css";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import JsonLd from "./components/JsonLd";
import { tarjeta } from "./compartir";
import { Analytics } from "@vercel/analytics/next";

const title = "Sol Mir | EJE® - Sistema de Inteligencia Estructural Humana";
const description =
  "EJE® no te dice quién sos. Te muestra cómo estás respondiendo y dónde todavía puede existir elección.";

// Quién es Sol y qué es el sitio, para buscadores. Va en todas las páginas.
const SITIO = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.solmir.co/#sol",
      "name": "Sol Mir",
      "jobTitle": "Creadora de EJE®",
      "description": "Creadora de EJE®, una metodología de Inteligencia Estructural Humana.",
      "url": "https://www.solmir.co/sobre-sol",
      "image": "https://www.solmir.co/sol-retrato.jpg",
      "knowsAbout": [
        "Inteligencia Estructural Humana",
        "EJE®"
      ],
      "sameAs": [
        "https://www.instagram.com/soy_solmir",
        "https://www.linkedin.com/in/soledadmirgonzalez",
        "https://www.linkedin.com/company/eje-inteligencia-estructural-humana"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.solmir.co/#sitio",
      "url": "https://www.solmir.co",
      "name": "Sol Mir · EJE®",
      "inLanguage": "es-AR",
      "publisher": {
        "@id": "https://www.solmir.co/#sol"
      }
    }
  ]
};

export const metadata = {
  metadataBase: new URL("https://www.solmir.co"),
  title: {
    default: title,
    template: "%s | Sol Mir",
  },
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  ...tarjeta({ title, description, path: "/" }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <JsonLd data={SITIO} />
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <SiteHeader />

        <main id="contenido">{children}</main>

        <footer>
          <div className="container">
            <div>
              <p className="footer-heading">EJE®</p>
              <p>Sistema de Inteligencia Estructural Humana</p>
              <p className="muted">Creado por Sol Mir</p>
            </div>
            <div>
              <p className="footer-heading">Navegación</p>
              <div className="footer-links">
                <Link href="/">Inicio</Link>
                <Link href="/que-es-eje">Qué es EJE®</Link>
                <Link href="/sobre-sol">Sobre Sol</Link>
                <Link href="/ebook">Ebook</Link>
                <Link href="/contacto">Contacto</Link>
              </div>
            </div>
            <div>
              <p className="footer-heading">Legal</p>
              <div className="footer-links">
                <Link href="/politica-privacidad">Privacidad</Link>
                <Link href="/terminos">Términos</Link>
                <Link href="/politica-compra">Compra</Link>
              </div>
            </div>
            <div>
              <p className="footer-heading">Comunidad</p>
              <div className="footer-links">
                <a href="https://www.linkedin.com/in/soledadmirgonzalez" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/soy_solmir" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Sol Mir. EJE® es una marca registrada.</p>
          </div>
        </footer>
        {/* Visitas por página, sin cookies (Vercel Web Analytics). */}
        <Analytics />
      </body>
    </html>
  );
}
