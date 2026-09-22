# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos audiencias con el mismo peso, cada una con un trabajo distinto:

- **Consumidor final:** personas que compran regalos, souvenirs y artículos personales (tazas, remeras, gorras, almohadas, sets infantiles) para cumpleaños, jardín de infantes, fechas especiales o uso propio. Trabajo típico: elegir un producto, personalizarlo con un diseño propio o pedido, y encargarlo de forma simple.
- **Empresas y negocios:** clientes que hacen merchandising corporativo, uniformes o regalos empresariales (remeras corporativas, tazas con logo, gorras, mousepads, pocillos) y necesitan presupuestos por cantidad.

## Product Purpose

Sublime by Emprendev es un negocio de sublimación de productos personalizados. La web funciona como catálogo de venta: muestra productos reales con sus precios (unitario y por mayor), promociones y detalle de personalización, y convierte el interés en un pedido o presupuesto a través de WhatsApp. Éxito = el visitante elige un producto y pide su presupuesto/pedido.

## Positioning

Personalización total sin mínimos, con calidad de sublimación sobre el producto. A diferencia de un estampado genérico, todo es sublimable y personalizable: diseño, color de interior y asa en tazas, caja de regalo personalizada, talles y variedad de colores. Se puede pedir desde una sola unidad hasta cantidades corporativas.

## Operating Context

- Pedidos y presupuestos por **WhatsApp** (+54 9 11 2692 2128), con mensaje de bienvenida prearmado.
- Flujo de pedido (sección "¿Cómo pedir?"): elegir producto → pedir presupuesto/reservar por WhatsApp → forma de pago (transferencia bancaria o efectivo al retirar/entregar; seña del 50% según el pedido) → enviar diseño o solicitar uno → recibir o retirar (el tiempo de producción varía según producto y cantidad).
- Redes y contacto: Instagram `@sublime.emprendev`, Facebook "Sublime By Emprendev", email sublime.emprendev@gmail.com.
- Idioma del sitio: español rioplatense con voseo ("Personalizá", "Elije tu diseño").
- Alcance geográfico: Buenos Aires y alrededores (AMBA). Entrega o retiro local.

## Capabilities and Constraints

- Productos: tazas (clásicas, mágicas, con asa de corazón o pelota de fútbol, con código de Spotify, interior/asa de color), remeras (modal, tipo raglan, corporativas, infantiles), gorras trucker, mousepads (rectangular/circular), almohadas, pocillos de café con zuncho y posavaso, sets infantiles de jardín.
- Categorías: Empresas & Negocios, Kids, Tazas, Remeras personalizadas, Más productos.
- Precios en pesos argentinos (ARS), con precio unitario, precio por mayor por cantidad y descuentos promocionales.
- Talles de remera/gorra mayormente S a XL; gorra talla única ajustable.
- Materiales declarados: cerámica, modal, poliéster, base antideslizante.
- Persistencia de datos de productos en `src/data/products/<id>.json` (un archivo por producto) y categorías en `src/data/categories.json` / `src/data/categoryNames.json`; el agregador `src/data/index.js` alimenta el sitio y el PDF.
- Generación de catálogo PDF local vía `npm run generate-catalog` → `public/catalogo.pdf`.
- Sitio desplegado en `sublime.empren.dev`.

## Brand Commitments

- Nombre: **Sublime by Emprendev** (marca "Sublime" con respaldo de Emprendev).
- Tagline actual: "Personalizá todo lo que imagines".
- Logo: `/logo-sublime.png`.
- Handle de redes e identidad digital indicados arriba.

## Evidence on Hand

- Catálogo completo de productos, precios, descripciones e imágenes en `src/data/products` y `/public`.
- Número de WhatsApp operativo (+54 9 11 2692 2128) y perfiles de Instagram/Facebook reales.
- Sitio publicado en `sublime.empren.dev` con metadatos de SEO cargados.

## Product Principles

1. **La personalización total es el producto:** cualquier artículo puede llevar el diseño del cliente (imagen, logo, texto, equipo, playlist) y el sistema de compra debe comunicar que no hay límites de cantidad ni de personalización.
2. **Atender a ambas audiencias por igual:** regalos/souvenirs para el consumidor final y merchandising/uniformes para empresas, con precios por mayor que premien el volumen y sin descuidar la venta de una sola unidad.
3. **Precio y camino de compra claros:** precio unitario, precio por mayor y promociones visibles, con fricción mínima hacia la cotización por WhatsApp.
4. **La calidad de sublimación es la promesa durable:** sostener el claim de calidad (materiales como cerámica, modal, poliéster y sublimación sobre el producto, no estampado barato) en lo que se muestra y se promete.
5. **Operación local en Buenos Aires:** entrega, retiro y ofertas de servicio deben mantenerse coherentes con el alcance AMBA.