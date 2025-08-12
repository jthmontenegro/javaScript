const prompt = require('prompt-sync')({sigint:true});
const edad = parseInt(prompt('Ingrese su edad: '), 10);
const tieneCedula = prompt('¿Tiene cédula? (si/no): ').trim().toLowerCase();
const cedulaInscrita = prompt('¿Tiene la cédula inscrita? (si/no): ').trim().toLowerCase();

if (isNaN(edad)) {
    console.log('Edad inválida.');
} else {
    const condEdad = edad >= 18;
    const condCedula = (tieneCedula === 'si' || tieneCedula === 's');
    const condInscrita = (cedulaInscrita === 'si' || cedulaInscrita === 's');
    
    if (condEdad && condCedula && condInscrita) {
    console.log('Puede votar.');
    } else {
    console.log('No puede votar. Debe cumplir: tener 18+ años, cédula y cédula inscrita.');
    console.log(`Detalles -> Edad: ${condEdad ? 'OK' : 'NO'}, Cédula: ${condCedula ? 'OK' : 'NO'}, Inscrita: ${condInscrita ? 'OK' : 'NO'}`);
    }
}
