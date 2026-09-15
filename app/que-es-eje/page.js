export const metadata = {
  title: "Qué es EJE®",
  description: "Conocé la Metodología EJE®, un sistema de observación de patrones y estructura humana.",
  alternates: { canonical: "/que-es-eje" },
};

export default function QueEsEJE() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>EJE® — Sistema de <span className="text-terra">Inteligencia Estructural Humana</span></h1>
          <p className="subtitle">Una metodología de observación y transformación que funciona porque empieza donde realmente estás.</p>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: '900px'}}>
          <h2>¿Qué es realmente EJE®?</h2>
          <p><strong>EJE® es un sistema que lee cómo tu estructura interna aprendió a responder ante el mundo.</strong> No diagnostica. No etiqueta. No patologiza.</p>
          <p>Lo que hace es mostrarte cómo tu sistema se organiza en cuatro territorios de tu vida —identidad, vínculos, trabajo y dinero—, cómo esa organización genera los patrones que se repiten y de qué manera atraviesa tus decisiones.</p>
          <p><strong>Y acá está lo importante:</strong> no promete borrar esos patrones. Promete algo más útil: que dejes de ser gobernada por ellos sin darte cuenta.</p>

          <h3 style={{marginTop: '3rem'}}>Los cuatro territorios de una experiencia</h3>
          <div className="grid grid-2" style={{marginTop: '2rem'}}>
            <div className="card">
              <h4>Identidad</h4>
              <p>Dentro de vos: cómo experimentás, sentís y registrás lo que te pasa. Tu verdad emocional.</p>
            </div>
            <div className="card">
              <h4>Vínculos</h4>
              <p>Frente al otro: cómo te vinculás, cómo te presentás y qué sostenés en tus relaciones.</p>
            </div>
            <div className="card">
              <h4>Trabajo</h4>
              <p>Cómo te ubicás frente a la productividad, el reconocimiento y la contribución.</p>
            </div>
            <div className="card">
              <h4>Dinero</h4>
              <p>Tu relación con la abundancia, el valor y la seguridad material.</p>
            </div>
          </div>

          <div className="card" style={{marginTop: '2rem'}}>
            <h4>Las decisiones atraviesan los cuatro</h4>
            <p>Cómo elegís en cada territorio. O cómo el patrón termina eligiendo por vos.</p>
          </div>

          <h3 style={{marginTop: '3rem'}}>Lo que EJE® NO es</h3>
          <ul style={{listStyle: 'none', marginTop: '1.5rem'}}>
            <li style={{marginBottom: '1rem'}}><strong>No es una sesión de coaching.</strong> EJE® tiene un mapa y un recorrido propios; puede complementar otros procesos sin reemplazarlos.</li>
            <li style={{marginBottom: '1rem'}}><strong>No es terapia.</strong> No tratamos patología ni reemplazamos atención profesional.</li>
            <li style={{marginBottom: '1rem'}}><strong>No es tarot ni astrología.</strong> Todo lo que ves en tu Mapa viene de lo que vos misma dijiste en el Test.</li>
            <li style={{marginBottom: '1rem'}}><strong>No es una fórmula rápida.</strong> No promete cambio en 7 días ni transformación garantizada.</li>
          </ul>

          <h3 style={{marginTop: '3rem'}}>Lo que sí es</h3>
          <ul style={{listStyle: 'none', marginTop: '1.5rem'}}>
            <li style={{marginBottom: '1rem'}}><strong>Una metodología de observación.</strong> Precisa, profunda, honesta.</li>
            <li style={{marginBottom: '1rem'}}><strong>Una herramienta de autoconocimiento.</strong> Te muestra tu propia lógica.</li>
            <li style={{marginBottom: '1rem'}}><strong>Un sistema escalable.</strong> Funciona en vínculos, trabajo, dinero — en cualquier contexto.</li>
            <li style={{marginBottom: '1rem'}}><strong>Un puente entre comprensión y acción.</strong> De saber QUÉ pasa a poder hacer ALGO al respecto.</li>
          </ul>

          <div className="card" style={{marginTop: '3rem', backgroundColor: 'var(--linen)', borderLeftColor: 'var(--terra)'}}>
            <h4>El patrón no desaparece. Pierde poder.</h4>
            <p>Cuando reconocés exactamente cómo funciona tu estructura, aparece una brecha. Esa brecha es donde la elección vive. Y cuanto más conocés esa brecha, más seguido decidís desde ahí en lugar de desde el patrón.</p>
          </div>
        </div>
      </section>

      <section className="accent">
        <div className="container" style={{maxWidth: '800px', textAlign: 'center'}}>
          <h2>¿Lista para conocer tu Mapa Estructural?</h2>
          <p style={{marginTop: '1rem'}}>El Test EJE® te muestra cómo tu sistema se organiza y cuál es el patrón que sostiene tus decisiones.</p>
          <a href="/test" className="btn btn-primary" style={{marginTop: '2rem'}}>Acceder al Test EJE®</a>
        </div>
      </section>
    </>
  );
}
