import { Fragment } from "react";
import Image from "next/image";
import JsonLd from "../components/JsonLd";
import KitSignupForm from "../components/KitSignupForm";
import LaunchCountdown from "../components/LaunchCountdown";

// Una sola lista para lo que se ve y para los buscadores: no pueden quedar distintas.
const PREGUNTAS = [
  {
    "q": "¿Qué recibo?",
    "a": [
      "Tu Mapa Estructural EJE®, construido a partir de tus respuestas al Test.",
      "El mapa muestra porcentajes personales de distintas variables y cómo se presentan actualmente en vínculos, trabajo, dinero e identidad."
    ]
  },
  {
    "q": "¿Me dice qué tipo de persona soy?",
    "a": [
      "No. EJE® no busca decirte «sos este tipo de persona».",
      "Busca mostrarte cómo estás respondiendo hoy. Por eso hablamos de un mapa y no de una etiqueta."
    ]
  },
  {
    "q": "¿El resultado es para siempre?",
    "a": [
      "No. Es una fotografía de un momento específico.",
      "Tus respuestas pueden variar con el tiempo, con tus experiencias y con el trabajo que hagas sobre vos."
    ]
  },
  {
    "q": "¿Por qué son porcentajes?",
    "a": [
      "Porque distintas formas de respuesta pueden convivir en una misma persona.",
      "El mapa permite observar cuánto peso relativo tiene cada variable dentro de la combinación actual."
    ]
  },
  {
    "q": "¿Todos tenemos el mismo mapa?",
    "a": [
      "No necesariamente. Cada persona obtiene su propia combinación de porcentajes a partir de sus respuestas."
    ]
  },
  {
    "q": "¿Para qué me sirve saberlo?",
    "a": [
      "Para tener un punto de partida. Es difícil trabajar sobre algo que no podés identificar.",
      "El mapa permite observar qué respuestas están teniendo más peso actualmente y empezar a decidir cuáles te sirven, cuáles te cuestan y dónde querés trabajar."
    ]
  },
  {
    "q": "¿Es un test de personalidad?",
    "a": [
      "No está planteado para definir una personalidad fija. La pregunta no es «¿quién sos?», sino «¿cómo estás respondiendo hoy?»."
    ]
  }
];

// Sin precio hasta el 22/09: antes de esa fecha el Test no se puede comprar.
const PRODUCTO = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Test EJE®",
  "description": "42 preguntas, unos 15 minutos. Devuelve el Mapa Estructural EJE®: en qué proporción aparecen hoy determinados patrones y cómo se expresan en vínculos, trabajo, dinero e identidad.",
  "image": "https://www.solmir.co/mapa-1.jpg",
  "url": "https://www.solmir.co/test",
  "brand": {
    "@type": "Brand",
    "name": "EJE®"
  }
};

const FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PREGUNTAS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a.join(" ") },
  })),
};

export const metadata = {
  title: "Test EJE® y Mapa Estructural",
  description: "Conocé el Test EJE® y descubrí cómo se organiza tu estructura en vínculos, trabajo, dinero e identidad.",
  alternates: { canonical: "/test" },
};

export default function Test() {
  return (
    <>
      <JsonLd data={PRODUCTO} />
      <JsonLd data={FAQ} />
      <section className="hero">
        <div className="container">
          <h1>Test EJE®</h1>
          <p className="subtitle">42 preguntas. 15 minutos. Tu mapa personal de cómo estás respondiendo hoy.</p>
          <div style={{marginTop: '2rem', textAlign: 'center'}}>
            <div style={{fontSize: '3rem', fontWeight: '700', color: 'var(--terra)', fontFamily: "'Fraunces', serif"}}>
              22 de septiembre
            </div>
            <LaunchCountdown />
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '760px'}}>
          <h2>¿Qué es el Test EJE®?</h2>
          <p>Hay momentos en los que sentís que algo se te está repitiendo. Capaz es con una pareja. O con la plata.</p>
          <p>O te pasa que en el trabajo terminás haciéndote cargo de todo y después no entendés por qué llegaste otra vez agotada.</p>
          <p>Y muchas veces ya sabés un montón de vos. Ese no es el problema.</p>
          <p>El tema es que una cosa es entenderte y otra es poder ver, bastante concretamente, cómo estás respondiendo hoy.</p>
          <p><strong>Para eso está el Test EJE®.</strong> Son 42 preguntas. Las respondés en unos 15 minutos y con eso se arma tu Mapa Estructural EJE®.</p>
          <p>¿Qué vas a ver? Tu propia combinación de porcentajes.</p>
          <p>Cómo aparecen hoy distintas formas de responder en tus vínculos, en el trabajo, con la plata y con vos misma.</p>
          <p>Y esto es lo más importante: es una foto de este momento. No significa «vos sos así».</p>
          <p>Capaz dentro de seis meses lo volvés a hacer y tu mapa cambió. Esa es parte de la idea.</p>
          <p className="remate">«Ah, mirá. Esto en mí está pesando muchísimo más de lo que pensaba.»</p>
          <p>Ese es uno de los efectos que buscamos: poder ver algo con suficiente claridad como para dejar de trabajar «todo» y empezar por lo que hoy tiene más peso.</p>
          <p><a href="#lista-espera" className="btn btn-primary">Sumate a la lista de espera</a></p>

          <h3 style={{marginTop: '3rem'}}>Cómo se ve tu Mapa Estructural</h3>
          <p>No es una pantalla de resultados. Es un documento de cuatro páginas en PDF que recibís por correo y podés guardar.</p>
          <p>Esta es la primera página de un Mapa real. El patrón, los porcentajes y el texto cambian según lo que respondas.</p>

          <Image className="mapa-muestra" src="/mapa-1.jpg" width={880} height={1243} sizes="(max-width: 700px) 100vw, 620px" alt="Primera página del Mapa Estructural EJE®: la Huella Madre dominante, el Pulso con los porcentajes por Macrofamilia, y qué podés, qué te cuesta y qué movimiento es posible." />
          <p className="muted" style={{textAlign: 'center'}}>Página 1 de 4 — lo que está activo hoy</p>

          <div className="mapa-tiras">
            <Image src="/mapa-2.jpg" width={420} height={594} sizes="(max-width: 700px) 30vw, 196px" alt="Vista parcial de la página 2 del Mapa Estructural" />
            <Image src="/mapa-3.jpg" width={420} height={594} sizes="(max-width: 700px) 30vw, 196px" alt="Vista parcial de la página 3 del Mapa Estructural" />
            <Image src="/mapa-4.jpg" width={420} height={594} sizes="(max-width: 700px) 30vw, 196px" alt="Vista parcial de la página 4 del Mapa Estructural" />
          </div>
          <p className="muted" style={{textAlign: 'center', marginTop: '0.75rem'}}>Las otras tres — cómo se organiza el patrón, dónde genera más fricción y por dónde empezar a intervenir — quedan para quien hace el Test.</p>

          <h3 style={{marginTop: '3rem'}}>Importante</h3>
          <div style={{backgroundColor: 'var(--sand)', padding: '1.5rem', marginTop: '1rem', borderLeft: '4px solid var(--olive)'}}>
            <p><strong>El Test EJE® es una herramienta de autoconocimiento, no de diagnóstico clínico.</strong></p>
            <p>Si estás atravesando una crisis emocional, si experimentás síntomas de patología, o si estás bajo cuidado profesional, mantenete en ese camino.</p>
            <p style={{marginBottom: 0}}>EJE® es un complemento, nunca un reemplazo.</p>
          </div>

          <h3 style={{marginTop: '2rem'}}>Precio</h3>
          <p style={{fontSize: '1.1rem', fontWeight: '600', marginTop: '1rem'}}>USD 27</p>
          <p className="muted">Acceso de por vida | Descarga de tu Mapa | Actualizable</p>

          <h3 style={{marginTop: '2rem'}}>¿Qué sigue después del Test?</h3>
          <p>Muchas personas tienen más preguntas después de ver su Mapa.</p>
          <p>Para eso existe el trabajo personalizado asincrónico, donde podemos profundizar en tu estructura de forma específica.</p>
        </div>
      </section>

      <section className="accent ancla" id="lista-espera">
        <div className="container" style={{maxWidth: '700px'}}>
          <h2>Sumate a la lista de espera</h2>
          <p style={{marginTop: '1rem'}}>Sé de las primeras en acceder al Test EJE®. Te avisamos el 22 de septiembre cuando esté disponible.</p>
          <KitSignupForm
            origin="lista_espera_test"
            buttonLabel="Quiero ser de las primeras"
            includeCountry
          />
          <p className="muted" style={{marginTop: '1rem', textAlign: 'center'}}>Vas a recibir un correo para confirmar tu suscripción. Confirmalo y quedás en la lista.</p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '760px'}}>
          <h2>Preguntas frecuentes</h2>
          <div className="faq">
            {PREGUNTAS.map(({ q, a }) => (
              <Fragment key={q}>
                <h3>{q}</h3>
                {a.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container centrado" style={{maxWidth: '800px', textAlign: 'center'}}>
          <h2>Mientras esperás</h2>
          <p>Podés explorar el Ebook gratuito o conocer el Diario de Emociones para empezar a observar desde hoy.</p>
          <div className="cta-group" style={{justifyContent: 'center', marginTop: '2rem'}}>
            <a href="/ebook" className="btn btn-secondary">Descargar ebook</a>
            <a href="/diario" className="btn btn-secondary">Ver Diario</a>
          </div>
        </div>
      </section>
    </>
  );
}
