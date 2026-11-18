const prompt = require('prompt-sync')();

let velocitatcont = Number(prompt(`Quina velocitat contractada tens? (MBPS)`));
let velocitatmesurada = Number(prompt(`Quina velocitat tens mesurada al test? (MBPS)`))
let ping = Number(prompt(`Quin ping tens?`));
let PaquetsPerduts = prompt(`Quans de paquets has perdut?`)

if (velocitatcont < 0) {
    console.log(`Dades no valides`)
} else {
    let Calculpercentatge = (velocitatcont / velocitatmesurada * 100);

    if (Calculpercentatge >= 90 && ping < 30 && PaquetsPerduts === 0 ) {
        console.log(`OPTIMA`)
    } else if (Calculpercentatge >= 70 && ping <= 100 && PaquetsPerduts <= 0 ){
        console.log(`Acceptable`)
    } else if (ping > 200 && PaquetsPerduts > 10) {
        console.log(`CRITICA`)
    } else {
        console.log(`DEFICIENT`)
    }    
}
