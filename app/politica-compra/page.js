import { pagina } from "../compartir";

export const metadata = pagina({
  title: "Política de Compra y Devolución",
  description: "Condiciones de compra, acceso y soporte para los productos digitales de EJE®.",
  path: "/politica-compra",
});

const CORREO = "hola@solmir.co";

/* Reescrita el 22/11/2026. La version anterior decia «el pago y la entrega se
   procesan mediante Gumroad, y recibis el acceso apenas se confirma la
   compra», y no nombraba Mercado Pago ni una vez — pese a que el cobro en
   pesos existe desde el 19/10 (BD-041) y ahi la entrega NO es automatica:
   Sol manda la clave por correo, a mano.

   O sea que quien pagaba en pesos leia, en la pagina que fija las
   condiciones de compra, que iba a tener acceso al confirmarse el pago, y no
   lo tenia. Del Test, su unico producto principal, la pagina solo decia que
   «utiliza su propio proceso de pago y acceso, informado antes de finalizar
   la compra»: demasiado vago para una politica de entrega.

   Ahora los tres caminos de pago estan separados y cada uno dice como llega
   el acceso.

   EL PUNTO 4 NO SE TOCO A PROPOSITO. Dice que no hay reembolsos. En
   Argentina las compras a distancia tienen derecho de arrepentimiento de 10
   dias (Ley 24.240) y hay una resolucion que exige un «boton de
   arrepentimiento» en los sitios que venden a consumidores argentinos —y
   desde que se cobra en pesos, se le vende a consumidores argentinos—. Para
   productos digitales descargables hay excepciones, asi que NO esta claro
   que la redaccion actual incumpla. No es una cuestion que se resuelva
   escribiendo mejor: la tiene que mirar un abogado, junto con el pendiente
   del ®. Se deja como estaba para no empeorarlo ni darlo por resuelto. */

export default function PoliticaCompra() {
  return (
    <section>
      <div className="container legal-content" style={{maxWidth: '900px'}}>
        <h1>Política de Compra y Devolución</h1>
        <p><strong>Última actualización: noviembre 2026</strong></p>

        <h2 style={{marginTop: '2rem'}}>1. Qué vendo</h2>
        <p>Dos productos digitales: el Diario de Emociones EJE® y el Test EJE®.</p>

        <h2 style={{marginTop: '1.5rem'}}>2. Cómo pagás y cómo recibís el acceso</h2>
        <p>Depende del producto y del medio de pago.</p>
        <p><strong>Diario de Emociones EJE® — USD 15, por Gumroad.</strong> El acceso llega apenas se confirma el pago: el recibo de Gumroad trae el botón para abrir el cuadernillo y los 11 audios.</p>
        <p><strong>Test EJE® — USD 27, por Gumroad.</strong> Con tarjeta internacional; la pantalla de pago está en inglés. El acceso es inmediato: el mensaje posterior a la compra incluye la clave para entrar.</p>
        <p><strong>Test EJE® — ARS 40.000, por Mercado Pago.</strong> Para pagar en pesos desde Argentina. <strong>Acá la entrega no es automática.</strong> Una vez confirmado el pago, escribime a <a href={`mailto:${CORREO}`}>{CORREO}</a> indicando el correo que usaste, y te mando la clave.</p>

        <h2 style={{marginTop: '1.5rem'}}>3. Qué incluye la compra del Test</h2>
        <p>El acceso no vence. Podés volver a hacer el Test gratis a los 3 o 6 meses, para comparar qué cambió. El Mapa se genera en tu dispositivo y lo descargás al terminar.</p>

        <h2 style={{marginTop: '1.5rem'}}>4. Devoluciones y reembolsos</h2>
        <p>Dado que son productos digitales descargables, no ofrezco reembolsos estándar. Si tenés un problema técnico, escribime a <a href={`mailto:${CORREO}`}>{CORREO}</a> y te ayudo a resolverlo.</p>

        <h2 style={{marginTop: '1.5rem'}}>5. Si algo no funciona</h2>
        <p>Escribime a <a href={`mailto:${CORREO}`}>{CORREO}</a> y lo resolvemos. Para el Diario también podés responder el recibo de Gumroad: esa respuesta me llega a mí.</p>
      </div>
    </section>
  );
}
