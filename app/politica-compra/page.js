import { pagina } from "../compartir";

export const metadata = pagina({
  title: "Política de Compra y Devolución",
  description: "Condiciones de compra, acceso y soporte para los productos digitales de EJE®.",
  path: "/politica-compra",
});

export default function PoliticaCompra() {
  return (
    <section>
      <div className="container legal-content" style={{maxWidth: '900px'}}>
        <h1>Política de Compra y Devolución</h1>
        <p><strong>Última actualización: septiembre 2026</strong></p>
        
        <h2 style={{marginTop: '2rem'}}>1. Compras de productos digitales</h2>
        <p>El Diario de Emociones y el Test EJE® son productos digitales. Los pagos se procesan a través de plataformas seguras. Recibís acceso inmediatamente después de la confirmación.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>2. Devoluciones y reembolsos</h2>
        <p>Dado que son productos digitales descargables, no ofrecemos reembolsos estándar. Si experimentás un problema técnico, contactanos para asistencia.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>3. Acceso continuo</h2>
        <p>Tu acceso a los productos comprados es de por vida. Podés descargar el material en cualquier momento desde tu correo de confirmación.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>4. Soporte técnico</h2>
        <p>Si tenés problemas descargando o accediendo a tu compra, escribinos y te ayudamos.</p>
      </div>
    </section>
  );
}
