import { useContext, useEffect, useState } from "react";
import Grid from "../components/Grid";
// import { ModoOscuroContext } from "../Layout"
import { Link } from "react-router-dom";

const Home = () => {
    const [section,setSection] = useState({});

    // const {tema,setTema,nombre} = useContext(ModoOscuroContext);
    
    useEffect(() => {
        getSections();
    }, []);

    const getSections = async () => {
        try {
            const respuesta = await fetch("/backend/datos.json");
            const object = await respuesta.json();
            console.log(object);
            setSection(object.home)
        } catch (error) {
            console.log("He encontrado un error",error)
        }
    }

    return (
        <section className="Section">
            {/* <h1>Catalogo ({tema} - {nombre})</h1>
            <br />
            <button onClick={()=>{setTema(tema=="dark"?"light":"dark")}}>
                Cambiar tema: {tema}
            </button>
            <br /> */}
            <p className="Section-p">{section.description}</p>
            <div className="Section-div">
                <Link to='/armaduras'><Grid {...section.arma} /></Link>
                <Link to='/dlcs'><Grid {...section.DLC} /></Link>
                <Link to='/armas'><Grid {...section.armadura} /></Link>
            </div>
        </section>
    )
}

export default Home;