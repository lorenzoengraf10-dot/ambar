import { useMemo } from 'react'
import ProductCard from './ProductCard.jsx'

export default function Recomendacion({ productos, oculto }) {
  const recomendados = useMemo(
    () => productos.filter((p) => p.recomendado && p.estado === 'disponible'),
    [productos],
  )

  if (recomendados.length === 0) return null

  return (
    <section className="recomendacion" id="recomendacion" hidden={oculto}>
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">Nuestra recomendación</h2>
          <p className="sec-lead">Una selección elegida por nosotros para arrancar.</p>
        </div>

        <div className="grid">
          {recomendados.map((producto) => (
            <ProductCard producto={producto} key={producto.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
