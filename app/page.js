import Image from "next/image";
import BotonesDePago from "./components/BotonesDePago";
import KitSignupForm from "./components/KitSignupForm";

export default function Home() {
  return (
    <>
      <section className="hero home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
          <p className="choice-eyebrow">Test EJE® · Tu Mapa Estructural personal</p>
          <h1>Podés sostener a todos y no saber qué necesitás vos.</h1>
          {/* Texto de Sol, de Web_Landing_Test_EJE-v2.docx (08/11). Reemplaza
              el subtítulo y los dos párrafos anteriores. Lo que gana: abre con
              una escena que se puede ver —mensajes fuera de hora, anticipar los
              problemas de los demás— en vez de con una abstracción, que es la
              primera regla de voz. Y nombra la silla como la nombra BD-038:
              una pata haciendo el esfuerzo de las demás. */}
          <p className="subtitle">Contestás mensajes fuera de hora, anticipás los problemas de los demás y evitás el conflicto antes de que empiece. Desde afuera tu vida se ve resuelta; por dentro, sentís que si soltás un minuto, todo se cae.</p>
          <p>El agotamiento no es falta de capacidad ni mala organización. Es que tu vida es como una silla de cuatro patas —vínculos, trabajo, dinero e identidad— y una de ellas está haciendo el esfuerzo de las demás.</p>
          <div className="cta-group">
            <a href="/test" className="btn btn-primary">Quiero ver mi Mapa personal</a>
          </div>
            {/* El precio en dólares era la única señal de pago de la portada,
                y la portada no menciona Mercado Pago en ningún lado. Medido el
                29/09: de 418 visitantes a /test, 3 eran de Argentina; el resto
                llegó de Paraguay, Colombia, Perú, Chile, Uruguay y Costa Rica.
                Quien lee «USD 27» y no sabe que hay otra forma puede irse antes
                de llegar a /test, que es donde está el botón en pesos.

                Va como texto y no como enlace a propósito. El botón de arriba
                ya lleva a /test; un segundo enlace acá compite con él, y como
                texto en línea medía 18 px de alto —por debajo del mínimo
                táctil de 44— y sin subrayado señalaba sólo por color. La línea
                no necesita ser tocable: necesita sacar la objeción del dólar
                antes de que la persona cierre. */}
            <p className="hero-meta">USD 27 · pago único · acceso inmediato<br />42 preguntas · 15 minutos · Mapa de 4 páginas al terminar<br />También se puede pagar en pesos.</p>
          </div>
          <figure className="home-map-proof">
            <Image src="/mapa-1b.jpg" width={880} height={1243} sizes="(max-width: 768px) 78vw, 430px" priority alt="Ejemplo de Mapa Estructural EJE® con porcentajes personales." />
            <figcaption>Ejemplo de Mapa Estructural · Página 1 de 4</figcaption>
          </figure>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '800px'}}>
          <h2>Un Mapa tan personal como tus respuestas</h2>
          <p>El Test EJE® interpreta tus 42 respuestas y construye una fotografía de este momento: qué patrones están activos, qué porcentaje ocupa cada uno y cómo se expresan en tus vínculos, el trabajo, el dinero y tu identidad.</p>
          <p>No elegís entre resultados armados. Recibís tu propia combinación, con sus proporciones particulares.</p>
          <p>No define quién sos. Muestra cómo estás respondiendo hoy. Por eso, si tu manera de responder cambia, tu Mapa también puede cambiar.</p>
        </div>
      </section>

      {/* Bloque de revelación. La portada alternaba linen y cream, dos tonos
          a 1,13:1 entre sí — por debajo del 3:1 en que un borde se percibe—,
          así que la página hacía el gesto de cambiar de sección sin llegar a
          cambiar. Y el negro opal, al que el manual asigna «portadas y
          bloques de revelación», sólo se usaba en el pie. Ahora la base es
          linen pareja y hay dos anclas oscuras: esta escena y la elección
          del final. Aprobado por Sol el 07/11 sobre capturas reales. */}
      <section>
        <div className="container" style={{maxWidth: '800px'}}>
          <h2>Son las diez de la noche.</h2>
          <p>Terminaste el día sin energía y mañana ya está lleno antes de empezar. Quizás pensás: «¿Por qué acepté todo esto?».</p>
          <p>No siempre podías decir que no. Era tu trabajo, había una urgencia o simplemente no había otra opción.</p>
          <p>Pero cambia la situación y, aun entendiendo lo que pasó, volvés a responder desde el mismo lugar. No es falta de voluntad: hay respuestas aprendidas que aparecen antes de que llegues a elegir.</p>
          <p className="remate">«Dentro de esto que no puedo cambiar, ¿qué margen sí tengo?»</p>
          <p>EJE® ayuda a reconocer qué se activa en vos y a construir un margen entre esa activación y lo que hacés.</p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '800px'}}>
          <h2>Metodología EJE®</h2>
          <p>EJE® es una metodología para distinguir lo que no podés cambiar de lo que sí puede tener margen y encontrar un punto más consciente desde donde decidir.</p>
          <p>Organiza la observación en cuatro territorios —vínculos, trabajo, dinero e identidad— para mostrarte dónde estás poniendo demasiado peso y qué margen real existe hoy.</p>
          <p>No construye una etiqueta. Construye un mapa.</p>
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
              <p><strong>Soy Sol Mir, creadora de la Metodología EJE®.</strong></p>
              <p>Durante más de una década trabajé en empresas como Coca-Cola y Citibank. Después acompañé a personas, equipos y líderes.</p>
              <p>Ahí observé una distancia que los currículos no mostraban: podemos entender un problema y, aun así, seguir respondiendo desde el mismo lugar.</p>
              <p>Creé EJE® para hacer visible esa estructura.</p>
          <div style={{marginTop: '2rem'}}>
            <a href="/sobre-sol" className="btn btn-secondary">Conocé mi trayectoria completa</a>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '700px'}}>
          {/* Texto de Sol, de Web_Bloque_Ebook_Gratuito-Final.docx (08/11).
              Lo que gana: abre con una escena —terminar el día sin energía—
              en vez de con el dato de cuántas páginas tiene, y los tres
              puntos se escanean mejor que dos párrafos seguidos.

              Cuatro cosas del original no se publicaron:
              · Los emojis 📄 🗺️ 🔒. No hay uno solo en todo el sitio y el
                del candado es lenguaje de carrito de compras.
              · «vas a descubrir exactamente cómo respondés» → «vas a ver».
                «Exactamente» promete una precisión que catorce páginas de
                introducción no dan, y prometer resultado está prohibido.
              · «la distribución actual de tu peso» se había cambiado por
                «dónde se apoya hoy más peso», porque «distribución» dice
                que hay un total que se reparte y en el TEST los cuatro
                números de las patas no se reparten nada — desde el 08/11
                son fracciones («3 de 8»), una por área sobre sus propias
                preguntas, justamente para que no se lean como un reparto. Sol confirmó el 08/11 que
                el ejercicio del EBOOK sí reparte: ahí la palabra es
                correcta y volvió la suya. Ojo con no cruzarlas: el ebook
                reparte un total entre las cuatro áreas, el Mapa del Test
                calcula cada área sobre su propio denominador.
              · «¡Quiero mi guía gratuita y armar mi mapa!» → sin signos de
                exclamación, que la marca no usa en ninguna pieza. */}
          <h2>Ebook Gratuito</h2>
          <p><strong>Tu vida, tus respuestas, tu mapa</strong></p>
          <p>Dejá de adivinar por qué terminás el día sin energía. En catorce páginas vas a ver cómo respondés en tus vínculos, tu trabajo, el dinero y tu identidad, con un ejercicio paso a paso para armar tu primer mapa hoy mismo.</p>
          <ul className="lista-eje">
            <li>Catorce páginas de lectura directa, enfocadas en las formas de responder que se repiten.</li>
            <li>Un ejercicio paso a paso para trazar la distribución actual de tu peso.</li>
            <li>Te llega un correo para confirmar que sos vos. Después, el ebook. Sin secuencia de ventas.</li>
          </ul>
          <KitSignupForm
            origin="web_home"
            buttonLabel="Quiero mi guía y armar mi mapa"
            nameOptional
            showPrivacy
          />
        </div>
      </section>

      {/* Segunda ancla oscura: donde se elige. */}
      <section className="choice-section">
        <div className="container centrado" style={{maxWidth: '1000px'}}>
          <div className="choice-heading">
            <h2>Elegí tu punto de partida</h2>
            <p>No necesitás hacer los dos. Depende de qué querés ver hoy.</p>
          </div>

          <div className="choice-grid">
            <article className="choice-card">
              <p className="choice-eyebrow">Para empezar a observarte</p>
              <Image
                className="choice-product-image"
                src="/diario-producto.jpg"
                width={1024}
                height={1536}
                sizes="(max-width: 768px) 76vw, 360px"
                alt="Diario de Emociones EJE® con cuadernillo y audios guiados"
              />
              <h3>Diario de Emociones EJE®</h3>
              <p>Elegilo si querés una práctica breve para registrar lo que sentís y empezar a reconocer patrones en el momento.</p>
              <p className="choice-meta">7 días · cuadernillo de 31 páginas · 11 audios · USD 15</p>
              {/* Decía «Comprar el Diario · USD 15» y llevaba directo al
                  checkout de Gumroad. Era el único botón de toda la portada
                  que iba a pagar, y quedaba al lado del del Test, que dice
                  «Conocé» y lleva a una página: en la misma pantalla, el
                  producto de 15 tenía el camino corto a la caja y el de 27
                  daba una vuelta más. Además ese checkout va en dólares, sin
                  la opción en pesos que el resto del sitio ya ofrece.
                  Sol, 07/11: emparejar los botones. Ahora las dos tarjetas
                  hacen lo mismo y se elige por interés, no por cuál cobra
                  antes. El «Ver qué incluye» sale: iba a /diario, que es
                  adonde lleva este botón ahora. */}
              <a href="/diario" className="btn btn-primary">Conocé el Diario</a>
            </article>

            <article className="choice-card choice-card-featured">
              <p className="choice-eyebrow">Para ordenar una lectura más completa</p>
              <Image
                className="choice-product-image"
                src="/mapa-1b.jpg"
                width={880}
                height={1243}
                sizes="(max-width: 768px) 76vw, 360px"
                alt="Ejemplo del Mapa Estructural personal del Test EJE®"
              />
              <h3>Test EJE®</h3>
              <p>Elegilo si querés una fotografía personal y medida de cómo se combinan hoy tus respuestas.</p>
              <p className="choice-meta">42 preguntas · 15 minutos · Mapa en PDF</p>
              {/* Decía «Conocé el Test» y llevaba a /test. Pero esta tarjeta
                  está al final de la portada: quien llega acá bajó diez
                  pantallas y ya eligió. Mandarla a leer otra vez es la vuelta
                  que Sol señaló el 08/11 recorriéndolo en su teléfono.
                  Ahora puede pagar desde acá, en la moneda que le sirva.

                  El héroe sigue sin botón de compra a propósito: quien recién
                  entra todavía no sabe qué es EJE®, y un «comprar» antes de
                  explicar nada espanta más de lo que convierte.

                  El precio sale del choice-meta porque ahora está en los
                  botones, en las dos monedas. */}
              <BotonesDePago lugar="portada_eleccion" />
              <p className="choice-detalle"><a href="/test">Ver cómo funciona antes de decidir</a></p>
            </article>
          </div>

          <p className="choice-note">El Diario acompaña la observación cotidiana. El Test organiza lo que aparece en un mapa personal.</p>
        </div>
      </section>
    </>
  );
}
