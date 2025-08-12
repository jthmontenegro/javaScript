const prompt = require('prompt-sync')({sigint:true});
const edad = parseInt(prompt('Ingrese la edad del cliente: '), 10);

if (isNaN(edad) || edad < 0) {
    console.log('Edad inválida.');
} else {
    if (edad < 5) console.log('Entrada: GRATIS');
    else if (edad >= 5 && edad <= 18) console.log('Entrada: $5.000');
    else console.log('Entrada: $10.000');
}
