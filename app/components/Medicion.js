"use client";

import Script from "next/script";
import { useEffect } from "react";

// ── POR QUÉ EXISTE ─────────────────────────────────────────────────────
// Hasta el 08/11/2026 lo único instalado era Vercel Web Analytics, que
// cuenta visitas por página y nada más. No había forma de saber cuánta
// gente toca un botón de compra, y por eso el episodio de la pauta de
// Meta quedó sin explicación: 418 visitantes el 29/09, cero ventas, y
// ningún dato en el medio. Los UTM ya se escribían en los enlaces
// (ver OrigenCompra.js) pero no había quién los leyera: leerlos en Vercel
// exige plan pago.
//
// ── POR QUÉ NO HAY BANNER DE COOKIES ───────────────────────────────────
// GA4 arranca acá con `analytics_storage: "denied"`, que es Consent Mode
// con el almacenamiento negado de entrada: NO escribe cookies. Manda los
// eventos sin identificador persistente, así que cuenta cuántas veces se
// tocó cada botón pero no sigue a una persona entre visitas.
//
// Se eligió así a propósito. El público incluye España, donde el RGPD
// exige consentimiento previo para cookies de analítica: con esta
// configuración no hace falta pedirlo, porque no se guarda nada en el
// dispositivo. Un banner en una página que busca conversión cuesta
// visitas, y el dato que falta hoy —cuántos tocan comprar— se obtiene
// igual sin cookies.
//
// Lo que se pierde: usuarios únicos y recurrencia reales (GA4 los estima).
// Lo que se gana, que es lo que hacía falta: el embudo.
const GA_ID = "G-W82X451ZJG";

export default function Medicion() {
  useEffect(() => {
    // Un solo oyente para todos los botones de pago, presentes y futuros:
    // instrumentar uno por uno se desincroniza en cuanto se agrega otro.
    const alHacerClic = (e) => {
      const enlace = e.target.closest?.("a[href]");
      if (!enlace) return;
      const href = enlace.getAttribute("href") || "";

      let medio = null;
      if (/gumroad\.com/i.test(href)) medio = "gumroad_usd";
      else if (/mpago\.la|mercadopago/i.test(href)) medio = "mercadopago_ars";
      if (!medio) return;

      // utm_content ya distingue cuál de los botones de Gumroad se tocó.
      let lugar = "sin_lugar";
      try {
        lugar = new URL(href, window.location.origin).searchParams.get("utm_content") || "sin_lugar";
      } catch (err) {
        /* un href relativo raro no debe romper el clic */
      }

      // El enlace de Mercado Pago es un acortador suyo y no acepta UTM, así
      // que sin esto los clics de los cuatro puntos de pago caerían todos en
      // el mismo cubo y no sabríamos cuál convierte. Los dos botones viven
      // juntos dentro de .pagos: se toma el lugar del hermano de Gumroad.
      if (lugar === "sin_lugar") {
        const hermano = enlace.closest(".pagos")?.querySelector('a[href*="gumroad"]');
        if (hermano) {
          try {
            lugar = new URL(hermano.href).searchParams.get("utm_content") || "sin_lugar";
          } catch (err) {
            /* idem */
          }
        }
      }

      window.gtag?.("event", "begin_checkout", {
        medio_de_pago: medio,
        lugar_del_boton: lugar,
        pagina: window.location.pathname,
      });
    };

    document.addEventListener("click", alHacerClic, true);
    return () => document.removeEventListener("click", alHacerClic, true);
  }, []);

  return (
    <>
      <Script
        id="ga4-consent"
        strategy="afterInteractive"
        // Esto corre ANTES de cargar gtag.js a propósito: si el consent
        // por defecto llegara después, el primer evento ya habría salido
        // con cookies.
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied'
            });
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `,
        }}
      />
      <Script
        id="ga4"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
    </>
  );
}
