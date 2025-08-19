function indiceValor(arreglo, valor) {
    return arreglo.indexOf(valor);
}

const numeros = [10, 20, 30, 40, 50];
console.log(indiceValor(numeros, 30)); 
console.log(indiceValor(numeros, 100)); 
