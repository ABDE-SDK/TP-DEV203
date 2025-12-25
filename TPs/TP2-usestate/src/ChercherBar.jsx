import { useState } from "react"

function Search({ onChercheSubmit }) {
    const [mot, setMot] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        onChercheSubmit(mot)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Entrer le mot clé de recherche</h3>

                <input
                    type="text"
                    value={mot}
                    onChange={(e) => setMot(e.target.value)}
                />

                <input type="submit" value="chercher" />
            </form>
        </div>
    )
}

export default Search;