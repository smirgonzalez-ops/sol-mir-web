import Link from "next/link";
import Image from "next/image";
import "./sol-mir-preview.css";

export const metadata = {
  title: "Sol Mir | Creadora del Sistema EJE®",
  description: "Conocé a Sol Mir, creadora del Sistema EJE®, una manera de observar tus respuestas en vínculos, trabajo, dinero e identidad.",
  robots: { index: false, follow: false },
};

export default function SolMirPreview() {
  return (
    <div className="sol-preview" id="inicio">
      <header className="sol-header">
        <div className="sol-shell sol-header-row">
          <a className="sol-wordmark" href="#inicio" aria-label="Sol Mir, volver al inicio">SOL MIR</a>
          <nav aria-label="Navegación de Sol Mir" className="sol-nav">
            <a href="#historia">Mi historia</a>
            <a href="#eje">Sistema EJE®</a>
            <a href="#guia">Guía gratuita</a>
            <Link href="/contacto">Contacto</Link>
          </nav>
          <Link href="/eje" className="sol-header-link">Conocer EJE®</Link>
        </div>
      </header>

      <div className="sol-content">
        <section className="sol-hero">
          <div className="sol-shell sol-hero-grid">
            <div className="sol-hero-copy">
              <p className="sol-eyebrow">SOL MIR · CREADORA DEL SISTEMA EJE®</p>
              <h1>Entender lo que te pasa no siempre alcanza para cambiarlo.</h1>
              <p className="sol-lead">A veces sabés muy bien lo que te pasa, pero cuando llega el momento de decidir, volvés a hacer lo mismo.</p>
              <p>Me hice esa pregunta durante años. Mi propia historia me llevó a mirar lo que ocurría en distintas partes de mi vida.</p>
              <div className="sol-actions">
                <Link className="sol-button" href="/eje">Conocer el Sistema EJE®</Link>
                <a className="sol-text-link" href="#historia">Conocer mi historia</a>
              </div>
            </div>
            <figure className="sol-portrait">
              <Image src="/sol-retrato.jpg" width={880} height={1100} priority sizes="(max-width: 760px) 90vw, 420px" alt="Retrato de Sol Mir" />
              <figcaption>Sol Mir</figcaption>
            </figure>
          </div>
        </section>

        <section className="sol-story" id="historia">
          <div className="sol-shell sol-narrow">
            <p className="sol-eyebrow">MI HISTORIA</p>
            <h2>Me creía independiente. Hasta que tuve que empezar de nuevo.</h2>
            <p>Había trabajado en Coca-Cola y Citibank. Tenía dos carreras universitarias y mi propia inmobiliaria en Chile.</p>
            <p>Me iba bien. Sabía trabajar, organizar, resolver problemas y tomar decisiones.</p>
            <p>Cuando trasladaron a mi entonces marido a Argentina, cerré mi inmobiliaria.</p>
            <p>Años después me separé.</p>
            <p>Y me encontré con poca plata, la autoestima por el piso y miedo de tomar decisiones que antes jamás hubiera imaginado que me costarían tanto.</p>
            <p className="sol-pullquote">¿Cómo podía ser que una mujer que había resuelto tantas cosas no supiera por dónde empezar con su propia vida?</p>
            <p>Esa contradicción fue una de las experiencias que, con el tiempo, me llevaron a crear EJE®.</p>
            <Link className="sol-text-link" href="/sobre-sol">Leer mi historia completa</Link>
          </div>
        </section>

        <section className="sol-eje" id="eje">
          <div className="sol-shell sol-eje-grid">
            <div>
              <p className="sol-eyebrow">EL SISTEMA QUE CREÉ</p>
              <h2>Así nació EJE®.</h2>
              <p className="sol-pullquote">¿Y si eso que te pasa en una parte de tu vida también aparece en otras, pero nunca lo miraste todo junto?</p>
              <p>Esa fue una de las preguntas que me llevaron a crear el Sistema EJE®.</p>
              <p>EJE® propone observar tus respuestas en cuatro áreas: Vínculos, Trabajo, Dinero e Identidad. Las decisiones atraviesan todas.</p>
              <p>El Test lleva esa mirada a tus propias respuestas y las reúne en un Mapa de tu momento actual.</p>
              <Link className="sol-button" href="/test">Conocer el Test EJE®</Link>
            </div>
            <div className="sol-four">
              <div><span>01</span><strong>Vínculos</strong><p>Las personas que te importan.</p></div>
              <div><span>02</span><strong>Trabajo</strong><p>Las responsabilidades que asumís.</p></div>
              <div><span>03</span><strong>Dinero</strong><p>Las decisiones sobre tu plata.</p></div>
              <div><span>04</span><strong>Identidad</strong><p>El lugar que te das.</p></div>
            </div>
          </div>
        </section>

        <section className="sol-test">
          <div className="sol-shell sol-test-grid">
            <div>
              <p className="sol-eyebrow">TEST EJE®</p>
              <h2>Tu Mapa Estructural EJE®</h2>
              <p>Respondé 42 preguntas sobre Vínculos, Trabajo, Dinero e Identidad y recibí un Mapa personalizado de cómo estás respondiendo hoy.</p>
              <h3>¿Qué vas a encontrar en tu Mapa?</h3>
              <ul>
                <li>Cómo se distribuyen tus respuestas entre las cuatro áreas.</li>
                <li>Qué repeticiones aparecen en esa lectura.</li>
                <li>Dónde se observan posibles puntos de fricción.</li>
                <li>Un aspecto para revisar y una propuesta para reflexionar.</li>
              </ul>
              <p>No es una definición de quién sos. Es una lectura de tus respuestas en este momento.</p>
              <h3>¿Qué incluye?</h3>
              <ul>
                <li>Test de 42 preguntas. Aproximadamente 15 minutos.</li>
                <li>Mapa Estructural personalizado de cuatro páginas en PDF.</li>
                <li>Lectura grabada con la voz de Sol.</li>
                <li>Certificado personalizado.</li>
                <li>Imagen de tu resultado.</li>
                <li>Opción de enviarte el Mapa por correo desde el resultado.</li>
              </ul>
              <p className="sol-test-price"><strong>USD 27 · Pago único</strong></p>
              <p><strong>También disponible en Argentina por ARS 40.000.</strong></p>
              <p>Podés volver a realizar el Test sin pagar nuevamente por cada intento.</p>
              <Link className="sol-button" href="/test">Conocer el Test EJE®</Link>
              <p className="sol-disclaimer">El Test EJE® no constituye un diagnóstico ni una evaluación psicológica validada.</p>
            </div>
            <figure className="sol-map-figure">
              <Image src="/mapa-1b.jpg" width={880} height={1243} sizes="(max-width:760px) 65vw, 300px" alt="Ejemplo real de un Mapa Estructural EJE®" />
              <figcaption>Muestra del formato. Tus resultados serán diferentes.</figcaption>
            </figure>
          </div>
        </section>

        <section className="sol-free" id="guia">
          <div className="sol-shell sol-free-grid">
            <div>
              <p className="sol-eyebrow">UNA GUÍA GRATUITA PARA EMPEZAR</p>
              <h2>Tu vida, tus respuestas, tu mapa</h2>
              <p>¿Alguna vez te preguntaste por qué hay situaciones que parecen repetirse en tu vida?</p>
              <p>Preparé esta guía para que empieces a mirar cómo respondés en tus vínculos, en el trabajo, con tu dinero y con vos.</p>
              <p>Podés leerla a tu ritmo, sin tener que saber nada de EJE®.</p>
              <Link className="sol-button" href="/ebook">Quiero recibir la guía gratuita</Link>
            </div>
            <Image src="/ebook-tu-vida.jpg" width={1024} height={1280} sizes="(max-width:760px) 55vw, 250px" alt="Portada real del ebook Tu vida, tus respuestas, tu mapa" />
          </div>
        </section>
      </div>
      <footer className="sol-footer">
        {/* El pie lleva Terminos y Compra, y el correo, porque esta portada
            oculta el pie del sitio con la regla `body:has(.sol-preview)>footer`
            de sol-mir-preview.css. Hasta el 21/11 eso dejaba la pagina de
            entrada de un sitio que cobra USD 27 sin ninguna via a las
            condiciones de compra ni a una direccion de contacto directa:
            estaban en el HTML pero en display:none, asi que no las veia nadie
            —tampoco un lector de pantalla—. En /test si estaban, pero /test no
            es por donde entra la gente. */}
        <div className="sol-shell sol-footer-grid">
          <div>
            <strong>SOL MIR</strong>
            <p>Creadora del Sistema EJE®</p>
            <p><a href="mailto:hola@solmir.co">hola@solmir.co</a></p>
          </div>
          <nav aria-label="Enlaces de la página">
            <Link href="/eje">Sistema EJE®</Link>
            <Link href="/test">Test EJE®</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
          <nav aria-label="Enlaces legales">
            <Link href="/politica-privacidad">Privacidad</Link>
            <Link href="/terminos">Términos</Link>
            <Link href="/politica-compra">Compra</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
