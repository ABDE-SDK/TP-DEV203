function LaptopCard({ laptop, add, remove }) {
    return (
        <div className="laptop-card">
            <div className="image-wrapper">
                <img src={laptop.pic} alt={laptop.alt} />
            </div>

            <div className="content">
                <h3>{laptop.name}</h3>
                <span className="price">{laptop.prix}</span>
            </div>

            <div className="actions">
                <button className="btn add" onClick={() => add(laptop.id)}>
                    + Ajouter
                </button>
                <button className="btn remove" onClick={() => remove(laptop.id)}>
                    − Annuler
                </button>
            </div>
        </div>
    );
}

export default LaptopCard;
