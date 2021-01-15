 // POO -> programacion orientada objetos

// Clase -> es una abstraccion del algo del mundo real
// Cualidad -> propiedad o atributo
// Funcion -> Métodos
// Instaciar un objeto a partir de una clase
// let foo = 5

class Persona {

    constructor(name, age){
        this.name = name
        this.age = age
    }

    saludar(){
        console.log('Hola soy ' + this.name + ' y tengo ' + this.age + ' años')
    }

    estudiar(){}

    dormir(){}

    comer(){}
}

const adrian = new Persona('Adrian', 17)

const matias = new Persona('Matias', 5)

adrian.saludar()
matias.saludar()



// Nuevo ejemplo


class Vehicle {
    constructor(name){
        this.name = name
        this.position = 0
        this.state = false
    }

    startEngine(){
        this.state = true
    }
    
    stopEngine(){
        this.state = false
    }

    move(){
        if(this.state){
            this.position +=  1
        }
    }

    infoVehicle(){
        console.log('owner:', this.name)
        console.log('state:', this.state)
        console.log('position:', this.position)
        console.log('***********************')
    }
}

class Sport extends Vehicle{

    constructor(name){
        super(name)
        this.aire = false

    }

    startAire(){
        this.aire =true
    }

    infoVehicle(){
        console.log('owner:', this.name)
        console.log('state:', this.state)
        console.log('position:', this.position)
        console.log('aire:', this.aire)
        console.log('***********************')
    }

}

const baraka = new Vehicle('Ivan')
const misterio = new Vehicle('Shaggy')
const rayo = new Vehicle('McKing')

baraka.startEngine()
baraka.move()
baraka.move()
baraka.move()
baraka.move()
baraka.move()

misterio.startEngine()
misterio.move()

rayo.startEngine()

rayo.move()
rayo.move()
rayo.move()
rayo.move()

baraka.move()
baraka.move()

baraka.infoVehicle()
misterio.infoVehicle()
rayo.infoVehicle()

baraka.stopEngine()
baraka.infoVehicle()
misterio.infoVehicle()
rayo.infoVehicle()

const camila = new Sport('Adrian')

camila.startEngine()
camila.move()
camila.move()
camila.move()
camila.startAire()
camila.infoVehicle()