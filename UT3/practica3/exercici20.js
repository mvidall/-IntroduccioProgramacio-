const prompt = require('prompt-sync')();

const edat = Number(prompt("Quina edat tens? "));
const entrada = prompt("Tens entrada? (si/no) ").trim().toLowerCase();

const teEntrada = entrada === "si";

if (edat >= 18 && teEntrada) {
  console.log("Acces permes");
} else {
  console.log("Acces denegat");
}

/*
  Proves
    edat 20, entrada si  → Acces permes
    edat 20, entrada no  → Acces denegat
    edat 15, entrada si  → Acces denegat
    edat 15, entrada no  → Acces denegat
    edat 18, entrada si  → Acces permes (18 inclos)
*/
