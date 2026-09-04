import CONFIG from '../data/config.js'
import { IconInstagram, IconWhatsapp } from './icons.jsx'
import { waLink, mensajeConsultaGeneral } from '../utils/whatsapp.js'
import logo from '../assets/marca/logo.png'

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <img className="brand__logo brand__logo--sm" src={logo} alt="" width="34" height="34" />
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
