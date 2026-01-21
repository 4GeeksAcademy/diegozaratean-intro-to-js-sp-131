console.log('hola desde main js')

console.log("manual")
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)


console.log("con un bucle")
// i = 1 ===> 1
// i = 2 ===> 2
// i = 3 ===> 3
// i = 4 ===> 4
// i = 5 ===> 5
// i = 6 ===> 
// for(inicialización;condición;Actualización)
let maximo = 6
for(let i = 1;i < maximo ; i++){
    console.log(i)
}









// i = i -1 ====> i--
// i = i +1 ====> i++
// i = i +x ====> i+=x

for(let i = 20; i >= 15; i-- ){
    console.log(i)
}

for(j =30; j  <= 50; j+=5){
    console.log(j)
}

// ele.           1.      2.      3
let nombres = ['pablo','mario','karla']
// pos.           0.       1.     2. 
console.log(nombres)
console.log(nombres[2])
console.log(nombres[0])

console.log(nombres)
nombres.push('agustin')
console.log(nombres)

const alumnos = ['ana','zoe','patricia']
console.log(alumnos)
alumnos.push('agustin')
console.log(alumnos)



const frutas = ['piña','kiwi','arandano','banana']

console.log(frutas)
console.log(frutas[1])

frutas.push('melon')
console.log(frutas)

frutas.unshift('mango')
console.log(frutas)
console.log(frutas[1])

frutas.pop()
console.log(frutas)

frutas.shift()
console.log(frutas)


// frutas.splice(1,1)
// console.log(frutas)
// frutas.splice(2,1)
// console.log(frutas)

frutas.splice(1,4,'tomate','pera','durazno')
console.log(frutas)
// frutas.splice(1,0,'melocoton')
// console.log(frutas)


console.log(frutas[0] + "s")
console.log(frutas[1] + 's')
console.log(frutas[2] + "s")

for(let i = frutas.length - 1 ; i >= 0 ;i--){
    console.log(frutas[i] + 's')
}