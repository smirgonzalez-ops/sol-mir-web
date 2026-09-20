import { pagina } from "../compartir";

// Escrita el 19/09/2026 a partir de lo que la web y el Test hacen de verdad,
// verificado en el código: formularios que van a Kit, compra en Gumroad,
// respuestas del Test guardadas sólo en el navegador, Mapa por correo vía
// Resend, contadores anónimos. Si cambia algo de eso, cambia esta página.
const CORREO = "hola@solmir.co";

export const metadata = pagina({
  title: "Política de Privacidad",
  description: "Qué datos se juntan en solmir.co y en el Test EJE®, para qué, quién los procesa y cómo pedir verlos, corregirlos o borrarlos.",
  path: "/politica-privacidad",
});

export default function PoliticaPrivacidad() {
  return (
    <section>
      <div className="container legal-content" style={{maxWidth: '900px'}}>
        <h1>Política de Privacidad</h1>
        <p><strong>Última actualización: septiembre 2026</strong></p>

        <h2 style={{marginTop: '2rem'}}>1. Quién es responsable</h2>
        <p>Soy Sol Mir, creadora de EJE®, y vivo en Argentina. Soy la responsable de los datos que dejás en este sitio y en el Test EJE®. Para cualquier consulta o pedido sobre tus datos, escribime a <a href={`mailto:${CORREO}`}>{CORREO}</a>.</p>

        <h2 style={{marginTop: '1.5rem'}}>2. Qué datos junto y para qué</h2>
        <ul className="lista-eje">
          <li><strong>Cuando dejás tu correo en un formulario</strong> —el del ebook o el de la lista de espera—: tu nombre, tu correo y, en algunos formularios, tu país. También queda registrado desde qué formulario te anotaste. Los uso para mandarte lo que pediste y para escribirte sobre EJE® y el Test.</li>
          <li><strong>Cuando comprás el Test:</strong> la compra se realiza en Gumroad, no en este sitio. Gumroad me informa tu correo y, si lo proporcionaste, tu nombre. Los datos necesarios para procesar el pago son tratados por Gumroad y sus proveedores de pago; Sol Mir no recibe el número completo de tu tarjeta.</li>
          <li><strong>Cuando hacés el Test:</strong> tus respuestas y tu resultado se guardan sólo en el navegador de tu dispositivo, no en un servidor. Si borrás los datos de navegación o cambiás de dispositivo, se pierden.</li>
          <li><strong>Si pedís tu Mapa por correo:</strong> tu correo y el PDF de tu Mapa pasan por el servidor del Test y salen por Resend, el servicio que manda ese correo. No los guardo en ninguna base propia.</li>
          <li><strong>Estadísticas:</strong> en este sitio cuento las visitas de cada página, sin cookies (Vercel Web Analytics). En el Test cuento cuántas personas lo empiezan y lo terminan y qué Macrofamilia aparece más. Nada de eso incluye tu nombre, tu correo ni tus respuestas.</li>
        </ul>

        <h2 style={{marginTop: '1.5rem'}}>3. Quién más procesa tus datos</h2>
        <p>No vendo tus datos. Para que el sitio y el Test funcionen, los procesan estas empresas, con servidores en Estados Unidos:</p>
        <ul className="lista-eje">
          <li><strong>Kit:</strong> la lista de correo.</li>
          <li><strong>Gumroad y sus proveedores de pago:</strong> la compra, el pago, la prevención del fraude y el cumplimiento de obligaciones legales.</li>
          <li><strong>Resend:</strong> el envío del Mapa por correo.</li>
          <li><strong>Vercel:</strong> el alojamiento del sitio y del Test.</li>
          <li><strong>Google:</strong> las tipografías del sitio se cargan desde sus servidores, que reciben la dirección de conexión de tu dispositivo.</li>
        </ul>
        <p>Cada una trata los datos según su propia política de privacidad.</p>

        <h2 style={{marginTop: '1.5rem'}}>4. Cuánto tiempo los guardo</h2>
        <p>Tus datos de la lista de correo quedan hasta que te des de baja o me pidas que los borre.</p>
        <p>Gumroad puede conservar información de la compra durante el tiempo necesario para cumplir obligaciones contables, fiscales, antifraude y legales, según su propia política de privacidad.</p>

        <h2 style={{marginTop: '1.5rem'}}>5. Tus derechos</h2>
        <p>Podés pedirme en cualquier momento ver qué datos tengo tuyos, corregirlos o borrarlos. Escribime a <a href={`mailto:${CORREO}`}>{CORREO}</a> y te respondo yo.</p>
        <p>Para ejercer derechos sobre los datos que Gumroad administra directamente, consultá su <a href="https://gumroad.com/privacy" target="_blank" rel="noreferrer">política de privacidad</a> o escribí a <a href="mailto:support@gumroad.com">support@gumroad.com</a>.</p>
        <p>Para dejar de recibir correos, alcanza con el enlace para darte de baja que está al pie de cada uno.</p>

        <h2 style={{marginTop: '1.5rem'}}>6. Cookies</h2>
        <p>Este sitio no usa cookies propias ni píxeles de seguimiento.</p>

        <h2 style={{marginTop: '1.5rem'}}>7. Cambios</h2>
        <p>Si cambio esta política, actualizo la fecha de arriba. La versión vigente es siempre la que está en esta página.</p>
      </div>
    </section>
  );
}
