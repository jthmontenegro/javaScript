const prompt = requiere('prompt-sync')();
const kms = parseFloat(prompt("Kilómetros recorridos:"));
const litros = parseFloat(prompt("Litros consumidos:"));
const consumo = litros / kms;
alert("Consumo por km: " + consumo.toFixed(4) + " litros/km");
