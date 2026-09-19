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

      <section>
        <div className="container" style={{maxWidth: '760px'}}>
          <h2>Mi trayectoria</h2>
          <div className="bio-intro">
            <div>
              <p><strong>Licenciada en Marketing y Administración de Empresas.</strong> Durante más de una década trabajé en grandes corporaciones —Coca-Cola y Citibank—. Esa experiencia me permitió observar cómo las personas y los equipos pueden comprender un problema y, aun así, repetir la misma respuesta.</p>
          
            </div>
          </div>

          <h3 style={{marginTop: '3rem'}}>Mi historia</h3>
          <div className="relato">
            <p>Durante mucho tiempo pensé que una vida se rompía cuando ocurría algo extraordinario.</p>
            <p>Una pérdida. Una separación. Una llamada inesperada. Una decisión que cambia todo.</p>
            <p>Después entendí que no.</p>
            <p>A veces una vida empieza a desequilibrarse mucho antes, en movimientos tan pequeños que casi nadie los registra.</p>
            <p className="dialogo">—Ocupate vos.<br />—Decidilo vos.<br />—Después lo vemos.<br />—Eso lo manejás mejor.<br />—No importa.</p>
            <p>Y no importa.<br />Hasta que importa.</p>
            <p>Yo tardé años en entenderlo.</p>
            <p>Porque mientras algunas partes de mi vida se iban desacomodando, desde afuera todo parecía funcionar.</p>
            <p>Y yo también lo creía.</p>
            <p>Había estudiado. Había trabajado en empresas grandes. Había vivido afuera. Había emprendido. Había vendido. Había liderado proyectos. Había armado negocios. Había vuelto a empezar más de una vez.</p>
            <p>Podía entrar a una reunión sin conocer a nadie y resolver.<br />Podía negociar.<br />Podía organizar.<br />Podía trabajar bajo presión.<br />Podía criar.<br />Podía empezar de cero.</p>
            <p>Moverme nunca había sido mi problema.<br />Mi problema era otro.</p>
            <p>Yo podía cambiar de ciudad, de trabajo, de proyecto o de país más fácilmente que cambiar algunas formas de vincularme.</p>
            <p>Pero todavía no lo sabía.</p>
            <hr className="separador" />
            <p>Durante años me pensé como una mujer independiente.<br />Y en muchos aspectos lo era.</p>
            <p>Trabajaba.<br />Tomaba decisiones.<br />Tenía carácter.<br />Tenía proyectos.<br />Podía resolver problemas complejos.<br />Podía sostener a otros.</p>
            <p>Lo que no veía era que una persona puede ser muy autónoma en un área de su vida y depender demasiado en otra.</p>
            <p>Podés ser brillante trabajando y sentirte completamente perdida afectivamente.</p>
            <p>Podés administrar un equipo y no administrar tu propia energía.</p>
            <p>Podés negociar un contrato sin pestañear y tardar meses en poner un límite.</p>
            <p>Podés ser muy fuerte profesionalmente y haber delegado partes importantes de tu vida personal.</p>
            <p>Yo había construido mucha autonomía.<br />Pero no en todos lados.</p>
            <p>Y como las áreas que funcionaban bien eran muy visibles, durante mucho tiempo no miré las otras.</p>
            <p>Ésa fue una de las trampas más sofisticadas de mi vida.</p>
            <p>Yo no parecía dependiente.<br />Por eso tardé tanto en descubrir dónde lo era.</p>
            <hr className="separador" />
            <p>Me casé.<br />Construí una familia.<br />Fui madre de tres hijas.</p>
            <p>Y a partir de ahí la vida se convirtió en una mezcla bastante caótica de amor, trabajo, horarios, colegios, cumpleaños, enfermedades, decisiones, proyectos y esa sensación permanente de que siempre había algo más por resolver.</p>
            <p>Durante muchos años fui muchas mujeres al mismo tiempo.</p>
            <p>La madre.<br />La profesional.<br />La esposa.<br />La emprendedora.<br />La que organizaba.<br />La que solucionaba.<br />La que podía.</p>
            <p>Sobre todo esa.<br />La que podía.</p>
            <p>Creo que gran parte de mi identidad estuvo construida alrededor de esa frase.</p>
            <p>Yo puedo.</p>
            <p>Si hay un problema, encuentro una manera.<br />Si hay que trabajar, trabajo.<br />Si hay que empezar de nuevo, empiezo.<br />Si hay que mudarse, nos mudamos.<br />Si hay que volver, volvemos.<br />Si hay que vender, vendo.<br />Si hay que sostener, sostengo.</p>
            <p>El problema de ser la persona que puede con casi todo es que también aprendés a ocultarte muy bien aquello con lo que no podés.</p>
            <p>Incluso de vos misma.</p>
            <hr className="separador" />
            <p>Con los años apareció en mi cabeza una imagen.</p>
            <p>Una silla.<br />Una silla común.<br />Cuatro patas.</p>
            <p>La pensé mucho tiempo después, pero cuando apareció entendí que explicaba gran parte de mi historia.</p>
            <p>Mis cuatro patas eran:</p>
            <p><strong>Vínculos.</strong><br /><strong>Trabajo.</strong><br /><strong>Dinero.</strong><br /><strong>Yo.</strong></p>
            <p>Lo ideal no es que las cuatro sean idénticas.<br />La vida no funciona así.</p>
            <p>Hay momentos en los que el trabajo necesita más.<br />Otros en los que una relación ocupa más espacio.</p>
            <p>Hay épocas donde el dinero preocupa.<br />Y otras en las que una necesita volver profundamente hacia sí misma.</p>
            <p>Pero para que la silla realmente sostenga, las cuatro patas necesitan conservar cierto equilibrio.</p>
            <p>Necesitan estar <strong>en eje</strong>.</p>
            <p>Porque si tres empiezan a acortarse y una sola sostiene casi todo el peso, probablemente durante un tiempo igual puedas seguir sentándote.</p>
            <p>Te acomodás.<br />Compensás.<br />Te acostumbrás.</p>
            <p>Tal vez ponés algo debajo.</p>
            <p>Un cartón.<br />Una explicación.<br />Una excusa.<br />Una costumbre.</p>
            <p>La silla vuelve a parecer estable.<br />Y como parece estable, seguís usándola.</p>
            <p>Eso hice yo durante años.</p>
            <p>Fui redistribuyendo el peso sin darme cuenta.</p>
            <p>Cada vez que una pata perdía fuerza, cargaba un poco más sobre otra.</p>
            <p>Hasta que una empezó a sostener demasiado.</p>
            <p>La pareja.</p>
            <p>No porque no trabajara.<br />Trabajaba muchísimo.</p>
            <p>No porque no tuviera capacidad.<br />La tenía.</p>
            <p>No porque alguien me hubiera obligado a desaparecer.<br />Eso sería demasiado sencillo.</p>
            <p>Yo también participé de esa arquitectura.</p>
            <p>Delegué.<br />Me acostumbré.<br />Dejé determinadas decisiones en manos del otro.</p>
            <p>Desarrollé muchísimo algunas áreas y dejé otras bastante menos trabajadas.</p>
            <p>Y como la silla no se caía, asumí que estaba bien construida.</p>
            <hr className="separador" />
            <p>Después de muchos años de matrimonio, la relación terminó.</p>
            <p>Y una separación larga no ocupa solamente el lugar del amor.</p>
            <p>Ocupa rutinas.<br />Cuentas.<br />Familias.<br />Fines de semana.<br />Recuerdos.<br />Decisiones.<br />Colegios.<br />Papeles.<br />Planes.<br />Una idea de futuro.<br />Incluso algunas partes de tu identidad.</p>
            <p>Entonces cuando se termina, no se separan solamente dos personas.</p>
            <p>Hay que desarmar un sistema.</p>
            <p>Y los sistemas no tienen una línea punteada que indique por dónde cortar.</p>
            <hr className="separador" />
            <p>Recuerdo papeles.<br />Números.<br />Porcentajes.<br />Fechas.<br />Responsabilidades.<br />Acuerdos.<br />Decisiones.</p>
            <p>Mientras los adultos intentábamos ordenar una estructura nueva, mis hijas seguían creciendo.</p>
            <p>Eso es algo que la maternidad enseña rápido.</p>
            <p>Tu mundo puede estar temblando y el colegio sigue empezando a la misma hora.</p>
            <p>Hay una prueba.<br />Un entrenamiento.<br />Un cumpleaños.<br />Una mochila perdida.<br />Alguien que necesita hablar.<br />Alguien que tiene hambre.<br />Alguien que pregunta algo justo cuando vos sentís que no tenés una respuesta para nada.</p>
            <p>Y una sigue.</p>
            <p>No porque sea invencible.</p>
            <p>Porque son las ocho menos diez.</p>
            <hr className="separador" />
            <p>Al principio pensé que el dolor más grande de la separación iba a ser afectivo.</p>
            <p>Hubo dolor, por supuesto.</p>
            <p>Pero hubo otra cosa que me produjo un vértigo distinto.</p>
            <p>Descubrí cuánto había delegado.</p>
            <p>De pronto tuve que mirar cosas que durante años no había necesitado mirar de la misma manera.</p>
            <p>Dinero.<br />Decisiones.<br />Responsabilidades.<br />Mi identidad fuera de la pareja.<br />Qué quería.<br />Qué podía.<br />Qué sabía.<br />Y qué no.</p>
            <p>Ahí apareció de verdad la silla.</p>
            <p>No como una teoría.<br />Como una constatación brutal.</p>
            <p>Yo había creído que tenía cuatro patas bastante fuertes.</p>
            <p>En realidad había aprendido a vivir descargando demasiado peso sobre una sola.</p>
            <p>Cuando esa pata dejó de estar, el problema no fue solamente que faltara una relación.</p>
            <p>El problema fue que descubrí en qué estado estaban las otras.</p>
            <hr className="separador" />
            <p>Tuve que aprender algunas cosas de nuevo.</p>
            <p>Trabajo.<br />Dinero.<br />Vínculos.<br />Yo misma.</p>
            <p>Y descubrí algo humillante y liberador al mismo tiempo:<br />ser inteligente no te evita tener áreas inmaduras.</p>
            <p>Tener formación no te salva de elegir mal.</p>
            <p>Ser excelente profesionalmente no significa que sepas administrar emocionalmente tu vida.</p>
            <p>Saber acompañar a otros no significa que sepas acompañarte.</p>
            <p>Tener carácter no significa que siempre pongas límites.</p>
            <p>Y entender intelectualmente lo que te pasa no significa necesariamente que puedas dejar de repetirlo.</p>
            <p>Ése fue uno de los descubrimientos más importantes de mi vida.</p>
            <hr className="separador" />
            <p>Después de mi matrimonio llegaron otros vínculos.</p>
            <p>Y llegué a ellos con una idea bastante ingenua.</p>
            <p>Ahora ya sé.</p>
            <p>Había vivido una separación.<br />Había trabajado sobre mí.<br />Había estudiado.<br />Había entendido muchísimo.</p>
            <p>Por lo tanto, pensé que conocimiento iba a equivaler a elección.</p>
            <p>No siempre fue así.</p>
            <p>Volví a encontrarme con patrones.</p>
            <p>No con historias idénticas.</p>
            <p>Ésa es otra trampa.</p>
            <p>Creemos que repetir significa hacer exactamente lo mismo.</p>
            <p>No.</p>
            <p>La repetición sabe disfrazarse.</p>
            <p>Cambia la persona.<br />Cambia el escenario.<br />Cambia la edad.<br />Cambia la intensidad.<br />Cambia la historia.</p>
            <p>Pero una puede terminar parada exactamente en el mismo lugar emocional convencida de que eligió algo completamente diferente.</p>
            <p>Y ahí apareció otra pregunta.</p>
            <p>Una pregunta bastante más incómoda que:<br />«¿Por qué elijo mal?»</p>
            <p>La pregunta fue:</p>
            <p><strong>¿Por qué algo en mí reconoce como familiar aquello que después me hace mal?</strong></p>
            <hr className="separador" />
            <p>Mientras tanto seguía trabajando.</p>
            <p>Emprendí.<br />Vendí.<br />Armé proyectos.<br />Me formé.<br />Acompañé personas.</p>
            <p>Después trabajé también con empresas, equipos, líderes y estructuras.</p>
            <p>Y empecé a ver en otros algo que ya conocía sin haber sabido nombrar.</p>
            <p>Personas brillantísimas en el trabajo que desaparecían dentro de una relación.</p>
            <p>Personas afectivamente muy seguras que se desorganizaban completamente con el dinero.</p>
            <p>Líderes capaces de dirigir equipos enormes que no podían poner un límite.</p>
            <p>Personas económicamente autónomas que necesitaban aprobación para determinadas decisiones personales.</p>
            <p>Gente muy consciente de sus patrones que, aun así, seguía repitiéndolos.</p>
            <p>Ahí empecé a entender que una persona no funciona de una única manera.</p>
            <p>No somos un bloque.</p>
            <p>No somos simplemente seguros o inseguros.<br />Fuertes o débiles.<br />Dependientes o independientes.</p>
            <p>Somos estructuras.</p>
            <p>Y esas estructuras distribuyen peso de manera distinta según el área.</p>
            <hr className="separador" />
            <p>De ahí empezó a nacer EJE®.</p>
            <p>No como una fórmula.<br />No como una manera de decirle a una persona quién es.<br />Y mucho menos como una etiqueta definitiva.</p>
            <p>Cómo se convirtió en método está contado en <a href="/que-es-eje">Qué es EJE®</a>.</p>
            <p style={{marginTop: '1.5rem', marginBottom: '2rem'}}><a href="/test" className="btn btn-secondary">Conocé el Test EJE®</a></p>
            <hr className="separador" />
            <p>Yo aprendí a mirar la silla después de caerme.</p>
            <p>Después de descubrir que algunas patas que yo creía fuertes no lo eran tanto.</p>
            <p>Después de comprobar que saber no siempre alcanza.</p>
            <p>Después de repetir cosas que estaba convencida de haber entendido.</p>
            <p>Después de volver a empezar varias veces.</p>
            <p>Después de acompañar a otras personas y reconocer en ellas versiones distintas del mismo fenómeno.</p>
            <p>Hoy entiendo que aquella silla nunca estuvo terminada.<br />Ni entonces.<br />Ni ahora.</p>
            <p>Sigo construyéndola.<br />Todos lo hacemos.<br />Hasta el último día.</p>
            <p>Porque mientras podamos mirar nuestra estructura y tomar una decisión diferente, todavía podemos intervenir en la forma en que estamos viviendo.</p>
            <p>No podemos elegir todas las marcas que la vida deja sobre nosotros.<br />Pero sí podemos decidir qué construimos con ellas.</p>
            <p>Y quizás por eso EJE nació de una pregunta muy sencilla.</p>
            <p>Una pregunta que todavía hoy me importa más que cualquier teoría:</p>
            <p className="remate">¿Y si pudiéramos mirar nuestra silla a tiempo y volver a ser protagonistas de cómo queremos construirla?</p>
          </div>

          <div style={{marginTop: '3rem', backgroundColor: 'var(--linen)', padding: '2rem', borderLeft: '4px solid var(--terra)'}}>
            <p><strong>Hoy trabajo como autora y creadora de EJE®,</strong> acompañando a personas que quieren observar su propia estructura con precisión y elegir desde un lugar diferente.</p>
          </div>
        </div>
      </section>

      <section className="accent">
        <div className="container centrado" style={{maxWidth: '800px', textAlign: 'center'}}>
          <h2>Empecemos</h2>
          <p>Si sentís que algo en tu estructura quiere cambiar, están todas las puertas abiertas.</p>
          <div className="cta-group" style={{justifyContent: 'center', marginTop: '2rem'}}>
            <a href="/ebook" className="btn btn-primary">Descargar el ebook gratuito</a>
            <a href="/test" className="btn btn-secondary">Conocer el Test EJE®</a>
          </div>
        </div>
      </section>
    </>
  );
}
