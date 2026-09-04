import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import DisponibleAhora from './components/DisponibleAhora.jsx'
import EdicionesAnteriores from './components/EdicionesAnteriores.jsx'
import ComoPedimos from './components/ComoPedimos.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFab from './components/WhatsAppFab.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import { CartProvider } from './context/CartContext.jsx'
import PRODUCTOS from './data/productos.js'

export default function App() {
  return (
    <CartProvider>
      <a className="skip-link" href="#disponible-ahora">Ir al catálogo</a>

      <Header />

      <main>
        <Hero />
        <DisponibleAhora productos={PRODUCTOS} />
        <EdicionesAnteriores productos={PRODUCTOS} />
        <ComoPedimos />
        <Contacto />
      </main>

      <Footer />
      <WhatsAppFab />
      <CartDrawer />
    </CartProvider>
  )
}
