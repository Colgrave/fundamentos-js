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

//Parametros como referencia

function cumpleanos(persona){
    persona.edad += 1
}

//Al utilizar esta función lo que pasaria es que a nuestro objeto (Adrian) se veria modificado
// el atributo edad pasaria de tener 17 a 18 y este permenaceria así. Para que esto no suceda, se utiliza ...obejto

function cumpleanosCopiaObj(persona){
    return{
        ...persona, //parametrosAModif:
        edad: persona.edad + 1,
        mensaje: "Feliz cumple Adrian"
    }

}