let resultat1 = "no es un numero" / 2;
// no es pot convertir a número, per tant el resultat és NaN
console.log(resultat1); // NaN

let resultat2 = NaN + 10;
// qualsevol operació amb NaN retorna NaN
console.log(resultat2); // NaN

let resultat3 = 1 / 0;
// Dividir per zero en JavaScript dona Infinity
console.log(resultat3); // Infinity   