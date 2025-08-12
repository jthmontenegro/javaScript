const prompt = require('prompt-sync')({sigint: true});
const salario = parseFloat(prompt('Ingrese su salario mensual (en millones, ej: 3.5 o 3500000): ').replace(',', '.'));

if (isNaN(salario) || salario < 0) {
    console.log('Salario inválido.');
} else {
    let tasa = 0;

    if (salario < 1000000) {
    tasa = 0.01; // 1%
    } else if (salario >= 1000000 && salario < 2000000) {
    tasa = 0.03; // 3%
    } else if (salario >= 2000000 && salario < 4000000) {
    tasa = 0.05; // 5%
    } else if (salario >= 4000000 && salario < 10000000) {
    tasa = 0.07; // 7%
  } else { // salario >= 10,000,000
    tasa = 0.10; // 10%
    }

  const impuesto = salario * tasa;
    console.log(`Salario: ${salario.toLocaleString('es-CO')} COP`);
  console.log(`Tasa aplicada: ${(tasa * 100).toFixed(1)}%`);
    console.log(`Impuesto a pagar: ${impuesto.toLocaleString('es-CO')} COP`);
}
