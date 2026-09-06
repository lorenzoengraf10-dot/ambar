import { useMemo, useState } from 'react'
import FamilyFilter from './FamilyFilter.jsx'
import ProductCard from './ProductCard.jsx'

const GENERO_LABEL = { unisex: 'Unisex', masculino: 'Masculino', femenino: 'Femenino' }

export default function Recomendacion({ productos, oculto }) {
  const disponibles = useMemo(
    () => productos.filter((p) => p.estado === 'disponible'),
    [productos],
  )

  const generos = useMemo(() => {
    const vistos = new Set()
    disponibles.forEach((p) => { if (p.genero) vistos.add(p.genero) })
    return Object.keys(GENERO_LABEL).filter((g) => vistos.has(g))
  }, [disponibles])

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

  const [generoActivo, setGeneroActivo] = useState('todos')
  const [familiaActiva, setFamiliaActiva] = useState('todas')

  if (disponibles.length === 0) return null

  const visibles = disponibles.filter((p) => {
    const matchGenero = generoActivo === 'todos' || p.genero === generoActivo
    const matchFamilia = familiaActiva === 'todas' || p.familia === familiaActiva
    return matchGenero && matchFamilia
  })

  return (
    <section className="recomendacion" id="recomendacion" hidden={oculto}>
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">Nuestra recomendación</h2>
          <p className="sec-lead">
            Elegí género y familia olfativa, y te mostramos qué fragancia del stock te conviene probar.
          </p>
        </div>

        {generos.length > 1 && (
          <div className="filtros-genero" role="group" aria-label="Filtrar por género">
            <button
              type="button"
              className={`chip${generoActivo === 'todos' ? ' is-active' : ''}`}
              onClick={() => setGeneroActivo('todos')}
            >
              Todos
            </button>
            {generos.map((g) => (
              <button
                key={g}
                type="button"
                className={`chip${generoActivo === g ? ' is-active' : ''}`}
                onClick={() => setGeneroActivo(g)}
              >
                {GENERO_LABEL[g]}
              </button>
            ))}
          </div>
        )}

        {familias.length > 1 && (
          <FamilyFilter familias={familias} activa={familiaActiva} onChange={setFamiliaActiva} />
        )}

        <div className="grid">
          {visibles.length > 0 ? (
            visibles.map((producto) => <ProductCard producto={producto} key={producto.id} />)
          ) : (
            <div className="empty">
              <strong>No hay nada con esos filtros</strong>
              Probá sacar alguno, o escribinos por WhatsApp y te ayudamos a elegir.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
