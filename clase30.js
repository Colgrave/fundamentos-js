const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {croosDomain : true}

const onResponse = function (persona){
    console.log(`hola, yo soy, ${persona.name}`)
}

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onResponse)

    if(callback) {
        callback()
    }
}

obtenerPersonaje(1, function (){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3,function(){
            obtenerPersonaje(4,function(){
                obtenerPersonaje(5,function(){})
            })
        })
    })
})