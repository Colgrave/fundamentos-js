var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = (persona) =>{
    return persona.altura > 1.8
}
const esBaja = ({altura}) => altura < 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)

var personasBajas = personas.filter(esBaja)

console.log(personasAltas)

//Desafio

console.log(personasBajas)


// transformar un array

const pasarAlturaACms = persona =>{
   //persona.altura *=100
    //return persona
// Si se ejecutra esta función me modificaria mi objeto princial. Para que esto no pase se debe raelizar lo siguiente
    return{
        ...persona,
        altura: persona.altura * 100
    }
}


var personaCms = personas.map(pasarAlturaACms)

console.log(personaCms)
