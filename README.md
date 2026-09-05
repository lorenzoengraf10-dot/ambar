# Ámbar Perfumes — catálogo

Sitio de catálogo para Ámbar Perfumes (Viedma, Río Negro). Sin backend ni
pasarela de pago: el carrito arma el pedido y lo manda por WhatsApp, ya sea
para pagar en efectivo o por transferencia. React + Vite, publicado en
GitHub Pages.

## Cómo actualizar el stock

Todo el catálogo vive en **`src/data/productos.js`**. Cada fragancia es un
objeto en ese array — no hace falta tocar ningún componente ni el diseño
para agregar, editar o dar de baja una fragancia. El archivo tiene un
comentario arriba de todo explicando cada campo.

Lo único que decide en qué sección aparece una fragancia es su campo
`estado`:

- `"disponible"` → aparece en **Disponible ahora** (con botón "Agregar" al
  carrito, si tiene `precio` cargado).
- `"agotado"` → aparece en **Ediciones anteriores** (sin carrito, solo
  "Consultar reposición").

Los chips de filtro por familia olfativa se generan solos a partir de las
familias que aparecen en los productos disponibles — no hay una lista fija
que mantener.

Para agregar una foto nueva: guardala en `src/assets/productos/` e
importala arriba de `productos.js` (mirá cómo están importadas las tres
que ya están cargadas).

⚠️ Los `precio` de los 3 productos cargados son **inventados** (pedidos así
para poder mostrar el carrito funcionando) — reemplazarlos por los reales
antes de publicar.

## Antes de publicar

Editar **`src/data/config.js`**:

- `whatsapp`: tiene cargado un número personal **temporal** (así lo pidió
  el cliente) — reemplazarlo por el número comercial definitivo en formato
  internacional (sin "+" ni espacios) resuelve todos los botones de
  WhatsApp del sitio de una vez, carrito incluido.
- `instagram`: ya apunta a `@ambarperfumesviedma`.
- `pago` (`titular`, `alias`, `cvu`): **datos inventados**, a pedido, para
  poder mostrar el paso de transferencia del carrito. Se muestran (con
  botón de copiar) cuando alguien elige pagar por transferencia. Hay que
  reemplazarlos por los datos bancarios reales antes de publicar.

## Cómo funciona el carrito

Cada ficha de "Disponible ahora" tiene un botón **Agregar** (guarda la
selección en el navegador de quien compra, con `localStorage`, para que no
se pierda si recarga la página) y un link de **Consultar por WhatsApp**
directo, para quien prefiere preguntar sin pasar por el carrito.

El ícono de bolsa en el header abre el carrito: ahí se ajustan cantidades,
se ve el total y se elige cómo pagar:

- **Efectivo** → un botón abre WhatsApp con el pedido ya escrito.
- **Transferencia** → muestra los datos de `CONFIG.pago`, pide nombre y
  la confirmación de "ya transferí", y recién ahí arma el mensaje de
  WhatsApp (así se puede verificar la transferencia antes de coordinar la
  entrega).

## Desarrollo

```bash
npm install
npm run dev       # servidor local con recarga en caliente
npm run build     # build de producción en dist/
npm run preview   # sirve el build de producción localmente
npm run lint      # chequeo de código
```

## Deploy

Se publica solo en GitHub Pages con cada push a `main`, vía el workflow
`.github/workflows/deploy-pages.yml` (build + deploy con GitHub Actions).
Link: `https://lorenzoengraf10-dot.github.io/ambar/`.

También es un proyecto estándar de Vite, así que si en algún momento
conviene pasarlo a Vercel: importar el repo ahí y usar los defaults
(`npm run build`, carpeta de salida `dist`) — no hace falta configuración
adicional, salvo sacar el `base` condicional de `vite.config.js` (ese
`/ambar/` es específico de GitHub Pages).
