import CONFIG from '../data/config.js'
import { formatPrecio } from './precio.js'

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

/**
 * items: [{ producto, cantidad }]. Suma el precio de los que tienen precio
 * cargado; los que no, van aparte como "a consultar" (igual que en cada
 * ficha de producto).
 */
export function totalCarrito(items) {
  let suma = 0
  let aConsultar = 0
  items.forEach(({ producto, cantidad }) => {
    if (cantidad <= 0) return
    if (typeof producto.precio === 'number' && producto.precio > 0) suma += producto.precio * cantidad
    else aConsultar += cantidad
  })
  return { suma, aConsultar }
}

/**
 * Arma el mensaje de WhatsApp con el pedido completo. `pago` (opcional) es
 * { metodo: "efectivo" | "transferencia", nombre } — si viene, se agregan
 * al final las líneas del medio de pago elegido.
 */
export function mensajeCarrito(items, pago) {
  const activos = items.filter((it) => it.cantidad > 0)
  const { suma, aConsultar } = totalCarrito(activos)

  const lineas = activos.map(({ producto, cantidad }) => {
    const precio =
      typeof producto.precio === 'number' && producto.precio > 0
        ? formatPrecio(producto.precio * cantidad)
        : 'a consultar'
    return `• ${cantidad} × ${producto.nombre} — ${precio}`
  })

  let txt = `Hola ${CONFIG.nombre}! Quiero hacer este pedido:\n\n`
  txt += lineas.join('\n')

  if (suma > 0) txt += `\n\nTotal: ${formatPrecio(suma)}`
  if (aConsultar > 0) txt += suma > 0 ? `\n(+ ${aConsultar} producto(s) a consultar)` : ''

  if (pago?.metodo === 'efectivo') {
    txt += '\n\nMedio de pago: Efectivo'
  } else if (pago?.metodo === 'transferencia') {
    txt += '\n\nMedio de pago: Transferencia'
    txt += `\nYa realicé la transferencia a nombre de ${pago.nombre}. ¡Muchas gracias!`
  }

  return txt
}
