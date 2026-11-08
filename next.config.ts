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
  // El formulario del ebook postea a Kit.
  "form-action 'self' https://app.kit.com https://*.kit.com",
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

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: CABECERAS }];
  },
};

export default nextConfig;
