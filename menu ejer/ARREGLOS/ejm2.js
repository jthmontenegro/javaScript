// objetos con funciones

let carro={
    placa: "123abc",
    marca: "kia",
    color: "negro",
    encender: function(){
        return`el carro de placa ${this.placa} se ha encendidio`
    }
}

console.log(carro.encender())