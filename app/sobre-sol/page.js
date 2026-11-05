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
            <p><strong>Estudié Marketing y Administración de Empresas.</strong> Trabajé en Coca-Cola y Citibank, lideré equipos y aprendí a resolver problemas.</p>
            <p>Después me fui a vivir a Chile y fundé mi propia inmobiliaria.</p>
            <p>Me iba muy bien. Tenía mi negocio, mis proyectos y algo que me encantaba: la tranquilidad de saber que podía construir mi propio camino.</p>
            <p>Hasta que trasladaron a mi entonces marido a Argentina.</p>
            <p>Cerré la inmobiliaria y volvimos.</p>
            <p>Dejar atrás algo que había construido con tanto esfuerzo fue durísimo. Pero seguí adelante, ocupándome de mi familia y de mis tres hijas.</p>
            <p>Lo que no imaginaba era que, años después, iba a tener que empezar de nuevo. Y esta vez sería muy distinto.</p>

            <h3 style={{marginTop: "3rem"}}>¿En qué momento me había pasado esto?</h3>
            <p>Cuando me separé, me encontré con tres hijas, poca plata y la autoestima por el piso.</p>
            <p>Y había algo que me costaba todavía más: no entendía cómo había llegado hasta ahí.</p>
            <p>Durante años había estado pendiente de mi familia, de que todo funcionara, de resolver lo que hiciera falta.</p>
            <p>Pero cuando tuve que empezar de nuevo, me di cuenta de que había dejado muchas cosas mías para después.</p>
            <p>Necesitaba volver a trabajar, ganar mi propia plata y recuperar la confianza en mí.</p>
            <p>Lo que no esperaba era que me costara tanto.</p>
            <p>Porque después de tantos años ocupándome de los demás, había una pregunta bastante sencilla que ya no sabía responder:</p>
            <p className="remate">¿Y yo qué quería?</p>

            <h3 style={{marginTop: "3rem"}}>Lo que tardé años en ver</h3>
            <p>Después de separarme, me costó mucho volver a encontrarme.</p>
            <p>Había cosas que antes resolvía sin pensarlo y que de pronto me parecían enormes.</p>
            <p>Me daba bronca. Había trabajado, estudiado, criado a mis hijas. ¿Cómo podía sentirme tan perdida?</p>
            <p>En el trabajo sabía qué hacer. Pero cuando se trataba de mí, de mi plata, de mis miedos o de lo que quería para mi vida, todo era distinto.</p>
            <p>Y seguía haciendo lo que podía, como hacemos tantas veces. Ocupándome de todo, menos de mí.</p>
            <p>Con el tiempo empecé a entender que lo que me pasaba en una parte de mi vida también afectaba a las demás.</p>
            <p>Así apareció la idea de una silla con cuatro patas: <strong>Vínculos, Trabajo, Dinero e Identidad.</strong></p>
            <p>Y un respaldo: <strong>nuestro eje, ese lugar desde donde podemos tomar decisiones con más claridad cuando las distintas partes de nuestra vida están mejor sostenidas.</strong></p>
            <p>Porque a veces estamos tan ocupados intentando que todo funcione que ni siquiera nos preguntamos cómo estamos nosotros.</p>
            <p>De esa experiencia y de todo lo que fui aprendiendo nació EJE®.</p>

            <h3 style={{marginTop: "3rem"}}>Lo que empezó como una pregunta terminó convirtiéndose en EJE®</h3>
            <p>Después, acompañando a otras personas, empecé a encontrarme con algo parecido.</p>
            <p>Personas capaces, inteligentes, con vidas que desde afuera parecían funcionar muy bien, pero que seguían tropezando con las mismas dificultades.</p>
            <p>Y volví a una pregunta que yo misma me había hecho:</p>
            <p className="remate">¿Por qué podemos saber perfectamente lo que nos conviene y, aun así, seguir haciendo lo mismo?</p>
            <p>A partir de todo eso —lo que me pasó, lo que estudié y los años acompañando a personas— desarrollé <strong>EJE®</strong>.</p>
            <p>Un sistema de <strong>Inteligencia Estructural Humana</strong> para observar cómo respondemos en Vínculos, Trabajo, Dinero e Identidad, y cómo esas respuestas aparecen en nuestras decisiones.</p>
            <p>No para decirte cómo tenés que vivir.</p>
            <p>Sino para ayudarte a reconocer algo que quizás todavía no estás viendo.</p>
          </div>
        </div>
      </section>

      <section className="accent">
        <div className="container centrado" style={{maxWidth: "740px", textAlign: "center"}}>
          <h2>Ahora te pregunto a vos</h2>
          <p style={{fontFamily: "'Fraunces', Georgia, serif", fontSize: "1.35rem", lineHeight: 1.4, marginBottom: "1.75rem"}}>¿En qué parte de tu vida te sentís fuerte y en cuál te está costando mucho más de lo que mostrás?</p>
          <p>Para empezar a descubrirlo, creé el <strong>Test EJE®</strong>. Son 42 preguntas, unos 15 minutos. Al final te llevás tu Mapa Estructural en PDF, la lectura de tu resultado en mi voz, tu certificado y la imagen de tu resultado. Te lo mando todo por correo.</p>
          <p style={{fontSize: "0.9rem", color: "var(--grey)"}}>No es un diagnóstico psicológico ni reemplaza una terapia. Es una manera de mirar — y podés volver a usarla más adelante para ver qué se movió.</p>
          <div className="cta-group" style={{justifyContent: "center", marginTop: "2rem"}}>
            <a href="/test" className="btn btn-primary">Conocer el Test EJE®</a>
            <a href="/que-es-eje" className="btn btn-secondary">Descubrir qué es EJE®</a>
          </div>
        </div>
      </section>
    </>
  );
}
