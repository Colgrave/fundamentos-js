const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukerUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = {croosDomain : true}

const onResponse = function (persona){
    console.log(`hola, yo soy, ${persona.name}`)
}
$.get(lukerUrl, opts, onResponse)