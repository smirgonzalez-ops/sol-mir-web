import type { NextConfig } from "next";

// ── CABECERAS DE SEGURIDAD ─────────────────────────────────────────────
// Auditoría del 08/11/2026: de las seis cabeceras habituales el sitio sólo
// mandaba Strict-Transport-Security, que la pone Vercel. Faltaban las
// otras cinco.
//
// La que más importaba es X-Frame-Options: sin ella cualquiera puede
// cargar solmir.co dentro de un iframe y montar encima una pantalla de
// pago falsa, con la barra de direcciones mostrando su propio dominio.
//
// La CSP está escrita a partir de lo que el sitio realmente carga, no de
// una plantilla: cada origen de la lista corresponde a algo que se
// verificó en las peticiones de red. Si mañana se agrega otro servicio y
// no se suma acá, el navegador lo bloquea en silencio — por eso conviene
// mirar la consola después de cualquier integración nueva.
const CSP = [
  "default-src 'self'",
  // 'unsafe-inline' hace falta para los scripts que Next inyecta en el
  // HTML y para el bloque de consentimiento de GA4, que tiene que correr
  // antes que gtag.js. 'unsafe-eval' NO se incluye.
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://va.vercel-scripts.com https://vitals.vercel-insights.com https://app.kit.com https://*.kit.com",
  // NO VA form-action. Se puso el 08/11 con app.kit.com y *.kit.com listados,
  // y aun asi Chrome bloqueaba el alta del ebook: el POST a Kit responde 302 y
  // Chrome vuelve a evaluar form-action en la redireccion, informando la URL
  // original como bloqueada. La cadena completa, medida despues de sacar la
  // directiva, es:
  //
  //   app.kit.com/forms/9738047/subscriptions
  //     -> app.kit.com/forms/guards/<uuid>
  //       -> drive.google.com/file/d/<id>/view     (el PDF del ebook)
  //
  // drive.google.com nunca estuvo en la lista, y ese es el salto que fallaba.
  //
  // NO se vuelve a poner form-action con drive.google.com agregado, y el
  // motivo importa: ese destino final es la "redireccion despues de
  // suscribirse" que se configura DENTRO de Kit. Sol puede cambiarla desde el
  // panel, sin tocar el codigo, el dia que mueva el ebook a otro lado. Si eso
  // pasa, el formulario se rompe de nuevo igual de silencioso que esta vez.
  // Una directiva que depende de una opcion que vive en otro sistema no se
  // sostiene.
  //
  // Encontrado el 16/11 porque Sol puso su correo y no pasaba nada. Estuvo
  // roto ocho dias: del 08/11 al 16/11 ninguna alta del ebook llego a Kit.
  // Es la boca del embudo.
  //
  // Lo que se pierde al sacarla: un atacante que YA logro inyectar HTML podria
  // mandar los datos de un formulario a su propio servidor. Para inyectar
  // necesita pasar script-src, que sigue cerrado, igual que object-src,
  // base-uri y frame-ancestors. El riesgo que cubria es chico; el costo de
  // equivocarse es que nadie se suscriba nunca.
  // Nadie puede meter este sitio dentro de un marco. Es el equivalente
  // moderno de X-Frame-Options, que se deja igual por navegadores viejos.
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const CABECERAS = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "X-Frame-Options", value: "DENY" },
  // Evita que el navegador "adivine" el tipo de un archivo y lo ejecute
  // como algo que no es.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Al salir del sitio se manda el origen, no la URL completa: así un
  // tercero no ve por qué página venía la persona.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // El sitio no usa nada de esto. Negarlo explícitamente evita que un
  // script de terceros lo pida en nombre de la página.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
];

// ── UNA SOLA PÁGINA DE «QUÉ ES EJE®» ───────────────────────────────────
// Había dos vivas, con títulos distintos, y a cuál llegabas dependía de por
// dónde hubieras entrado: la portada mandaba a /eje y /test mandaba a
// /que-es-eje. Sol, 21/11: «dejemos una página de qué es EJE, la que más se
// entienda».
//
// Queda /que-es-eje, por dos motivos y el segundo pesa más que el primero:
//
//   1. Explica mejor. Arranca por la experiencia de quien lee —«¿cuánto
//      tiempo más vas a seguir sosteniendo todo, menos a vos?»— con escenas
//      concretas, construye la silla paso a paso (las cuatro patas, que no
//      siempre están igual de firmes, y recién después el respaldo) y cierra
//      con «Lo que EJE® no es», que /eje no tiene.
//
//   2. /eje define mal la marca justo donde hay que definirla bien: a la
//      pregunta «¿Qué es EJE®?» responde «un sistema de AUTOCONOCIMIENTO», y
//      no nombra la categoría en ningún lado de la página. La categoría
//      oficial es Inteligencia Estructural Humana (BD-017), y /que-es-eje sí
//      la lleva.
//
// Lo que /eje tenía de más —las entregas, los dos precios, los dos medios de
// pago, la muestra del Mapa— vive en /test, que es su lugar. La biografía
// está en /sobre-sol y la guía en /ebook: no se pierde nada.
//
// 307 Y NO 308 a propósito: el 308 lo cachean los navegadores para siempre y
// volver atrás se vuelve molesto para quien ya lo visitó. Como /eje es del
// 19/11 y apenas está indexada, el costo de SEO de un temporal es bajo y la
// marcha atrás sale gratis. Si dentro de un tiempo la decisión se confirma,
// se cambia `permanent` a true. El archivo app/eje/page.js NO se borró: las
// redirecciones se evalúan antes que el sistema de archivos, así que alcanza
// con sacar esta regla para que vuelva a verse.
const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: CABECERAS }];
  },
  async redirects() {
    return [{ source: "/eje", destination: "/que-es-eje", permanent: false }];
  },
};

export default nextConfig;
