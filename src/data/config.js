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

  /* Número personal del cliente, a usar TEMPORALMENTE hasta tener el
     número comercial definitivo (así lo pidió). Formato internacional,
     sin "+" ni espacios: Argentina = 54 + 9 + 2920 (Viedma) + número. */
  whatsapp: '5492920347453',
  whatsappVisible: '2920 347453',

  instagram: 'https://www.instagram.com/ambarperfumesviedma',
  instagramVisible: '@ambarperfumesviedma',

  moneda: '$',

  /* ⚠️ DATOS INVENTADOS a pedido — reemplazar por los reales antes de
     publicar. Se muestran en el carrito cuando alguien elige pagar por
     transferencia (con botón de copiar cada dato). */
  pago: {
    titular: 'Ámbar Perfumes',
    alias: 'ambar.perfumes.vied',
    cvu: '0000003100012345678912',
  },
}

export default CONFIG
