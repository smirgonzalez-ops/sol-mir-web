import { Fragment } from "react";
import Image from "next/image";
import JsonLd from "../components/JsonLd";
import { pagina } from "../compartir";

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
      "No. Es una fotografía de cómo estás respondiendo en este momento, no una personalidad fija. Si tus respuestas cambian, tu Mapa también puede cambiar."
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
    "q": "¿Cómo se construyen los porcentajes?",
    "a": [
      "El Test asigna un peso relativo a cada patrón según tus respuestas. Los porcentajes muestran cómo se distribuye ese peso dentro de tu combinación actual: no son una probabilidad ni un diagnóstico clínico."
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
    "q": "¿Qué pasa después de pagar?",
    "a": [
      "Gumroad te manda un recibo en inglés: tu acceso está en el botón «View content». Si no lo ves, buscalo en Notificaciones o en Promociones.",
      "En el resumen de tu tarjeta, el cargo figura como GUMRD.COM*."
    ]
  }
];

// Precio desde el lanzamiento del 22/09, el mismo que en Gumroad (USD 27, en venta).
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
  },
  "offers": {
    "@type": "Offer",
    "price": "27",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://smirgo.gumroad.com/l/ozvrmy"
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

// Enlace de compra con UTM (Marketing/UTM_Instagram_EJE.md): cada botón
// dice desde dónde vino la venta.
const comprar = (lugar) =>
  `https://gumroad.com/checkout?product=ozvrmy&quantity=1&utm_source=web&utm_medium=organic&utm_campaign=lanzamiento_22_9&utm_content=${lugar}`;

export const metadata = pagina({
  title: "Test EJE® y Mapa Estructural",
  description: "Conocé el Test EJE® y descubrí cómo se organiza tu estructura en vínculos, trabajo, dinero e identidad.",
  path: "/test",
});

export default function Test() {
  return (
    <>
      <JsonLd data={PRODUCTO} />
      <JsonLd data={FAQ} />
      <section className="hero test-hero">
        <div className="container test-hero-grid">
          <div className="test-hero-copy">
            <p className="choice-eyebrow">Test EJE® · Tu Mapa Estructural personal</p>
            <h1>Descubrí qué patrón está sosteniendo hoy tu estructura.</h1>
            <p className="subtitle">Una interpretación de este momento, construida a partir de tus respuestas y expresada en una combinación de porcentajes propia.</p>
            <p>No elegís entre perfiles armados. El Test identifica qué respuestas están más activas en vos, cuánto pesa cada una y cómo aparecen en tus vínculos, el trabajo, el dinero y tu identidad.</p>
            <p><strong>No necesitás preparar nada.</strong> Respondé pensando en cómo estás hoy, no en cómo creés que deberías estar.</p>
            <a href={comprar("test_hero")} className="btn btn-primary">Quiero descubrir mi Mapa</a>
            <p className="hero-meta">USD 27 · pago único · acceso inmediato<br />Completás 42 preguntas y descargás tu Mapa de 4 páginas al terminar.</p>
            <p className="hero-trust">Vas a completar el pago seguro en Gumroad. Después, tocá «View content» para acceder al Test. Tus respuestas quedan en tu dispositivo; Sol no recibe el número completo de tu tarjeta.</p>
            <div className="test-proof" aria-label="Qué ocurre después de comprar">
              <span>1 · Comprás en Gumroad</span>
              <span>2 · Respondés el Test</span>
              <span>3 · Descargás tu Mapa</span>
            </div>
          </div>
          <figure className="mapa-hero">
            <Image src="/mapa-1.jpg" width={880} height={1243} sizes="(max-width: 768px) 82vw, 390px" priority alt="Ejemplo de la primera página de un Mapa Estructural EJE®, con un patrón dominante y porcentajes personales." />
            <figcaption>Muestra real del formato que descargás. Tu contenido y tus porcentajes serán diferentes.</figcaption>
          </figure>
        </div>
      </section>

      <section className="test-recognition">
        <div className="container reading-width">
          <h2>Entender lo que te pasa no siempre alcanza para dejar de repetirlo.</h2>
          <div className="recognition-lines">
            <p>Podés tener todo clarísimo en el trabajo y perderte cuando alguien te importa.</p>
            <p>Podés tener el dinero ordenado y vivir desde el control.</p>
            <p>Podés sostener a todos y no saber qué necesitás vos.</p>
          </div>
          <p>El Mapa ordena lo que hoy puede sentirse mezclado. Te permite reconocer qué respuesta está cargando más peso para dejar de intentar trabajar «todo» al mismo tiempo.</p>
          <p className="remate">«Ah, mirá. Esto en mí está pesando muchísimo más de lo que pensaba.»</p>
        </div>
      </section>

      <section className="accent">
        <div className="container reading-width">
          <p className="choice-eyebrow">Por qué el resultado es personal</p>
          <h2>Nadie responde exactamente como vos.</h2>
          <p>El Test interpreta tus 42 respuestas y calcula el peso relativo de distintos patrones. Recibís una combinación propia y una lectura de cómo se expresa hoy en vínculos, trabajo, dinero e identidad.</p>
          <p><strong>Es una fotografía de este momento, no una definición de quién sos.</strong></p>
        </div>
      </section>

      <section>
        <div className="container reading-width">
          <p className="choice-eyebrow">Lo que recibís</p>
          <h2>Un punto concreto desde donde empezar a mirar.</h2>
          <div className="value-grid">
            <article><span>01</span><h3>Qué está activo</h3><p>Los patrones que aparecen hoy y el porcentaje que ocupa cada uno.</p></article>
            <article><span>02</span><h3>Dónde se expresa</h3><p>Cómo puede mostrarse la combinación en tus vínculos, trabajo, dinero e identidad.</p></article>
            <article><span>03</span><h3>Qué mirar primero</h3><p>Una referencia para dejar de abordar todo junto y observar lo que hoy tiene más peso.</p></article>
          </div>

          <h3 className="section-subheading">Cómo se ve tu Mapa Estructural</h3>
          <p>No es una pantalla de resultados. Es un documento de cuatro páginas en PDF que descargás apenas terminás y podés guardar.</p>
          <p>El patrón, los porcentajes y el texto cambian según lo que respondas.</p>

          <Image className="mapa-muestra" src="/mapa-1.jpg" width={880} height={1243} sizes="(max-width: 700px) 100vw, 620px" alt="Primera página del Mapa Estructural EJE®: la Huella Madre dominante, el Pulso con los porcentajes por Macrofamilia, y qué podés, qué te cuesta y qué movimiento es posible." />
          <p className="muted" style={{textAlign: 'center'}}>Página 1 de 4 — lo que está activo hoy</p>

          <div className="mapa-tiras">
            <Image src="/mapa-2.jpg" width={420} height={594} sizes="(max-width: 700px) 30vw, 196px" alt="Vista parcial de la página 2 del Mapa Estructural" />
            <Image src="/mapa-3.jpg" width={420} height={594} sizes="(max-width: 700px) 30vw, 196px" alt="Vista parcial de la página 3 del Mapa Estructural" />
            <Image src="/mapa-4.jpg" width={420} height={594} sizes="(max-width: 700px) 30vw, 196px" alt="Vista parcial de la página 4 del Mapa Estructural" />
          </div>
          <p className="muted" style={{textAlign: 'center', marginTop: '0.75rem'}}>Las otras tres muestran cómo se organiza el patrón, dónde genera más fricción y por dónde empezar a intervenir.</p>

          <p style={{marginTop: '2rem'}}><a href={comprar("test_cuerpo")} className="btn btn-primary">Quiero descubrir mi Mapa</a></p>

          <h3 className="section-subheading">Qué es —y qué no es— el Test</h3>
          <div className="responsible-note">
            <p><strong>El Test EJE® es una herramienta de autoconocimiento, no de diagnóstico clínico.</strong></p>
            <p>Si estás atravesando una crisis emocional, si experimentás síntomas de patología, o si estás bajo cuidado profesional, mantenete en ese camino.</p>
            <p style={{marginBottom: 0}}>EJE® es un complemento, nunca un reemplazo.</p>
          </div>

          <div className="test-authority">
            <p className="choice-eyebrow">Creado por Sol Mir</p>
            <h3>Una metodología nacida de observar la distancia entre entender y dejar de repetir.</h3>
            <p>Soy consultora, formadora en liderazgo y autora de EJE®. Durante más de una década trabajé en empresas como Coca-Cola y Citibank. Creé EJE® para nombrar estructuras aprendidas que pueden gobernar nuestras decisiones sin que nos demos cuenta.</p>
            <a href="/sobre-sol" className="text-link">Conocé mi trayectoria</a>
          </div>
        </div>
      </section>

      <section className="accent ancla test-closing" id="comprar">
        <div className="container reading-width">
          <p className="choice-eyebrow">Tu punto de partida</p>
          <h2>Ver la estructura antes de seguir sosteniéndola.</h2>
          <p>Tu Mapa no decide por vos ni te encierra en una etiqueta. Te muestra qué está pesando hoy para que puedas empezar por algo concreto.</p>
          <a href={comprar("test_cierre")} className="btn btn-primary">Quiero descubrir mi Mapa</a>
          <p className="hero-meta">USD 27 · pago único · acceso inmediato<br />Completás 42 preguntas y descargás tu Mapa de 4 páginas al terminar.</p>
          <aside className="purchase-note" aria-label="Información sobre el pago y el acceso">Vas a completar el pago seguro en Gumroad. Después, tocá «View content» para acceder al Test. Tus respuestas quedan en tu dispositivo y Sol no recibe el número completo de tu tarjeta. Gumroad también te envía un recibo en inglés con el mismo acceso.</aside>
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
    </>
  );
}
