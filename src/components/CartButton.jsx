import { useCart } from '../context/CartContext.jsx'
import { IconBag } from './icons.jsx'

export default function CartButton() {
  const { unidades, abrir } = useCart()

  return (
    <button type="button" className="cartbtn" onClick={abrir} aria-label="Ver mi selección">
      <IconBag />
      {unidades > 0 && <span className="cartbtn__n">{unidades}</span>}
    </button>
  )
}
