const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const paisesYCapitales = new Map([
    ["colombia", "bogota"],
    ["argentina", "buenos aires"],
    ["mexico", "ciudad de México"],
    ["españa", "Madrid"],
    ["francia", "París"],
    ["italia", "Roma"],
    ["brasil", "Brasilia"],
    ["chile", "Santiago"],
    ["peru", "Lima"],
    ["japon", "Tokio"]
]);

rl.question('Ingresa el nombre de un país: ', (pais) => {
    if (paisesYCapitales.has(pais)) {
        console.log(`La capital de ${pais} es ${paisesYCapitales.get(pais)}`);
    } else {
        console.log('País no encontrado');
    }

    rl.close(); 
});
