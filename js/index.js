"use strict";
var listaDeEmpleados = [{
        nombre: 'Luisa',
        edad: 20,
        salario: 150000,
        rango: 'asistente'
    }, {
        nombre: 'Antonio',
        edad: 30,
        salario: 250000,
        rango: 'Senior'
    }];
for (var i_1 = 0; i_1 < listaDeEmpleados.length; ++i_1) {
    console.log(listaDeEmpleados[i_1].nombre);
}
for (var i in listaDeEmpleados) {
    console.log(listaDeEmpleados[i].rango);
}
for (var _i = 0, listaDeEmpleados_1 = listaDeEmpleados; _i < listaDeEmpleados_1.length; _i++) {
    var empleado = listaDeEmpleados_1[_i];
    console.log(empleado);
}
var contador = function (number) {
    var returna = 'hola';
    for (var i = 0; i < number; ++i) {
        console.log(number - i);
    }
    return returna;
};
console.log(contador(20));
var Alumno = (function () {
    function Alumno(nombre, edad, grado, promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.grado = grado;
        this.promedio = promedio;
        this.saludaAlumno();
    }
    Alumno.prototype.saludaAlumno = function () {
        var lapso = this.promedio > 9 ? " tu  promedio suficiente para pasar el " + this.grado + " grado felicidades" : " tu  promedio No suficiente para pasar el " + this.grado + " grado, lo siento";
        console.log("Hola, " + this.nombre + " tu promedio es " + this.promedio + " y" + lapso + " ");
    };
    Alumno.prototype.reasignar = function (nombre, edad, grado, promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.grado = grado;
        this.promedio = promedio;
        this.saludaAlumno();
    };
    return Alumno;
}());
var juan = new Alumno('Juan Marquez', 12, 7, 8), Antonio = new Alumno('Antonio Perez', 12, 8, 20), Luisa = new Alumno('Luisa Suarez', 15, 7, 12);
juan.reasignar('Juan Marquez', 12, 7, 10);
var programador = {
    nombre: 'Marcos',
    edad: 25,
    salario: 100000,
    rango: 'Junior'
};
listaDeEmpleados.push(programador);
console.log(listaDeEmpleados);
listaDeEmpleados.splice(0, 1);
console.log(listaDeEmpleados);
