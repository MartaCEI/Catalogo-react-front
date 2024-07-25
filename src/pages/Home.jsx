import { useContext, useEffect, useState } from "react";
import Grid from "../components/Grid";
import { ModoOscuroContext } from "../Layout"

const Home = () => {
    const [section,setSection] = useState({});

    const {tema,setTema,nombre} = useContext(ModoOscuroContext);
    
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
        <section>
            <h1>Catalogo ({tema} - {nombre})</h1>
            <br />
            <button onClick={()=>{setTema(tema=="dark"?"light":"dark")}}>
                Cambiar tema: {tema}
            </button>
            <br />
            <p className="Section-p">{section.description}</p>
            <div className="Section-div">
                <Grid {...section.arma} />
                <Grid {...section.DLC} />
                <Grid {...section.armadura} />
            </div>
        </section>
    )
}

export default Home;