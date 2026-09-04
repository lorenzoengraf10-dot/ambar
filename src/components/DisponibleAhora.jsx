import { useMemo, useState } from 'react'
import FamilyFilter from './FamilyFilter.jsx'
import ProductCard from './ProductCard.jsx'

export default function DisponibleAhora({ productos }) {
  const disponibles = useMemo(
    () => productos.filter((p) => p.estado === 'disponible'),
    [productos],
  )

  const familias = useMemo(() => {
    const vistas = new Set()
    const orden = []
    disponibles.forEach((p) => {
      if (p.familia && !vistas.has(p.familia)) {
        vistas.add(p.familia)
        orden.push(p.familia)
      }
    })
    return orden
  }, [disponibles])

  const [familiaActiva, setFamiliaActiva] = useState('todas')

  const visibles =
    familiaActiva === 'todas'
      ? disponibles
      : disponibles.filter((p) => p.familia === familiaActiva)

  return (
    <section className="disponible-ahora" id="disponible-ahora">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">Disponible ahora</h2>
          <p className="sec-lead">
            Esto es lo que tenemos en este momento. Tocá una familia para filtrar, o mandanos
            directo un mensaje por WhatsApp con la fragancia que te gustó.
          </p>
        </div>

        {familias.length > 1 && (
          <FamilyFilter familias={familias} activa={familiaActiva} onChange={setFamiliaActiva} />
        )}

        <div className="grid">
          {visibles.length > 0 ? (
            visibles.map((producto) => <ProductCard producto={producto} key={producto.id} />)
          ) : (
            <div className="empty">
              <strong>No hay nada con ese filtro</strong>
              Probá con otra familia, o escribinos por WhatsApp y te contamos qué tenemos.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
