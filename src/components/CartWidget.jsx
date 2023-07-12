import { Link } from 'react-router-dom';
import './CartWidget.css';


export const CartWidget = () => {
  return (
    <>
      <Link to="/" className="carrito">
        <i className="ri-shopping-cart-2-fill"></i>
        <span className='valor'>0</span>
      </Link>
    </>
  )
}
