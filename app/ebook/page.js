import KitSignupForm from "../components/KitSignupForm";
import Image from "next/image";
import { pagina } from "../compartir";

export const metadata = pagina({
  title: "Ebook gratuito: Tu Huella en el amor, el trabajo y la plata",
  description: "Once páginas para ver si eso que se repite en el amor, en el trabajo y con la plata es el mismo patrón. Gratis, a cambio de tu correo.",
  path: "/ebook",
});

export default function Ebook() {
  return (
    <>
      <section className="hero product-hero">
        <div className="container product-hero-grid">
          <div>
            <p className="choice-eyebrow">Ebook gratuito · 11 páginas + ejercicio</p>
            <h1>Tu Huella en el amor, el trabajo y <span className="text-terra">la plata</span></h1>
            <p className="subtitle">Tal vez no son tres problemas distintos.</p>
            <p>Descubrí cómo una misma forma de responder puede aparecer en escenas distintas y armá el primer mapa de una repetición tuya.</p>
            <KitSignupForm id="ebook-form" origin="web_ebook" buttonLabel="Quiero recibir el ebook" nameOptional />
            <p className="hero-trust">Primero confirmás tu correo. Después recibís el ebook. Sin secuencia de ventas.</p>
          </div>
          <figure className="product-visual">
            <Image src="/ebook-tu-huella.png" width={1024} height={1536} sizes="(max-width: 768px) 82vw, 390px" priority alt="Presentación del ebook Tu Huella en el amor, el trabajo y la plata" />
            <figcaption>Recurso gratuito · incluye un ejercicio para armar tu primer mapa</figcaption>
          </figure>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '760px'}}>
          <h2>Qué vas a ver adentro</h2>
          <p>Son once páginas. Esto es lo que hay en cada una:</p>
          <ul className="lista-eje">
            <li><strong>Qué es una Huella.</strong> No es lo que te pasó: es lo que quedó organizando cómo respondés hoy.</li>
            <li><strong>Por qué entender no alcanza.</strong> Podés saber perfectamente por qué hacés algo y volver a hacerlo igual.</li>
            <li><strong>El mismo patrón en tres escenas:</strong> el amor, el trabajo y la plata.</li>
            <li><strong>El mapa de una repetición</strong>, paso por paso: algo pasa, interpretás, se activa una emoción, respondés, hay una consecuencia y el circuito se refuerza.</li>
            <li><strong>Tu primer mapa.</strong> Un ejercicio para armarlo con una situación tuya, reciente, de esas en las que pensaste «otra vez hice lo mismo».</li>
          </ul>

          <h3 style={{marginTop: '3rem'}}>Para quién es</h3>
          <p>Para vos, si entendés bastante bien lo que te pasa y aun así seguís respondiendo igual.</p>
          <p>No es un test ni un diagnóstico. Es un material para mirar, con un ejercicio al final.</p>
          <p className="remate">«Yo tardé años en entender que reconocer un patrón no era lo mismo que dejar de obedecerlo.»</p>

          <div className="ebook-reminder">
            <h3>¿Querés hacer el ejercicio con una situación tuya?</h3>
            <p>El formulario está al comienzo de esta página. Confirmás tu correo y recibís el ebook, sin secuencia de ventas.</p>
            <a href="#ebook-form" className="text-link">Volver al formulario</a>
          </div>
        </div>
      </section>

      <section className="accent">
        <div className="container" style={{maxWidth: '760px'}}>
          <h2>Después del ebook</h2>
          <p>El ebook mira tres lugares: el amor, el trabajo y la plata. El cuarto territorio, la identidad, aparece en el Test.</p>
          <p>El Test EJE® te devuelve tu Mapa Estructural: en qué proporción aparecen hoy determinados patrones y cómo se expresan en cada área de tu vida.</p>
          <p style={{marginTop: '1.5rem'}}><a href="/test" className="btn btn-secondary">Conocé el Test EJE®</a></p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '760px'}}>
          <p className="muted">Este material es un recurso de autoconocimiento. No reemplaza psicoterapia ni atención profesional.</p>
        </div>
      </section>
    </>
  );
}
