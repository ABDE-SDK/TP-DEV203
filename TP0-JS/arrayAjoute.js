const inscriptions = [
    { id: 10, nom: 'Rami', filiere: 'DEV' },
    { id: 11, nom: 'Kamali', filiere: 'DEV' },
    { id: 12, nom: 'Fahmi', filiere: 'DEV' },
    { id: 13, nom: 'Chaouki', filiere: 'DEV' }
];
function pureAppendeInscr(id, nom, filiere){
    return [...inscriptions,{id, nom, filiere}]
}
const newListInscription = pureAppendeInscr(14, 'Sidki', 'DEVOWFS');
console.log('New List');
console.log(newListInscription)