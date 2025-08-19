function convertirMayusculas(arreglo) {
    return arreglo.map(nombre => nombre.toUpperCase());
}

// Ejemplo de uso
const nombres = ["Jonathan", "Sofia", "jander"];
console.log(convertirMayusculas(nombres)); // ["JONATHAN", "SOFIA", "JANDER"]
