export default function Contacto() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Contacto</h1>
          <p className="subtitle">¿Preguntas, sugerencias, o algo que compartir?</p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '700px'}}>
          <h2>Escribime</h2>
          <p>La forma más directa de llegar a mí hoy es por mensaje. Leo y respondo yo.</p>
          <div className="cta-group" style={{marginTop: '2rem'}}>
            <a href="https://www.linkedin.com/in/soledadmirgonzalez" target="_blank" rel="noopener" className="btn btn-primary">Escribirme por LinkedIn</a>
            <a href="https://www.instagram.com/solmircoach" target="_blank" rel="noopener" className="btn btn-secondary">Escribirme por Instagram</a>
          </div>
          <p className="muted" style={{marginTop: '2rem'}}>Si querés recibir el ebook gratuito y las novedades de EJE®, dejá tu correo en <a href="/ebook">esta página</a>.</p>
        </div>
      </section>
    </>
  );
}
