let a = parseInt(prompt('Ingrese el primer número entero: '), 10);
let b = parseInt(prompt('Ingrese el segundo número entero: '), 10);

if (isNaN(a) || isNaN(b)) {
	console.log('Entrada inválida.');
} else {
	if (a > b) [a, b] = [b, a];
	let sumaPares = 0;
	let sumaImpares = 0;
	let cuentaImpares = 0;

	for (let i = a; i <= b; i++) {
		if (i % 2 === 0) {
			sumaPares += i;
		} else {
			sumaImpares += i;
			cuentaImpares++;
		}
	}

	const promedioImpares = cuentaImpares ? (sumaImpares / cuentaImpares) : 0;

	console.log(`Rango: ${a} a ${b}`);
	console.log(`Suma de pares (incluyendo límites si son pares): ${sumaPares}`);
	if (cuentaImpares) {
		console.log(`Promedio de impares (${cuentaImpares} valores): ${promedioImpares}`);
	} else {
		console.log('No hay números impares en el rango, promedio no aplica.');
	}
}
