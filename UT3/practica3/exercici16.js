/*
  && (AND): retorna true nomes si les dues condicions son certes.
      true && true   → true
      true && false  → false

  || (OR): retorna true si al menys una de les condicions es certa.
      true || false  → true
      false || false → false

  ! (NOT): inverteix el valor boolea
      !true  → false
      !false → true
*/

// Exemple AND
console.log("AND:", 5 > 3 && 2 > 1);   // true  (les dues son certes)
console.log("AND:", 5 > 3 && 2 > 10);  // false (la segona es falsa)

// Exemple OR
console.log("OR:", 5 > 10 || 2 > 1);   // true  (la segona es certa)
console.log("OR:", 5 > 10 || 2 > 10);  // false (cap es certa)

// Exemple NOT
console.log("NOT:", !(5 > 3));         // false (inverteix true)
console.log("NOT:", !(5 > 10));        // true  (inverteix false)
