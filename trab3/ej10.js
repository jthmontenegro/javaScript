function reemplazarElemento(arreglo, valorAntiguo, valorNuevo) {
    return arreglo.map(elemento => elemento === valorAntiguo ? valorNuevo : elemento);
}


const numeros = [1, 2, 3, 2, 4];
console.log(reemplazarElemento(numeros, 2, 99)); 
