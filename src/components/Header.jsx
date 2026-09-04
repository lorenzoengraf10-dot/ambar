import CONFIG from '../data/config.js'
import { waLink, mensajeConsultaGeneral } from '../utils/whatsapp.js'
import CartButton from './CartButton.jsx'
import { BrandMark, IconWhatsapp } from './icons.jsx'

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <a className="brand" href="#inicio" aria-label={`${CONFIG.nombre} — inicio`}>
          <BrandMark />
          <span className="brand__mark">
            <span className="brand__word">
              Ámbar
              <span className="brand__beta">Beta</span>
            </span>
            <span className="brand__sub">Perfumes</span>
          </span>
        </a>

        <div className="header__actions">
          <a className="btn btn--ghost btn--sm" href="#disponible-ahora">
            Ver disponible ahora
          </a>
          <a
            className="btn btn--wa btn--sm"
            href={waLink(mensajeConsultaGeneral())}
            target="_blank"
            rel="noopener"
          >
            <IconWhatsapp />
            WhatsApp
          </a>
          <CartButton />
        </div>
      </div>
    </header>
  )
}
