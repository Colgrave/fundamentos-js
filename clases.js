class Usuario {
    constructor(nombre, edad, correo){
        this.nombre = nombre,
        this.edad = edad,
        this.correo = correo   
    }

    monstrarSaludo(nombre){
        var mensaje = `hola ${this.nombre}`
        return mensaje
    }

     monstraInfo(){
         document.write(`
        <b>Nombre:</b>${this.nombre} <br>
        <b>Edad:</b> ${this.edad} <br>
        <b>Correo:</b> ${this.correo} <br>
        <hr>
        `)
    }
}


const adrian = new Usuario('Adrian', 17, 'Colgrave@gmail.com')
adrian.monstraInfo()
//console.log(adrian.monstrarSaludo())
//document.write(adrian.monstraInfo())

class Estudiante extends Usuario {
    constructor(nombre, edad, correo,carrera){
        super(nombre, edad, correo)
        this.carrera = carrera
    }

    monstrarInfo(){
        document.write(`
        <b>Nombre:</b> ${this.nombre} <br>
        <b>Edad:</b> ${this.edad} <br>
        <b>Correo:</b> ${this.correo} <br>
        <b>Carrera:</b> ${this.carrera}<br>
        <hr>
        `)
        
    }
}
const damian = new Estudiante('Damian', 20, 'damian@gmail.com', 'desarrollador web')
damian.monstrarInfo()

