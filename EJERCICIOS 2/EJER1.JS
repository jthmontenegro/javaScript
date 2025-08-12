const prompt = require('prompt-sync')({sigint:true});
const n = parseInt(prompt('Ingrese un número entero: '), 10);

if (isNaN(n)) {
  console.log('No ingresaste un número válido.');
} else {
  if (n % 2 === 0) console.log(`${n} es PAR.`);
  else console.log(`${n} es IMPAR.`);
}
