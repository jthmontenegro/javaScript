const prompt = require('prompt-sync')({sigint:true});
const n = parseInt(prompt('Ingrese un número entero entre 1 y 7: '), 10);

const dias = {
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
    7: 'Domingo'
};

if (dias[n]) console.log(`Día: ${dias[n]}`);
else console.log('Número fuera de rango');
