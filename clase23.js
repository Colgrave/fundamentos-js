function Persona(nombre, apellido, estatura) {
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
}
Persona.prototype.saludar = function () {
    this.estatura > 1.8 ? console.log(`hola ${this.nombre} ${this.apellido} eres alto`) : console.log(`hola ${this.nombre} ${this.apellido} eres pequeño`)
}

var adrian = new Persona('Adrian', 'Colgrave', 1.76)
var damian = new Persona('Damin', 'Sanchez', 1.85)

adrian.saludar()
damian.saludar()




