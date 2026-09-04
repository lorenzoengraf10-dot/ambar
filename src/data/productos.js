/* =========================================================================
   ÁMBAR PERFUMES — CATÁLOGO DE PRODUCTOS
   -------------------------------------------------------------------------
   👉 ESTE ES EL ÚNICO ARCHIVO QUE HAY QUE TOCAR PARA ACTUALIZAR EL STOCK.

   Como el stock rota cada 2-3 semanas, la idea es que cargar o dar de baja
   una fragancia sea así de simple: agregar o editar un bloque acá abajo y
   guardar. No hace falta tocar ningún componente ni el diseño.

   ⚠️ BETA — todo el catálogo de acá abajo es FICTICIO a propósito (nombres,
   precios, notas, todo inventado), para poder mostrar el sitio funcionando
   sin exponer stock ni precios reales todavía. Cuando esté listo para ir
   en serio, reemplazar estos bloques por las fragancias reales (que ya
   quedaron armadas — ver el historial — con foto, precio y datos de
   Jungle Vibe, Nitro Blue y Voux Elegante).

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
   esEjemplo    (true)    OPCIONAL. Marca la ficha con un cartel "Ejemplo"
                          (se usa acá para dejar clarísimo qué es contenido
                          de prueba y qué no).
   ========================================================================= */

const PRODUCTOS = [
  {
    id: 'beta-brisa-citrica',
    nombre: 'Brisa Cítrica',
    casa: 'Casa Ámbar',
    familia: 'Cítrico y Acuático',
    dupe_de: null,
    precio: 65000,
    descripcion:
      'Producto de ejemplo (ficticio) para probar el sitio: salida cítrica luminosa sobre un fondo fresco y acuático, liviano y fácil de llevar.',
    notas: ['Bergamota', 'Pomelo', 'Notas marinas'],
    genero: 'unisex',
    estado: 'disponible',
    imagen: '',
    tamano: [],
    esEjemplo: true,
  },
  {
    id: 'beta-madera-ambar',
    nombre: 'Madera & Ámbar',
    casa: 'Casa Ámbar',
    familia: 'Amaderado y Especiado',
    dupe_de: 'un amaderado clásico de perfumería de nicho (referencia de ejemplo)',
    precio: 79000,
    descripcion:
      'Producto de ejemplo (ficticio): base amaderada cálida con un toque especiado, pensado para mostrar cómo se ve el cartel de "dupe" en una ficha.',
    notas: ['Cedro', 'Ámbar', 'Pimienta rosa'],
    genero: 'masculino',
    estado: 'disponible',
    imagen: '',
    tamano: [],
    esEjemplo: true,
  },
  {
    id: 'beta-flor-blanca',
    nombre: 'Flor Blanca',
    casa: 'Casa Ámbar',
    familia: 'Floral',
    dupe_de: null,
    precio: 72000,
    descripcion:
      'Producto de ejemplo (ficticio): ramo floral blanco, delicado y envolvente, con un fondo suave de almizcle.',
    notas: ['Jazmín', 'Azahar', 'Almizcle'],
    genero: 'femenino',
    estado: 'disponible',
    imagen: '',
    tamano: [],
    esEjemplo: true,
  },

  /* -----------------------------------------------------------------------
     "Ediciones anteriores" — también contenido de EJEMPLO, para mostrar
     cómo se ve una fragancia agotada (misma mecánica que arriba: alcanza
     con cambiar "estado" a "agotado" y la ficha se mueve sola acá).
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
