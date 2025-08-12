// mostrar en pantalla los multiplos de 3 entredos numeros ingresados por teclado

const prompt = require("prompt-sync")()

const numero1 = prompt("ingrese numero entero inferior:")
const numero2 = prompt("ingrese numero superior")

if(numero1>numero2){
    let mayor=numero1
    let menor=numero2
}
else{
    let mayor=numero2
    let menor=numero1
}

for(let valor=menor;valor<=mayor;valor++){

    if(valor%3===0){
        console.log(valor)
    }
}
