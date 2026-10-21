const prompt = require('prompt-sync')();

let text = prompt("Escriu qualsevol text: ");

console.log("Valor:", text);
console.log("Tipus:", typeof text);
console.log("Boolean:", Boolean(text));

// El resultat es diferent perque Boolean funciona amb true o false, dona false si la cadena es buida
// I dona true cuan la cadena conte colqun text   