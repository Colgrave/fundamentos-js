
var adrian = {
    nombre: 'Adrian',
    apellido: 'Colgrave',
    edad: 18,
    programador: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: true
}

var damian = {
    nombre: 'Damian',
    apellido: 'lopez',
    edad: 15
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    if (persona.programador) {
        console.log('Programador')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    }

    if (persona.cantante) {
        console.log('Cantante')
    }

    if (persona.dj) {
        console.log('Dj')
    }

    if (persona.guitarrista) {
        console.log('Guitarrista')
    }

    if (persona.drone) {
        console.log('Vuela drones')
    }
}

imprimirProfesiones(adrian)

function imprimirEdad(persona){

    if (persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`)

    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
}

    
}

imprimirEdad(adrian)
imprimirEdad(damian)

//Funciones que retornan valores

const MAYORIA_DE_EDAD = 18 //buena practica a la hora de declarar una const, escribir la variable en mayucuslas

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}
console.log('retornando valores')
function imprimirMayoria(persona) {
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad `)
    } else{
        console.log(`${persona.nombre} es menor de edad`)
    } 
}

imprimirMayoria(adrian)
imprimirMayoria(damian)

//escribir una funcion con Arrow functions


//Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves.
const ES_MAYOR_DE_EDAD = ({ edad }) => edad >= MAYORIA_DE_EDAD
console.log('arrow functions')
function imprimirMayoriaArrow(persona) {
    if (ES_MAYOR_DE_EDAD(persona)){
        console.log(`${persona.nombre} es mayor de edad `)
    } else{
        console.log(`${persona.nombre} es menor de edad `)
    } 
}

imprimirMayoriaArrow(adrian)
imprimirMayoriaArrow(damian)


function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)){
        console.log('ACCDESO DENEGADO')
    }
}



