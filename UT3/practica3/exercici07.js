/*

  Diferència entre == i ===:
  - == compara només el valor i, si els tipus son
    diferents, abans converteix un dels operands.
  - ===  compara el valor i el tipus. Si els tipus son
    diferents, el resultat es false sense fer cap conversio.

  1) 5 == "5"      → true   (el text "5" es converteix al nombre 5)
  2) 5 === "5"     → false  (un es number i l'altre string: tipus diferents)
  3) 0 == false    → true   (false es converteix al nombre 0)
  4) 0 === false   → false  (un es number i l'altre boolean: tipus diferents)
*/

console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
