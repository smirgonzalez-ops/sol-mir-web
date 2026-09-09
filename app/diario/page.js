export default function Diario() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Diario de Emociones EJE®</h1>
          <p className="subtitle">7 días para observar, registrar y comprender lo que sentís. Con 11 audios guiados.</p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '900px'}}>
          <h2>¿Para quién es el Diario?</h2>
          <p>Para alguien que siente que algo se repite en sus emociones, sus vínculos, su forma de reaccionar — y quiere empezar a observar sin estar perdida.</p>
          <p>No necesitás haber hecho el Test. No necesitás haber leído nada antes. Es una puerta de entrada: una práctica de observación.</p>

          <h3 style={{marginTop: '2rem'}}>Qué contiene</h3>
          <div className="grid grid-2" style={{marginTop: '1.5rem'}}>
            <div className="card">
              <h4>Cuadernillo de 31 páginas</h4>
              <p>Formato A4, diseñado para imprimir o completar en pantalla. Cada día tiene su estructura clara.</p>
            </div>
            <div className="card">
              <h4>11 audios guiados</h4>
              <p>Cada audio te acompaña en un momento específico del proceso: introducción, profundización, cierre.</p>
            </div>
            <div className="card">
              <h4>Instrucciones precisas</h4>
              <p>Sabés exactamente qué hacer cada día. Nada ambiguo.</p>
            </div>
            <div className="card">
              <h4>Práctica estructurada</h4>
              <p>No es terapia ni meditación. Es observación activa de tus propios patrones emocionales.</p>
            </div>
          </div>

          <h3 style={{marginTop: '2rem'}}>Los 7 días</h3>
          <p style={{marginTop: '1rem'}}>Cada día explora un aspecto distinto de cómo tu sistema emocional funciona.</p>
          <ul style={{listStyle: 'none', marginTop: '1.5rem'}}>
            <li style={{marginBottom: '0.75rem'}}>Día 1: Bajá el volumen</li>
            <li style={{marginBottom: '0.75rem'}}>Día 2: Mirá hacia atrás</li>
            <li style={{marginBottom: '0.75rem'}}>Día 3: El significado que le dás</li>
            <li style={{marginBottom: '0.75rem'}}>Día 4: Cuándo volvés a elegir</li>
            <li style={{marginBottom: '0.75rem'}}>Día 5: La verdad sin filtro</li>
            <li style={{marginBottom: '0.75rem'}}>Día 6 y 7: Las tres distancias de una misma escena</li>
          </ul>

          <div className="card" style={{marginTop: '3rem', backgroundColor: 'var(--linen)', borderLeftColor: 'var(--terra)'}}>
            <h4>Entrega inmediata</h4>
            <p>Tras la compra recibís un email con el PDF y el acceso a los audios. Empezás cuando vos decidas.</p>
          </div>

          <h3 style={{marginTop: '2rem'}}>Precio</h3>
          <p style={{fontSize: '1.1rem', fontWeight: '600', marginTop: '1rem'}}>USD 15</p>
          <p className="muted">Acceso de por vida | Descarga permanente</p>
        </div>
      </section>

      <section className="accent">
        <div className="container" style={{maxWidth: '700px', textAlign: 'center'}}>
          <h2>Empezá a observar</h2>
          <p>El Diario es tu primera puerta. Después, el Test EJE® (22 de septiembre) te muestra toda tu estructura.</p>
          <p className="muted" style={{marginTop: '1.5rem'}}>Escribime y te paso el acceso.</p>
          <div className="cta-group" style={{justifyContent: 'center', marginTop: '1.5rem'}}>
            <a href="/contacto" className="btn btn-primary">Quiero el Diario</a>
          </div>
        </div>
      </section>
    </>
  );
}
