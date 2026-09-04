import CONFIG from '../data/config.js'
import { waLink, mensajeConsultaGeneral } from '../utils/whatsapp.js'
import { IconWhatsapp } from './icons.jsx'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero__inner">
        <span className="hero__eyebrow">{CONFIG.nombre} · {CONFIG.ciudad}</span>

        <h1 className="hero__title">
          Perfumes árabes originales, <em>disponibles hoy</em>.
        </h1>

        <div className="hero__actions">
          <a className="btn btn--gold" href="#disponible-ahora">
            Ver disponible ahora
          </a>
          <a
            className="btn btn--wa"
            href={waLink(mensajeConsultaGeneral())}
            target="_blank"
            rel="noopener"
          >
            <IconWhatsapp />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
