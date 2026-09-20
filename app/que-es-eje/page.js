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
  title: "Qué es EJE®",
  description: "EJE® te ayuda a distinguir lo que no podés cambiar de aquello a lo que sí podrías responder de otra manera.",
  path: "/que-es-eje",
});

export default function QueEsEJE() {
  return (
    <>
      <JsonLd data={TERMINO} />
      <section className="hero">
        <div className="container">
          <p className="choice-eyebrow">Metodología EJE®</p>
          <h1>Una forma de mirar cómo está organizada hoy <span className="text-terra">tu estructura.</span></h1>
          <p className="subtitle">EJE® te ayuda a distinguir lo que no podés cambiar de aquello frente a lo que todavía existe un margen de respuesta.</p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: "760px"}}>
          <h2>Una silla común. Cuatro patas.</h2>
          <p>Cada pata representa un territorio de tu vida. No funcionan por separado: la manera en que distribuís el peso entre ellas forma tu estructura.</p>
          <svg className="silla" viewBox="0 0 460 420" role="img" aria-labelledby="silla-titulo">
            <title id="silla-titulo">Una silla de cuatro patas: vínculos, trabajo, dinero e identidad. El eje marca el punto donde se apoya el peso.</title>
            <rect width="460" height="420" fill="var(--cream)" />
            <g fill="none" stroke="var(--marron)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
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

          <h2 style={{marginTop: "4rem"}}>Estar en eje no significa que todo pese lo mismo.</h2>
          <p>Hay momentos en los que el trabajo necesita más. Otros en los que una relación ocupa más espacio. La vida se mueve.</p>
          <p>El problema aparece cuando una pata empieza a sostener casi todo y las demás se acortan. Durante un tiempo, la silla puede seguir pareciendo estable.</p>
          <p>Te acomodás. Compensás. Te acostumbrás. Ponés debajo un cartón, una explicación, una costumbre.</p>
          <p className="remate">Como la silla no se cae, no siempre advertís que sos vos quien la está sosteniendo.</p>

          <h2 style={{marginTop: "4rem"}}>Qué hace EJE®</h2>
          <p><strong>EJE® muestra cómo está distribuido hoy el peso en tu estructura y qué respuestas aparecen con más fuerza.</strong></p>
          <p>No busca definir quién sos. Observa cómo estás respondiendo en este momento, en vínculos, trabajo, dinero e identidad.</p>
          <p>También distingue algo fundamental: hay situaciones inevitables, otras negociables y otras en las que sí podés elegir. EJE® no convierte una limitación real en culpa personal.</p>
          <p>La pregunta deja de ser «¿qué tengo mal?» y pasa a ser más concreta:</p>
          <ul className="lista-eje">
            <li>¿Dónde estoy poniendo demasiado peso?</li>
            <li>¿Qué área está sosteniendo sola a las demás?</li>
            <li>¿Dónde existe hoy un margen de respuesta?</li>
          </ul>
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

      <section className="accent">
        <div className="container centrado" style={{maxWidth: "800px", textAlign: "center"}}>
          <h2>Primero mirá la estructura.</h2>
          <p>El Test EJE® transforma tus respuestas en un Mapa personal, expresado en porcentajes, para mostrarte qué está teniendo más peso hoy.</p>
          <a href="/test" className="btn btn-primary" style={{marginTop: "2rem"}}>Conocé el Test EJE®</a>
        </div>
      </section>
    </>
  );
}
