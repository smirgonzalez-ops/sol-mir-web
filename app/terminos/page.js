import { pagina } from "../compartir";

export const metadata = pagina({
  title: "Términos y Condiciones",
  description: "Términos de uso del sitio, sus contenidos y los productos de EJE®.",
  path: "/terminos",
});

export default function Terminos() {
  return (
    <section>
      <div className="container legal-content" style={{maxWidth: '900px'}}>
        <h1>Términos y Condiciones</h1>
        <p><strong>Última actualización: septiembre 2026</strong></p>
        
        <h2 style={{marginTop: '2rem'}}>1. Uso permitido</h2>
        <p>Este sitio y sus contenidos son para uso personal, no comercial. Está prohibido copiar, distribuir o vender el contenido sin autorización.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>2. Alcance del Test EJE®</h2>
        <p>El Test EJE® es una herramienta de autoconocimiento, no un diagnóstico clínico. No reemplaza atención profesional. Si experimentás crisis emocional o síntomas de patología, buscá ayuda profesional.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>3. Responsabilidades</h2>
        <p>Hacemos el mayor esfuerzo por mantener la precisión de la información. Sin embargo, no nos responsabilizamos por daños derivados del uso de este sitio o sus productos.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>4. Cambios en los términos</h2>
        <p>Podemos actualizar estos términos en cualquier momento. El uso continuado del sitio implica aceptación de los cambios.</p>
      </div>
    </section>
  );
}
