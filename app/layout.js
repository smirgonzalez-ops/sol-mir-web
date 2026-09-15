import "./globals.css";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";

const title = "Sol Mir | EJE® - Sistema de Inteligencia Estructural Humana";
const description =
  "Metodología de autoconocimiento y transformación de patrones vinculares";

export const metadata = {
  metadataBase: new URL("https://www.solmir.co"),
  title: {
    default: title,
    template: "%s | Sol Mir",
  },
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "https://www.solmir.co",
    siteName: "EJE®",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/sol-home.jpg",
        width: 760,
        height: 760,
        alt: "Sol Mir, creadora de la Metodología EJE®",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/sol-home.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
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
      </body>
    </html>
  );
}
