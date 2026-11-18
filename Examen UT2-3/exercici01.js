const prompt = require('prompt-sync')();

const NOMEMPRESA = 'NetLlevant';
const ANYACTUAL = '2026';

let NomEquip = prompt('Quin es el nom de l equip? ');
let MemRam = Number(prompt('Quanta Ram te el dispositiu? (GB)'));
let EspaiGB = Number(prompt('Quant d espai tens? (GB) '));
let AnyCompra = Number(prompt('Quin any va ser comprat? '));
let Garantia = Boolean(prompt('Te garantia? '));

let GarantiaValor;

if (Garantia === 'Si' || Garantia === 'si') {
    GarantiaValor = true
}   else if (Garantia === 'No' || Garantia === 'no') {
    GarantiaValor = false
}; 

let antiguitat = ( ANYACTUAL - AnyCompra );
let rammb = ( MemRam * 1024 );
let espaitb = ( EspaiGB / 1024 );

console.log(`====== NetLlevant Inventari =====`);

console.log(`Equip: ${NomEquip}` );
console.log(`RAM: ${MemRam}GB (${rammb}MB) `);
console.log(`Disc: ${EspaiGB} (${espaitb}TB)` );
console.log(`Antiguitat: ${antiguitat}`);
console.log(`${GarantiaValor}`);

console.log(`====== Tipus de dades =====`);

console.log(typeof(NomEquip));
console.log(typeof(MemRam));
console.log(typeof(EspaiGB));
console.log(typeof(AnyCompra));
console.log(typeof(Garantia));