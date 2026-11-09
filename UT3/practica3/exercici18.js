const prompt = require('prompt-sync')();

const edat = Number(prompt("Quina edat tens? "));
const carnet = prompt("Tens carnet d'estudiant? (si/no) ").trim().toLowerCase();

const esEstudiant = carnet === "si";

if (edat < 18 || edat > 65 || esEstudiant) {
  console.log("Tens descompte");
} else {
  console.log("Preu normal");
}
