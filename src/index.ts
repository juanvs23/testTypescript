/*let idea:string=`hola`,
piensa:string=`${idea} Juan`

console.log(piensa)

let persona:object={
	nombre:'Juan',
	Edad:20,
	profesion:'programador',
	acceso:false
}

console.log(persona.nombre)

//interfaz
interface empleado{
	nombre:string,
	edad:number,
	salario:number,
	rango: string
}

let programador:empleado={
	nombre:'Antonio',
	edad:30,
	salario:250000,
	rango: 'Senior'
},
secretaria:empleado={
	nombre:'Luisa',
	edad:20,
	salario:150000,
	rango: 'asistente'
},
listaDeEmpleados:Array<empleado>=[{
	nombre:'Luisa',
	edad:20,
	salario:150000,
	rango: 'asistente'
},{
	nombre:'Antonio',
	edad:30,
	salario:250000,
	rango: 'Senior'
}]

if (programador.edad>20) { 
	debugger
	console.log('hola')
} else {
	// code...
}
console.log(programador.edad)
*/

 interface empleado{
	nombre:string,
	edad:number,
	salario:number,
	rango: string
}

 let listaDeEmpleados:Array<empleado>=[{
	nombre:'Luisa',
	edad:20,
	salario:150000,
	rango: 'asistente'
},{
	nombre:'Antonio',
	edad:30,
	salario:250000,
	rango: 'Senior'
}]
 
//enumera recorre el arreglo en base a la longitud del mismo mediante un contador
for (let  i:number = 0; i < listaDeEmpleados.length; ++i) {
	console.log(listaDeEmpleados[i].nombre)
}
//recorre el arreglo contando los elementos EN el arreglo
for (var i in listaDeEmpleados) {
	console.log(listaDeEmpleados[i].rango)
}
//recorre el arreglo creando una variabla por cada elemento dentro  del arreglo
for (var empleado of listaDeEmpleados) {
	console.log(empleado)
}

const contador= (number:number)=> {
	let returna:string='hola'
	for (var i = 0; i < number; ++i) {
		console.log(number - i)
	}
	return returna
}

console.log(contador(20))

class Alumno {
		
		private nombre:string;
		private edad:number;
		private grado:number;
		private promedio:number;

	constructor(nombre,edad,grado,promedio){
		this.nombre=nombre;
		this.edad=edad;
		this.grado=grado;
		this.promedio=promedio;
		//al llamar esta funciona desde aqui se  ejecuta de manera autoamtica
		this.saludaAlumno()
	}
	//aplazado:boolean

	 private saludaAlumno(){
		let lapso=this.promedio>9? ` tu  promedio suficiente para pasar el ${this.grado} grado felicidades`:` tu  promedio No suficiente para pasar el ${this.grado} grado, lo siento`
		console.log(`Hola, ${this.nombre} tu promedio es ${this.promedio} y${lapso} `)
	}
	//al declarar un constructor esta funcion es irrelevante
	reasignar( nombre:string,
		edad:number,
		grado:number,
		promedio:number){
		this.nombre=nombre
		this.edad=edad
		this.grado= grado
		this.promedio=promedio
		this.saludaAlumno()
	}	
}

let juan:Alumno=new Alumno('Juan Marquez',12,7,8),
Antonio:Alumno=new Alumno('Antonio Perez',12,8,20),
Luisa:Alumno=new Alumno('Luisa Suarez',15,7,12)

//juan.asignar('Juan Marquez',12,7,8)
//juan.saludaAlumno()

//Antonio.asignar('Antonio Perez',12,7,20)
juan.reasignar('Juan Marquez',12,7,10)

//Luisa.asignar('Luisa Suarez',15,7,2)
//Luisa.saludaAlumno()

let programador:empleado={
		nombre:'Marcos',
		edad:25,
		salario:100000,
		rango: 'Junior'
}

listaDeEmpleados.push(programador)

console.log(listaDeEmpleados)
listaDeEmpleados.splice(0,1)
console.log(listaDeEmpleados)