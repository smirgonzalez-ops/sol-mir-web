import { Fragment } from "react";

import Image from "next/image";

import JsonLd from "../components/JsonLd";
import OrigenCompra from "../components/OrigenCompra";

import { pagina, IMAGEN_TEST } from "../compartir";

// Una sola lista para lo que se ve y para los buscadores: no pueden quedar distintas.

const PREGUNTAS = [

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

      "Sí: $ 40.000 por Mercado Pago, con tarjeta o en efectivo por Pago Fácil o Rapipago. El botón está junto al de la tarjeta internacional, arriba y al final de esta página."

    ]

  },

  {

    "q": "¿Compraste el Test EJE® por Mercado Pago?",

    "a": [

      "Para recibir tu Test, pedí el acceso por correo electrónico. Lo envío yo a mano, cuando se acredita el pago. Si pagás de noche, te llega a la mañana siguiente."

    ]

  },

  {
    "q": "¿Qué es el Test EJE® y cómo funciona?",
    "a": [
      "Es una herramienta digital de autoconocimiento que mira cómo estás hoy en cuatro áreas: vínculos, trabajo, dinero e identidad. Respondés un cuestionario guiado y te devuelve una lectura clara de tus patrones actuales y del área que está cargando más.",
    ]
  },

  {
    "q": "¿En qué se diferencia de un test psicológico o un diagnóstico médico?",
    "a": [
      "El Test EJE® no es una evaluación clínica ni un diagnóstico médico o psicológico. Es una herramienta de claridad práctica y autoobservación estructurada, para identificar en qué área hay un desequilibrio y decidir con más información.",
    ]
  },

  {
    "q": "¿Cómo sé si este test es para mí?",
    "a": [
      "Es para vos si sentís estancamiento, insatisfacción repetida en tus vínculos, tensión constante con el dinero o la sensación de estar desafinada en tu vida cotidiana sin entender bien por qué.",
    ]
  },

  {
    "q": "¿Por qué evalúa cuatro áreas y no solo mi problema principal?",
    "a": [
      "Porque las cuatro áreas están conectadas. Un problema en tus vínculos suele afectar tu trabajo o tu relación con el dinero. Mirar el conjunto ayuda a no quedarte solo con los síntomas y a ver qué hay detrás.",
    ]
  },

  {
    "q": "¿Qué pasa si las cuatro áreas están desafinadas a la vez?",
    "a": [
      "Es más común de lo que creés. Cuando una dimensión se desordena, suele arrastrar a las demás. El test te muestra cuál conviene ordenar primero, sin abrumarte.",
    ]
  },

  {
    "q": "¿El test me da una solución mágica?",
    "a": [
      "No. El test no cambia tus patrones ni resuelve tus conflictos por sí solo. Te da un punto de partida y datos concretos sobre tu situación actual, para que dejes de adivinar.",
    ]
  },

  {
    "q": "¿Existe el eje perfecto?",
    "a": [
      "No. Estar en eje de forma permanente es una expectativa irreal: la vida cambia y el equilibrio perfecto no existe. El objetivo es registrar tus desvíos y corregir el rumbo con autonomía.",
    ]
  },

  {
    "q": "¿Es un pago único o una suscripción?",
    "a": [
      "Es un pago único. No hay mensualidades ni cargos ocultos.",
    ]
  },

  {
    "q": "¿Puedo volver a hacerlo o tengo que pagarlo de nuevo?",
    "a": [
      "Una vez que lo adquirís, el acceso es tuyo y podés volver a hacerlo cuando quieras, sin pagar de nuevo.",
    ]
  },

  {
    "q": "¿Cada cuánto conviene repetirlo?",
    "a": [
      "El test es una fotografía de tu momento. Te sirve repetirlo cada tres o seis meses, o después de un cambio importante, para comparar tus resultados y ver tu evolución.",
    ]
  },

  {
    "q": "¿Cuánto tiempo me lleva?",
    "a": [
      "Son 42 preguntas, unos 15 minutos de atención. Ves tu resultado al terminar el cuestionario.",
    ]
  },

  {
    "q": "¿Qué hago con mi resultado?",
    "a": [
      "Con tu Mapa en la mano tenés claridad sobre tu prioridad actual. Podés usarlo para hacer ajustes en tu día a día o, si querés profundizar, como base para un proceso de acompañamiento individual.",
    ]
  },

  {
    "q": "¿Necesito alguna preparación previa?",
    "a": [
      "Ninguna. Solo necesitás un espacio tranquilo y la disposición de responder con honestidad sobre tu realidad actual.",
    ]
  },

  {
    "q": "¿Mis respuestas son confidenciales?",
    "a": [
      "Sí. Tus respuestas y tu resultado se guardan solo en el navegador de tu dispositivo, no en un servidor. Si pedís tu Mapa por correo, el PDF pasa por el servidor del Test y sale por Resend, el servicio que envía ese correo.",
    ]
  },

  {
    "q": "¿Y si mi situación es muy compleja para un test digital?",
    "a": [
      "El test justamente ordena la complejidad. Cuando todo parece un caos, la lectura separa los hilos para que veas qué corresponde a cada área y por dónde empezar.",
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
// utm_medium=organic es el valor por defecto, para quien llega sin origen.
// OrigenCompra lo reescribe en el navegador cuando la visita trae UTM o
// viene de otro sitio, así el tramo hasta Gumroad se puede atribuir.
const comprar = (lugar) =>
  `https://smirgo.gumroad.com/l/ozvrmy?utm_source=web&utm_medium=organic&utm_campaign=lanzamiento_22_9&utm_content=${lugar}`;

// Gumroad no cobra en pesos argentinos (verificado el 12/10 en el checkout
// real) y la audiencia propia es argentina. Link de Mercado Pago creado por
// Sol el 19/10. Ese pago no entrega el acceso solo: Sol lo manda a mano.
// No lleva UTM porque Mercado Pago no los muestra; estas ventas se cuentan
// desde el panel de Mercado Pago, no desde Gumroad.
const PESOS = "https://mpago.la/1Gjzh2t";

// Los dos caminos de pago, del mismo peso y los dos tocables.
//
// Antes Gumroad tenía cinco botones de 58 px y Mercado Pago dos enlaces de
// texto de 18 y 42 px —por debajo del mínimo táctil de 44—, detrás de la
// pregunta «¿Estás en Argentina?». El 29/09 entraron 418 personas a esta
// página: Paraguay 132, Colombia 97, Perú 84, Chile 60, Uruguay 27, Costa
// Rica 14 y Argentina 3. Esa pregunta excluía de entrada al 99% de quienes
// llegaban, y el único pago con forma de botón es el que no cobra en la
// moneda de casi ninguno de esos países.
//
// Por eso ahora se nombran por la MONEDA y no por el país: cada quien elige
// sin que la página le diga antes si es para él.
const BotonesDePago = ({ lugar, titulo = "Comprar y empezar ahora · USD 27" }) => (
  <div className="pagos">
    <a href={comprar(lugar)} className="btn btn-primary btn-pago">
      <span className="btn-pago-titulo">{titulo}</span>
      <span className="btn-pago-nota">Tarjeta internacional · la pantalla de pago está en inglés</span>
    </a>
    <a href={PESOS} className="btn btn-secondary btn-pago">
      <span className="btn-pago-titulo">Pagar en pesos · $ 40.000</span>
      <span className="btn-pago-nota">Mercado Pago · pedime el acceso por correo</span>
    </a>
  </div>
);

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
            <figcaption>Muestra real del formato que descargás. Tu contenido y tus porcentajes serán diferentes.</figcaption>
          </figure>
        </div>
      </section>

      {/* El ancla oscura de esta página, mismo tratamiento que la portada
          (07/11). Va acá y no en el cierre porque esta sección no tiene
          botones: el botón secundario del pago es texto oliva, y el oliva
          sobre el negro da 3,08:1, que no pasa. Mover un ancla al bloque de
          compra obliga a reestilar los botones de pago, y eso toca el camino
          de compra — decisión aparte, no se mete acá de prepo. */}
      <section className="test-recognition revelacion">
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
          <p>El patrón, los porcentajes y el texto cambian según lo que respondas.</p>

          <Image className="mapa-muestra" src="/mapa-1b.jpg" width={880} height={1243} sizes="(max-width: 700px) 100vw, 620px" alt="Primera página del Mapa Estructural EJE®: el patrón dominante con su nombre, tu Pulso con los cinco porcentajes, y lo que podés, lo que te cuesta y qué movimiento es posible." />
          <p className="muted" style={{textAlign: 'center'}}>Página 1 de 4 — lo que está activo hoy</p>

          <div className="mapa-tiras">
            <Image src="/mapa-2b.jpg" width={420} height={594} sizes="(max-width: 700px) 30vw, 196px" alt="Vista parcial de la página 2 del Mapa Estructural" />
            <Image src="/mapa-3.jpg" width={420} height={594} sizes="(max-width: 700px) 30vw, 196px" alt="Vista parcial de la página 3 del Mapa Estructural" />
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

          <div className="test-authority">
            <p className="choice-eyebrow">Creado por Sol Mir</p>
            <h3>Una metodología nacida de observar la distancia entre entender y dejar de repetir.</h3>
            <p>Durante más de una década trabajé en empresas como Coca-Cola y Citibank, y después fundé mi propia inmobiliaria en Chile. Creé EJE® para nombrar estructuras aprendidas que pueden gobernar nuestras decisiones sin que nos demos cuenta.</p>
            <a href="/sobre-sol" className="text-link">Conocé mi trayectoria</a>
          </div>
        </div>
      </section>

      {/* Segunda ancla de la página. Entra ahora porque el botón secundario
          ya tiene su versión para fondo oscuro: antes su texto oliva daba
          3,08:1 sobre el negro. Medido el 07/11: de acá al final había
          3.614 px sin un solo cambio de tono, y el cierre de compra estaba
          justo adentro de ese tramo. */}
      <section className="ancla test-closing revelacion" id="comprar">
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
            {PREGUNTAS.map(({ q, a }) => (
              <Fragment key={q}>
                <h3>{q}</h3>
                {a.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}
              </Fragment>
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
