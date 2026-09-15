import KitSignupForm from "../components/KitSignupForm";

export const metadata = {
  title: "Ebook gratuito sobre EJE®",
  description: "Descargá una introducción gratuita a la Metodología EJE® y conocé cómo funciona.",
  alternates: { canonical: "/ebook" },
};

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
          
          <KitSignupForm origin="web_ebook" buttonLabel="Descargar ebook" />

          <p className="muted" style={{marginTop: '1.5rem', textAlign: 'center'}}>Vas a recibir un correo para confirmar tu suscripción. Al confirmarlo, te llega el ebook.</p>
        </div>
      </section>
    </>
  );
}
