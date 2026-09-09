export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Entender lo que te pasa <span className="text-terra">no siempre alcanza</span> para dejar de repetirlo.</h1>
          <p className="subtitle">Soy Sol Mir, creadora de la Metodología EJE®, un Sistema de Inteligencia Estructural Humana que reconoce los patrones que se repiten y te devuelve la capacidad de elegir.</p>
          <div className="cta-group">
            <a href="/que-es-eje" className="btn btn-primary">Descubrí qué es EJE®</a>
            <a href="/ebook" className="btn btn-secondary">Descargá el ebook</a>
          </div>
          <div style={{marginTop: '3rem', padding: '2rem', backgroundColor: 'rgba(190, 110, 75, 0.1)', borderLeft: '4px solid var(--terra)'}}>
            <p style={{marginBottom: '0.5rem'}}><strong>Lanzamiento próximo: Test EJE®</strong></p>
            <p className="muted">22 de septiembre de 2026 | <a href="/test">Sumate a la lista de espera</a></p>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '800px'}}>
          <h2>El patrón que se repite</h2>
          <p>Hay algo que sigue ocurriendo en tus vínculos, tu trabajo, tu relación con el dinero. Lo viste venir. Lo reconocés cada vez que aparece. Y aun así, volvés a reaccionar de la misma forma.</p>
          <p>No es falta de comprensión racional. No es debilidad. Es arquitectura.</p>
          <p><strong>Tu sistema aprendió a priorizar lo familiar sobre lo sano.</strong> Alguna vez eso te protegió. Hoy, limita tus decisiones.</p>
        </div>
      </section>

      <section className="accent">
        <div className="container" style={{maxWidth: '900px'}}>
          <h2>Metodología EJE®</h2>
          <p><strong>EJE® es un Sistema de Inteligencia Estructural Humana</strong> que no promete borrar tu historia, sino cambiar su poder sobre vos.</p>
          <div className="grid grid-2" style={{marginTop: '3rem'}}>
            <div className="card">
              <h3>Observación Precisa</h3>
              <p>Leemos la estructura exacta de cómo aprendiste a responder ante el mundo.</p>
            </div>
            <div className="card">
              <h3>Comprensión Profunda</h3>
              <p>Entendemos dónde tu patrón funciona y cómo se sostiene.</p>
            </div>
            <div className="card">
              <h3>Transformación Consciente</h3>
              <p>Entre lo que se activa y lo que hacés, aparece un margen. En ese margen, decidís vos.</p>
            </div>
            <div className="card">
              <h3>Acción Sostenible</h3>
              <p>El cambio viene de una comprensión nueva de tu propia lógica.</p>
            </div>
          </div>
          <div style={{marginTop: '3rem', textAlign: 'center'}}>
            <a href="/que-es-eje" className="btn btn-primary">Conocé la metodología completa</a>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '900px'}}>
          <h2>Sobre Sol Mir</h2>
          <div className="bio-grid">
            <img src="/sol-home.jpg" width="760" height="760" alt="Sol Mir, creadora de la Metodología EJE®" />
            <div>
              <p><strong>Soy consultora, formadora en liderazgo y autora de EJE®.</strong> Durante más de una década trabajé en empresas como Coca-Cola y Citibank, donde observé algo que los currículos nunca mostraban: la mayoría de las personas entienden un problema, pero no pueden dejar de repetirlo.</p>
          <p>Esa pregunta me llevó a estudiar arquitectura humana y crear una metodología que nombrara lo que veía: <strong>estructuras aprendidas que gobiernan nuestras decisiones sin que nos demos cuenta.</strong></p>
          <div style={{marginTop: '2rem'}}>
            <a href="/sobre-sol" className="btn btn-secondary">Conocé mi trayectoria completa</a>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="accent">
        <div className="container" style={{maxWidth: '700px'}}>
          <h2>Ebook Gratuito</h2>
          <p>Una introducción clara a qué es EJE®.</p>
          <form action="https://app.kit.com/forms/9738047/subscriptions" method="post" style={{marginTop: '2rem'}}>
            <div style={{marginBottom: '1rem'}}>
              <input type="text" name="fields[first_name]" placeholder="Tu nombre" required style={{width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid var(--light-grey)'}} />
              <input type="email" name="email_address" placeholder="Tu correo electrónico" required style={{width: '100%', padding: '0.75rem', border: '1px solid var(--light-grey)'}} />
            </div>
            <input type="hidden" name="fields[origen]" value="web_home" />
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Descargar ebook gratuito</button>
          </form>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '900px'}}>
          <h2>Diario de Emociones EJE®</h2>
          <p>Un cuadernillo de 7 días con 11 audios guiados para observar tus patrones emocionales desde hoy.</p>
          <div style={{marginTop: '2rem', textAlign: 'center'}}>
            <a href="/diario" className="btn btn-primary">Conocé el Diario de Emociones</a>
          </div>
        </div>
      </section>

      <section className="accent">
        <div className="container" style={{maxWidth: '800px', textAlign: 'center'}}>
          <h2>Test EJE® — Lanzamiento 22 de septiembre</h2>
          <p style={{fontSize: '1.1rem', marginTop: '1rem'}}>Descubrí tu Mapa Estructural: cómo tu sistema se organiza en los cinco lugares donde la vida te llama a actuar.</p>
          <a href="/test" className="btn btn-primary" style={{marginTop: '2rem'}}>Sumate a la lista de espera</a>
        </div>
      </section>
    </>
  );
}
