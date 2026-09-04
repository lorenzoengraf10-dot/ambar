import { waLink, mensajeConsultaProducto, mensajeReposicion } from '../utils/whatsapp.js'
import { IconBottle, IconWhatsapp } from './icons.jsx'

const GENERO_LABEL = { unisex: 'Unisex', masculino: 'Masculino', femenino: 'Femenino' }

export default function ProductCard({ producto }) {
  const agotado = producto.estado === 'agotado'
  const tieneImagen = Boolean(producto.imagen)
  const mensaje = agotado ? mensajeReposicion(producto) : mensajeConsultaProducto(producto)
  const cta = agotado ? 'Consultar reposición' : 'Consultar por WhatsApp'

  return (
    <article className={`card${agotado ? ' card--agotada' : ''}`}>
      <div className={`card__media${tieneImagen ? '' : ' is-empty'}`}>
        {producto.esEjemplo && <span className="card__ribbon card__ribbon--ejemplo">Ejemplo</span>}
        {!producto.esEjemplo && agotado && <span className="card__ribbon card__ribbon--agotado">Agotado</span>}
        {producto.genero && GENERO_LABEL[producto.genero] && (
          <span className="card__genero">{GENERO_LABEL[producto.genero]}</span>
        )}
        {tieneImagen && <img src={producto.imagen} alt={producto.nombre} loading="lazy" decoding="async" />}
        <div className="card__ph">
          <IconBottle />
          <span>Foto próximamente</span>
        </div>
      </div>

      <div className="card__body">
        {producto.casa && <span className="card__casa">{producto.casa}</span>}
        <h3 className="card__name">{producto.nombre}</h3>
        {producto.familia && <span className="card__familia">{producto.familia}</span>}

        {producto.dupe_de && (
          <p className="card__dupe">
            Dupe de <strong>{producto.dupe_de}</strong>
          </p>
        )}

        <p className="card__desc">{producto.descripcion}</p>

        {producto.notas && producto.notas.length > 0 && (
          <div className="card__notas">
            {producto.notas.map((nota) => (
              <span className="card__nota" key={nota}>{nota}</span>
            ))}
          </div>
        )}

        {producto.tamano && producto.tamano.length > 0 && (
          <p className="card__tamanos">
            Tamaños: <strong>{producto.tamano.join(' · ')}</strong>
          </p>
        )}

        <div className="card__foot">
          <a
            className="btn btn--wa btn--sm btn--block"
            href={waLink(mensaje)}
            target="_blank"
            rel="noopener"
          >
            <IconWhatsapp />
            {cta}
          </a>
        </div>
      </div>
    </article>
  )
}
