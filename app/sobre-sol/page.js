export default function SobreSol() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Sol Mir</h1>
          <p className="subtitle">Consultora, formadora en liderazgo, y creadora de la Metodología EJE®</p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '900px'}}>
          <h2>Mi trayectoria</h2>
          <div className="bio-grid">
            <img src="/sol-retrato.jpg" width="880" height="1100" alt="Retrato de Sol Mir, creadora de la Metodología EJE®" />
            <div>
              <p><strong>Licenciada en Marketing y Administración de Empresas.</strong> Durante más de una década trabajé en grandes corporaciones — Coca-Cola y Citibank — donde mi rol fue siempre el mismo: ayudar a líderes y equipos a entender por qué hacen lo que hacen, y qué podría cambiar si decidieran hacerlo de otra forma.</p>
          
            </div>
          </div>

          <h3 style={{marginTop: '2rem'}}>La pregunta que me llevó a crear EJE®</h3>
          <p>En esos años observé algo que ningún dato capturaba: la mayoría de las personas que trabajaban conmigo comprendían perfectamente cuál era el problema. Podían nombrar sus patrones, ver dónde se repetían, reconocer el costo.</p>
          <p><strong>Y aun así, volvían a hacerlo.</strong></p>
          <p>No era falta de inteligencia, ni de compromiso, ni de motivación. Era algo diferente. Era como si entre saber QUÉ pasa y poder hacer ALGO diferente existiera una brecha que nadie mostraba cómo cruzar.</p>
          
          <h3 style={{marginTop: '2rem'}}>El camino hacia EJE®</h3>
          <p>Esa pregunta me llevó a estudiar coaching ontológico bajo estándares internacionales (ACTP/ICF), a leer arquitectura humana desde perspectivas diversas, y finalmente a hacer algo que nunca había hecho antes: crear una metodología propia.</p>
          <p>EJE® nace de años de trabajo real con personas que querían cambiar pero no sabían por dónde empezar. No es teórico porque viene de ahí: de espacios reales donde la pregunta "¿qué pasa si observamos exactamente CÓMO tu sistema funciona?" cambió algo.</p>

          <h3 style={{marginTop: '2rem'}}>Mi convicción</h3>
          <p><strong>Creo que nadie repite lo que le hace daño porque quiera sufrir.</strong> Creo que cada estructura tiene su propia lógica, y que esa lógica puede leerse. Creo que entender la propia arquitectura es un acto de respeto, no de culpa.</p>
          <p>Y creo profundamente que entre lo que se activa automáticamente en una persona y lo que elige hacer, siempre existe un margen. Ese margen es donde la libertad real vive.</p>

          <div style={{marginTop: '3rem', backgroundColor: 'var(--linen)', padding: '2rem', borderLeft: '4px solid var(--terra)'}}>
            <p><strong>Hoy trabajo como autora y creadora de EJE®,</strong> acompañando a personas que quieren observar su propia estructura con precisión y elegir desde un lugar diferente. Ya no en consultoría corporativa, sino en el espacio donde realmente habita el cambio: en la relación de cada persona con sus propios patrones.</p>
          </div>
        </div>
      </section>

      <section className="accent">
        <div className="container" style={{maxWidth: '800px', textAlign: 'center'}}>
          <h2>Empecemos</h2>
          <p>Si sentís que algo en tu estructura quiere cambiar, están todas las puertas abiertas.</p>
          <a href="/" className="btn btn-primary" style={{marginTop: '2rem'}}>Volver al inicio</a>
        </div>
      </section>
    </>
  );
}
