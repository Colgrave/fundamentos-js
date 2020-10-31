var adrian = {
    nombre: 'Adrian',
    apellido: 'Colgrave',
    edad: '17años'
}
function imprimirNombreEnMayusculas(persona){
    nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(adrian)

//otra forma de llamar el nombre de un objeto

function imprimir({apellido}){
    console.log(apellido.toUpperCase())
}

imprimir(adrian)