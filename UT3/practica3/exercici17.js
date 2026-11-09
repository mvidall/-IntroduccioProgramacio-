/*
  Exercici 17 · Analitza les condicions

  Cas A
    Condicio: hora < 10 || hora > 18
    9 < 10 és true. Amb || basta que una condicio sigui certa,
    per tant la condicio es true.

  Cas B
    Condició: hora < 10 || hora > 18 || capDeSetmana
    15 < 10 és false, 15 > 18 és false i capDeSetmana és false.
    Cap de les tres és certa, per tant la condició és false.

  Cas C
    Condició: hora < 10 && hora > 18 && capDeSetmana
    17 < 10 es false. Amb && totes les condicions han de ser vertaderes
    i, a mes, es impossible que una hora sigui alhora menor que 10 i major
    que 18. Per tant la condició es false.


*/

// Cas A
let horacasA = 9;
if (horacasA < 10 || horacasA > 18) {
  console.log("Cas A: Acces denegat");
}

// Cas B
let horacasB = 15;
let capDeSetmanaB = false;
if (horacasB < 10 || horacasB > 18 || capDeSetmanaB) {
  console.log("Cas B: Acces denegat");
}

// Cas C
let horacasC = 17;
let capDeSetmanaC = true;
if (horacasC < 10 && horacasC > 18 && capDeSetmanaC) {
  console.log("Cas C: Acces denegat");
}
