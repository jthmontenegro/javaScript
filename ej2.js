const prompt = requiere('prompt-sync')();
const lado = parseFloat(prompt("Lado del cuadrado:"));
const area = lado * lado;
const perimetro = 4 * lado;
alert(`Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`);
