const PASOS = ['Elegís tu fragancia', 'Consultás por WhatsApp', 'Coordinamos la entrega']

export default function ComoPedimos() {
  return (
    <section className="como-pedimos" id="como-pedimos">
      <div className="wrap">
        <div className="sec-head sec-head--center">
          <h2 className="sec-title">Cómo pedimos</h2>
        </div>

        <ol className="pasos-mini">
          {PASOS.map((paso, i) => (
            <li key={paso}>
              <span className="pasos-mini__num">{i + 1}</span>
              {paso}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
