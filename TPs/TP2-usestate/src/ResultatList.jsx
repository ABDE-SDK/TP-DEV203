function Resultat({ resultats }) {
    return (
        <div>
            Resultat Component
            <ul>
                {resultats.map((item, index) => (
                    <li key={index}>
                        {item.nom}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Resultat;