import { pagina } from "../compartir";

export const metadata = pagina({
  title: "Política de Compra y Devolución",
  description: "Condiciones de compra, acceso y soporte para los productos digitales de EJE®.",
  path: "/politica-compra",
});

const CORREO = "hola@solmir.co";

export default function PoliticaCompra() {
  return (
    <section>
      <div className="container legal-content" style={{maxWidth: '900px'}}>
        <h1>Política de Compra y Devolución</h1>
        <p><strong>Última actualización: septiembre 2026</strong></p>
        
        <h2 style={{marginTop: '2rem'}}>1. Compras de productos digitales</h2>
        <p>El Diario de Emociones y el Test EJE® son productos digitales. El Test se paga en Gumroad, y recibís el acceso apenas se confirma el pago.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>2. Devoluciones y reembolsos</h2>
        <p>Dado que son productos digitales descargables, no ofrezco reembolsos estándar. Si tenés un problema técnico, escribime a <a href={`mailto:${CORREO}`}>{CORREO}</a> y te ayudo a resolverlo.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>3. Acceso</h2>
        <p>Después de pagar, entrás al Test desde el botón “View content” del recibo de Gumroad. Tu Mapa llega en PDF: guardalo, es tuyo.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>4. Soporte técnico</h2>
        <p>Si tenés problemas para entrar al Test o con tu Mapa, escribime a <a href={`mailto:${CORREO}`}>{CORREO}</a> y te ayudo. También podés responder el recibo de Gumroad: esa respuesta me llega a mí.</p>
      </div>
    </section>
  );
}
