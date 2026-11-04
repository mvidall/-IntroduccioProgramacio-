const prompt = require('prompt-sync')();

console.log("=== CLASSIFICADOR D'ADRECES IP ===");
console.log()

let Octet1 = Number(prompt("Introdueix el primer octet: "));
let Octet2 = Number(prompt("Introdueix el segon octet: "));
let Octet3 = Number(prompt("Introdueix el tercer octet: "));
let Octet4 = Number(prompt("Introdueix el quart octet: "));

if (Octet1 > 255 || Octet1 < 0) {
    console.log("Error: El primer octet no pot ser major que 255 ni menor a 0.");
} else if (Octet2 > 255 || Octet2 < 0) {
    console.log("Error: El segon octet no pot ser major que 255 ni menor a 0.");
} else if (Octet3 > 255 || Octet3 < 0) {
    console.log("Error: El tercer octet no pot ser major que 255 ni menor a 0.");
} else if (Octet4 > 255 || Octet4 < 0) {
    console.log("Error: El quart octet no pot ser major que 255 ni menor a 0.");
} else {
    console.log("La adreça IP introduïda és: " + Octet1 + "." + Octet2 + "." + Octet3 + "." + Octet4);
}   

