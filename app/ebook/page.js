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
            <KitSignupForm id="ebook-form" origin="web_ebook" buttonLabel="Quiero recibir mi guía gratuita" nameOptional />
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
          <h2>¿Y si querés ver cómo aparece todo esto en vos?</h2>
          <p>Ahí entra el Test EJE®. La guía te ayuda a comprender la mirada de EJE®; el Test te da una lectura personalizada de tus respuestas actuales.</p>
          <p>A partir de tus respuestas recibís tu propio Mapa Estructural: cuatro porcentajes, uno por área, que juntos suman 100%, patrones que podés reconocer y posibles puntos ciegos.</p>
          <p>Descargás tu Mapa en PDF y escuchás la lectura de tu resultado, grabada con la voz de Sol. Pagás una sola vez y podés volver a hacer el Test cuando quieras.</p>
          <p><strong>Primero conocés EJE®. Después, si querés, conocés tu propio Mapa.</strong></p>
          <p style={{marginTop: '1.5rem'}}><a href="/test" className="btn btn-secondary">Conocé el Test EJE®</a></p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '760px'}}>
          <p className="muted">EJE® es una herramienta de autoconocimiento. No es un test psicológico validado ni un diagnóstico, y no reemplaza la atención profesional de salud.</p>
        </div>
      </section>
    </>
  );
}
