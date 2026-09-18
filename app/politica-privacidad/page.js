import { pagina } from "../compartir";

export const metadata = pagina({
  title: "Política de Privacidad",
  description: "Cómo se recopilan, utilizan y protegen los datos personales en solmir.co.",
  path: "/politica-privacidad",
});

export default function PoliticaPrivacidad() {
  return (
    <section>
      <div className="container legal-content" style={{maxWidth: '900px'}}>
        <h1>Política de Privacidad</h1>
        <p><strong>Última actualización: septiembre 2026</strong></p>
        
        <h2 style={{marginTop: '2rem'}}>1. Información que recopilamos</h2>
        <p>Recopilamos información que vos voluntariamente proporcionás en formularios: nombre, correo electrónico, país.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>2. Cómo usamos tu información</h2>
        <p>Usamos tu correo para enviarte el ebook, actualizaciones sobre el Test, y comunicaciones sobre EJE®. No vendemos ni compartimos tu información con terceros.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>3. Seguridad</h2>
        <p>Tu información se almacena de forma segura. Usamos encriptación en todas las transacciones.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>4. Derecho a borrar tus datos</h2>
        <p>Podés solicitar en cualquier momento que borremos tu información de nuestros registros.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>5. Contacto</h2>
        <p>Si tenés preguntas sobre esta política, escribinos por los canales indicados en la página de contacto.</p>
      </div>
    </section>
  );
}
