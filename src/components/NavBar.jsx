import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget"
import './NavBar.css';
import { useState } from "react";

export const NavBar = () => {

  const [hamburger, setHamburger] = useState(false);

  const addClassHamburger = () => {
    setHamburger(!hamburger);
  }
  
  return (
    <header>
        <Link to="/" className="logo">
            <i className='bx bxs-store-alt'></i>
            <span>CyberShop</span>
        </Link>
        <nav>
            <ul className={hamburger ? 'navbar open' : 'navbar'} onClick={addClassHamburger}>
                <li><Link to="category/Monitores" >Monitores</Link></li>
                <li><Link to="category/Auriculares" >Auriculares</Link></li> 
                <li><Link to="category/Laptops" >Laptops</Link></li>
            </ul>
        </nav>
        <div className="main">
            <CartWidget/>
            <div className={hamburger ? 'bx bx-x bx-menu' : 'bx bx-menu'} onClick={addClassHamburger} id="menu-icon"></div>
        </div>
    </header>
  )
}
