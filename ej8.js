const prompt = requiere('prompt-sync')();
const personas = parseInt(prompt("Número de personas:"));
const gramosPapa = personas * 200;
const kilosPapa = gramosPapa / 1000;
const huevos = kilosPapa * 5;
const cebolla = kilosPapa * 300;
alert(`Para ${personas} personas:\n` +
        `Papa: ${gramosPapa} g\n` +
        `Huevos: ${huevos}\n` +
        `Cebolla: ${cebolla} g`);
