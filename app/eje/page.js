import Link from "next/link";
import Image from "next/image";
import "./eje-editorial.css";

export const metadata = {
  title: "EJE® | Cuatro áreas, una mirada a tu vida",
  description: "Conocé EJE® y el Test EJE®: 42 preguntas, unos 15 minutos y un Mapa Estructural personal para mirar vínculos, trabajo, dinero e identidad.",
};

const areas = [
  { num: "01", title: "Vínculos", copy: "Cómo te vinculás, qué lugar ocupás y qué respuestas se repiten en tus relaciones." },
  { num: "02", title: "Trabajo", copy: "Qué sostenés, cuánto te exigís y qué lugar tiene el trabajo en tu vida." },
  { num: "03", title: "Dinero", copy: "Cómo tomás decisiones económicas y qué se repite cuando necesitás seguridad." },
  { num: "04", title: "Identidad", copy: "Qué elegís para vos y qué parte de tu vida queda a veces en segundo plano." },
];

export default function EjeHomeEditorial() {
  return (
    <main className="eje-site" id="inicio">
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
            <Link href="/test" className="eje-top-cta">Conocer el Test</Link>
          </div>
          <div className="eje-hero-body">
            <p className="eje-kicker eje-light-kicker">SISTEMA EJE®</p>
            <h1>Entendés por qué lo hacés.<br />Igual volvés a hacerlo.</h1>
            <p className="eje-hero-intro">Hay cosas que se repiten en tus vínculos, trabajo, dinero e identidad. EJE® te propone mirarlas en conjunto.</p>
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
            <h2 id="chair-heading" className="eje-section-title">Cuatro patas.<br />Una manera de mirar tu vida.</h2>
            <p>Imaginá tu vida como una silla. Sus cuatro patas son Vínculos, Trabajo, Dinero e Identidad. El respaldo representa estar en eje.</p>
            <p>Las decisiones atraviesan las cuatro áreas. No son una quinta pata.</p>
          </div>
          <figure className="eje-chair-figure">
            <a href="/mapa-silla.jpg" target="_blank" rel="noopener noreferrer" aria-label="Ver la silla real de un Mapa Estructural EJE en tamaño completo">
              <Image src="/mapa-silla.jpg" alt="Ejemplo real de la silla del Mapa Estructural EJE®" width={880} height={1243} sizes="(max-width: 768px) 82vw, 380px" />
            </a>
            <figcaption>Muestra real del Mapa Estructural. Ampliar para leer.</figcaption>
          </figure>
        </div>
      </section>

      <section className="eje-test-section" id="test" aria-labelledby="test-heading">
        <div className="eje-wrap eje-test-grid">
          <div>
            <p className="eje-kicker">TEST EJE®</p>
            <h2 id="test-heading" className="eje-section-title">Tu Mapa Estructural EJE®.</h2>
            <p>42 preguntas para observar qué se repite en tu vida y cómo aparece en tus vínculos, trabajo, dinero e identidad.</p>
            <div className="eje-map-preview">
              <a href="/mapa-silla.jpg" target="_blank" rel="noopener noreferrer" aria-label="Ampliar muestra real del Mapa EJE">
                <Image src="/mapa-silla.jpg" alt="Muestra real de una página del Mapa Estructural EJE®" width={880} height={1243} sizes="(max-width: 768px) 76vw, 300px" />
              </a>
              <span>Una muestra real del formato que recibís</span>
            </div>
          </div>
          <div className="eje-offer">
            <p className="eje-offer-label">QUÉ INCLUYE</p>
            <ul>
              <li>42 preguntas, aproximadamente 15 minutos</li>
              <li>Mapa personalizado de 4 páginas en PDF</li>
              <li>Lectura grabada con la voz de Sol</li>
              <li>Certificado personalizado</li>
              <li>Imagen del resultado</li>
              <li>Opción de recibir el Mapa por correo</li>
            </ul>
            <p className="eje-price">USD 27 <span>· pago único</span></p>
            <Link className="eje-btn eje-btn-wide" href="/test">Conocer el Test EJE®</Link>
            <p className="eje-disclaimer">Podés repetirlo sin pagar nuevamente. No es un diagnóstico ni una evaluación psicológica validada.</p>
          </div>
        </div>
      </section>

      <section className="eje-founder-section" aria-labelledby="founder-heading">
        <div className="eje-wrap eje-founder-grid">
          <div className="eje-photo-placeholder" aria-label="Espacio reservado para fotografía real de Sol Mir">Fotografía de Sol Mir</div>
          <div>
            <p className="eje-kicker">SOL MIR</p>
            <h2 id="founder-heading" className="eje-section-title">La creadora de EJE®.</h2>
            <p>Soy Sol Mir. Creé EJE® para mirar cómo se conectan distintas áreas de nuestra vida y reconocer aquello que repetimos.</p>
            <Link className="eje-text-link" href="/sobre-sol">Conocé mi historia</Link>
          </div>
        </div>
      </section>

      <section className="eje-ebook-section" aria-labelledby="ebook-heading">
        <div className="eje-wrap eje-ebook-grid">
          <div className="eje-ebook-placeholder">Portada original<br />del eBook</div>
          <div>
            <p className="eje-kicker">RECURSO GRATUITO</p>
            <h2 id="ebook-heading" className="eje-section-title">Tu vida, tus respuestas, tu mapa.</h2>
            <p>Conocé la idea de la silla y empezá a mirar las cuatro áreas de tu vida.</p>
            <Link className="eje-text-link" href="/ebook">Conocer el eBook</Link>
          </div>
        </div>
      </section>

      <section className="eje-faq-section" aria-labelledby="faq-heading">
        <div className="eje-wrap eje-faq-grid">
          <h2 id="faq-heading" className="eje-section-title">Preguntas frecuentes.</h2>
          <div>
            <details><summary>¿Qué es EJE®?</summary><p>Es un sistema de autoconocimiento que propone mirar en conjunto cuatro áreas de tu vida: Vínculos, Trabajo, Dinero e Identidad.</p></details>
            <details><summary>¿Qué recibo al hacer el Test?</summary><p>Un Mapa Estructural personalizado de cuatro páginas, además de los recursos incluidos en la oferta.</p></details>
            <details><summary>¿Cómo funciona la compra?</summary><p>El Test cuesta USD 27, en un único pago. Encontrás las opciones de pago y acceso en la página del Test.</p></details>
          </div>
        </div>
      </section>

      <footer className="eje-footer">
        <div className="eje-wrap eje-footer-grid">
          <div><Image src="/eje-logotipo-oficial-oscuro.svg" alt="EJE®" width={108} height={79}/><p>Una mirada a las cuatro áreas de tu vida.</p></div>
          <div><Link href="/que-es-eje">Qué es EJE®</Link><Link href="/test">Test EJE®</Link><Link href="/sobre-sol">Sol Mir</Link><Link href="/contacto">Contacto</Link></div>
        </div>
      </footer>
    </main>
  );
}
