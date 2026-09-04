import CONFIG from '../data/config.js'

const formatter = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 })

export function formatPrecio(numero) {
  return `${CONFIG.moneda} ${formatter.format(numero)}`
}
