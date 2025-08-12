const filas = parseInt(prompt('Ingrese el número de filas para el patrón (ej: 5): '), 10);
if (isNaN(filas) || filas <= 0) {
	console.log('Número inválido.');
} else {
	for (let i = 1; i <= filas; i++) {
		const espacios = ' '.repeat(filas - i);
		const asteriscos = '*'.repeat(2 * i - 1);
		console.log(espacios + asteriscos + espacios);
	}
}
