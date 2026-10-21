const prompt = require('prompt-sync')();

const KB = 1024;
const MB = KB * 1024;
const GB = MB * 1024;

console.log('|----------------------------|');
console.log('|----Conversor d\'unitats----|');
console.log('|----------------------------|');

console.log('');

let bytes = Number(prompt('Introdueix la quantitat de bytes: '));

let kilobytes = bytes / KB;
let megabytes = bytes / MB;
let gigabytes = bytes / GB;

console.log('|----------------------------|');

console.log(`Son ${kilobytes} kilobytes`);
console.log(`Son ${megabytes} megabytes`);
console.log(`Son ${gigabytes} gigabytes`);

console.log('|----------------------------|');

let QuantitatGb = Number(prompt('Introdueix la quantitat de gigabytes: '));

let bytesFromGB = QuantitatGb * GB;
let kilobytesFromGB = bytesFromGB / KB;
let megabytesFromGB = bytesFromGB / MB;

console.log('|----------------------------|');

console.log(`Son ${bytesFromGB} bytes`);
console.log(`Son ${kilobytesFromGB} kilobytes`);
console.log(`Son ${megabytesFromGB} megabytes`);

console.log('|----------------------------|');

let midafitxer = Number(prompt('Introdueix la mida del fitxer en GigaBytes: '));
let velocitat = Number(prompt('Introdueix la velocitat de descàrrega en Mbps: '));

let midaFitxerBytes = midafitxer * GB;
let velocitatBytesPerSegon = (velocitat * MB) / 8;

let tempsSegons = midaFitxerBytes / velocitatBytesPerSegon;
let tempsMinuts = tempsSegons / 60;
let tempsHores = tempsMinuts / 60;

console.log('|----------------------------|');

console.log(`El temps de descàrrega és de ${tempsSegons.toFixed(2)} segons`);
console.log(`El temps de descàrrega és de ${tempsMinuts.toFixed(2)} minuts`);
console.log(`El temps de descàrrega és de ${tempsHores.toFixed(2)} hores`);