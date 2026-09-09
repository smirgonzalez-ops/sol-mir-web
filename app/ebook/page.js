export default function Ebook() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Ebook Gratuito</h1>
          <p className="subtitle">Una introducción clara a qué es EJE® y cómo funciona.</p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '700px'}}>
          <h2>Descargá el ebook gratis</h2>
          <p>Un documento que te explica de forma directa qué es la Metodología EJE®, por qué funciona diferente a otras propuestas, y qué puertas se abren después.</p>
          
          <form action="https://app.kit.com/forms/9738047/subscriptions" method="post" style={{marginTop: '2rem'}}>
            <div>
              <input type="text" name="fields[first_name]" placeholder="Tu nombre" required style={{width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid var(--light-grey)'}} />
              <input type="email" name="email_address" placeholder="Tu correo electrónico" required style={{width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid var(--light-grey)'}} />
            </div>
            <input type="hidden" name="fields[origen]" value="web_ebook" />
            <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Descargar ebook</button>
          </form>

          <p className="muted" style={{marginTop: '1.5rem', textAlign: 'center'}}>Vas a recibir un correo para confirmar tu suscripción. Al confirmarlo, te llega el ebook.</p>
        </div>
      </section>
    </>
  );
}
