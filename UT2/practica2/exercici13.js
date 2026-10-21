let variableA = "A";
let variableB = "B";
let variableC = "C";

console.log("Inicial:");
console.log("A =", variableA);
console.log("B =", variableB);
console.log("C =", variableC);

let temporal = variableB;
variableB = variableC;
variableC = temporal;

console.log("\nFinal:");
console.log("A =", variableA);
console.log("B =", variableB);
console.log("C =", variableC);