import CONFIG from '../data/config.js'

/**
 * Arma el link de WhatsApp para un mensaje dado. Se usa el número en
 * formato internacional (CONFIG.whatsapp) porque es la única forma
 * confiable de precargar un texto distinto por producto.
 */
export function waLink(mensaje) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensaje)}`
}

export function mensajeConsultaGeneral() {
  return `Hola ${CONFIG.nombre}! Vi la web y quería consultar por una fragancia.`
}

export function mensajeConsultaProducto(producto) {
  const casa = producto.casa && producto.casa !== 'Ficha de muestra' ? ` (${producto.casa})` : ''
  return `Hola ${CONFIG.nombre}! Quería consultar por "${producto.nombre}"${casa}. ¿Tenés disponible?`
}

export function mensajeReposicion(producto) {
  const casa = producto.casa && producto.casa !== 'Ficha de muestra' ? ` (${producto.casa})` : ''
  return `Hola ${CONFIG.nombre}! Vi "${producto.nombre}"${casa} en ediciones anteriores. ¿Sabés si va a volver a entrar?`
}
