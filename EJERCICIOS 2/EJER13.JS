let num = parseInt(prompt('Ingrese un número decimal entero no negativo: '), 10);
if (isNaN(num) || num < 0) {
	console.log('Número inválido.');
} else if (num === 0) {
	console.log('Binario: 0');
} else {
	let res = '';
	let temp = num;
	while (temp > 0) {
		res = (temp % 2) + res;
		temp = Math.floor(temp / 2);
	}
	console.log(`Decimal ${num} -> Binario ${res}`);
}
