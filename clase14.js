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

const META = adrian.peso - 3

const comeMucho = () => Math.random() < 0.3

const realizaDeporte = () => Math.random() < 0.4

var dias = 0

while (adrian.peso > META ) {

    if(comeMucho()) {
        aumentoDePeso(adrian)
    }

    if(realizaDeporte()) {
        adelgazar(adrian)
    }
    dias += 1
}

console.log(`${adrian.nombre} tardo ${dias} días para cumplir con su peso ideal`)

