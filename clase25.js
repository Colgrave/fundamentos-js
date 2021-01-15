// Syntax sugar para heredar
class Persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(){
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        return this.altura > 1.8
    }
}

 // Herencia prototipal
/* function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function(){
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)

}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
} */
class Desarrollador extends Persona{

    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura) //importante para cuando se quiere heredar del padre
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
    }

    soyAlto(){
        return this.altura > 1.8
    }

}


var adrian = new Persona('Adrian', 'Colgrave', 1.76)

var damian = new Desarrollador('Damian', 'Sanchez', 1.86)


