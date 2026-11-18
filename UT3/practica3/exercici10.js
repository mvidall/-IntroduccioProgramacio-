const prompt = require('prompt-sync')();

const temperatura = Number(prompt("Quina temperatura fa? "));

if (temperatura < 10) {
  console.log("Fa fred");
} else if (temperatura < 25) {
  console.log("Temperatura moderada");
} else {
  console.log("Fa calor");
}
