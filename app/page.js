import Image from "next/image";
import KitSignupForm from "./components/KitSignupForm";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>EJE® no te dice quién sos. <span className="text-terra">Te muestra cómo estás respondiendo hoy.</span></h1>
          <p className="subtitle">Soy Sol Mir, creadora de EJE® · Inteligencia Estructural Humana</p>
          <div className="cta-group">
            <a href="/que-es-eje" className="btn btn-primary">Descubrí qué es EJE®</a>
            <a href="/ebook" className="btn btn-secondary">Descargá el ebook</a>
          </div>
          <div style={{marginTop: '3rem', padding: '2rem', backgroundColor: 'rgba(190, 110, 75, 0.1)', borderLeft: '4px solid var(--terra)'}}>
            <p style={{marginBottom: '0.5rem'}}><strong>Ya disponible: Test EJE®</strong></p>
            <p className="muted">42 preguntas · unos 15 minutos · USD 27 | <a href="/test">Conocé el Test</a></p>
          </div>
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
          <p>EJE® ayuda a reconocer qué se activa en vos y a construir un margen entre esa activación y lo que hacés.</p>
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
          <p>Una introducción clara a qué es EJE®.</p>
          <KitSignupForm origin="web_home" buttonLabel="Descargar ebook gratuito" />
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
