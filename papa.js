let impuesto = 0
function liquidar(precio, tipo){
    if(tipo === '' || precio === '' ){
        return false
    }
    if(tipo === 'automovil'){
        impuesto = (precio * 2) / 100   
    }

    else if(tipo === 'moto'){
        impuesto = (precio * 1) / 100
    }

    else if(tipo === 'camioneta'){
        impuesto = (precio * 3) / 100
    }
    return{
        tipo: tipo,
        precio: precio,
        impuesto
    }

}
let adrian = liquidar(20000, 'automovil')

let peaje = [
    {tipo: 'automovil', precio:20000},
    {tipo: 'moto', precio:10000},
    {tipo: 'camioneta', precio:''},
    {tipo: 'automovil', precio:20000},
    {tipo: 'moto', precio:40000},    
]

let arqueo = peaje.map((item, index) =>{   
    const resultado= liquidar(item.precio, item.tipo)
    console.log(resultado)
    resultado.orden = index + 1
    console.log(resultado)
    return resultado     
})
    

console.log(arqueo)

