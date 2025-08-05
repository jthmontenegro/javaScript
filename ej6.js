const prompt = requiere('prompt-sync')();
const horas = parseInt(prompt("Horas:"));
const minutos = parseInt(prompt("Minutos:"));
const totalSegundos = (horas * 60 * 60) + (minutos * 60);
alert("Equivale a " + totalSegundos + " segundos");
