import { Outlet } from "react-router-dom";
import './css/catalogo.css';
import Header from './components/Header'
import Footer from "./components/Footer";
import React, { createContext, useState } from 'react'

export const ModoOscuroContext = createContext();

const Layout = () => {

    const [tema, setTema] = useState('light');
    const nombre = "Marta"

    return (
        <ModoOscuroContext.Provider value={{tema, setTema, nombre}}>
        <div>
            <Header />
            {/* importar Header como componente */}
            <main>
                {/* <h1 className="Title-h1">Rimworld</h1>
                <button onClick={()=>{setTema(tema=="dark"?"light":"dark")}}>
                Cambiar tema: {tema}
                </button> */}
                <Outlet />
            </main>
            {/* importar Footer como componente */}
            <Footer />
        </div>
        </ModoOscuroContext.Provider>
    );
}

export default Layout;