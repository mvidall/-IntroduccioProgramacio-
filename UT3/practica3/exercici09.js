const prompt = require('prompt-sync')();

// prompt() retorna un text, per aixo el convertim a numero amb Number().
const edat = Number(prompt("Quina edat tens? "));

if (edat < 18) {
  console.log("Ets menor d'edat");
} else {
  console.log("Ets major d'edat");
}
