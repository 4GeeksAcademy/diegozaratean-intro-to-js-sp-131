console.log('hola desde main js')

// let nombre = "Lauro"
// console.log('Antes de la funcion' + nombre)
// function saludarAlumno(nombre){
//     console.log('dentro de la funcion' + nombre)
//     console.log("hola " + nombre)
// }
// console.log('Despues de la funcion' + nombre)

// saludarAlumno('Jairo')
// saludarAlumno('Matias')
// saludarAlumno('Fatima')
// saludar()
// saludar()


// function transportar(origen, destino){
//     console.log("saliendo de " +origen)
//     console.log("moviendome")
//     console.log("llegando a " +destino)
// }

// transportar("casa","gym")
// transportar("gym","ofi")
// transportar("ofi","casa")

// transportar()
// transportar()
// transportar()
// transportar()

// function suma(num1,num2){
//     // console.log('haciendo suma')
//     // console.log(num1 + num2)
//     return num1 + num2
//     num1 = 8
// }

// console.log(suma(5,7))


// function consumo(edad){
//     if( edad >= 18){
//         return "Puedes beber"
//     }else{
//         console.log('Me ven ')
//         return "tienes que esperar"
//     }
// }


// console.log(consumo(7))


// parentesis ()
// corchetes []
// llaves {}
/*
LIMITacion del cliuen ete se peud eopitmizr peor el metiop xyz ya no funciona
*/
function calcularTax(income){
    return income*0.34
}

let resultado = calcularTax(30000)


document.getElementById('amount').innerHTML = resultado


// console.log('ANTES DE windows onlioad')
// window.onload = function(){
//     // su codigo 
//     console.log('Se ejecuto windows onlioad')
// }
// console.log('DESPUES DE windows onlioad')





// Funcion Declarativas
saludoDeclarativo()
function saludoDeclarativo(){
    console.log("Hola saludoDeclarativo ")
}

// Funcion Expresión
const saludoExpresion = function(){
    console.log("Hola saludoExpresion ")    
}
saludoExpresion()


// Función Flecha  Arrow
const saludoArrow = ()=> {
    console.log("Hola saludoArrow ")    
}
saludoArrow()



///// REFACTORING /////

// PSEUDOCODIGO
// desarrollar un generador de excusas de Quiem, Accion, Cuando , Que
// 1. modificar el htmlo desde js
// 2. tomar un array de Quiem y obtene run elemento aleaotrio
// 3. tomar un array de Accion y obtene run elemento aleaotrio
// 4. tomar un array de Cuando y obtene run elemento aleaotrio
// 5. tomar un array de Que y obtene run elemento aleaotrio
// 6. concatenar los elmentos aleatorios
// 7. asignar la concatenacion a la excusa en html
// 8. agregar exuca a html
