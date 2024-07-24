import { Outlet } from "react-router-dom";
import './css/catalogo.css';

const Layout = () => {
    return (
        <div>
            {/* importar Header como componente */}
                <h1>Proyecto Catálogo</h1>
            <main>
                <Outlet />
            </main>
            {/* importar Footer como componente */}
        </div>
    );
}

export default Layout;