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
        <p>El Diario de Emociones EJE® es un producto digital. El pago y la entrega se procesan mediante Gumroad, y recibís el acceso apenas se confirma la compra. El Test EJE® utiliza su propio proceso de pago y acceso, informado antes de finalizar la compra.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>2. Devoluciones y reembolsos</h2>
        <p>Dado que son productos digitales descargables, no ofrezco reembolsos estándar. Si tenés un problema técnico, escribime a <a href={`mailto:${CORREO}`}>{CORREO}</a> y te ayudo a resolverlo.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>3. Acceso</h2>
        <p>Después de comprar el Diario, el recibo de Gumroad incluye el botón para abrir el cuadernillo y los 11 audios. En el caso del Test EJE®, las instrucciones de acceso y entrega se muestran en su proceso de compra.</p>
        
        <h2 style={{marginTop: '1.5rem'}}>4. Soporte técnico</h2>
        <p>Si tenés problemas para acceder al Diario, al Test o a tu Mapa, escribime a <a href={`mailto:${CORREO}`}>{CORREO}</a> y te ayudo. Para el Diario, también podés responder el recibo de Gumroad: esa respuesta me llega a mí.</p>
      </div>
    </section>
  );
}
