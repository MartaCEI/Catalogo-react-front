import { useEffect, useState } from "react";
import Grid from "../components/Grid";

const Armas = () => {
    const [section, setSection] = useState([])
        getSection();
    useEffect(() => {
        
    }, []);

    const getSection = async () => {
        try {
            const respuesta = await fetch("./backend/datos.json");
        const objeto = await respuesta.json();
            console.log(objeto)
        setSection(objeto.armas)
        } catch (error) {
            console.log("He encontrado un error",error)
        }
    }

    return (
        <>
            <section className="Section">
                <h2>Compra las mejores armas</h2>
                <p>Puedes obtener de dos tipos.....</p>
                <div className="Section-div">
                section.map(({section}) => {
                    <Grid key={section.id}
                })
                </div>
            </section>
        </>
    );
}
export default Armas;