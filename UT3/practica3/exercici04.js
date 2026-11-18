/*
    a = 5
    b = 5
    c = 5
    d = 4

  Diferència entre ++a i a++:
  - ++a : primer incrementa la variable i despres retorna el
    valor nou.
  - a++ : primer retorna el valor actual i despres
    incrementa la variable. 
*/

let a = 4;
let b = 4;
let c = ++a;
let d = b++;

console.log(a); // 5
console.log(b); // 5
console.log(c); // 5
console.log(d); // 4
