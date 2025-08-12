
const prompt = require('prompt-sync')({sigint:true});
const n = parseInt(prompt('Ingrese un número entero entre 1 y 20: '), 10);
const frase = prompt('Ingrese una frase: ');

if (isNaN(n) || n < 1 || n > 20) {
    console.log('Número fuera de rango (1..20).');
} else {
    for (let i = 0; i < n; i++) console.log(frase);
}
