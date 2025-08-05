const prompt = requiere('prompt-sync')();
const num = parseInt(prompt("Número de dos dígitos:"));
const decenas = Math.floor(num / 10);
const unidades = num % 10;
alert(`Decenas: ${decenas}, Unidades: ${unidades}`);
