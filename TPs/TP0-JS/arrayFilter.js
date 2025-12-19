let personnes = [
    { nom: "Salah", age: "20", estMember: false },
    { nom: "Ibrahim", age: "38", estMember: true },
    { nom: "Mohammed", age: "31", estMember: true },
    { nom: "Taha", age: "28", estMember: true },
    { nom: "Allal", age: "50", estMember: false },
    { nom: "L7aj Mostafa", age: "77", estMember: true },
];

let nomAges = personnes.filter(x => x.estMember === true ).map(x => x.nom);

console.log("Array contenant les noms des personnes qui sont membre c-à-d estMember est true")
console.log(nomAges);