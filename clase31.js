const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {croosDomain : true}



function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    .get(url, opts, callback)
    .fail(() =>{
        console.log(`Sucedio un error. No se puedo obtener el perosnaje ${id} `)
    })

}

obtenerPersonaje(1, function (persona){
    console.log(`hola, yo soy, ${persona.name}`)

    obtenerPersonaje(2, function(persona){
        console.log(`hola, yo soy, ${persona.name}`)

        obtenerPersonaje(3,function(persona){
            console.log(`hola, yo soy, ${persona.name}`)

            obtenerPersonaje(4,function(persona){
                console.log(`hola, yo soy, ${persona.name}`)

                obtenerPersonaje(5,function(persona){
                    console.log(`hola, yo soy, ${persona.name}`)
                })
            })
        })
    })
})