const prompt = require('prompt-sync')({sigint: true});

const numero = parseInt(prompt('Ingrese un número entero para generar su tabla de multiplicar (1–10): '), 10);

if (isNaN(numero)) {
    console.log('No ingresaste un número válido.');
} else {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
