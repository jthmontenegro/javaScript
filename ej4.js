const prompt = requiere('prompt-sync')();
const n1 = parseInt(prompt("Número 1:"));
const n2 = parseInt(prompt("Número 2:"));
const n3 = parseInt(prompt("Número 3:"));
const media = (n1 + n2 + n3) / 3;
alert("Valor medio: " + media.toFixed(2));
