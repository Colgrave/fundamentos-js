var adrian = {
    nombre: 'Adrian',
    apellido: 'Colgrave',
    edad: 17
}
function imprimirNombreEnMayusculas(persona){
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(adrian)

//otra forma de llamar el nombre de un objeto

function imprimir({apellido}){
    console.log(apellido.toUpperCase())
}

imprimir(adrian)


//Desestructurar objetos, otra forma de hacerlo es de esta manera


function imprimirNombre(persona){
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

imprimirNombre(adrian)

// Desafio
function imprimirNombreEdad(persona){
    var {nombre, edad} = persona
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`)
}

imprimirNombreEdad(adrian)