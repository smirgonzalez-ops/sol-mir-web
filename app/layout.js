import "./globals.css";

const title = "Sol Mir | EJE® - Sistema de Inteligencia Estructural Humana";
const description =
  "Metodología de autoconocimiento y transformación de patrones vinculares";

export const metadata = {
  metadataBase: new URL("https://solmir.co"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://solmir.co",
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
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <header>
          <div className="container">
            <div className="logo">EJE®</div>
            <nav>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/que-es-eje">Qué es EJE®</a></li>
                <li><a href="/sobre-sol">Sobre Sol</a></li>
                <li><a href="/diario">Diario</a></li>
                <li><a href="/test" className="btn btn-primary btn-nav">Test</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="container">
            <div>
              <h4>EJE®</h4>
              <p>Sistema de Inteligencia Estructural Humana</p>
              <p className="muted">Creado por Sol Mir</p>
            </div>
            <div>
              <h4>Navegación</h4>
              <a href="/">Inicio</a>
              <a href="/que-es-eje">Qué es EJE®</a>
              <a href="/sobre-sol">Sobre Sol</a>
              <a href="/ebook">Ebook</a>
              <a href="/contacto">Contacto</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="/politica-privacidad">Privacidad</a>
              <a href="/terminos">Términos</a>
              <a href="/politica-compra">Compra</a>
            </div>
            <div>
              <h4>Comunidad</h4>
              <a href="https://www.linkedin.com/in/soledadmirgonzalez" target="_blank" rel="noopener">LinkedIn</a>
              <a href="https://www.instagram.com/soy_solmir" target="_blank" rel="noopener">Instagram</a>
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
