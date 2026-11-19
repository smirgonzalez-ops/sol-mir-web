import Link from "next/link";
import Image from "next/image";
import "./eje-editorial.css";

export const metadata = {
  title: "EJE® | Cuatro áreas, una mirada a tu vida",
  description: "Conocé EJE® y el Test EJE®: 42 preguntas, unos 15 minutos y un Mapa Estructural personal para mirar vínculos, trabajo, dinero e identidad.",
  alternates: { canonical: "/eje" },
};

const areas = [
  { num: "01", title: "Vínculos", copy: "Cómo respondés con las personas que te importan." },
  { num: "02", title: "Trabajo", copy: "Cómo respondés frente a lo que te piden y las responsabilidades que asumís." },
  { num: "03", title: "Dinero", copy: "Cómo respondés cuando tenés que tomar decisiones sobre tu plata." },
  { num: "04", title: "Identidad", copy: "Cómo te tratás, qué lugar te das y qué decisiones tomás respecto de vos." },
];

export default function EjeHomeEditorial() {
  return (
    <div className="eje-site" id="inicio">
      <section className="eje-dark-hero">
        <div className="eje-wrap">
          <div className="eje-brand-row">
            <Link href="/eje" aria-label="EJE, volver al inicio" className="eje-brand">
              <Image src="/eje-logotipo-oficial-oscuro.svg" alt="EJE®" width={136} height={100} priority />
            </Link>
            <nav className="eje-local-nav" aria-label="Secciones de EJE">
              <a href="#areas">Las cuatro áreas</a>
              <a href="#silla">La silla</a>
              <a href="#test">El Test</a>
              <Link href="/sobre-sol">Sol Mir</Link>
            </nav>
            <details className="eje-mobile-nav">
              <summary aria-label="Abrir menú de EJE">Menú</summary>
              <nav aria-label="Secciones de EJE en móvil">
                <a href="#areas">Las cuatro áreas</a>
                <a href="#silla">La silla</a>
                <a href="#test">El Test</a>
                <Link href="/sobre-sol">Sol Mir</Link>
              </nav>
            </details>
            <Link href="/test" className="eje-top-cta">Conocer el Test EJE®</Link>
          </div>
          <div className="eje-hero-body">
            <p className="eje-kicker eje-light-kicker">SISTEMA EJE®</p>
            <h1>Entendés por qué lo hacés.<br />Igual volvés a hacerlo.</h1>
            <p className="eje-hero-intro">Una manera de observar cómo se repiten tus respuestas en vínculos, trabajo, dinero e identidad.</p>
            <Link className="eje-btn" href="/test">Conocer el Test EJE®</Link>
          </div>
        </div>
      </section>

      <section className="eje-areas" id="areas" aria-labelledby="areas-heading">
        <div className="eje-wrap">
          <p className="eje-kicker">CUATRO ÁREAS</p>
          <h2 id="areas-heading" className="eje-section-title">Lo que pasa en un área puede aparecer también en otra.</h2>
          <div className="eje-area-grid">
            {areas.map((area) => (
              <article className="eje-area" key={area.num}>
                <span className="eje-area-num">{area.num}</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="eje-chair-section" id="silla" aria-labelledby="chair-heading">
        <div className="eje-wrap eje-chair-grid">
          <div>
            <p className="eje-kicker">LA SILLA EJE®</p>
            <h2 id="chair-heading" className="eje-section-title">¿En qué te estás apoyando hoy?</h2>
            <p>Imaginá tu vida como una silla de cuatro patas: Vínculos, Trabajo, Dinero e Identidad. No siempre cargan el mismo peso. A veces una termina sosteniendo más que las otras.</p>
            <p>El respaldo representa estar en eje. Las decisiones atraviesan las cuatro áreas.</p>
          </div>
          <figure className="eje-original-chair">
            <Image src="/eje-silla-editorial-aprobada.webp" alt="Silla editorial EJE® de cuatro patas, con Vínculos, Trabajo, Dinero e Identidad y el respaldo Estar en eje." width={1312} height={1199} sizes="(max-width: 800px) 90vw, 500px" />
          </figure>
        </div>
      </section>

      <section className="eje-test-section" id="test" aria-labelledby="test-heading">
        <div className="eje-wrap eje-test-grid">
          <div>
            <p className="eje-kicker">TEST EJE®</p>
            <h2 id="test-heading" className="eje-section-title">Tu Mapa Estructural EJE®</h2>
            <p>Al terminar el Test, recibís un Mapa Estructural personalizado de cuatro páginas.</p><p>Tu Mapa muestra qué formas de responder tuvieron más peso en tus respuestas y cómo aparecen en Vínculos, Trabajo, Dinero e Identidad. Es una foto de este momento. No define quién sos.</p>
            <div className="eje-map-preview">
              <a href="/mapa-silla.jpg" target="_blank" rel="noopener noreferrer" aria-label="Ampliar muestra real del Mapa EJE">
                <Image src="/mapa-silla.jpg" alt="Muestra real de una página del Mapa Estructural EJE®" width={880} height={1243} sizes="(max-width: 768px) 76vw, 300px" />
              </a>
              <span>Una muestra real del formato que recibís</span>
            </div>
          </div>
          <div className="eje-offer">
            <p className="eje-offer-label">CÓMO ES</p>
            <p className="eje-offer-process">42 preguntas · aproximadamente 15 minutos</p>
            <p className="eje-offer-label">QUÉ RECIBÍS</p>
            <ul>
              <li>Tu Mapa Estructural de 4 páginas en PDF</li>
              <li>La lectura de tu resultado, grabada con la voz de Sol</li>
              <li>Un certificado personalizado</li>
              <li>La imagen de tu resultado</li>
              <li>La opción de enviarte el Mapa por correo</li>
            </ul>
            <p className="eje-price">USD 27 <span>· Pago único</span></p>
            <Link className="eje-btn eje-btn-wide" href="/test">Conocer el Test EJE®</Link>
            <div className="eje-pesos-payment">
              <p><strong>¿Preferís pagar en pesos argentinos?</strong></p>
              <a className="eje-pesos-link" href="https://mpago.la/1Gjzh2t" target="_blank" rel="noopener noreferrer">Pagar ARS 40.000 con Mercado Pago</a>
              <p>El acceso no se envía automáticamente. Después de pagar, <a href="mailto:hola@solmir.co?subject=Acceso%20Test%20EJE%20por%20Mercado%20Pago">pedímelo por correo</a> indicando el correo que usaste en el pago.</p>
            </div>
            <p className="eje-repeat">Pagás una sola vez. Podés volver a hacer el Test cuando quieras.</p><p className="eje-disclaimer">No es un diagnóstico ni una evaluación psicológica validada.</p>
          </div>
        </div>
      </section>

      <section className="eje-founder-section" aria-labelledby="founder-heading">
        <div className="eje-wrap eje-founder-grid">
          <div className="eje-founder-photo-reserved" role="img" aria-label="Espacio reservado para una fotografía real de Sol Mir"><span>Sol Mir</span><small>Fotografía original pendiente</small></div>
          <div>
            <p className="eje-kicker">SOL MIR</p>
            <h2 id="founder-heading" className="eje-section-title">Sol Mir · Creadora de EJE®</h2>
            <p>Creé EJE® porque entender lo que me pasaba no me alcanzaba para dejar de repetirlo.</p>
            <Link className="eje-text-link" href="/sobre-sol">Conocé mi historia</Link>
          </div>
        </div>
      </section>

      <section className="eje-ebook-section" aria-labelledby="ebook-heading">
        <div className="eje-wrap eje-ebook-grid">
          <Image className="eje-ebook-cover" src="/eje-ebook-portada-original.png" alt="Portada original del eBook Tu vida, tus respuestas, tu mapa" width={680} height={850} sizes="(max-width: 540px) 190px, 220px" />
          <div>
            <p className="eje-kicker">RECURSO GRATUITO</p>
            <h2 id="ebook-heading" className="eje-section-title">Tu vida, tus respuestas, tu mapa.</h2>
            <p>Una guía para ver qué repetís y dónde te pesa más.</p>
            <Link className="eje-text-link" href="/ebook">Conocer el eBook</Link>
          </div>
        </div>
      </section>

      <section className="eje-faq-section" aria-labelledby="faq-heading">
        <div className="eje-wrap eje-faq-grid">
          <h2 id="faq-heading" className="eje-section-title">Preguntas frecuentes.</h2>
          <div>
            <details><summary>¿Qué es EJE®?</summary><p>Es un sistema de autoconocimiento que propone mirar en conjunto cuatro áreas de tu vida: Vínculos, Trabajo, Dinero e Identidad.</p></details>
            <details><summary>¿Qué muestra el Test?</summary><p>Qué formas de responder tuvieron más peso en tus respuestas y en qué áreas aparecen. Es una lectura de ese momento, no una etiqueta sobre quién sos.</p></details>
            <details><summary>¿Qué recibo al hacer el Test?</summary><p>Tu Mapa Estructural de cuatro páginas en PDF, la lectura grabada con la voz de Sol, un certificado personalizado y la imagen de tu resultado. También podés enviarte el Mapa por correo.</p></details>
            <details><summary>¿Puedo volver a hacerlo?</summary><p>Sí. Pagás una sola vez y podés repetir el Test cuando quieras, sin otro cargo.</p></details>
            <details><summary>¿Es una evaluación psicológica?</summary><p>No. Es una herramienta de autoconocimiento, no un test psicológico validado, diagnóstico ni tratamiento. No reemplaza el acompañamiento profesional cuando lo necesitás.</p></details>
          </div>
        </div>
      </section>

      <footer className="eje-footer">
        <div className="eje-wrap eje-footer-grid">
          <div><Image src="/eje-logotipo-oficial-oscuro.svg" alt="EJE®" width={108} height={79}/><p>Una mirada a las cuatro áreas de tu vida.</p></div>
          <div><Link href="/que-es-eje">Qué es EJE®</Link><Link href="/test">Test EJE®</Link><Link href="/sobre-sol">Sol Mir</Link><Link href="/contacto">Contacto</Link><Link href="/politica-privacidad">Privacidad</Link><Link href="/terminos">Términos</Link></div>
        </div>
      </footer>
    </div>
  );
}
