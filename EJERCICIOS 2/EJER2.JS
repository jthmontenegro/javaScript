
const prompt = require('prompt-sync')({sigint:true});
let n = prompt('Ingrese un número entero (puede ser negativo): ').trim();

if (!/^-?\d+$/.test(n)) {
    console.log('No ingresaste un entero válido.');
} else {
    if (n.startsWith('-')) n = n.slice(1);
    let suma = 0;
    for (const d of n) suma += parseInt(d, 10);
    console.log(`La suma de los dígitos es: ${suma}`);
}
