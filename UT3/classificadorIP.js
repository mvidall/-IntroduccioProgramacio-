const prompt = require('prompt-sync')();


console.log("=== CLASSIFICADOR D'ADRECES IP ===");

const octet1 = Number(prompt("Primer octet: "));
const octet2 = Number(prompt("Segon octet: "));
const octet3 = Number(prompt("Tercer octet: "));
const octet4 = Number(prompt("Quart octet: "));

const valida =
  octet1 >= 0 && octet1 <= 255 &&
  octet2 >= 0 && octet2 <= 255 &&
  octet3 >= 0 && octet3 <= 255 &&
  octet4 >= 0 && octet4 <= 255;

if (valida === false) {
  console.log("Adreça no valida: cada octet ha d'estar entre 0 i 255.");
} else {
  console.log("Adreça: " + octet1 + "." + octet2 + "." + octet3 + "." + octet4);

  let classe;

  if (octet1 === 0) {
    classe = "Reservada";
  } else if (octet1 <= 126) {
    classe = "A";
  } else if (octet1 === 127) {
    classe = "Loopback";
  } else if (octet1 <= 191) {
    classe = "B";
  } else if (octet1 <= 223) {
    classe = "C";
  } else if (octet1 <= 239) {
    classe = "D (multicast)";
  } else {
    classe = "E (experimental)";
  }

  console.log("Classe: " + classe);

  let mascara;

  switch (classe) {
    case "A":
      mascara = "255.0.0.0";
      break;
    case "B":
      mascara = "255.255.0.0";
      break;
    case "C":
      mascara = "255.255.255.0";
      break;
    default:
      mascara = "No en te (adreça especial)";
  }

  console.log("Mascara per defecte: " + mascara);

  if (classe === "A" || classe === "B" || classe === "C") {
    const privadaA = octet1 === 10;
    const privadaB = octet1 === 172 && octet2 >= 16 && octet2 <= 31;
    const privadaC = octet1 === 192 && octet2 === 168;

    const privada = privadaA || privadaB || privadaC;

    console.log(privada ? "Tipus: Privada" : "Tipus: Pública");
  }
}
