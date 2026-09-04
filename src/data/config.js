/* =========================================================================
   ÁMBAR PERFUMES — configuración del sitio
   -------------------------------------------------------------------------
   Datos generales de la marca. Para cargar o actualizar productos no hace
   falta tocar este archivo: eso se edita en src/data/productos.js
   ========================================================================= */

const CONFIG = {
  nombre: 'Ámbar Perfumes',
  ciudad: 'Viedma, Río Negro',
  bio: 'Perfumes Árabes Originales, +60 variedades, catálogo disponible',

  /* ⚠️ IMPORTANTE — ANTES DE PUBLICAR:
     Este es un número de ejemplo (placeholder), NO funciona todavía.
     Los botones de WhatsApp arman el link como wa.me/<numero>?text=...
     para poder precargar el nombre de cada fragancia en el mensaje —
     eso requiere el número real en formato internacional, sin "+" ni
     espacios (Argentina: 54 + 9 + característica sin 0 + número sin 15).

     El link corto que pasó la clienta (wa.me/message/LFR4UQROYNRHC1) no
     se pudo usar acá: ese formato no admite texto distinto por producto
     de forma confiable, y no se pudo verificar su vigencia desde este
     entorno. Reemplazar "whatsapp" por el número real resuelve todo el
     sitio de una vez (un solo lugar para editar). */
  whatsapp: '5492920000000',
  whatsappVisible: 'Consultar número',

  instagram: 'https://www.instagram.com/ambarperfumesviedma',
  instagramVisible: '@ambarperfumesviedma',
}

export default CONFIG
