const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const opts = { crossDomain: true }


function persona(id){

	return new Promise ((resolve, reject)=>{
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		
		$
			.get(url, opts, function(data){
				resolve(data)
			})
			.fail(()=> reject(id)
			)
	})		
}

function onError(id){
	console.log(`Sucedió un error al obtener el personaje ${id}`)
}

persona(1)
	.then((personaje) =>{
		console.log(`El personaje 1 es ${personaje.name}`)
		return persona(2)
	})
	.then((personaje) =>{
		console.log(`El personaje 2 es ${personaje.name}`)
		return persona(3)
	})	
	.then((personaje) =>{
		console.log(`El personaje 2 es ${personaje.name}`)
		return persona(4)
	})
	.then((personaje) =>{
		console.log(`El personaje 2 es ${personaje.name}`)
		return persona(5)
	})	
	.then((personaje) =>{
		console.log(`El personaje 2 es ${personaje.name}`)
	})		
	.catch(onError)