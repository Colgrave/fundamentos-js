var nombre = 'Adrian', apellido = 'SANCHEZ';
//metodo para convertir los strings en mayusculas
var nombreEnMayusculas =nombre.toUpperCase();
//metodo para convertir los strings en minusculas
var apellidoEnMinusculas = apellido.toLowerCase()
// hallar el character de un string
var primeraLetra =nombre.charAt(0);

// indica la cantidad de caractéres que tiene un string.
var cantidad = nombre.length;

//concatenar variables

var nombreCompleto = nombre + ' ' + apellido;

var nombreCompletoInterpolado = `${nombre} ${apellido}`  //interpolación de  variables
// halla mas de un character
var str = nombre.substr(1, 2) ;

//Desafio mostrar al usuario la ultima letra de su nombre

var desafio = nombre.charAt(nombre.length - 1)