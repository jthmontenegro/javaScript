const prompt = require("prompt-sync")();

let cuenta = {
    titular: "monik galindo",
    saldo: 2500000,
    mostrarsaldo: function(){
        console.log
        (`el sueldo del usuario ${this.saldo}`);
    }

}

cuenta.mostrarsaldo();
cuenta.saldo -= 1000000;
cuenta.mostrarsaldo();

let numeros=[];

numeros.push(5);
numeros.push(7)
numeros.unshift(20)
console.log(numeros)
numeros.push(100)
numeros.push(25)
console.log(numeros)

for (let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}
