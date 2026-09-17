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
            <p style={{marginBottom: '0.5rem'}}><strong>Lanzamiento próximo: Test EJE®</strong></p>
            <p className="muted">22 de septiembre de 2026 | <a href="/test">Sumate a la lista de espera</a></p>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '800px'}}>
          <h2>Son las diez de la noche.</h2>
          <p>Terminaste el día agotada y mañana ya está lleno antes de empezar. Quizás pensás: «¿Por qué acepté todo esto?».</p>
          <p>Pero a veces no podías decir que no. Era tu trabajo, había una urgencia o simplemente no había otra opción.</p>
          <p>Ahí cambia la pregunta. No es «¿qué hice mal?». Es:</p>
          <p className="remate">«Dentro de esto que no puedo cambiar, ¿qué margen sí tengo?»</p>
          <p>EJE® ayuda a distinguir qué no podés cambiar, qué podés negociar y dónde podrías responder de otra manera.</p>
          <p>No para controlar todo. Para encontrar tu margen real de elección.</p>
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

      <section>
        <div className="container" style={{maxWidth: '900px'}}>
          <h2>Diario de Emociones EJE®</h2>
          <p>Un cuadernillo de 7 días con 11 audios guiados para observar tus patrones emocionales desde hoy.</p>
          <div style={{marginTop: '2rem', textAlign: 'center'}}>
            <a href="/diario" className="btn btn-primary">Conocé el Diario de Emociones</a>
          </div>
        </div>
      </section>

      <section className="accent">
        <div className="container centrado" style={{maxWidth: '800px', textAlign: 'center'}}>
          <h2>Test EJE® — Lanzamiento 22 de septiembre</h2>
          <p style={{fontSize: '1.1rem', marginTop: '1rem'}}><strong>42 preguntas. Aproximadamente 15 minutos.</strong></p>
          <p>Recibís tu Mapa Estructural EJE®: una fotografía personal, expresada en porcentajes, de cómo se combinan hoy tus respuestas en vínculos, trabajo, dinero e identidad.</p>
          <p>Tu punto de partida para verte con más claridad.</p>
          <a href="/test" className="btn btn-primary" style={{marginTop: '2rem'}}>Sumate a la lista de espera</a>
        </div>
      </section>
    </>
  );
}
