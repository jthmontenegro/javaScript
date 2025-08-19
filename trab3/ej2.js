function contarVocales(texto) {

    texto = texto.toLowerCase();


    const vocales = "aeiou";


    let contador = 0;

    for (let char of texto) {
        if (vocales.includes(char)) {
            contador++;
        }
    }

    return contador;
}

const frase = "Hola Jonathan, ¿cómo estás?";
console.log(`Cantidad de vocales: ${contarVocales(frase)}`);
