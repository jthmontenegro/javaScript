function generarContrasena() {

    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const digitos = "0123456789";
    const especiales = "@#$%&()=?¿*+[]{}";

    function getRandomChar(conjunto) {
        return conjunto[Math.floor(Math.random() * conjunto.length)];
    }


    let password = [];
    for (let i = 0; i < 2; i++) {
        password.push(getRandomChar(mayusculas));
        password.push(getRandomChar(minusculas));
        password.push(getRandomChar(digitos));
        password.push(getRandomChar(especiales));
    }


    password = password.sort(() => Math.random() - 0.5);


    return password.join('');
}

console.log(generarContrasena());
