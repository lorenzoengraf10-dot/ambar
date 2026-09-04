import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import CONFIG from '../data/config.js'
import { formatPrecio } from '../utils/precio.js'
import { mensajeCarrito, totalCarrito, waLink } from '../utils/whatsapp.js'
import { IconBottle, IconWhatsapp } from './icons.jsx'

function DatoTransferencia({ label, valor, copiado, onCopiar }) {
  return (
    <div className="pago-dato-row">
      <span className="pago-dato-label">{label}</span>
      <span className="pago-dato-valor">{valor}</span>
      <button
        type="button"
        className={`pago-dato-copy${copiado ? ' is-ok' : ''}`}
        onClick={() => onCopiar(valor, label)}
      >
        {copiado ? '¡Copiado!' : 'Copiar'}
      </button>
    </div>
  )
}

export default function CartDrawer() {
  const { items, abierto, cerrar, cambiar, quitar, vaciar } = useCart()
  const [metodo, setMetodo] = useState(null)
  const [nombre, setNombre] = useState('')
  const [confirmado, setConfirmado] = useState(false)
  const [error, setError] = useState(null)
  const [copiado, setCopiado] = useState(null)

  if (!abierto) return null

  const hayItems = items.length > 0
  const { suma, aConsultar } = totalCarrito(items)

  const resetPago = () => {
    setMetodo(null)
    setNombre('')
    setConfirmado(false)
    setError(null)
  }

  const elegirMetodo = (m) => {
    setMetodo((actual) => (actual === m ? null : m))
    setError(null)
  }

  const copiar = async (valor, label) => {
    try {
      await navigator.clipboard.writeText(valor)
    } catch {
      /* portapapeles no disponible: el dato ya está a la vista para copiarlo a mano */
    }
    setCopiado(label)
    setTimeout(() => setCopiado(null), 1200)
  }

  const confirmarTransferencia = () => {
    if (!confirmado) {
      setError('Marcá "Ya realicé la transferencia" antes de confirmar.')
      return
    }
    const nombreOk = nombre.trim()
    if (!nombreOk) {
      setError('Escribí tu nombre y apellido para identificar la transferencia.')
      return
    }
    window.open(waLink(mensajeCarrito(items, { metodo: 'transferencia', nombre: nombreOk })), '_blank', 'noopener')
    vaciar()
    resetPago()
    cerrar()
  }

  return (
    <div className="cart">
      <button type="button" className="cart__backdrop" onClick={cerrar} aria-label="Cerrar selección" />
      <aside className="cart__panel" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <header className="cart__head">
          <h2 className="cart__title" id="cart-title">Tu selección</h2>
          <button className="cart__close" onClick={cerrar} type="button" aria-label="Cerrar">×</button>
        </header>

        <div className="cart__body">
          {!hayItems ? (
            <div className="cart__vacio">
              <p><strong>Todavía no agregaste nada.</strong></p>
              <p>Volvé a "Disponible ahora" y sumá lo que te guste.</p>
              <a className="btn btn--gold" href="#disponible-ahora" onClick={cerrar}>
                Ver el catálogo
              </a>
            </div>
          ) : (
            items.map(({ id, cantidad, producto }) => (
              <article className={`citem${cantidad === 0 ? ' citem--pausa' : ''}`} key={id}>
                <div className={`citem__media${producto.imagen ? '' : ' is-empty'}`}>
                  {producto.imagen ? (
                    <img src={producto.imagen} alt="" loading="lazy" />
                  ) : (
                    <IconBottle />
                  )}
                </div>
                <div className="citem__body">
                  <h3 className="citem__nombre">{producto.nombre}</h3>
                  <p className="citem__precio">
                    {cantidad === 0
                      ? 'En pausa — tocá + para sumarlo de nuevo'
                      : typeof producto.precio === 'number' && producto.precio > 0
                        ? formatPrecio(producto.precio * cantidad)
                        : 'A consultar'}
                  </p>
                  <div className="citem__cant">
                    <button
                      type="button"
                      onClick={() => cambiar(id, -1)}
                      disabled={cantidad === 0}
                      aria-label={`Sacar uno de ${producto.nombre}`}
                    >
                      −
                    </button>
                    <span aria-live="polite">{cantidad}</span>
                    <button type="button" onClick={() => cambiar(id, 1)} aria-label={`Sumar uno de ${producto.nombre}`}>
                      +
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="citem__quitar"
                  onClick={() => quitar(id)}
                  aria-label={`Sacar ${producto.nombre} de la selección`}
                >
                  ×
                </button>
              </article>
            ))
          )}
        </div>

        {hayItems && (
          <footer className="cart__foot">
            <div className="cart__total">
              <span>Total</span>
              {suma > 0 ? (
                <>
                  <strong>{formatPrecio(suma)}</strong>
                  {aConsultar > 0 && <small>+ {aConsultar} a consultar</small>}
                </>
              ) : (
                <strong>A consultar</strong>
              )}
            </div>

            <div className="cart__pago">
              <p className="cart__pago-label">¿Cómo vas a pagar?</p>
              <div className="cart__pago-opciones">
                <button
                  type="button"
                  className={`pago-opcion${metodo === 'efectivo' ? ' is-activo' : ''}`}
                  aria-pressed={metodo === 'efectivo'}
                  onClick={() => elegirMetodo('efectivo')}
                >
                  Efectivo
                </button>
                <button
                  type="button"
                  className={`pago-opcion${metodo === 'transferencia' ? ' is-activo' : ''}`}
                  aria-pressed={metodo === 'transferencia'}
                  onClick={() => elegirMetodo('transferencia')}
                >
                  Transferencia
                </button>
              </div>
            </div>

            {metodo === 'efectivo' && (
              <div className="pago-detalle">
                <p className="cart__pago-nota">Pagás en efectivo al recibir o retirar tu pedido.</p>
                <a
                  className="btn btn--wa cart__cta"
                  href={waLink(mensajeCarrito(items, { metodo: 'efectivo' }))}
                  target="_blank"
                  rel="noopener"
                >
                  <IconWhatsapp />
                  <span>Hacer el pedido</span>
                </a>
                <p className="cart__nota">
                  Se abre WhatsApp con el pedido ya escrito. Ahí confirmamos stock y coordinamos la entrega.
                </p>
              </div>
            )}

            {metodo === 'transferencia' && (
              <div className="pago-detalle pago-transferencia">
                <span className="pago-transferencia-title">Datos para transferir</span>
                <div className="pago-transferencia-datos">
                  <DatoTransferencia
                    label="Titular"
                    valor={CONFIG.pago.titular}
                    copiado={copiado === 'Titular'}
                    onCopiar={copiar}
                  />
                  <DatoTransferencia
                    label="Alias"
                    valor={CONFIG.pago.alias}
                    copiado={copiado === 'Alias'}
                    onCopiar={copiar}
                  />
                  <DatoTransferencia label="CVU" valor={CONFIG.pago.cvu} copiado={copiado === 'CVU'} onCopiar={copiar} />
                </div>
                <p className="pago-transferencia-nota">
                  Transferí {suma > 0 ? `el total (${formatPrecio(suma)})` : 'el total de tu pedido'} y dejanos tu
                  nombre para poder identificarla.
                </p>
                <input
                  type="text"
                  className="pago-transferencia-nombre"
                  placeholder="Tu nombre y apellido"
                  aria-label="Tu nombre y apellido, para identificar la transferencia"
                  value={nombre}
                  onChange={(e) => {
                    setNombre(e.target.value)
                    setError(null)
                  }}
                />
                <label className="pago-transferencia-check">
                  <input
                    type="checkbox"
                    checked={confirmado}
                    onChange={(e) => {
                      setConfirmado(e.target.checked)
                      setError(null)
                    }}
                  />
                  Ya realicé la transferencia
                </label>
                {error && <p className="pago-transferencia-error">{error}</p>}
                <button type="button" className="btn btn--wa cart__cta" onClick={confirmarTransferencia}>
                  <IconWhatsapp />
                  <span>Confirmar pedido por transferencia</span>
                </button>
              </div>
            )}

            {!metodo && <p className="cart__pago-nota cart__pago-nota--aviso">Elegí Efectivo o Transferencia para hacer el pedido.</p>}

            <button className="btn btn--ghost cart__cerrar" onClick={cerrar} type="button">
              Seguir viendo el catálogo
            </button>
            <button
              className="cart__vaciar"
              onClick={() => {
                vaciar()
                resetPago()
              }}
              type="button"
            >
              Vaciar la selección
            </button>
          </footer>
        )}
      </aside>
    </div>
  )
}
