import CONFIG from '../data/config.js'
import { BrandMark, IconInstagram, IconWhatsapp } from './icons.jsx'
import { waLink, mensajeConsultaGeneral } from '../utils/whatsapp.js'

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <BrandMark size={34} />
          <span className="footer__copy">
            © {anio} {CONFIG.nombre} — {CONFIG.ciudad}
          </span>
        </div>

        <div className="footer__social">
          <a href={CONFIG.instagram} target="_blank" rel="noopener" aria-label="Instagram">
            <IconInstagram />
          </a>
          <a
            href={waLink(mensajeConsultaGeneral())}
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp"
          >
            <IconWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  )
}
