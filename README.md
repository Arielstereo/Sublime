# Sublime by Emprendev

![Sublime Logo](public/logo-sublime.png)

> Personalizá todo lo que imaginás — productos a medida, regalos corporativos y merchandising único.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000?logo=vercel)](https://sublime.empren.dev)

---

## Descripción general

**Sublime** es una landing de e-commerce moderna para productos personalizados, construida por **Emprendev**. Cuenta con un catálogo de productos totalmente estático con vistas dinámicas de categoría y detalle de producto, pedidos por WhatsApp y generación automática de catálogo en PDF.

**Sitio web:** [sublime.empren.dev](https://sublime.empren.dev)

---

## Características

- **Catálogo de productos** — Navegá por categoría (Merchandising Corporativo, Kids, Tazas, Uniformes Corporativos, Más productos)
- **Páginas de detalle de producto** — Especificaciones completas, galería de imágenes, muestras de color, características y productos relacionados
- **Integración con WhatsApp** — Solicitud de presupuesto en un click con mensajes pre-completados
- **Generador de catálogo PDF** — Creación automática de `catalogo.pdf` desde los datos de productos
- **Tema oscuro** — Paleta personalizada basada en tonos "ink" con acento rosa
- **Animaciones** — GSAP, Motion y OGL para interacciones fluidas
- **Totalmente estático** — Sin base de datos, sin auth, sin API routes; deployado en Vercel

---

## Stack tecnológico

| Capa           | Tecnología                                              |
| -------------- | ------------------------------------------------------- |
| Framework      | Next.js 16 (App Router)                                 |
| Runtime        | React 19                                                |
| Estilos        | Tailwind CSS v4 (variables CSS, `@tailwindcss/postcss`) |
| Iconos         | Iconify (colecciones Lucide + Streamline Pixel)         |
| Fuentes        | Rubik (cuerpo), Orbitron (display) vía `next/font`      |
| Animaciones    | GSAP, Motion, OGL                                       |
| Generación PDF | PDFKit                                                  |
| Deploy         | Vercel                                                  |

---

## Estructura del proyecto

```
sublime/
├── public/                    # Assets estáticos
│   ├── tazas/                 # Imágenes de productos tazas
│   ├── remeras/               # Imágenes de productos indumentaria
│   ├── otros/                 # Imágenes de productos varios
│   ├── logo-sublime.png       # Logo de la marca
│   └── catalogo.pdf           # Catálogo PDF generado
├── src/
│   ├── app/
│   │   ├── components/        # Todos los componentes cliente (Header, Hero, ProductCarousel, etc.)
│   │   ├── products/[id]/     # Ruta dinámica: vista categoría (id string) o detalle producto (id numérico)
│   │   ├── globals.css        # Tailwind v4 + tokens de tema personalizados
│   │   ├── layout.jsx         # Layout raíz con providers
│   │   └── page.jsx           # Composición de la home
│   ├── data/
│   │   ├── index.js           # Agrega todos los datos de productos
│   │   ├── categories.json    # Metadatos de categorías (nombre, label, imagen)
│   │   ├── categoryNames.json # Mapa ID categoría → nombre display
│   │   └── products/          # JSONs de productos por categoría
│   └── scripts/
│       └── generateCatalog.js # Generador de catálogo PDF
├── package.json
├── next.config.mjs
├── postcss.config.mjs
├── jsconfig.json              # Alias de path @/* → src/*
└── AGENTS.md                  # Guías de desarrollo


```

---

## Primeros pasos

### Requisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/arielstereo/sublime.git
cd sublime

# Instalar dependencias
pnpm install
```

### Desarrollo

```bash
# Levantar servidor de desarrollo en http://localhost:3000
pnpm dev
```

### Build y preview

```bash
# Build de producción
pnpm build

# Correr build de producción localmente
pnpm start
```

### Linting

```bash
pnpm lint
```

---

## Scripts disponibles

| Comando                 | Descripción                                           |
| ----------------------- | ----------------------------------------------------- |
| `pnpm dev`              | Levanta servidor de desarrollo                        |
| `pnpm build`            | Crea build de producción                              |
| `pnpm start`            | Corre build de producción localmente                  |
| `pnpm lint`             | Ejecuta ESLint (extiende `next/core-web-vitals`)      |
| `pnpm generate-catalog` | Genera `public/catalogo.pdf` desde datos de productos |

---

## Agregar un producto nuevo

1. **Agregar imágenes** a `public/<categoria>/` (ej. `public/tazas/`)
2. **Crear JSON del producto** en `src/data/products/<categoria>/<id>.json`
3. **Importar y exportar** en `src/data/index.js` (mantener orden numérico de IDs)
4. **Regenerar PDF** del catálogo:

```bash
pnpm generate-catalog
```

---

## Lógica de routing

La ruta dinámica `/products/[id]` sirve dos propósitos:

| Tipo de ID              | Ejemplo           | Renderiza                                                             |
| ----------------------- | ----------------- | --------------------------------------------------------------------- |
| String (slug categoría) | `/products/tazas` | `CategoryView` — grilla de productos + cards de categorías vinculadas |
| Numérico (ID producto)  | `/products/6`     | `ProductDetail` — página completa con galería, specs, CTA WhatsApp    |

La detección de categoría la maneja `isCategory(id)` chequeando contra las keys de `categoryNames`.

---

## Deep links de WhatsApp

Todos los CTAs usan un helper `waLink(mensaje)` que genera:

```
https://api.whatsapp.com/send?phone=<numero>&text=<mensaje-codificado>
```

Los mensajes vienen pre-completados con contexto (nombre del producto, categoría, pedidos de diseño propio).

---

## Generación del catálogo PDF

El script en `scripts/generateCatalog.js`:

- Lee todos los JSONs de producto de `src/data/products/`
- Ordena por ID numérico
- Genera una tabla con columnas: **Nombre**, **Descripción**, **Precio**, **Imagen**
- Agrega logo de Sublime en el header
- Alterna tonos de fondo en las filas
- Exporta a `public/catalogo.pdf`

Ejecutalo cada vez que agregues/actualices productos:

```bash
pnpm generate-catalog
```

---

## Deploy

**Target:** Vercel (`sublime.empren.dev`)  
**Build command:** `pnpm build`  
**Output:** `.next/` (default)

No se requieren variables de entorno para la funcionalidad core. Existe `.env.local` para `NEXT_PUBLIC_SITE_URL` pero no se commitea.

---
