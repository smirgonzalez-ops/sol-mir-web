import KitSignupForm from "../components/KitSignupForm";
import Image from "next/image";
import { pagina } from "../compartir";

// Página del eBook «Tu vida, tus respuestas, tu mapa» (14 páginas), que
// reemplazó a «Tu Huella en el amor, el trabajo y la plata». Texto de Sol,
// ajustado el 01/11/2026 al Canon: cuatro porcentajes que suman 100%, una
// lectura grabada, pago único con repeticiones y sin prometer comparación.
export const metadata = pagina({
  title: "Ebook gratis: Tu vida, tus respuestas, tu mapa",
  description: "Una guía gratuita de 14 páginas para mirar cómo respondés en tus vínculos, tu trabajo, el dinero y tu identidad. Te llega por correo.",
  path: "/ebook",
});

export default function Ebook() {
  return (
    <>
      <section className="hero product-hero">
        <div className="container product-hero-grid">
          <div>
            <p className="choice-eyebrow">Guía gratuita · 14 páginas</p>
            <h1>Tu vida, tus respuestas, tu mapa.</h1>
            <p className="subtitle">Sabés lo que te pasa. Sabés lo que querés cambiar. Pero seguís haciendo lo mismo.</p>
            <p>No siempre repetís las mismas situaciones. A veces, lo que repetís es tu forma de responder.</p>
            <KitSignupForm id="ebook-form" origin="web_ebook" buttonLabel="Quiero recibir mi guía gratuita" nameOptional showPrivacy />
            <p className="hero-trust">14 páginas gratuitas. Primero confirmás tu correo y después te llega la guía. Tu primer paso para reconocer lo que repetís.</p>
          </div>
          <figure className="product-visual">
            <Image src="/ebook-tu-vida.jpg" width={1024} height={1280} sizes="(max-width: 768px) 82vw, 390px" priority alt="Tapa del ebook Tu vida, tus respuestas, tu mapa: «Entendés por qué lo hacés. Igual volvés a hacerlo.»" />
            <figcaption>Guía gratuita de EJE® · Vínculos, Trabajo, Dinero e Identidad</figcaption>
          </figure>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '760px'}}>
          <p>EJE® te propone mirar tu vida de una manera diferente: no solo qué te pasa, sino cómo respondés en tus vínculos, tu trabajo, el dinero y tu identidad, y cómo aparecen esas respuestas cuando decidís.</p>
          <h2 style={{marginTop: '2.5rem'}}>Qué vas a encontrar en la guía</h2>
          <ul className="lista-eje">
            <li>Una explicación sencilla de cómo funciona la mirada de EJE®.</li>
            <li>Ejemplos cotidianos para reconocer respuestas que repetís.</li>
            <li>Preguntas para observar cómo aparecen en tu propia vida.</li>
            <li>Una primera aproximación a lo que sostenés, postergás o podrías empezar a elegir diferente.</li>
          </ul>
          <p style={{marginTop: '2rem'}}><a href="#ebook-form" className="btn btn-primary">Quiero recibir mi guía gratuita</a></p>
        </div>
      </section>

      <section className="accent">
        <div className="container" style={{maxWidth: '760px'}}>
          <h2>Tus respuestas cuentan una historia. El Test EJE® te ayuda a ver la tuya.</h2>
          <p>No recibís un resultado genérico. Recibís un Mapa construido a partir de tus propias respuestas, para identificar qué repetís, en qué áreas de tu vida aparece y qué podrías empezar a hacer diferente.</p>
          <p>Quizás te cuesta poner límites en tus vínculos, asumís más responsabilidades de las que querés en el trabajo, postergás decisiones sobre dinero o dudás de vos cuando llega el momento de elegir.</p>
          <p>Son situaciones diferentes. Pero algunas de tus respuestas podrían tener algo en común. El Test EJE® te permite explorar esas conexiones a partir de lo que vos respondés.</p>
          <p>La guía gratuita te ayuda a empezar a observarte. El Test da un paso más: respondés 42 preguntas y recibís tu Mapa Estructural EJE®, con una lectura personalizada de cómo estás respondiendo hoy en Vínculos, Trabajo, Dinero e Identidad.</p>

          <h3 className="section-subheading">¿Qué te llevás al hacer el Test EJE®?</h3>
          <ul className="lista-eje">
            <li><strong>Sabés dónde poner tu atención.</strong> Recibís cuatro porcentajes que suman 100% y muestran cómo se distribuyen tus respuestas dentro del modelo EJE®.</li>
            <li><strong>Reconocés qué podrías estar repitiendo.</strong> Identificás respuestas que podrían aparecer tanto en tus vínculos como en el trabajo, el dinero o en cómo te tratás.</li>
            <li><strong>Ponés en palabras lo que quizás no estabas viendo.</strong> Recibís una lectura de tus posibles puntos ciegos para revisar cómo estás tomando determinadas decisiones.</li>
            <li><strong>Te llevás un primer paso concreto.</strong> Una propuesta, según tu resultado, para observar o revisar una respuesta en tu vida cotidiana.</li>
            <li><strong>Conservás tu resultado.</strong> Descargás tu Mapa en PDF, escuchás la lectura grabada con la voz de Sol y guardás tu certificado.</li>
          </ul>
          <p>Tu Mapa es tuyo porque se construye con tus respuestas. Dos personas pueden atravesar situaciones similares y obtener resultados diferentes.</p>

          <h3 className="section-subheading">Tu vida cambia. Tu Mapa también puede cambiar.</h3>
          <p>Lo que hoy te cuesta puede ser diferente dentro de unos meses. Quizás empezaste a poner límites, cambiaste de trabajo o tomaste una decisión que venías postergando.</p>
          <p>Al volver a hacer el Test, podés comparar tus Mapas y observar qué cambió, qué se mantiene y dónde querés poner tu atención ahora. No hay un porcentaje ideal al que llegar. El valor está en reconocer las diferencias entre cómo respondías antes y cómo respondés hoy.</p>
          <p><strong>Pagás una sola vez y podés hacer el Test todas las veces que quieras, sin cargos adicionales.</strong> Cada resultado es una fotografía de ese momento, que podés guardar en PDF y consultar cuando quieras.</p>

          <p style={{marginTop: '2rem'}}>La guía te ayuda a empezar a mirar. El Test te permite conocer tu propio Mapa, identificar qué merece tu atención y observar cómo cambian tus respuestas con el tiempo.</p>
          <p style={{marginTop: '1.5rem'}}><a href="/test" className="btn btn-secondary">Quiero conocer mi Mapa EJE®</a></p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '760px'}}>
          <p className="muted">EJE® es una herramienta de autoconocimiento, no un diagnóstico médico, psicológico ni psiquiátrico. No busca etiquetarte ni definir quién sos. Sus resultados ofrecen una perspectiva sobre tus respuestas actuales, no una medición clínica de tu evolución personal. No reemplaza la atención profesional de salud: si estás atravesando una crisis, buscá ayuda profesional.</p>
        </div>
      </section>
    </>
  );
}
