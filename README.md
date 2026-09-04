# Ámbar Perfumes — catálogo

Sitio de catálogo estático para Ámbar Perfumes (Viedma, Río Negro). Sin backend,
sin checkout: el pedido se cierra por WhatsApp. React + Vite, pensado para
desplegarse en Vercel.

## Cómo actualizar el stock

Todo el catálogo vive en **`src/data/productos.js`**. Cada fragancia es un
objeto en ese array — no hace falta tocar ningún componente ni el diseño
para agregar, editar o dar de baja una fragancia. El archivo tiene un
comentario arriba de todo explicando cada campo.

Lo único que decide en qué sección aparece una fragancia es su campo
`estado`:

- `"disponible"` → aparece en **Disponible ahora**.
- `"agotado"` → aparece en **Ediciones anteriores**.

Los chips de filtro por familia olfativa se generan solos a partir de las
familias que aparecen en los productos disponibles — no hay una lista fija
que mantener.

Para agregar una foto nueva: guardala en `src/assets/productos/` e
importala arriba de `productos.js` (mirá cómo están importadas las tres
que ya están cargadas).

## Antes de publicar

Editar **`src/data/config.js`**:

- `whatsapp`: ahora mismo tiene un número de ejemplo que no funciona.
  Reemplazarlo por el número real en formato internacional (sin "+" ni
  espacios) resuelve todos los botones de WhatsApp del sitio de una vez.
- `instagram`: ya apunta a `@ambarperfumesviedma`.

## Desarrollo

```bash
npm install
npm run dev       # servidor local con recarga en caliente
npm run build     # build de producción en dist/
npm run preview   # sirve el build de producción localmente
npm run lint      # chequeo de código
```

## Deploy

Proyecto estándar de Vite: en Vercel, importar el repo y usar los
defaults (`npm run build`, carpeta de salida `dist`) — no hace falta
configuración adicional.
