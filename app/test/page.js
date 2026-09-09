export default function Test() {
  const days = Math.ceil((new Date('2026-09-22').getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  
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
            <p className="muted" style={{marginTop: '0.5rem'}}>Faltan {days} días para el lanzamiento</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '900px'}}>
          <h2>¿Qué es el Test EJE®?</h2>
          <p><strong>El Test EJE® es una herramienta de autoconocimiento que te devuelve tu Mapa Estructural.</strong> No es un diagnóstico clínico. No clasifica. No etiqueta.</p>
          <p>Son 42 preguntas en dos etapas, que revelan cómo tu sistema se organiza en cinco lugares fundamentales: adentro tuyo, frente al otro, en el trabajo, con el dinero, y en tus decisiones.</p>
          
          <h3 style={{marginTop: '2rem'}}>Tu Mapa Estructural incluye</h3>
          <div className="grid grid-2" style={{marginTop: '1.5rem'}}>
            <div className="card">
              <h4>El Mapa completo</h4>
              <p>Una visualización clara de tu estructura en los cinco lugares.</p>
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

          <h3 style={{marginTop: '2rem'}}>Importante</h3>
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
          <form action="https://app.kit.com/forms/9738047/subscriptions" method="post" style={{marginTop: '2rem'}}>
            <div>
              <input type="text" name="fields[first_name]" placeholder="Tu nombre" required style={{width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid var(--light-grey)'}} />
              <input type="email" name="email_address" placeholder="Tu correo" required style={{width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid var(--light-grey)'}} />
              <select name="fields[pais]" required style={{width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid var(--light-grey)'}}>
                <option value="">Seleccioná tu país</option>
                <option value="AR">Argentina</option>
                <option value="ES">España</option>
                <option value="MX">México</option>
                <option value="CO">Colombia</option>
                <option value="CL">Chile</option>
                <option value="UY">Uruguay</option>
                <option value="US">Estados Unidos (Miami)</option>
                <option value="OTHER">Otro país</option>
              </select>
            </div>
            <input type="hidden" name="fields[origen]" value="lista_espera_test" />
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Quiero ser de las primeras</button>
          </form>
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
