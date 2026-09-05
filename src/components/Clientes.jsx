import CONFIG from '../data/config.js'
import TESTIMONIOS from '../data/testimonios.js'

export default function Clientes() {
  if (TESTIMONIOS.length === 0) return null

  return (
    <section className="clientes" id="clientes">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">Lo que dicen los que ya lo probaron</h2>
          <p className="sec-lead">
            Historias reales de gente que nos etiquetó en Instagram al recibir su perfume.
          </p>
        </div>

        <div className="testis">
          {TESTIMONIOS.map((t) => (
            <figure className="testi" key={t.autor}>
              <div className="testi__media">
                <img src={t.img} alt={`Foto que compartió ${t.autor} en Instagram`} loading="lazy" decoding="async" />
              </div>
              <blockquote className="testi__texto">{t.texto}</blockquote>
              <figcaption className="testi__autor">{t.autor}</figcaption>
            </figure>
          ))}
        </div>

        <div className="clientes__pie">
          <a className="btn btn--ghost" href={CONFIG.instagram} target="_blank" rel="noopener">
            Ver más en Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}
