const horoscopos = {
    aries: '21 marzo - 19 abril',
    tauro: '20 abril - 20 mayo',
    geminis: '21 mayo - 20 junio',
    cancer: '21 junio - 22 julio',
    leo: '23 julio - 22 agosto',
    virgo: '23 agosto - 22 septiembre',
    libra:'23 septiembre - 22 octubre',
    escorpion: '23 octubre - 21 noviembre',
    sagitario: '22 noviembre - 21 diciembre',
    capricornio: '22 diciember - 19 enero',
    acuario: '20 enero - 18 febrero',
    piscis: '19 febrero - 20 marzo'
};

// Evalua el signo y regresa el horóscopo

const calcularSigno = (signo) =>{
    switch(signo.toLowerCase()){
        case 'aries':
            console.log(horoscopos.aries);
            break
        case 'tauro':
            console.log(horoscopos.tauro);
            break
        case 'geminis':
            console.log(horoscopos.geminis);
            break    
        case 'cancer':
            console.log(horoscopos.cancer);
            break
        case 'leo':
            console.log(horoscopos.leo);
            break
        case 'virgo':
            console.log(horoscopos.virgo);
            break    
       case 'libra':
            console.log(horoscopos.libra);
            break
        case 'escorpion':
            console.log(horoscopos.escorpion);
            break
        case 'geminis':
            console.log(horoscopos.geminis);
            break    
          case 'aries':
            console.log(horoscopos.aries);
            break
        case 'tauro':
            console.log(horoscopos.tauro);
            break
        case 'geminis':
            console.log(horoscopos.geminis);
            break    
        }
}
var darSigno = () => tuSigno = prompt('Introduzca su signo')



var miSigno = ''


while(miSigno === '' || miSigno === null){
    alert('Coloque su signo')
    miSigno = darSigno()

}




calcularSigno(tuSigno)