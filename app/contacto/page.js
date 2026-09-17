export const metadata = {
  title: "Contacto",
  description: "Escribirle a Sol Mir por el Test EJE®, por llevar EJE® a una organización o por prensa. Los mensajes los lee y responde ella.",
  alternates: { canonical: "/contacto" },
};

export default function Contacto() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Contacto</h1>
          <p className="subtitle">Los mensajes los leo y los respondo yo.</p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '760px'}}>
          <h2>Para qué escribirme</h2>
          <ul className="lista-eje">
            <li><strong>Por el Test EJE® o tu Mapa.</strong> Si algo no funcionó, no llegó o no se entiende.</li>
            <li><strong>Desde una organización.</strong> Si trabajás en una empresa, una cámara o una institución y querés conversar sobre EJE® en equipos, escribime y lo charlamos.</li>
            <li><strong>Por prensa, entrevistas o podcast.</strong></li>
          </ul>

          <h3 style={{marginTop: '3rem'}}>Antes de escribir, dos cosas</h3>
          <p>Si pediste el ebook y no te llegó, mirá primero en correo no deseado: casi siempre está ahí.</p>
          <p>Y si estás atravesando una crisis, EJE® no reemplaza atención profesional. Buscá ayuda con alguien que pueda acompañarte de cerca.</p>

          <h3 style={{marginTop: '3rem'}}>Por dónde</h3>
          <p>Los dos canales son míos y los leo yo. No hay un equipo detrás respondiendo.</p>
          <div className="cta-group" style={{marginTop: '2rem'}}>
            <a href="https://www.linkedin.com/in/soledadmirgonzalez" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Escribirme por LinkedIn</a>
            <a href="https://www.instagram.com/soy_solmir" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Escribirme por Instagram</a>
          </div>
          <p className="muted" style={{marginTop: '2rem'}}>Si lo que querés es el ebook gratuito, no hace falta que me escribas: dejá tu correo en <a href="/ebook">esta página</a> y te llega solo.</p>
        </div>
      </section>
    </>
  );
}
