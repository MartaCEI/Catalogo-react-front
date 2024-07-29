const GridArmas = ({type, damage, Ap, range, DPS, price }) => {
    return (
        <div className="GridWrapper">
            <div className="GridArmas">
                <p className="GridArmas-p"><b>Tipo: </b>{type}</p>
                <p className="GridArmas-p"><b>Damage: </b>{damage}</p>
                <p className="GridArmas-p"><b>AP: </b>{Ap}</p>
                <p className="GridArmas-p"><b>Range: </b>{range}</p>
                <p className="GridArmas-p"><b>DPS: </b>{DPS}</p>
                <p className="GridArmas-p"><b>Precio: </b>{price}</p>
            </div>
            <button>Comprar</button>
        </div>
    );
}

export default GridArmas;