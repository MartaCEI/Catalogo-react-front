

const Grid = ({image, title, description}) => {
    return (
        <div className="Grid">
            <h2 className="Grid-h2">{title}</h2>
            <p className="Grid-p">{description}</p>
            <img className="Grid-img" src={image} alt="{title}" />
        </div>
    );
}

export default Grid;