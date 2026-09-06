import { useState } from 'react'
import Header from './components/Header.jsx'
import CatNav from './components/CatNav.jsx'
import Hero from './components/Hero.jsx'
import CategoryShowcase from './components/CategoryShowcase.jsx'
import DisponibleAhora from './components/DisponibleAhora.jsx'
import EdicionesAnteriores from './components/EdicionesAnteriores.jsx'
import Recomendacion from './components/Recomendacion.jsx'
import Clientes from './components/Clientes.jsx'
import ComoPedimos from './components/ComoPedimos.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFab from './components/WhatsAppFab.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import { CartProvider } from './context/CartContext.jsx'
import PRODUCTOS from './data/productos.js'

export default function App() {
  const [categoria, setCategoria] = useState('todos')

  return (
    <CartProvider>
      <a className="skip-link" href="#disponible-ahora">Ir al catálogo</a>

      <Header />
      <CatNav categoria={categoria} onChange={setCategoria} />

      <main>
        <Hero />
        <CategoryShowcase categoria={categoria} onChange={setCategoria} />
        <DisponibleAhora productos={PRODUCTOS} oculto={categoria !== 'todos' && categoria !== 'stock'} />
        <EdicionesAnteriores productos={PRODUCTOS} oculto={categoria !== 'todos' && categoria !== 'anteriores'} />
        <Recomendacion productos={PRODUCTOS} oculto={categoria !== 'todos' && categoria !== 'recomendacion'} />
        <Clientes />
        <ComoPedimos />
        <Contacto />
      </main>

      <Footer />
      <WhatsAppFab />
      <CartDrawer />
    </CartProvider>
  )
}
