console.log('hola desde main js')

// Array
// Mario
// Luigi
// Bowser
// Toad
// Peach

let personajes = ['Mario','Luigi','Bowser','Toad','Peach',"Yoshi"]

console.log(personajes)

console.log("Quemado")
console.log(personajes[0])
console.log(personajes[1])
console.log(personajes[2])
console.log(personajes[3])
console.log(personajes[4])

console.log("Con loop")
for( i= personajes.length -1 ;i >= 0 ;i--){
    // console.log(i)
    console.log(personajes[i])
}


// for(incializacion;condicion;actualizacion)
// console.log ("luigi")



















let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(numbers)


//for(iniciaclizcion;condicion;actualizacion)
//i = i + 3 ====> i+=3  i+=3
// i = i + 1 ====>  i++
for(i = 0;  i < numbers.length  ; i+=3){
    console.log(numbers[i])
}



let personajesBuenos = []

for(i=0; i < personajes.length; i++){
    console.log(personajes[i])
    if( personajes[i] !== 'Bowser'){
        personajesBuenos.push(personajes[i])
    }
    
}
    
console.log(personajesBuenos)


console.log(personajes.filter( (personaje)=> personaje != 'Bowser' ))

console.log( numbers.filter( (numero)=> numero != 7 ))
console.log( numbers.filter( (numero)=> numero > 7 ))
console.log( numbers.filter( (numero)=> numero < 15 ))
console.log( numbers.filter( (numero)=> numero > 7 & numero < 15 ))
console.log( numbers.filter( (numero)=> numero % 3 == 0 ))
console.log(numbers)


let newNumbers = []

for(i=0; i < numbers.length; i++){
    newNumbers.push(numbers[i]* 4)
}

console.log(numbers)
console.log(newNumbers)


// let mapNumbers = numbers.map( (item)=> item * 4 )
console.log(numbers.map( (item)=> item * 4 ))
console.log(numbers)


console.log(personajes)
console.log(personajes.map( (personaje)=> personaje + "s"))


personajes.forEach( (character)=>{
    console.log(character)
})

let j = 20
do{
    console.log(j);
    j++;
}while(j < 10)

