import CONFIG from '../data/config.js'
import { waLink, mensajeConsultaGeneral } from '../utils/whatsapp.js'
import { IconInstagram, IconPin, IconWhatsapp } from './icons.jsx'

export default function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">Hablemos</h2>
          <p className="sec-lead">{CONFIG.bio}</p>
        </div>

        <div className="contacto__grid">
          <a
            className="contacto__item"
            href={waLink(mensajeConsultaGeneral())}
            target="_blank"
            rel="noopener"
          >
            <span className="contacto__icowrap"><IconWhatsapp /></span>
            <span className="contacto__text">
              <span className="contacto__label">WhatsApp</span>
              <span className="contacto__value">{CONFIG.whatsappVisible}</span>
            </span>
          </a>

          <a className="contacto__item" href={CONFIG.instagram} target="_blank" rel="noopener">
            <span className="contacto__icowrap"><IconInstagram /></span>
            <span className="contacto__text">
              <span className="contacto__label">Instagram</span>
              <span className="contacto__value">{CONFIG.instagramVisible}</span>
            </span>
          </a>

          <span className="contacto__item">
            <span className="contacto__icowrap"><IconPin /></span>
            <span className="contacto__text">
              <span className="contacto__label">Ubicación</span>
              <span className="contacto__value">{CONFIG.ciudad}</span>
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}
