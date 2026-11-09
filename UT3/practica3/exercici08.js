/*
  1) "casa" === "casa"  → true
  2) "Hola" === "hola"  → false
  3) "A" < "B"          → true
  4) "gat" > "gos"      → false

  Per que les dues primeres comparacions no donen el mateix resultat?
  Perque JavaScript distingeix entre majuscules i minuscules. "casa" i "casa"
  son identics, pero "Hola" i "hola" son diferents

  Que he observat en comparar els textos?
  Els textos es comparen caracter a caracter,
  - "A" < "B" és true perque "A" va abans que "B".
  - "gat" > "gos" es false: la primera lletra es igual , pero la segona
    es diferent i "a" va abans que "o", per tant "gat" és menor que "gos".
*/

console.log("casa" === "casa");
console.log("Hola" === "hola");
console.log("A" < "B");
console.log("gat" > "gos");
