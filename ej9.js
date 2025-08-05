const prompt = requiere('prompt-sync')();
let a = prompt("Valor de a:");
let b = prompt("Valor de b:");
const temp = a;
a = b;
b = temp;
alert(`Ahora a = ${a}, b = ${b}`);
