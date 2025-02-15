import { Link, NavLink } from "react-router-dom";
import "../css/header.css"


// Fotos estaticas en mi página van a estar en frontend, pero las fotos de los productos que están en el json van en la carpeta backend/images

const Header = () => {
    return (
        <header className="Header">
            <img className="Header-img" src="../.././600px-Rimworldlogo.png" alt="Rimworld Logo" />
            <nav className="Nav">
                <ul className="Nav-ul">
                    <li className="Nav-li"><NavLink to='/'>Home</NavLink></li>
                    <li className="Nav-li"><NavLink to='/armaduras'>Armaduras</NavLink></li>
                    <li className="Nav-li"><NavLink to='/armas'>Armas</NavLink></li>
                    <li className="Nav-li"><NavLink to='/dlcs'>DLC</NavLink></li>
                    <li className="Nav-li"><NavLink to='/checkout'>Carrito</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;