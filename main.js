console.log('hola desde main js')

const persona = {
    nombre:"ulyses",
    apellido:"odiseo",
    edad:200,
    skills:['js','python','rect'],
    programar:  function(){
        console.log("Estoy programando")
    },
    hijo: {
        nombre: "arturo"
    }
}

const myArray = ['ulyses','odiseo',200]















// Agregar una función que cambie el color de fondo del tituloa rojo y 
// el texto del titulo a "nuevo titulo"

// PSEUDOCDOIGO
// crear funcion
function cambiarTitulo(){
    console.log("cambiarTitulo")
}
cambiarTitulo()
// obtener el titulo
let titulo = document.getElementById('title') 

// cambiar color de fondo
// titulo.style.backgroundColor = 'red' 
// cmabiar texto
// titulo.textContent = 'nuevo titulo '





// PSEUDOCDOIGO
// realiza un programa que cambie de forma aleatoria el color
//  y el texto del titulo 
function changeTitle(){
    const colors = ['blue','red','purple','green',"aqua"]
    const students = ['MAtias','jairo','Ramon',"Mark"]
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.getElementById('title').style.color = randomColor
    let randomStudent = students[Math.floor(Math.random() * students.length)]
    document.getElementById("title").textContent = randomStudent
}

changeTitle()










// PSEUDOCDOIGO
// realiza un programa que lance dos dados y los muestre al usuario en dos parrafos
// DONE: agregar funcion
function lanzarDados(){
    console.log('lanzarDados')
    let dado1 = Math.floor(Math.random() * 6) + 1
    
    // Math.random()   ===> 0 a 0.999
    // Math.random() * 6   ===> 0 a 5.999
    // Math.floor(Math.random() * 6)  ===> 0 a 5
    // Math.floor(Math.random() * 6) + 1  ===> 1 a 6
    let dado2 = Math.ceil(Math.random() * 6) 
    // Math.random()   ===> 0 a 0.999
    // Math.random() * 6   ===> 0 a 5.999
    // Math.ceil(Math.random() * 6)  ===> posiblemente o y casi siempre 1 a 6
    dado2 = (dado2 == 0) ? 1 : dado2

    document.querySelector("#dice1").textContent = dado1
    document.querySelector("#dice2").textContent = dado2
    
    console.log(dado1)
    console.log(dado2)

    console.log('la suma de los dados es:' + (dado1 + dado2))
    // DONE: agregar parrafos al html
    // DONE: agregar boton al html
    // vincular funcion con boton
}
// DONE: ejecutar la funcion
lanzarDados()
// DONE: definir variables para numeros de dados
//
//
//








































// Objeto Huron: color,comportamiento, nombre
// correr "Estoy corriendo"
const huron = {
    nombre: "Pepito",
    color: "negro y blanco",
    comportamiento: "agresivo",
    correr: function(){
        console.log("Estoy corriendo")
    }
} 






