import CATEGORIAS from '../data/categorias.js'

export default function CatNav({ categoria, onChange }) {
  return (
    <nav className="catnav" aria-label="Filtrar el catálogo">
      <div className="wrap catnav__inner">
        <button
          type="button"
          className={`chip${categoria === 'todos' ? ' is-active' : ''}`}
          onClick={() => onChange('todos')}
        >
          Todos
        </button>
        {Object.values(CATEGORIAS).map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`chip${categoria === cat.id ? ' is-active' : ''}`}
            onClick={() => onChange(cat.id)}
          >
            {cat.nombre}
          </button>
        ))}
      </div>
    </nav>
  )
}
