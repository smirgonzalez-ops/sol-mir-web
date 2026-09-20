import Image from "next/image";
import { pagina } from "../compartir";

export const metadata = pagina({
  title: "Sobre Sol Mir",
  description: "Conocé la trayectoria de Sol Mir, consultora, formadora en liderazgo y creadora de la Metodología EJE®.",
  path: "/sobre-sol",
});

export default function SobreSol() {
  return (
    <>
      <section className="hero profile-hero">
        <div className="container profile-hero-grid">
          <div>
            <p className="choice-eyebrow">Autora y creadora de EJE®</p>
            <h1>Sol Mir</h1>
            <p className="subtitle">Consultora y formadora en liderazgo. Creadora de la Metodología EJE®.</p>
          </div>
          <Image className="profile-hero-image" src="/sol-retrato.jpg" width={880} height={1100} sizes="(max-width: 768px) 72vw, 340px" priority alt="Retrato de Sol Mir, creadora de la Metodología EJE®" />
        </div>
      </section>

      <section className="authority-strip" aria-label="Trayectoria profesional de Sol Mir">
        <div className="container authority-grid">
          <div><strong>+10 años</strong><span>en empresas y liderazgo</span></div>
          <div><strong>Coca-Cola · Citibank</strong><span>experiencia corporativa</span></div>
          <div><strong>Marketing + Administración</strong><span>formación profesional</span></div>
          <div><strong>Autora de EJE®</strong><span>metodología propia</span></div>
        </div>
      </section>

      <section>
        <div className="container" style={{maxWidth: "760px"}}>
          <p className="choice-eyebrow">Mi trayectoria</p>
          <h2>Entender no siempre alcanza para dejar de repetir.</h2>
          <div className="relato">
            <p><strong>Soy licenciada en Marketing y Administración de Empresas.</strong> Durante más de una década trabajé en grandes corporaciones, entre ellas Coca-Cola y Citibank. Aprendí a resolver, negociar, liderar y volver a empezar.</p>
            <p>Durante años me pensé como una mujer independiente. Y en muchos aspectos lo era.</p>
            <p>Lo que no veía era que una persona puede ser muy autónoma en un área de su vida y depender demasiado en otra.</p>
            <p className="remate">Yo no parecía dependiente. Por eso tardé tanto en descubrir dónde lo era.</p>

            <h3 style={{marginTop: "3rem"}}>La silla apareció cuando mi vida cambió</h3>
            <p>Después de muchos años de matrimonio, la relación terminó. No se desarmó solamente una pareja: hubo que reorganizar rutinas, dinero, decisiones, una familia y una idea de futuro.</p>
            <p>Ahí descubrí cuánto había delegado y en qué estado estaban las áreas de mi vida que parecían funcionar.</p>
            <p>En la práctica, significó volver a ocuparme del dinero, tomar decisiones que antes no tomaba y reconstruir una identidad que no dependiera de una pareja.</p>
            <p>Con los años apareció una imagen que explicaba lo que me había pasado: una silla común, con cuatro patas.</p>
            <p><strong>Vínculos. Trabajo. Dinero. Yo.</strong></p>
            <p>Yo había desarrollado muchísimo algunas y había cargado demasiado peso sobre otra. Como la silla no se caía, asumía que estaba bien construida. En realidad, era yo quien llevaba años compensándola.</p>
            <p>Tuve que volver a mirar mi estructura. No para negar mi historia ni culparme por ella, sino para reconocer qué margen tenía y qué podía empezar a construir de otra manera.</p>

            <h3 style={{marginTop: "3rem"}}>De una experiencia personal a una metodología</h3>
            <p>Después trabajé con personas, equipos y líderes. Empecé a ver versiones distintas del mismo fenómeno: gente brillante en el trabajo que desaparecía dentro de una relación; personas afectivamente seguras que se desorganizaban con el dinero; líderes capaces de sostener equipos enteros que no podían poner un límite.</p>
            <p>Ahí entendí que no funcionamos de una única manera. No somos simplemente fuertes o débiles, dependientes o independientes. <strong>Somos estructuras, y distribuimos el peso de manera distinta según el área.</strong></p>
            <p>De esa observación nació EJE®: no como una fórmula ni como una etiqueta, sino como una manera de mirar cómo estamos respondiendo hoy.</p>
            <p>Yo aprendí a mirar la silla después de caerme. Creé EJE® para que otras personas puedan mirarla antes.</p>
            <p className="remate">No podemos elegir todas las marcas que la vida deja sobre nosotros. Pero sí podemos decidir qué construimos con ellas.</p>
          </div>

          <div style={{marginTop: "3rem", backgroundColor: "var(--linen)", padding: "2rem", borderLeft: "2px solid var(--olive-soft)"}}>
            <p style={{marginBottom: 0}}><strong>Hoy trabajo como autora y creadora de EJE®</strong>, acompañando a personas que quieren observar su estructura con precisión y elegir desde un lugar diferente.</p>
          </div>
        </div>
      </section>

      <section className="accent">
        <div className="container centrado" style={{maxWidth: "800px", textAlign: "center"}}>
          <h2>Empecemos</h2>
          <p>Si querés mirar cómo está organizada hoy tu estructura, podés empezar por el Test EJE®.</p>
          <div className="cta-group" style={{justifyContent: "center", marginTop: "2rem"}}>
            <a href="/test" className="btn btn-primary">Conocer el Test EJE®</a>
            <a href="/que-es-eje" className="btn btn-secondary">Entender la metodología</a>
          </div>
        </div>
      </section>
    </>
  );
}
