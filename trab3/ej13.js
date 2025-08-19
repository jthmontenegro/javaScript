function crearAlumno(nombre, notas) {
    return {
        nombre: nombre,
        notas: notas,
        promedio: function() {
            const suma = this.notas.reduce((acc, nota) => acc + nota, 0);
            return suma / this.notas.length;
        }
    };
}

const alumno1 = crearAlumno("Jonathan", [4, 5, 3, 4, 5]);
console.log(`Nombre: ${alumno1.nombre}`);
console.log(`Notas: ${alumno1.notas}`);
console.log(`Promedio: ${alumno1.promedio()}`);
