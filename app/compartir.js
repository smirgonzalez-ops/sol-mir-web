// Lo que se ve cuando alguien comparte un enlace de la web (WhatsApp,
// LinkedIn, mensajes directos).
//
// Next.js no combina el openGraph del layout con el de cada página: si una
// página no define el suyo, hereda entero el de la home —título y dirección
// incluidos—; y si lo define, reemplaza el del layout completo. Por eso cada
// página arma su tarjeta acá, con la imagen y el nombre del sitio en un solo
// lugar.

// 1200 × 630, el formato apaisado de las tarjetas: la foto entra entera y no
// se recorta. Frase de Sol, aprobada el 18/09.
const IMAGEN = {
  url: "/solmir-compartir.jpg",
  width: 1200,
  height: 630,
  alt: "Sol Mir, creadora de EJE®, junto a la frase «Podés sostener a todos y no saber qué necesitás vos. EJE® te muestra qué conviene mirar primero.»",
};

export function tarjeta({ title, description, path }) {
  return {
    openGraph: {
      title,
      description,
      url: path,
      siteName: "EJE®",
      locale: "es_AR",
      type: "website",
      images: [IMAGEN],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [IMAGEN.url],
    },
  };
}

// Metadatos completos de una página: título, descripción, dirección canónica
// y su propia tarjeta. La pestaña del navegador y la tarjeta dicen lo mismo
// («Contacto | Sol Mir»); si el título ya nombra a Sol, no se repite la firma.
export function pagina({ title, description, path }) {
  const completo = title.includes("Sol Mir") ? title : `${title} | Sol Mir`;
  return {
    title: { absolute: completo },
    description,
    alternates: { canonical: path },
    ...tarjeta({ title: completo, description, path }),
  };
}
