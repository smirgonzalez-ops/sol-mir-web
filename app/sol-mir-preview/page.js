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

      <main>
        <section className="sol-hero">
          <div className="sol-shell sol-hero-grid">
            <div className="sol-hero-copy">
              <p className="sol-eyebrow">SOL MIR · CREADORA DEL SISTEMA EJE®</p>
              <h1>Entender lo que te pasa no siempre alcanza para cambiarlo.</h1>
              <p className="sol-lead">Podés resolver problemas enormes en el trabajo y, al mismo tiempo, sentirte insegura al poner un límite. Saber mucho de números y tener miedo de mirar tus propias cuentas.</p>
              <p>Durante años me pregunté por qué podíamos ser tan capaces en una parte de la vida y sentirnos tan perdidos en otra. Esa pregunta también fue parte de mi historia.</p>
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
              <p>Podés sentirte muy segura en el trabajo y, sin embargo, dudar de vos cada vez que tenés que poner un límite.</p>
              <p>O trabajar muchísimo y seguir tomando decisiones con tu plata que después te complican.</p>
              <p className="sol-pullquote">¿Y si eso que te pasa en una parte de tu vida también aparece en otras, pero nunca lo miraste todo junto?</p>
              <p>Esa fue una de las preguntas que me llevaron a crear el Sistema EJE®.</p>
              <h3>¿Qué podés descubrir con el Test?</h3>
              <p>A través de 42 preguntas, el Test reúne tus respuestas sobre Vínculos, Trabajo, Dinero e Identidad.</p>
              <p>Con ellas se elabora tu Mapa Estructural EJE®, una lectura personalizada que muestra cómo se distribuyen tus respuestas, qué repeticiones aparecen y qué aspectos podrías revisar.</p>
              <p>Es una fotografía de cómo estás hoy. Podés volver a hacerlo en otro momento y observar qué cambió en tus respuestas.</p>
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
              <h2>Tu propia lectura. No una etiqueta.</h2>
              <p>Respondés 42 preguntas en unos 15 minutos. Recibís tu Mapa Estructural EJE® de cuatro páginas en PDF, una lectura grabada con mi voz, un certificado y una imagen de tu resultado.</p>
              <p>Es una fotografía de tus respuestas actuales, no una evaluación psicológica validada.</p>
              <Link className="sol-button" href="/test">Conocer el Test · USD 27</Link>
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
              <p className="sol-eyebrow">PARA EMPEZAR SIN COSTO</p>
              <h2>Tu vida, tus respuestas, tu mapa.</h2>
              <p>Una guía gratuita para empezar a observar qué respuestas repetís y dónde te pesan más.</p>
              <Link className="sol-button" href="/ebook">Quiero leer la guía</Link>
            </div>
            <Image src="/ebook-tu-vida.jpg" width={1024} height={1280} sizes="(max-width:760px) 55vw, 250px" alt="Portada real del ebook Tu vida, tus respuestas, tu mapa" />
          </div>
        </section>
      </main>
      <footer className="sol-footer">
        <div className="sol-shell sol-footer-grid">
          <div><strong>SOL MIR</strong><p>Creadora del Sistema EJE®</p></div>
          <nav aria-label="Enlaces de la página">
            <Link href="/eje">Sistema EJE®</Link>
            <Link href="/test">Test EJE®</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/politica-privacidad">Privacidad</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
