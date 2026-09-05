/* =========================================================================
   ÁMBAR PERFUMES — testimonios de clientes
   -------------------------------------------------------------------------
   Capturas de historias de Instagram de gente que etiquetó a la cuenta al
   recibir su perfume. Mismo criterio que productos.js: para sumar una,
   guardá la captura recortada (sin barra de estado ni chrome de Instagram)
   en src/assets/clientes/, importala acá arriba y agregá un bloque abajo.
   Si la lista queda vacía, la sección "Clientes" no se muestra.

   texto  → la frase tal cual la escribió el cliente.
   autor  → su usuario de Instagram, o el nombre si no se ve el usuario.
   img    → la captura importada arriba.
   ========================================================================= */
import meauriokaren from '../assets/clientes/meauriokaren.jpg'
import avnroo09 from '../assets/clientes/avnroo09.jpg'
import leo from '../assets/clientes/leo.jpg'
import emiliaMinor from '../assets/clientes/emilia-minor.jpg'

const TESTIMONIOS = [
  {
    texto: 'Muuuuy recomendable 👏🫶',
    autor: '@_meauriokaren',
    img: meauriokaren,
  },
  {
    texto: 'Son adicción, disculpen 😍',
    autor: '@avn.roo.09',
    img: avnroo09,
  },
  {
    texto: 'Mi perfume rico es de acá 🥰✨',
    autor: 'Leo',
    img: leo,
  },
  {
    texto: 'Calidad 10/10, atención 100/10',
    autor: '@emilia.minor',
    img: emiliaMinor,
  },
]

export default TESTIMONIOS
