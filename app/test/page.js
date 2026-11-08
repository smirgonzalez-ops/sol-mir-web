
import Image from "next/image";
import BotonesDePago from "../components/BotonesDePago";

import JsonLd from "../components/JsonLd";
import OrigenCompra from "../components/OrigenCompra";

import { pagina, IMAGEN_TEST } from "../compartir";

// Una sola lista para lo que se ve y para los buscadores: no pueden quedar distintas.

const PREGUNTAS = [

  {
    // De Web_Landing_Test_EJE-v2.docx (Sol, 08/11). La pagina no decia en
    // ningun lado cuanto tarda ni desde donde se contesta, y es la primera
    // duda de cualquiera. Lo de «desde tu celular» no es un detalle: el 100%
    // del trafico real entra desde la app de Facebook en el telefono.
    "q": "¿Cuánto tarda y cómo se responde?",
    "a": [
      "Son 42 preguntas simples que respondés desde tu celular o tu computadora, en unos 15 minutos. No hace falta preparar nada ni tener tiempo seguido: podés frenar y seguir después."
    ]
  },
  {

    "q": "¿Qué recibo?",

    "a": [

      "Tu Mapa Estructural EJE® en PDF, de cuatro páginas, construido a partir de tus respuestas al Test.",

      "El mapa muestra porcentajes personales de distintas variables y cómo se presentan actualmente en vínculos, trabajo, dinero e identidad.",
      "Además te llevás la lectura de tu resultado en voz, grabada por Sol, tu certificado en PDF con tu nombre y la imagen de tu resultado. Si preferís tenerlo en tu correo, podés enviártelo desde la misma pantalla."

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

  },

  {

    "q": "¿Puedo pagar en pesos?",

    "a": [

      "Sí: $ 40.000 por Mercado Pago, con tarjeta o en efectivo por Pago Fácil o Rapipago. El botón está junto al de la tarjeta internacional, arriba y al final de esta página.",

      "En ese caso el acceso no llega solo: te lo mando yo por correo cuando se acredita el pago. Si pagás de noche, te llega a la mañana siguiente."

    ]

  },
  {
    // BD-043 (Sol, 08/11). La pagina no lo decia en ningun lado y es un
    // argumento de venta: lo que se paga no es un resultado, es el acceso.
    // Se evita «a los 3 o 6 meses» como plazo, que sonaria a que antes no
    // se puede: es una sugerencia de cuando se nota, no una regla.
    "q": "¿Lo puedo volver a hacer?",
    "a": [
      "Sí, y no cuesta nada: pagás una sola vez y el acceso queda tuyo.",
      "Volver a hacerlo a los tres o seis meses es cuando más se nota, porque el Mapa compara con tu lectura anterior y vas a ver qué se movió. Pero podés repetirlo cuando quieras."
    ]
  }

];



// Precio desde el lanzamiento del 22/09, el mismo que en Gumroad (USD 27, en venta).

const PRODUCTO = {

  "@context": "https://schema.org",

  "@type": "Product",

  "name": "Test EJE®",

  "description": "42 preguntas, unos 15 minutos. Devuelve el Mapa Estructural EJE® en PDF: en qué proporción aparecen hoy determinados patrones y cómo se expresan en vínculos, trabajo, dinero e identidad. Incluye la lectura del resultado con la voz de Sol Mir, el certificado y la imagen del resultado.",

  "image": "https://www.solmir.co/mapa-1b.jpg",

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



// Enlace de compra (Marketing/UTM_Instagram_EJE.md). Va a la página del
// producto, no al carrito: está en castellano, dice qué recibe y aparece en
// las estadísticas de Gumroad, que sólo cuentan visitas al producto. Con el
// enlace directo al carrito, el tramo entre esta página y la compra no se
// podía medir — 134 visitas el 22 y 23/09 y ningún dato de cuántas tocaron.
// El par de botones de pago, el precio y los dos enlaces se mudaron a
// app/components/BotonesDePago.js el 08/11/2026, para que la portada
// pudiera usarlos sin copiarlos. Duplicar el precio significa que el
// dia que cambie haya que acordarse de dos lugares.

// Los cinco componentes estaban en la pantalla 5,8 de 13,4 y el precio en la
// 0,7: quien llegaba sin conocer la marca veía cuánto cuesta antes de saber
// que recibe cinco cosas y no una. La lectura en voz va en negrita porque es
// el único componente que nadie puede copiar.
const LoQueTeLlevas = () => (
  <div className="llevas">
    <p className="llevas-titulo">Te llevás cinco cosas</p>
    <ul className="lista-eje">
      <li>Tu Mapa Estructural en PDF, de cuatro páginas</li>
      <li><strong>La lectura de tu resultado en mi voz</strong></li>
      <li>Tu certificado con tu nombre</li>
      <li>La imagen de tu resultado</li>
      <li>Todo, a tu correo</li>
    </ul>
  </div>
);

export const metadata = pagina({
  title: "Test de patrones: qué área carga con el resto",
  description: "42 preguntas, unos 15 minutos. Al final ves cuál de tus cuatro áreas —vínculos, trabajo, dinero e identidad— está haciendo el trabajo de las otras. USD 27.",
  path: "/test",
  imagen: IMAGEN_TEST,
});

export default function Test() {
  return (
    <>
      <JsonLd data={PRODUCTO} />
      <OrigenCompra />
      <JsonLd data={FAQ} />
      <section className="hero test-hero">
        <div className="container test-hero-grid">
          <div className="test-hero-copy">
            {/* Portada aprobada por Sol el 30/10/2026: titular del eBook, las
                cuatro áreas en la bajada y el botón con el precio en la primera
                pantalla del teléfono. Los pasos de compra y «No necesitás
                preparar nada» pasaron al bloque de compra (#comprar). */}
            <p className="choice-eyebrow">Test EJE® · 42 preguntas · unos 15 minutos</p>
            <h1>Entendés por qué lo hacés. Igual volvés a hacerlo.</h1>
            {/* Frase del posicionamiento aprobado (Plan 8.2): no se saca nunca. */}
            <p className="subtitle">Lo que repetís no necesariamente aparece igual en toda tu vida.</p>
            <p>El Test EJE® ordena tus respuestas y te devuelve una lectura personalizada de cómo se reparten hoy entre tus vínculos, tu trabajo, el dinero y tu identidad.</p>
            <LoQueTeLlevas />
            <BotonesDePago lugar="test_hero" />
            <p className="hero-meta">Pago único, sin suscripción. Acceso inmediato.</p>
          </div>
          <figure className="mapa-hero">
            <Image src="/mapa-1b.jpg" width={880} height={1243} sizes="(max-width: 768px) 82vw, 390px" priority alt="Ejemplo de la primera página de un Mapa Estructural EJE®, con un patrón dominante y porcentajes personales." />
            <figcaption>Muestra real del formato que descargás. Tu contenido y tus números serán diferentes.</figcaption>
          </figure>
        </div>
      </section>

      {/* El ancla oscura de esta página, mismo tratamiento que la portada
          (07/11). Va acá y no en el cierre porque esta sección no tiene
          botones: el botón secundario del pago es texto oliva, y el oliva
          sobre el negro da 3,08:1, que no pasa. Mover un ancla al bloque de
          compra obliga a reestilar los botones de pago, y eso toca el camino
          de compra — decisión aparte, no se mete acá de prepo. */}
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

      <section>
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
          <p>El patrón, los números y el texto cambian según lo que respondas.</p>

          <Image className="mapa-muestra" src="/mapa-1b.jpg" width={880} height={1243} sizes="(max-width: 700px) 100vw, 620px" alt="Primera página del Mapa Estructural EJE®: el patrón dominante con su nombre, tu Pulso con los cinco porcentajes, y lo que podés, lo que te cuesta y qué movimiento es posible." />
          <p className="muted" style={{textAlign: 'center'}}>Página 1 de 4 — lo que está activo hoy</p>

          <div className="mapa-tiras">
            <Image src="/mapa-2b.jpg" width={420} height={594} sizes="(max-width: 700px) 30vw, 196px" alt="Vista parcial de la página 2 del Mapa Estructural" />
            <Image src="/mapa-3.jpg" width={420} height={594} sizes="(max-width: 700px) 30vw, 196px" alt="Página 3 del Mapa Estructural EJE®: tu silla, con cuántas de tus respuestas de cada área eligieron tu salida más frecuente." />
            <Image src="/mapa-4.jpg" width={420} height={594} sizes="(max-width: 700px) 30vw, 196px" alt="Vista parcial de la página 4 del Mapa Estructural" />
          </div>
          <p className="muted" style={{textAlign: 'center', marginTop: '0.75rem'}}>Las otras tres muestran cómo se organiza el patrón, tu silla con las cuatro áreas, y por dónde empezar.</p>

          {/* Entre el botón del comienzo y el del cuerpo había seis pantallas
              de teléfono sin ninguno, y acá adentro estaba lo único que muestra
              qué se compra. Quien se convence mirando el Mapa tenía que seguir
              bajando tres pantallas más para encontrar dónde tocar. */}
          <div style={{marginTop: '2rem'}}>
            <BotonesDePago lugar="test_muestra" />
          </div>

          {/* El 04/11 subí los cinco componentes al encabezado y no busqué el
              bloque viejo, así que la página pasó a listarlos dos veces con el
              mismo título. No sobra ninguno de los dos: arriba están nombrados
              antes del precio, que era el punto, y acá están explicados, que es
              lo que vende. Lo que sobraba era que se presentaran igual. */}
          <h3 className="section-subheading">Qué es cada una</h3>
          <p>El Mapa es la pieza central, pero no es lo único que queda en tu poder cuando terminás.</p>
          <ul className="lista-eje">
            <li><strong>Tu Mapa Estructural EJE® en PDF.</strong> Cuatro páginas que descargás apenas terminás: qué patrón está sosteniendo hoy tu estructura y con cuánto peso, cómo se arma el loop que se repite, dónde genera más fricción y por dónde es posible empezar.</li>
            <li><strong>Tu lectura en voz.</strong> La narración de tu resultado, grabada por mí, de alrededor de un minuto, para escuchar en la misma pantalla.</li>
            <li><strong>Tu certificado.</strong> Un PDF con tu nombre que deja constancia de que completaste el Test.</li>
            <li><strong>La imagen de tu resultado.</strong> Para guardarla o compartirla, si querés.</li>
            <li><strong>Tu Mapa en tu correo.</strong> Desde la misma pantalla podés enviártelo por email y tenerlo también ahí.</li>
          </ul>
          <p>Todo se descarga y queda tuyo.</p>

          {/* Acá había un cuarto bloque de botones. Medido en un teléfono, caía
              en la pantalla 7,1 y el anterior en la 6,0: bajabas un poco, veías
              los botones, bajabas otro poco y estaban otra vez. Los puse yo el
              04/11 al dejar los cinco puntos de compra con el mismo componente.
              Sin él quedan en 1,0 · 6,0 · 9,3 · 12,3, repartidos. El de la
              muestra se queda porque va después de la única imagen que muestra
              qué se compra. */}

          <h3 className="section-subheading">Qué es —y qué no es— el Test</h3>
          <div className="responsible-note">
            <p><strong>El Test EJE® es una herramienta de autoconocimiento, no de diagnóstico clínico.</strong></p>
            <p>Si estás atravesando una crisis emocional, si experimentás síntomas de patología, o si estás bajo cuidado profesional, mantenete en ese camino.</p>
            <p style={{marginBottom: 0}}>EJE® es un complemento, nunca un reemplazo.</p>
          </div>

          {/* Acá había un bloque de biografía de 494 px: eyebrow, titular y
              el párrafo de Coca-Cola, Citibank y la inmobiliaria. Era la
              tercera vez que esa historia aparecía en el sitio —está
              completa en /sobre-sol y resumida en la portada— y caía a
              cinco pantallas de scroll, donde quien llegó ya sabe quién
              sos. Sol lo aprobó el 07/11 para acortar la página.

              Queda la línea con el enlace, que no es un resto: es la única
              señal de autoría que tiene la página donde alguien decide
              pagarle a una desconocida. Sacarla entera habría ahorrado
              otros 30 px y costado la prueba de quién firma el método. */}
          <p className="test-firma">
            El Test EJE® lo creó <a href="/sobre-sol">Sol Mir</a>, a partir de más de una década en empresas como Coca-Cola y Citibank y de los años siguientes acompañando personas.
          </p>
        </div>
      </section>

      {/* Segunda ancla de la página. Entra ahora porque el botón secundario
          ya tiene su versión para fondo oscuro: antes su texto oliva daba
          3,08:1 sobre el negro. Medido el 07/11: de acá al final había
          3.614 px sin un solo cambio de tono, y el cierre de compra estaba
          justo adentro de ese tramo. */}
      <section className="ancla test-closing" id="comprar">
        <div className="container reading-width">
          <p className="choice-eyebrow">Tu punto de partida</p>
          <h2>Ver la estructura antes de seguir sosteniéndola.</h2>
          <p>Tu Mapa no decide por vos ni te encierra en una etiqueta. Te muestra qué está pesando hoy para que puedas empezar por algo concreto.</p>
          <p><strong>No necesitás preparar nada.</strong> Respondé pensando en cómo estás hoy, no en cómo creés que deberías estar.</p>
          <div className="test-proof" style={{marginBottom: '1.5rem'}} aria-label="Qué ocurre después de comprar">
            <span>1 · Comprás en Gumroad</span>
            <span>2 · Respondés el Test</span>
            <span>3 · Descargás tu Mapa</span>
          </div>
          <BotonesDePago lugar="test_cierre" />
          <p className="hero-meta">Pago único, acceso inmediato. Completás 42 preguntas y descargás tu Mapa de 4 páginas, tu lectura en voz y tu certificado.</p>
          <aside className="purchase-note" aria-label="Información sobre el pago y el acceso">Vas a completar el pago seguro en Gumroad. Después, tocá «View content» para acceder al Test. Tus respuestas quedan en tu dispositivo y Sol no recibe el número completo de tu tarjeta. Gumroad también te envía un recibo en inglés con el mismo acceso.</aside>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '760px'}}>
          <h2>Preguntas frecuentes</h2>
          <div className="faq">
            {/* Desplegadas median 2.040px: 2,9 de las 13,8 pantallas que
                tiene esta pagina en telefono. Nadie lee siete respuestas
                seguidas, busca la suya. Plegadas ocupan ~390px y no se
                saco ni una palabra. <details> es nativo: anda sin
                JavaScript, lo abre el teclado y el lector de pantalla
                dice si esta abierta o cerrada. 07/11/2026. */}
            {PREGUNTAS.map(({ q, a }) => (
              <details key={q}>
                <summary><h3>{q}</h3></summary>
                {a.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}
              </details>
            ))}
          </div>
          {/* Las preguntas cerraban la página sin nada para tocar. Medido en
              un teléfono: la página tiene 12,8 pantallas, el último botón
              queda en la 8,9 y las preguntas terminan en la 11. Quien las lee
              es quien tenía dudas y se las resolvió — y no tenía dónde. */}
          <div style={{marginTop: '2.5rem'}}>
            <BotonesDePago lugar="test_faq" titulo="Ya entendí, quiero el mío · USD 27" />
          </div>
          <p className="hero-meta">Pago único, acceso inmediato.</p>
        </div>
      </section>
    </>
  );
}
