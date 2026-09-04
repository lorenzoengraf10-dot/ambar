import { useMemo } from 'react'
import ProductCard from './ProductCard.jsx'

export default function EdicionesAnteriores({ productos }) {
  const agotadas = useMemo(
    () => productos.filter((p) => p.estado === 'agotado'),
    [productos],
  )

  if (agotadas.length === 0) return null

  const hayEjemplos = agotadas.some((p) => p.esEjemplo)

  return (
    <section className="ediciones-anteriores" id="ediciones-anteriores">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">Ediciones anteriores</h2>
          <p className="sec-lead">
            Fragancias que ya se agotaron. Quedan acá como registro — si alguna vuelve a
            entrar, cambia sola a "Disponible ahora".
          </p>
        </div>

        {hayEjemplos && (
          <p className="ejemplo-notice">
            <strong>Ejemplo ilustrativo:</strong> todavía no tenemos fotos de ediciones agotadas
            reales, así que estas fichas son de muestra para mostrar cómo funciona la sección.
            Cuando una fragancia de "Disponible ahora" se agote, va a aparecer acá sola.
          </p>
        )}

        <div className="grid">
          {agotadas.map((producto) => (
            <ProductCard producto={producto} key={producto.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
