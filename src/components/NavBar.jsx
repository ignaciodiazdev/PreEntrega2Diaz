import { CartWidget } from "./CartWidget"
import './NavBar.css';

export const NavBar = () => {
  return (
    <header>
        <a href="#" className="logo">
            <i className='bx bxs-store-alt'></i>
            <span>CyberShop</span>
        </a>
        <nav>
            <ul className="navbar">
                <li><a href="#" className="active">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Tienda</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>   
            </ul>
        </nav>
        <div className="main">
            <CartWidget/>
            <div className="bx bx-menu" id="menu-icon"></div>
        </div>
    </header>
  )
}
