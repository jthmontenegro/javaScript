function sumaYPromedio(arreglo) {

    if (arreglo.length === 0) {
        return { suma: 0, promedio: 0 };
    }


    let suma = 0;
    for (let num of arreglo) {
        suma += num;
    }


    let promedio = suma / arreglo.length;

    return { suma, promedio };
}

const numeros = [10, 20, 30, 40, 50];
const resultado = sumaYPromedio(numeros);
console.log(`Suma: ${resultado.suma}, Promedio: ${resultado.promedio}`);
