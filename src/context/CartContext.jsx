import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import PRODUCTOS from '../data/productos.js'

const CART_KEY = 'ambar-pedido'
const CartContext = createContext(null)

function cargarInicial() {
  try {
    const guardado = JSON.parse(localStorage.getItem(CART_KEY) || '[]')
    if (!Array.isArray(guardado)) return []
    return guardado.filter(
      (it) =>
        it &&
        typeof it.id === 'string' &&
        typeof it.cantidad === 'number' &&
        PRODUCTOS.some((p) => p.id === it.id),
    )
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(cargarInicial)
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items))
    } catch {
      /* si el navegador no deja guardar, la selección sigue funcionando
         mientras la página esté abierta */
    }
  }, [items])

  useEffect(() => {
    if (!abierto) return undefined
    const previo = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previo
    }
  }, [abierto])

  useEffect(() => {
    if (!abierto) return undefined
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setAbierto(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [abierto])

  const agregar = (id) => {
    setItems((prev) => {
      const ya = prev.find((it) => it.id === id)
      if (ya) return prev.map((it) => (it.id === id ? { ...it, cantidad: it.cantidad + 1 } : it))
      return [...prev, { id, cantidad: 1 }]
    })
  }

  const cambiar = (id, delta) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, cantidad: Math.max(0, it.cantidad + delta) } : it)),
    )
  }

  const quitar = (id) => setItems((prev) => prev.filter((it) => it.id !== id))
  const vaciar = () => setItems([])

  const detallados = useMemo(
    () =>
      items
        .map((it) => ({ ...it, producto: PRODUCTOS.find((p) => p.id === it.id) }))
        .filter((it) => Boolean(it.producto)),
    [items],
  )

  const unidades = detallados.reduce((n, it) => n + it.cantidad, 0)

  const value = {
    items: detallados,
    unidades,
    abierto,
    abrir: () => setAbierto(true),
    cerrar: () => setAbierto(false),
    agregar,
    cambiar,
    quitar,
    vaciar,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
