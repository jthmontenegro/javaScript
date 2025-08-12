const prompt = requiere('prompt-sync')();
const precio = parseFloat(prompt("Precio del producto:"));
const iva = parseFloat(prompt("IVA (%):"));
const total = precio + (precio * iva / 100);
alert("Total a pagar: " + total.toFixed(2));
console.log(nj)