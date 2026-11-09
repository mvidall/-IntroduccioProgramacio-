const prompt = require('prompt-sync')();

const secret = 7;
const numero = Number(prompt("Endevina el numero: "));

if (numero === secret) {
  console.log("Has endevinat el numero!");
} else {
  console.log("No has encertat. Torna a provar!");
}
