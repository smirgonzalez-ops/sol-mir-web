const routes = [
  "",
  "/que-es-eje",
  "/test",
  "/ebook",
  "/sobre-sol",
  "/diario",
  "/contacto",
  "/terminos",
  "/politica-compra",
  "/politica-privacidad",
];

export default function sitemap() {
  const baseUrl = "https://www.solmir.co";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-09-15"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/test" ? 0.9 : 0.7,
  }));
}
