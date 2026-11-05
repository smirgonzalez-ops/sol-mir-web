import Image from "next/image";
import { pagina } from "../compartir";

export const metadata = pagina({
  title: "Sobre Sol Mir",
  description: "De la carrera corporativa a una inmobiliaria propia en Chile, y de una separación a la Metodología EJE®. La historia de Sol Mir.",
  path: "/sobre-sol",
});

export default function SobreSol() {
  return (
    <>
      <section className="hero profile-hero">
        <div className="container profile-hero-grid">
          <div>
            <p className="choice-eyebrow">Creadora de EJE®</p>
            <h1>Sol Mir</h1>
            <p className="subtitle">Creadora de la Metodología EJE®.</p>
          </div>
          <Image className="profile-hero-image" src="/sol-retrato.jpg" width={880} height={1100} sizes="(max-width: 768px) 72vw, 340px" priority alt="Retrato de Sol Mir, creadora de la Metodología EJE®" />
        </div>
      </section>

      <section className="authority-strip" aria-label="Trayectoria profesional de Sol Mir">
        <div className="container authority-grid">
          <div><strong>+10 años</strong><span>en empresas y liderazgo</span></div>
          <div><strong>Coca-Cola · Citibank</strong><span>experiencia corporativa</span></div>
          <div><strong>Inmobiliaria propia</strong><span>fundada en Chile</span></div>
          <div><strong>PCC</strong><span>International Coaching Federation</span></div>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: "760px"}}>
          <p className="choice-eyebrow">Mi historia</p>
          <h2>Creía que era independiente. Hasta que tuve que empezar de nuevo.</h2>
          <div className="relato">
            <p><strong>Estudié Marketing y Administración de Empresas.</strong> Trabajé en Coca-Cola y Citibank, lideré equipos y después abrí mi propia inmobiliaria en Chile.</p>
            <p>Me iba muy bien. Tenía mi negocio, mis clientes y la satisfacción de haber construido algo mío.</p>
            <p>Hasta que trasladaron a mi entonces marido a Argentina y tuve que cerrar la inmobiliaria.</p>
            <p>Me dolió muchísimo, pero seguí adelante, ocupándome de mi familia y de mis tres hijas.</p>
            <p>Años después me separé. Y ahí sí, sentí que se me venía todo encima.</p>

            <h3 style={{marginTop: "3rem"}}>¿En qué momento me había pasado esto?</h3>
            <p>Me encontré con poca plata, la autoestima por el piso y un montón de decisiones que tenía miedo de tomar.</p>
            <p>No entendía cómo había llegado hasta ahí.</p>
            <p>Había trabajado, estudiado, manejado una empresa. ¿Cómo podía sentirme tan insegura?</p>
            <p>Durante años me había ocupado de que todo funcionara para los demás. Pero cuando tuve que volver a pensar en mí, había una pregunta que ya no sabía responder:</p>
            <p className="remate">¿Y yo qué quería?</p>

            <h3 style={{marginTop: "3rem"}}>Lo que tardé años en ver</h3>
            <p>Había algo que me llamaba la atención.</p>
            <p>Podía resolver problemas enormes en el trabajo, pero me costaba poner límites en mis relaciones.</p>
            <p>Había sabido administrar una empresa, pero me daba miedo mirar mis propias cuentas.</p>
            <p>Con el tiempo entendí que lo que pasaba en una parte de mi vida también afectaba a las demás.</p>
            <p>Y encontré una manera sencilla de explicarlo: <strong>una silla con cuatro patas.</strong></p>
            <p><strong>Vínculos, Trabajo, Dinero e Identidad.</strong></p>
            <p>Y un respaldo: <strong>nuestro eje, desde donde podemos tomar decisiones con más claridad cuando esas cuatro partes están mejor sostenidas.</strong></p>

            <h3 style={{marginTop: "3rem"}}>Así nació EJE®</h3>
            <p>Cuando empecé a acompañar a otras personas, escuché historias que me resultaban muy familiares.</p>
            <p>Personas que se perdían a sí mismas intentando sostener una relación.</p>
            <p>Otras que se endeudaban para mantener una vida que ni siquiera disfrutaban.</p>
            <p>Y personas que, después de una separación o un problema económico, tenían que empezar de nuevo y no sabían cómo recuperar la confianza.</p>
            <p>Eran situaciones diferentes, pero muchas veces pasaba algo parecido: lo que les costaba en una parte de su vida terminaba afectando a las demás.</p>
            <p>Y había una pregunta que seguía apareciendo:</p>
            <p className="remate">¿Por qué, aunque sabemos lo que nos hace mal, a veces seguimos haciendo lo mismo?</p>
            <p>De mi experiencia, mis estudios y los años acompañando a personas nació <strong>EJE®</strong>, un sistema para observar cómo respondemos en Vínculos, Trabajo, Dinero e Identidad, y cómo eso influye en nuestras decisiones.</p>
          </div>
        </div>
      </section>

      <section className="accent cierre">
        <div className="container centrado" style={{maxWidth: "740px", textAlign: "center"}}>
          <h2>¿Y vos, cómo estás hoy?</h2>
          <div className="cierre-test">
            <p>Quizás en el trabajo te sentís firme, pero en tus relaciones te cuesta poner límites.</p>
            <p>O ganás bien, pero la plata nunca te alcanza.</p>
            <p>Tal vez estás tan pendiente de los demás que hace mucho no te preguntás qué querés para vos.</p>
          </div>
          <p style={{fontFamily: "'Fraunces', Georgia, serif", fontSize: "1.35rem", lineHeight: 1.4, margin: "1.75rem 0"}}>¿En qué parte de tu vida te sentís bien y en cuál te está costando más de lo que mostrás?</p>
          <div className="cierre-test">
            <p>Para empezar a descubrirlo, creé el <strong>Test EJE®</strong>.</p>
            <p>Son 42 preguntas que respondés en unos 15 minutos. Recibís tu propio Mapa Estructural, con cuatro porcentajes independientes basados en tus respuestas, uno por cada área de tu vida.</p>
            <p>También podés observar qué respuestas se repiten y cómo pueden influir en tus decisiones.</p>
            <p>Te llevás tu informe en PDF, audios grabados por mí, una imagen de tu resultado y un certificado.</p>
            <p>Y podés volver a hacerlo cuando quieras para comparar tus respuestas y ver qué cambió.</p>
          </div>
          <p style={{fontSize: "0.9rem", color: "var(--grey)"}}>Es una herramienta de autoconocimiento, no un diagnóstico psicológico.</p>
          <div className="cta-group" style={{justifyContent: "center", marginTop: "2rem"}}>
            <a href="/test" className="btn btn-primary">Conocer el Test EJE®</a>
            <a href="/que-es-eje" className="btn btn-secondary">Descubrir qué es EJE®</a>
          </div>
        </div>
      </section>
    </>
  );
}
