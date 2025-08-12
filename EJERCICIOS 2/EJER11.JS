const prompt = require('prompt-sync')({sigint: true});

const n = parseInt(prompt('Ingrese un número entero no negativo: '), 10);
if (isNaN(n) || n < 0) {
	console.log('Número inválido.');
} else {
	let fact = 1;
	for (let i = 2; i <= n; i++) {
		fact *= i;
	}
	console.log(`${n}! = ${fact}`);
}
