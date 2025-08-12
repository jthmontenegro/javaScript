const prompt = require('prompt-sync')({sigint:true});
const n = parseInt(prompt('Ingrese un número entero mayor o igual a 0: '), 10);

if (isNaN(n) || n < 0) {
    console.log('Número inválido.');
} else if (n < 2) {
    console.log(`${n} NO es primo.`);
} else {
    let esPrimo = true;
    for (let i = 2; i*i <= n; i++) {
    if (n % i === 0) { esPrimo = false; break; }
    }
    console.log(`${n} ${esPrimo ? 'ES' : 'NO ES'} primo.`);
}
