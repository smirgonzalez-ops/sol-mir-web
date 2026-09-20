import { pagina } from "../compartir";

const CORREO = "hola@solmir.co";

export const metadata = pagina({
  title: "Términos y Condiciones",
  description: "De quién es este sitio, qué se puede hacer con su contenido y qué es —y qué no es— el Test EJE®.",
  path: "/terminos",
});

export default function Terminos() {
  return (
    <section>
      <div className="container legal-content" style={{maxWidth: '900px'}}>
        <h1>Términos y Condiciones</h1>
        <p><strong>Última actualización: septiembre 2026</strong></p>

        <h2 style={{marginTop: '2rem'}}>1. De quién es este sitio</h2>
        <p>Este sitio es de Sol Mir, creadora de EJE®, en Argentina. Para cualquier consulta sobre estos términos, escribime a <a href={`mailto:${CORREO}`}>{CORREO}</a>.</p>

        <h2 style={{marginTop: '1.5rem'}}>2. Uso del contenido</h2>
        <p>Los textos, la metodología y los materiales de este sitio son de Sol Mir. Podés leerlos y compartir los enlaces. No podés copiarlos, venderlos ni usarlos para ofrecer servicios sin autorización por escrito.</p>

        <h2 style={{marginTop: '1.5rem'}}>3. Qué es y qué no es el Test EJE®</h2>
        <p>El Test EJE® es una herramienta de autoconocimiento. No es un diagnóstico clínico y no reemplaza la atención de un profesional de la salud mental.</p>
        <p>El resultado es una lectura orientativa de cómo estás respondiendo hoy, basada en tus propias respuestas. Las decisiones que tomes a partir de él son tuyas.</p>
        <p>Si estás atravesando una crisis, buscá ayuda profesional o contactá a los servicios de emergencia de tu país.</p>

        <h2 style={{marginTop: '1.5rem'}}>4. Compra y acceso</h2>
        <p>El Test se compra en Gumroad. Se entra con la contraseña que recibís al comprar, y el acceso es personal: no está pensado para compartirse ni publicarse. Las condiciones de compra están en la <a href="/politica-compra">Política de Compra</a> y el tratamiento de tus datos, en la <a href="/politica-privacidad">Política de Privacidad</a>.</p>

        <h2 style={{marginTop: '1.5rem'}}>5. Cambios</h2>
        <p>Si cambio estos términos, actualizo la fecha de arriba. La versión vigente es siempre la que está en esta página.</p>
      </div>
    </section>
  );
}
