const prompt = require('prompt-sync')();

let nomclient = prompt(`Com et noms? `);
let horesmaobra = Number(prompt(`Quantes hores de ma d'obra fas? ` ));
let costpeces = Number(prompt(`Quin cost son les peces? (euros)`));
let contractemanteniment = Boolean(prompt(`Tens contracte de manteniment? (Si/No) `))
let serveiurgent = Boolean(prompt(`Es urgent el servei? (Si/No) `))

const maobradobers = 35

let ContractaMValor

if (contractemanteniment === `si` || contractemanteniment === `Si`) {
    ContractaMValor = true
} else if (contractemanteniment === `no` || contractemanteniment === `No`) {
    ContractaMValor = false
};

let descompte = 20

let serveiurgentdobers
let ServeiUrgentValor

if (serveiurgent === `si` || serveiurgent === `Si`) {
    ServeiUrgentValor = true
} else if (serveiurgent === `no` || serveiurgent === `No`) {
    ServeiUrgentValor = false
};

if (ServeiUrgentValor === true) {
    serveiurgentdobers = 15
} else if (ServeiUrgentValor === false) {
    serveiurgentdobers = 0
};



let calculmadobra = (horesmaobra * maobradobers)

let TOTAL = ((calculmadobra) + (costpeces) + (serveiurgentdobers))

console.log(`Client: ${nomclient}`)
console.log(`Ma d'obra: ${calculmadobra}€`)
console.log(`Peces: ${costpeces}`)
console.log(`Recarrec urgencia: ${serveiurgentdobers}`)
console.log(`TOTAL: ${TOTAL}`)