
var adrian = {
    nombre: 'Adrian',
    apellido: 'Colgrave',
    edad: 17,
    programador: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: true
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
// DESAFIO
function imprimirEdad(persona){

    if (persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`)
    }
            else{
                console.log(`${persona.nombre} es menor de edad`)
}

    
}

imprimirEdad(adrian)