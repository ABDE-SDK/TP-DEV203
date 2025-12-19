const clients = [
    { nom: "Rami", montant: 4500 },
    { nom: "Karimi", montant: 2300 },
    { nom: "Chaouki", montant: 5500 },
    { nom: "Ramoun", montant: 7700 },
];

const maxMontants = clients.reduce(function (max, client) {
    return client.montant >= max ? client.montant : max;
}, clients[0].montant);

const minMontants = clients.reduce(function (min, client) {
    return client.montant <= min ? client.montant : min;
}, clients[0].montant);

console.log(maxMontants);
console.log(minMontants);
