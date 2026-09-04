import { waLink, mensajeConsultaGeneral } from '../utils/whatsapp.js'
import { IconWhatsapp } from './icons.jsx'

export default function WhatsAppFab() {
  return (
    <a
      className="fab"
      href={waLink(mensajeConsultaGeneral())}
      target="_blank"
      rel="noopener"
      aria-label="Escribir por WhatsApp"
    >
      <IconWhatsapp />
    </a>
  )
}
