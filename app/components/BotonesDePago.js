// ── EL PAR DE BOTONES DE PAGO ──────────────────────────────────────────
// Vivía dentro de app/test/page.js. Se sacó acá el 08/11/2026 para que la
// portada pueda usarlo sin copiar el precio ni los enlaces: duplicarlos
// significa que el día que cambie el precio haya que acordarse de los dos
// lugares, y alguno queda viejo.
//
// Por qué son dos y se nombran por la MONEDA, no por el país: el 29/09
// entraron 418 personas a /test —Paraguay 132, Colombia 97, Perú 84,
// Chile 60, Uruguay 27, Costa Rica 14 y Argentina 3— y el único pago con
// forma de botón era el que no cobra en la moneda de casi ninguno de esos
// países. Preguntar «¿sos de Argentina?» excluía de entrada al 99%.

// utm_medium=organic es el valor por defecto, para quien llega sin origen.
// OrigenCompra lo reescribe en el navegador cuando la visita trae UTM o
// viene de otro sitio, así el tramo hasta Gumroad se puede atribuir.
export const comprar = (lugar) =>
  `https://smirgo.gumroad.com/l/ozvrmy?utm_source=web&utm_medium=organic&utm_campaign=lanzamiento_22_9&utm_content=${lugar}`;

// Gumroad no cobra en pesos argentinos (verificado el 12/10 en el checkout
// real) y la audiencia propia es argentina. Link de Mercado Pago creado por
// Sol el 19/10. Ese pago no entrega el acceso solo: Sol lo manda a mano.
// No lleva UTM porque Mercado Pago no los muestra; estas ventas se cuentan
// desde el panel de Mercado Pago, no desde Gumroad. El componente Medicion
// resuelve el lugar de estos clics mirando al botón hermano de Gumroad.
export const PESOS = "https://mpago.la/1Gjzh2t";

export default function BotonesDePago({ lugar, titulo = "Comprar y empezar ahora · USD 27" }) {
  return (
    <div className="pagos">
      <a href={comprar(lugar)} className="btn btn-primary btn-pago">
        <span className="btn-pago-titulo">{titulo}</span>
        <span className="btn-pago-nota">Tarjeta internacional · la pantalla de pago está en inglés</span>
      </a>
      <a href={PESOS} className="btn btn-secondary btn-pago">
        <span className="btn-pago-titulo">Pagar en pesos · $ 40.000</span>
        <span className="btn-pago-nota">Mercado Pago · te mando el acceso por correo</span>
      </a>
    </div>
  );
}
