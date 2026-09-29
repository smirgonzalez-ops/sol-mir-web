"use client";

import { useEffect } from "react";

// Los tres botones de compra salían siempre con utm_medium=organic fijo.
// Con una campaña de Meta corriendo, todo el tráfico pago llegaba a Gumroad
// marcado como orgánico: era imposible saber si una visita al producto venía
// de la pauta, de Instagram o de nadie. El 29/09 entraron 418 personas a esta
// página y el tramo siguiente seguía siendo ciego.
//
// Esto reescribe los enlaces a Gumroad al montar, con el origen real de la
// visita. No toca utm_content, que es el que distingue cuál de los tres
// botones se tocó. Si el JavaScript no corre, los enlaces del HTML siguen
// funcionando tal como están: esto sólo agrega precisión, nunca la quita.
export default function OrigenCompra() {
  useEffect(() => {
    const parametros = new URLSearchParams(window.location.search);
    let origen = null;

    if (parametros.get("utm_source")) {
      origen = {
        source: parametros.get("utm_source"),
        medium: parametros.get("utm_medium") || "sin_medio",
        campaign: parametros.get("utm_campaign") || "sin_campana",
        // Meta lo completa con el nombre del anuncio. Si no viene, no se
        // inventa: el enlace sale sin term, como hasta ahora.
        term: parametros.get("utm_term") || null,
      };
    } else {
      // Sin UTM, el referrer es lo único que queda. Se le saca el prefijo
      // del subdominio para que m.facebook.com y facebook.com no cuenten
      // como dos orígenes distintos, que es lo que pasa hoy.
      try {
        const desde = document.referrer ? new URL(document.referrer) : null;
        if (desde && desde.hostname && desde.hostname !== window.location.hostname) {
          origen = {
            source: desde.hostname.replace(/^(www|m|l|lm)\./, ""),
            medium: "referral",
            campaign: "sin_campana",
          };
        }
      } catch (e) {
        // Un referrer mal formado no puede romper la página.
      }
    }

    // Se guarda para la sesión: si la persona navega a otra página y vuelve,
    // el origen se pierde del referrer pero la visita sigue siendo la misma.
    try {
      if (origen) sessionStorage.setItem("eje_origen", JSON.stringify(origen));
      else origen = JSON.parse(sessionStorage.getItem("eje_origen") || "null");
    } catch (e) {
      // Navegación privada o almacenamiento bloqueado: se sigue sin guardar.
    }

    if (!origen) return;

    document.querySelectorAll('a[href*="gumroad.com"]').forEach((enlace) => {
      try {
        const destino = new URL(enlace.href);
        destino.searchParams.set("utm_source", origen.source);
        destino.searchParams.set("utm_medium", origen.medium);
        destino.searchParams.set("utm_campaign", origen.campaign);
        if (origen.term) destino.searchParams.set("utm_term", origen.term);
        enlace.href = destino.toString();
      } catch (e) {
        // Si un enlace no se puede reescribir, queda el original.
      }
    });
  }, []);

  return null;
}
