const PASOS = [
  {
    titulo: 'Elegís',
    desc: 'Recorré "Disponible ahora" y filtrá por familia olfativa hasta encontrar la fragancia que te copa.',
  },
  {
    titulo: 'Consultás por WhatsApp',
    desc: 'Tocá "Consultar por WhatsApp" en esa fragancia: se abre el chat con el nombre ya cargado. Ahí confirmamos disponibilidad, tamaño y precio.',
  },
  {
    titulo: 'Coordinamos la entrega',
    desc: 'Definimos forma de pago y cómo te lo hacemos llegar en Viedma. Así de simple.',
  },
]

export default function ComoPedimos() {
  return (
    <section className="como-pedimos" id="como-pedimos">
      <div className="wrap">
        <div className="sec-head sec-head--center">
          <p className="eyebrow">Sin vueltas</p>
          <h2 className="sec-title">Cómo pedimos</h2>
        </div>

        <div className="pasos">
          {PASOS.map((paso, i) => (
            <div className="paso" key={paso.titulo}>
              <span className="paso__num">{i + 1}</span>
              <h3 className="paso__title">{paso.titulo}</h3>
              <p className="paso__desc">{paso.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
