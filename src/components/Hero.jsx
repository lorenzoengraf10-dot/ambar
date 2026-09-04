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

        <p className="hero__tagline">
          Nada de esperar la próxima historia: acá abajo está, siempre actualizado, lo que
          tenemos en stock ahora mismo. Elegís la fragancia, consultamos disponibilidad y
          tamaño por WhatsApp, y coordinamos la entrega.
        </p>

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

        <ul className="hero__facts">
          <li><strong>+60</strong> variedades</li>
          <li><strong>Stock</strong> siempre actualizado</li>
          <li><strong>Pedidos</strong> por WhatsApp</li>
          <li><strong>Entrega</strong> a coordinar en Viedma</li>
        </ul>
      </div>
    </section>
  )
}
