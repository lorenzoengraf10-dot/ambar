import CATEGORIAS from '../data/categorias.js'

export default function CategoryShowcase({ categoria, onChange }) {
  return (
    <section className="catshowcase" aria-label="Elegí una categoría">
      <div className="wrap sec-head">
        <h2 className="sec-title">Nuestras fragancias</h2>
        <p className="sec-lead">Tocá una categoría para ir directo a esas fragancias.</p>
      </div>

      <div className="wrap catshowcase__grid">
        <button
          type="button"
          className={`catshowcase__tile catshowcase__tile--wide${categoria === 'todos' ? ' catshowcase__tile--active' : ''}`}
          onClick={() => onChange('todos')}
        >
          <span className="catshowcase__label">Todos</span>
        </button>

        {Object.values(CATEGORIAS).map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`catshowcase__tile${categoria === cat.id ? ' catshowcase__tile--active' : ''}`}
            onClick={() => onChange(cat.id)}
          >
            <span className="catshowcase__label">{cat.nombre}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
