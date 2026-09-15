import Image from "next/image";
import KitSignupForm from "../components/KitSignupForm";
import LaunchCountdown from "../components/LaunchCountdown";

export const metadata = {
  title: "Test EJE® y Mapa Estructural",
  description: "Conocé el Test EJE® y descubrí cómo se organiza tu estructura en identidad, vínculos, trabajo y dinero.",
  alternates: { canonical: "/test" },
};

export default function Test() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Test EJE®</h1>
          <p className="subtitle">Descubrí tu Mapa Estructural: cómo tu sistema se organiza en los lugares donde la vida te llama a actuar.</p>
          <div style={{marginTop: '2rem', textAlign: 'center'}}>
            <div style={{fontSize: '3rem', fontWeight: '700', color: 'var(--terra)', fontFamily: "'Fraunces', serif"}}>
              22 de septiembre
            </div>
            <LaunchCountdown />
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '900px'}}>
          <h2>¿Qué es el Test EJE®?</h2>
          <p><strong>El Test EJE® es una herramienta de autoconocimiento que te devuelve tu Mapa Estructural.</strong> No es un diagnóstico clínico. No clasifica. No etiqueta.</p>
          <p>Son 42 preguntas en dos etapas que revelan cómo tu sistema se organiza en cuatro territorios fundamentales: identidad, vínculos, trabajo y dinero. También muestran cómo esa estructura incide en tus decisiones.</p>
          
          <h3 style={{marginTop: '2rem'}}>Tu Mapa Estructural incluye</h3>
          <div className="grid grid-2" style={{marginTop: '1.5rem'}}>
            <div className="card">
              <h4>El Mapa completo</h4>
              <p>Una visualización clara de tu estructura en los cuatro territorios.</p>
            </div>
            <div className="card">
              <h4>Análisis detallado</h4>
              <p>Descripción precisa de cómo cada parte de tu sistema funciona.</p>
            </div>
            <div className="card">
              <h4>Reconocimiento de patrones</h4>
              <p>Qué patrón se repite y dónde adquiere más poder.</p>
            </div>
            <div className="card">
              <h4>Próximos pasos</h4>
              <p>Qué puede ser relevante para vos a partir de ahora.</p>
            </div>
          </div>

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
            <p><strong>El Test EJE® es una herramienta de autoconocimiento, no de diagnóstico clínico.</strong> Si estás atravesando una crisis emocional, si experimentás síntomas de patología, o si estás bajo cuidado profesional, mantenéte en ese camino. EJE® es un complemento, nunca un reemplazo.</p>
          </div>

          <h3 style={{marginTop: '2rem'}}>Precio</h3>
          <p style={{fontSize: '1.1rem', fontWeight: '600', marginTop: '1rem'}}>USD 27</p>
          <p className="muted">Acceso de por vida | Descarga de tu Mapa | Actualizable</p>

          <h3 style={{marginTop: '2rem'}}>¿Qué sigue después del Test?</h3>
          <p>Muchas personas tienen más preguntas después de ver su Mapa. Para eso existe el trabajo personalizado asincrónico, donde podemos profundizar en tu estructura de forma específica.</p>
        </div>
      </section>

      <section className="accent">
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
        <div className="container" style={{maxWidth: '800px', textAlign: 'center'}}>
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
