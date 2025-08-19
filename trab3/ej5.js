function contarPalabras(texto) {

    texto = texto.trim();


    if (texto === "") return 0;


    const palabras = texto.split(/\s+/); 
    // \s+ captura uno o más espacios
    return palabras.length;
}


const frase = "Hola Jonathan, ¿cómo estás ?";
console.log(`Cantidad de palabras: ${contarPalabras(frase)}`);
