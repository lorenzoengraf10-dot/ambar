/* =========================================================================
   ÁMBAR PERFUMES — categorías del catálogo
   -------------------------------------------------------------------------
   Maneja qué aparece en la barra de pastillas del header y en la vidriera
   de tarjetas grandes debajo del hero (mismo mecanismo que malhan.vercel.app):
   tocar una categoría, en cualquiera de los dos lugares, filtra el catálogo
   para mostrar solo esa sección.

   El orden de acá abajo es el orden en que se muestran las pastillas, las
   tarjetas de la vidriera, y las secciones cuando está elegido "Todos".
   ========================================================================= */
const CATEGORIAS = {
  stock: { id: 'stock', nombre: 'Stock' },
  anteriores: { id: 'anteriores', nombre: 'Productos anteriores' },
  recomendacion: { id: 'recomendacion', nombre: 'Nuestra Recomendación' },
}

export default CATEGORIAS
