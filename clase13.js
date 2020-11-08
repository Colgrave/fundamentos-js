var adrian = {
    nombre: 'Adrián',
    apellido: 'Colgrave',
    edad: 17,
    peso: 65
}

console.log (`Al inicio del año ${adrian.nombre} pesa ${adrian.peso} kg`)
// function aumentarDePeso (persona) {
//    return persona.peso += 200
//}

const INCREMENTAR_PESO = 0.2

const aumentoDePeso = (persona) => persona.peso += INCREMENTAR_PESO

const adelgazar = (persona) => persona.peso -= INCREMENTAR_PESO


for (var i = 1; i <=365; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentoDePeso(adrian)
    }

    else if(random < 0.5) {
        adelgazar(adrian)
    }
}


console.log(`A final del año ${adrian.nombre} termino pesando ${Math.round(adrian.peso)} kg`)

