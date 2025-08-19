const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const precios = new Map();

const historial = [];

function preguntarProducto() {
    rl.question('Ingresa el nombre del producto (o "fin" para terminar): ', (producto) => {
        producto = producto.trim();
        
        if (producto.toLowerCase() === 'fin') {
            mostrarResultados();
            rl.close();
            return;
        }

        rl.question('Ingresa el precio del producto: ', (precioInput) => {
            const precio = parseFloat(precioInput);
            if (isNaN(precio)) {
                console.log('Precio inválido, intenta de nuevo.');
            } else {
                precios.set(producto, precio);
                historial.push(producto);
            }
            preguntarProducto();
        });
    });
}

function mostrarResultados() {

    const productosUnicos = new Set(historial);

    console.log('Productos únicos:', productosUnicos);
    console.log('Precios:', precios);
    console.log('Historial:', historial);
}


preguntarProducto();
