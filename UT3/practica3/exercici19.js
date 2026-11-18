const prompt = require('prompt-sync')();

const numero = Number(prompt("Introdueix un número: "));

if (numero >= 1 && numero <= 100) {
  console.log("Número correcte");
} else {
  console.log("Número fora del rang");
}
