import Image from "next/image";
import KitSignupForm from "./components/KitSignupForm";

export default function Home() {
  return (
    <>
      <section className="hero home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
          <p className="choice-eyebrow">Test EJE® · Tu Mapa Estructural personal</p>
          <h1>¿Todo sigue en pie <span className="text-terra">porque vos no aflojás?</span></h1>
          <p className="subtitle">Podés anticiparte. Controlar. Evitar el conflicto. Sostener a todos, incluso cuando ya no das más.</p>
          <p>Como la silla no se cae, parece firme. Hasta que aparece otra pregunta: ¿te sostiene a vos, o la sostenés vos?</p>
          <p>El Test EJE® te muestra qué patrones están sosteniendo hoy tu estructura, cuánto pesa cada uno y por dónde conviene empezar a mirar.</p>
          <div className="cta-group">
            <a href="/test" className="btn btn-primary">Quiero ver mi Mapa personal</a>
          </div>
            <p className="hero-meta">42 preguntas · 15 minutos · Mapa inmediato en PDF<br />USD 27 · pago único</p>
          </div>
          <figure className="home-map-proof">
            <Image src="/mapa-1.jpg" width={880} height={1243} sizes="(max-width: 768px) 78vw, 430px" priority alt="Ejemplo de Mapa Estructural EJE® con porcentajes personales." />
            <figcaption>Ejemplo de Mapa Estructural · Página 1 de 4</figcaption>
          </figure>
        </div>
      </section>

      <section className="accent">
        <div className="container" style={{maxWidth: '800px'}}>
          <h2>Un Mapa tan personal como tus respuestas</h2>
          <p>El Test EJE® interpreta tus 42 respuestas y construye una fotografía de este momento: qué patrones están activos, qué porcentaje ocupa cada uno y cómo se expresan en tus vínculos, el trabajo, el dinero y tu identidad.</p>
          <p>No elegís entre resultados armados. Recibís tu propia combinación, con sus proporciones particulares.</p>
          <p>No define quién sos. Muestra cómo estás respondiendo hoy. Por eso, si tu manera de responder cambia, tu Mapa también puede cambiar.</p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '800px'}}>
          <h2>Son las diez de la noche.</h2>
          <p>Terminaste el día agotada y mañana ya está lleno antes de empezar. Quizás pensás: «¿Por qué acepté todo esto?».</p>
          <p>No siempre podías decir que no. Era tu trabajo, había una urgencia o simplemente no había otra opción.</p>
          <p>Pero hay algo que se repite. Cambia la situación y, aun entendiendo lo que pasó, volvés a responder desde el mismo lugar.</p>
          <p>No es falta de voluntad. Hay respuestas que aprendiste en algún momento y que hoy pueden aparecer antes de que llegues a elegir.</p>
          <p>Ahí cambia la pregunta. No es «¿qué hice mal?». Es:</p>
          <p className="remate">«Dentro de esto que no puedo cambiar, ¿qué margen sí tengo?»</p>
          <p>EJE® ayuda a reconocer qué se activa en vos —por ejemplo, hacerte cargo de más, evitar el conflicto o reaccionar antes de pensar— y a construir un margen entre esa activación y lo que hacés.</p>
          <p>El objetivo no es que el patrón nunca vuelva a activarse. Es que deje de tener la última palabra.</p>
        </div>
      </section>

      <section className="accent">
        <div className="container" style={{maxWidth: '800px'}}>
          <h2>Metodología EJE®</h2>
          <p>EJE® es una metodología para distinguir lo que no podés cambiar de lo que sí puede tener margen y encontrar un punto más consciente desde donde decidir.</p>
          <p>En términos cotidianos, puede mostrarte cuándo:</p>
          <ul className="lista-eje">
            <li>te hacés cargo de más</li>
            <li>evitás un conflicto</li>
            <li>controlás</li>
            <li>cedés</li>
            <li>dudás</li>
            <li>reaccionás antes de pensar</li>
          </ul>
          <p>No para convertir eso en una identidad, sino para observarlo como una respuesta.</p>
          <div style={{marginTop: '3rem', textAlign: 'center'}}>
            <a href="/que-es-eje" className="btn btn-primary">Conocé la metodología completa</a>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '900px'}}>
          <h2>Sobre Sol Mir</h2>
          <div className="bio-grid">
            <Image
              src="/sol-home.jpg"
              width={760}
              height={760}
              sizes="(max-width: 768px) 260px, 300px"
              alt="Sol Mir, creadora de la Metodología EJE®"
            />
            <div>
              <p><strong>Soy consultora, formadora en liderazgo y autora de EJE®.</strong></p>
              <p>Durante más de una década trabajé en empresas como Coca-Cola y Citibank.</p>
              <p>Ahí observé algo que los currículos nunca mostraban.</p>
              <p>La mayoría de las personas entienden un problema, pero no pueden dejar de repetirlo.</p>
              <p>Esa distancia entre entender y dejar de repetir me llevó a leer sobre arquitectura humana.</p>
              <p>Después creé EJE® para nombrar lo que veía.</p>
              <p><strong>Estructuras aprendidas que gobiernan nuestras decisiones sin que nos demos cuenta.</strong></p>
          <div style={{marginTop: '2rem'}}>
            <a href="/sobre-sol" className="btn btn-secondary">Conocé mi trayectoria completa</a>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="accent">
        <div className="container" style={{maxWidth: '700px'}}>
          <h2>Ebook Gratuito</h2>
          <p><strong>Tu Huella en el amor, el trabajo y la plata</strong></p>
          <p>Once páginas para ver si eso que se repite en estas tres áreas puede ser el mismo patrón. Incluye un ejercicio para armar tu primer mapa.</p>
          <p>Te llega un correo para confirmar que sos vos. Después recibís el ebook. Sin secuencia de ventas.</p>
          <KitSignupForm
            origin="web_home"
            buttonLabel="Quiero recibir el ebook"
            nameOptional
            showPrivacy
          />
        </div>
      </section>

      <section className="choice-section">
        <div className="container centrado" style={{maxWidth: '1000px'}}>
          <div className="choice-heading">
            <h2>Elegí tu punto de partida</h2>
            <p>No necesitás hacer los dos. Depende de qué querés ver hoy.</p>
          </div>

          <div className="choice-grid">
            <article className="choice-card">
              <p className="choice-eyebrow">Para empezar a observarte</p>
              <h3>Diario de Emociones EJE®</h3>
              <p>Elegilo si querés una práctica breve para registrar lo que sentís y empezar a reconocer patrones en el momento.</p>
              <p className="choice-meta">Resultado: 7 días de registros guiados · cuadernillo de 31 páginas · 11 audios</p>
              <a href="/diario" className="btn btn-secondary">Conocé el Diario</a>
            </article>

            <article className="choice-card choice-card-featured">
              <p className="choice-eyebrow">Para ordenar una lectura más completa</p>
              <h3>Test EJE®</h3>
              <p>Elegilo si querés una fotografía personal, expresada en porcentajes, de cómo se combinan hoy tus respuestas.</p>
              <p className="choice-meta">42 preguntas · 15 minutos · Mapa en PDF · USD 27</p>
              <a href="/test" className="btn btn-primary">Conocé el Test</a>
            </article>
          </div>

          <p className="choice-note">El Diario acompaña la observación cotidiana. El Test organiza lo que aparece en un mapa personal.</p>
        </div>
      </section>
    </>
  );
}
