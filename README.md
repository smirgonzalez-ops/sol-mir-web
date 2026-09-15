# Sol Mir — EJE®

Sitio público de [solmir.co](https://www.solmir.co), creado con Next.js 16, React 19 y App Router.

## Requisitos

- Node.js 20.9 o posterior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio queda disponible en [http://localhost:3000](http://localhost:3000).

No requiere variables de entorno. Los formularios se envían directamente al endpoint público de Kit configurado en el código.

## Controles antes de integrar cambios

```bash
npm run lint
npm run build
```

## Despliegue

Vercel publica los cambios integrados en la rama `main`. El flujo recomendado es trabajar en una rama, abrir un pull request y revisar el preview de Vercel antes de fusionar.
