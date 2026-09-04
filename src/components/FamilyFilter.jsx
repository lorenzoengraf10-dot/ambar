export default function FamilyFilter({ familias, activa, onChange }) {
  return (
    <div className="filtros" role="group" aria-label="Filtrar por familia olfativa">
      <button
        type="button"
        className={`chip${activa === 'todas' ? ' is-active' : ''}`}
        onClick={() => onChange('todas')}
      >
        Todas
      </button>
      {familias.map((familia) => (
        <button
          key={familia}
          type="button"
          className={`chip${activa === familia ? ' is-active' : ''}`}
          onClick={() => onChange(familia)}
        >
          {familia}
        </button>
      ))}
    </div>
  )
}
