/* =========================================================================
   ÁMBAR PERFUMES — CATÁLOGO DE PRODUCTOS
   -------------------------------------------------------------------------
   👉 ESTE ES EL ÚNICO ARCHIVO QUE HAY QUE TOCAR PARA ACTUALIZAR EL STOCK.

   Como el stock rota cada 2-3 semanas, la idea es que cargar o dar de baja
   una fragancia sea así de simple: agregar o editar un bloque acá abajo y
   guardar. No hace falta tocar ningún componente ni el diseño.

   ⚠️ Los precios de acá abajo son INVENTADOS (a pedido, para mostrar cómo
   funciona el carrito) — reemplazarlos por los reales antes de publicar.
   Los dos bloques de "Ediciones anteriores" también siguen siendo de
   EJEMPLO (ficticios) hasta que haya fragancias agotadas reales.

   Campos de cada producto
   -------------------------------------------------------------------------
   id           (texto)   Identificador único y corto, sin espacios (se usa
                          como key de React). Ej: "jungle-vibe".
   nombre       (texto)   Nombre de la fragancia. OBLIGATORIO.
   casa         (texto)   OPCIONAL. Marca/línea que la fabrica, ej: "Rayhaan".
   familia      (texto)   Familia olfativa, ej: "Amaderado", "Floral",
                          "Cítrico". Con esto se arman los chips de filtro
                          de forma automática — no hay que declararlos en
                          otro lado.
   dupe_de      (texto | null)  Si es una versión inspirada en un perfume
                          conocido, poné a qué perfume (ej: "Naxos de
                          Xerjoff"). Si no es un dupe, dejá null.
   precio       (número | null)  Precio en pesos, ej: 78000 → se muestra
                          "$ 78.000" y se puede agregar al carrito. Dejalo
                          en null para que la ficha diga "A consultar".
   descripcion  (texto)   Una o dos líneas describiendo la fragancia.
   notas        (lista)   OPCIONAL. Notas olfativas principales, ej:
                          ["Bergamota", "Vainilla"]. Se muestran como
                          chips chicos en la ficha.
   genero       (texto)   OPCIONAL. "unisex" | "masculino" | "femenino".
   estado       (texto)   "disponible" | "agotado". Esto es lo único que
                          decide en qué sección aparece: "disponible" cae
                          en "Disponible ahora" y "agotado" cae en
                          "Ediciones anteriores". No hay que mover nada
                          de lugar a mano.
   imagen       (texto)   Ruta de la foto (import de src/assets/...). Si
                          no hay foto todavía, dejá "" y se muestra un
                          placeholder prolijo.
   tamano       (lista)   OPCIONAL. Tamaños disponibles, ej: ["30 ml",
                          "50 ml"]. Si se deja vacío, la ficha invita a
                          consultar el tamaño por WhatsApp.
   esEjemplo    (true)    OPCIONAL. Marca la ficha como contenido de
                          muestra (se usa solo en "Ediciones anteriores"
                          mientras no haya fotos reales de esa sección).
   ========================================================================= */
import jungleVibeImg from '../assets/productos/jungle-vibe.jpg'
import nitroBlueImg from '../assets/productos/nitro-blue.jpg'
import vouxEleganteImg from '../assets/productos/voux-elegante.jpg'

const PRODUCTOS = [
  {
    id: 'jungle-vibe',
    nombre: 'Jungle Vibe',
    casa: 'Rayhaan',
    familia: 'Verde, Cítrico y Amaderado',
    dupe_de: 'Santal Greenery de Dries Van Noten',
    precio: 78000,
    descripcion:
      'Una fragancia fresca y sofisticada que combina la jugosidad del higo con cítricos luminosos, un corazón verde y acuático, y un fondo cremoso de sándalo, logrando un aroma moderno, natural y refinado.',
    notas: ['Higo', 'Pomelo', 'Bergamota', 'Notas verdes', 'Notas acuáticas', 'Sándalo'],
    genero: 'unisex',
    estado: 'disponible',
    imagen: jungleVibeImg,
    tamano: [],  },
  {
    id: 'nitro-blue',
    nombre: 'Nitro Blue',
    casa: 'Dumont Paris',
    familia: 'Aromático, Especiado y Dulce',
    dupe_de: 'Pegasus de Parfums de Marly',
    precio: 85000,
    descripcion:
      'Una fragancia intensa y sofisticada que mezcla frescura cítrica y herbal con un corazón goloso y especiado, terminando en un fondo ambarado y amaderado que transmite elegancia, carácter y sensualidad.',
    notas: ['Azahar', 'Canela', 'Limón', 'Salvia', 'Albahaca', 'Praliné', 'Cardamomo negro', 'Ámbar negro', 'Pachulí'],
    genero: 'masculino',
    estado: 'disponible',
    imagen: nitroBlueImg,
    tamano: [],  },
  {
    id: 'voux-elegante',
    nombre: 'Voux Elegante',
    casa: 'Paris Corner',
    familia: 'Dulce, Especiado y Envolvente',
    dupe_de: 'Naxos de Xerjoff',
    precio: 92000,
    descripcion:
      'Una fragancia sofisticada y envolvente que combina frescura aromática, miel especiada y un fondo avainillado con tabaco, logrando un aroma elegante, cálido y adictivo.',
    notas: ['Lavanda', 'Bergamota', 'Miel', 'Cachemira', 'Canela', 'Jazmín', 'Tabaco', 'Vainilla', 'Haba tonka'],
    genero: 'unisex',
    estado: 'disponible',
    imagen: vouxEleganteImg,
    tamano: [],  },

  /* -----------------------------------------------------------------------
     "Ediciones anteriores" — contenido de EJEMPLO.
     Todavía no tenemos fotos ni datos reales de fragancias agotadas, así
     que estas dos fichas están para mostrar cómo funciona la sección: en
     cuanto una fragancia de arriba se agote, alcanza con cambiarle el
     "estado" a "agotado" y va a aparecer sola acá abajo, con foto y todo.
     Se pueden borrar estos dos bloques de ejemplo cuando haya ediciones
     anteriores reales para cargar.
     ----------------------------------------------------------------------- */
  {
    id: 'ejemplo-oud-real',
    nombre: 'Oud Real (ejemplo)',
    casa: 'Ficha de muestra',
    familia: 'Amaderado',
    dupe_de: null,
    descripcion:
      'Ficha de ejemplo para mostrar cómo se va a ver una edición agotada real, con su foto y su cartel de "Agotado".',
    notas: ['Oud', 'Ámbar', 'Cuero'],
    genero: 'unisex',
    estado: 'agotado',
    imagen: '',
    tamano: [],
    esEjemplo: true,
  },
  {
    id: 'ejemplo-rosa-damascena',
    nombre: 'Rosa Damascena (ejemplo)',
    casa: 'Ficha de muestra',
    familia: 'Floral',
    dupe_de: null,
    descripcion:
      'Segunda ficha de ejemplo: así conviven varias ediciones agotadas en la grilla hasta que se carguen las reales.',
    notas: ['Rosa', 'Azafrán', 'Almizcle'],
    genero: 'femenino',
    estado: 'agotado',
    imagen: '',
    tamano: [],
    esEjemplo: true,
  },
]

export default PRODUCTOS
