import JsonLd from "../components/JsonLd";
import { pagina } from "../compartir";

const TERMINO = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  name: "Inteligencia Estructural Humana",
  description: "La categoría de EJE®: observar cómo se organiza tu sistema en cuatro territorios —vínculos, trabajo, dinero e identidad— y qué margen real existe para responder de otra manera.",
  url: "https://www.solmir.co/que-es-eje",
  inDefinedTermSet: { "@type": "DefinedTermSet", name: "EJE®" },
};

export const metadata = pagina({
  title: "Por qué se repiten los patrones — Qué es EJE®",
  description: "Lo que se repite no es mala suerte: es una forma de responder que se armó antes. EJE® la mira en cuatro áreas: vínculos, trabajo, dinero e identidad.",
  path: "/que-es-eje",
});

export default function QueEsEJE() {
  return (
    <>
      <JsonLd data={TERMINO} />
      <section className="hero">
        <div className="container">
          <p className="choice-eyebrow">Metodología EJE®</p>
          <h1>Una forma de mirar cómo está organizada hoy tu estructura.</h1>
          <p className="subtitle">EJE® te ayuda a distinguir lo que no podés cambiar de aquello frente a lo que todavía existe un margen de respuesta.</p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: "760px"}}>
          <h2>¿Cuánto tiempo más vas a seguir sosteniendo todo, menos a vos?</h2>
          <p>Quizás en el trabajo resolvés cualquier problema, pero en tus vínculos aceptás cosas que te hacen mal. O te ocupás de todos, mientras tus propias necesidades quedan para después.</p>
          <p>Y un día te das cuenta de que estás agotado, que algo no funciona o que tomaste decisiones que hoy te pesan.</p>
          <p><strong>Tu vida se parece a una silla.</strong></p>
          <p>Tiene cuatro patas: <strong>Vínculos, Trabajo, Dinero e Identidad.</strong></p>
          <svg className="silla" viewBox="0 0 460 420" role="img" aria-labelledby="silla-titulo">
            <title id="silla-titulo">Una silla de cuatro patas: Vínculos, Trabajo, Dinero e Identidad. El respaldo representa estar en eje para tomar decisiones con mayor claridad.</title>
            {/* Acá había un rectángulo en cream de fondo. Sol, 07/11: ese
                fondo no le gusta. Contra el linen viejo se fundía; contra el
                casi blanco de hoy se leía como una mancha tostada, y era lo
                más grande del cuadro. El dibujo queda al aire sobre el fondo
                de la página: con un fondo tan claro no necesita marco. */}
            {/* El trazo era #5A4334, un marrón elegido por BD-032 para que el
                dibujo fuera cálido sin tocar la terracota, que está reservada
                al eje. Sol, 07/11: ese marrón no le gusta. Pasa al negro opal,
                el mismo del texto, y así el único color de la ilustración
                queda siendo el eje — que es lo que el manual quiere. */}
            <g fill="none" stroke="var(--ink)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M166 205 L166 74" /><path d="M346 205 L346 74" /><path d="M166 74 L346 74" /><path d="M166 116 L346 116" />
              <path d="M120 235 L300 235 L346 205 L166 205 Z" /><path d="M120 235 L120 356" /><path d="M300 235 L300 356" />
              <path d="M166 205 L166 326" /><path d="M346 205 L346 326" /><path d="M120 316 L300 316" /><path d="M166 286 L346 286" />
            </g>
            <path d="M256 74 L256 218" stroke="var(--terra)" strokeWidth="1.9" strokeLinecap="round" />
            <circle cx="256" cy="218" r="6" fill="var(--terra)" />
          </svg>

          <div className="grid grid-2" style={{marginTop: "2rem"}}>
            <div className="card"><h3>Vínculos</h3><p>Cómo te vinculás, cómo te presentás y qué sostenés en tus relaciones.</p></div>
            <div className="card"><h3>Trabajo</h3><p>Cómo te ubicás frente a la productividad, el reconocimiento y la contribución.</p></div>
            <div className="card"><h3>Dinero</h3><p>Tu relación con el valor, la abundancia y la seguridad material.</p></div>
            <div className="card"><h3>Identidad</h3><p>Cómo experimentás, sentís y registrás lo que te pasa. Tu verdad emocional.</p></div>
          </div>

          <p>No siempre están igual de firmes. A veces una sostiene demasiado mientras otra necesita atención.</p>
          <p>Y tiene un respaldo: <strong>tu eje</strong>, ese lugar desde donde podés apoyarte en vos y tomar decisiones con más claridad.</p>

          <h2 style={{marginTop: "3rem"}}>¿Qué te muestra el Test EJE®?</h2>
          <p>A través de 42 preguntas, recibís un Mapa personalizado que te permite observar cómo respondés en esas cuatro áreas, qué patrones podrían estar repitiéndose y dónde convendría prestar más atención.</p>
          <p>Porque cuando empezás a reconocer qué parte de tu vida necesita más apoyo, podés ocuparte de ella antes de que el desgaste sea mayor.</p>
          <p className="remate">No hace falta esperar a que todo se venga abajo para empezar a mirar qué necesita sostén.</p>
          <p style={{marginTop: "2rem"}}><a href="/test" className="btn btn-secondary">Ver cómo funciona el Test</a></p>

          <h2 style={{marginTop: "4rem"}}>Qué diferencia a EJE®</h2>
          <div className="tabla-scroll">
            <table className="tabla-diferencial">
              <thead><tr><th scope="col">Enfoque habitual</th><th scope="col">EJE®</th></tr></thead>
              <tbody>
                <tr><td>Busca explicarte cómo sos</td><td>Mira cómo respondés en un momento determinado</td></tr>
                <tr><td>Trabaja un problema aislado</td><td>Observa la combinación de cuatro territorios</td></tr>
                <tr><td>Identifica un patrón</td><td>Muestra también su peso y su contexto</td></tr>
                <tr><td>Puede terminar en una etiqueta</td><td>Construye un mapa, no una identidad</td></tr>
              </tbody>
            </table>
          </div>

          <h2 style={{marginTop: "4rem"}}>Lo que EJE® no es</h2>
          <ul style={{listStyle: "none", marginTop: "1.5rem"}}>
            <li style={{marginBottom: "1rem"}}><strong>No es terapia.</strong> No trata patologías ni reemplaza atención profesional.</li>
            <li style={{marginBottom: "1rem"}}><strong>No es tarot ni astrología.</strong> El Mapa se construye con tus respuestas al Test.</li>
            <li><strong>No es una fórmula rápida.</strong> No promete una transformación garantizada.</li>
          </ul>
        </div>
      </section>

      {/* Ancla oscura de esta página, mismo tratamiento que la portada y
          /test (07/11). Va en el cierre porque el cuerpo entero es una sola
          sección: no hay dónde más cortar sin partir el marcado. */}
      <section>
        <div className="container centrado" style={{maxWidth: "800px", textAlign: "center"}}>
          <h2>Primero mirá la estructura.</h2>
          <p>El Test EJE® transforma tus respuestas en un Mapa personal, expresado en porcentajes, para mostrarte qué está teniendo más peso hoy.</p>
          <a href="/test" className="btn btn-primary" style={{marginTop: "2rem"}}>Conocé el Test EJE®</a>
        </div>
      </section>
    </>
  );
}
