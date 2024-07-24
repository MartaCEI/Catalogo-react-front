import { NavLink } from "react-router-dom";

// Fotos estaticas en mi página van a estar en frontend, pero las fotos de los productos que están en el json van en la carpeta backend/images

const Header = () => {
    return (
        <header className="Header">
            <h1 className="Header-h1">RimWorld</h1>
            <nav className="Nav">
                <ul className="Nav-ul">
                    <li className="Nav-li"><NavLink to='/'>Home</NavLink></li>
                    <li className="Nav-li"><NavLink to='/'>Armaduras</NavLink></li>
                    <li className="Nav-li"><NavLink to='/'>Armas</NavLink></li>
                    <li className="Nav-li"><NavLink to='/'>DLC</NavLink></li>
                    <li className="Nav-li"><NavLink to='/'>Carrito</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;