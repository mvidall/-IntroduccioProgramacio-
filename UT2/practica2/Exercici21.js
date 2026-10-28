const prompt = require('prompt-sync')();

let nom = prompt("Com et dius? ");
let edat = Number(prompt("Quants anys tens? "));

console.log("Hola " + nom + "! Tens " + edat + " anys.");
console.log("L'any que ve en tendràs " + (edat + 1) + ".");   