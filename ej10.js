const prompt = require('prompt-sync')();
const numero = parseInt(prompt("Escribe un número: "));
const esPar = (numero % 2 === 0);
console.log(esPar);
