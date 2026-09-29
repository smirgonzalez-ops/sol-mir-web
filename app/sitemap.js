// Una fecha por ruta, no una sola para todas. El sitemap le dice a Google
// cuándo cambió cada página; con un valor fijo para las diez, le está
// diciendo que nada cambió desde el 15/09 — y /test cambió tres veces
// después de esa fecha.
//
// NO se usa la fecha del build: eso diría que las diez cambiaron en cada
// despliegue, que es igual de falso y los buscadores lo terminan ignorando.
// Cuando se edita una página de verdad, se actualiza su fecha acá.
const rutas = [
  { ruta: "",                     tocada: "2026-09-17", frecuencia: "weekly",  prioridad: 1 },
  { ruta: "/test",                tocada: "2026-09-29", frecuencia: "weekly",  prioridad: 0.9 },
  { ruta: "/que-es-eje",          tocada: "2026-09-17", frecuencia: "monthly", prioridad: 0.7 },
  { ruta: "/ebook",               tocada: "2026-09-17", frecuencia: "monthly", prioridad: 0.7 },
  { ruta: "/sobre-sol",           tocada: "2026-09-17", frecuencia: "monthly", prioridad: 0.7 },
  { ruta: "/diario",              tocada: "2026-09-17", frecuencia: "monthly", prioridad: 0.7 },
  { ruta: "/contacto",            tocada: "2026-09-19", frecuencia: "monthly", prioridad: 0.7 },
  { ruta: "/terminos",            tocada: "2026-09-19", frecuencia: "yearly",  prioridad: 0.3 },
  { ruta: "/politica-compra",     tocada: "2026-09-19", frecuencia: "yearly",  prioridad: 0.3 },
  { ruta: "/politica-privacidad", tocada: "2026-09-19", frecuencia: "yearly",  prioridad: 0.3 },
];

export default function sitemap() {
  const baseUrl = "https://www.solmir.co";

  return rutas.map(({ ruta, tocada, frecuencia, prioridad }) => ({
    url: `${baseUrl}${ruta}`,
    lastModified: new Date(tocada),
    changeFrequency: frecuencia,
    priority: prioridad,
  }));
}
