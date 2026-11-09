const prompt = require('prompt-sync')();

const num1 = Number(prompt("Introdueix el primer numero: "));
const num2 = Number(prompt("Introdueix el segon numero: "));
const operacio = prompt("Introdueix l'operacio (+, -, * o /): ").trim();

if (operacio === "+") {
  console.log("Resultat:", num1 + num2);
} else if (operacio === "-") {
  console.log("Resultat:", num1 - num2);
} else if (operacio === "*") {
  console.log("Resultat:", num1 * num2);
} else if (operacio === "/") {
  if (num2 === 0) {
    console.log("No es pot dividir entre zero");
  } else {
    console.log("Resultat:", num1 / num2);
  }
} else {
  console.log("Operacio no valida");
}
