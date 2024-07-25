

const Grid = ({image,title, description}) => {
    return (
        <div className="Section-innerWrapper">
            <h2 className="Section-innerWrapper-h2">{title}</h2>
            <p className="Section-innerWrapper-p">{description}</p>
            <img className="Section-innerWrapper-img" src={image} alt="{title}" />
        </div>
    );
}

export default Grid;