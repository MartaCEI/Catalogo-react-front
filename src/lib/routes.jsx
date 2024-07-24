import { createBrowserRouter } from "react-router-dom";

// Importar páginas especiales
import Home from '../pages/Home';
import Armaduras from '../pages/Armaduras'
import MontarArmadura from "../pages/MontarArmadura";
import Armas from "../pages/Armas"
import DLCs from "../pages/DLCs"
import Checkout from "../pages/Checkout";
import Layout from '../Layout';
import ErrorPage from "../error-page";

// Recibe un array y dentro un objeto
const router = createBrowserRouter(
    [{
        path:'/',
        element: <Layout />,
        // errorElement: <ErrorPage />,   //pagina del error fuera del layout (elemento padre)
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'armaduras',  // En la ruta no va la barrita xq como es children y ya agarra la barra desde el padre
                element: <Armaduras />
            },
            {
                path: 'armadura/:id',  //:id para añadir una variabla
                element: <MontarArmadura />
            },
            {
                path: 'armas',  //:id para añadir una variabla
                element: <Armas />
            },
            {
                path: 'dlcs',  //:id para añadir una variabla
                element: <DLCs />
            },
            {
                path: 'checkout',  //:id para añadir una variabla
                element: <Checkout />
            },
            {
                path: '*',  // Cualquier oyra cosa que no esté en una ruta especifica nuestra, mandará error. 
                element: <ErrorPage />  // Dentro (elemento children) de mi layout, no fuera...
            }
        ]
    }]
);

export default router;