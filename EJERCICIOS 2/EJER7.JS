const prompt = require('prompt-sync')({sigint:true});
let a = parseInt(prompt('Ingrese el primer número: '), 10);
let b = parseInt(prompt('Ingrese el segundo número: '), 10);

if (isNaN(a) || isNaN(b)) {
    console.log('Entrada inválida.');
} else {
  if (a > b) [a, b] = [b, a]; // intercambiar para recorrer correctamente
    console.log(`Múltiplos de 3 entre ${a} y ${b}:`);
    let encontrados = false;
    for (let i = a; i <= b; i++) {
    if (i % 3 === 0) {
        process.stdout.write(i + ' ');
        encontrados = true;
    }
    }
    if (!encontrados) console.log('No hay múltiplos de 3 en el rango.');
  else console.log('\n'); // salto de línea final
}
