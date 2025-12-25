import { useState } from 'react'
import Search from './ChercherBar.jsx'
import Resultat from './ResultatList.jsx'

function App() {
    const list = [
        { nom: "banane", type: "fruit" },
        { nom: "orange", type: "fruit" },
        { nom: "pomme", type: "fruit" },
        { nom: "raisins", type: "fruit" },
        { nom: "kiwi", type: "fruit" },
        { nom: "tomate", type: "legume" },
        { nom: "carotte", type: "legume" },
        { nom: "pomme de terre", type: "legume" },
        { nom: "navet", type: "legume" },
        { nom: "poivron", type: "legume" }
    ]

    const [resultats, setResultat] = useState([]);

    function onChercheSubmitApp(type) {
        
        setResultat(list.filter((elm) => elm.type.toUpperCase() === type.toUpperCase()))
    }
    return (
        <>
            <h1>Composant App</h1>
            <Search onChercheSubmit={onChercheSubmitApp} />
            <Resultat resultats={resultats} />
        </>
    )
}

export default App