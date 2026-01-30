console.log('hola desde main js')

// Hacer una app que calcule el impuesto si ganas menos de de 1000 debes imprimir "Debes pagar el 5%"
// si ganas mas de 1000 debes imprimir "Debes pagar el 10%"


// PSEUDOCODIGO
// DONE : defnir mi variable de salario
let salario = 500
// DONE : comparar salario contra 1000
// if(condicion){
//     si es ciertyo que hago
// }else{
//     se no es cierto que hago
// }


// let mensaje = ''
// if(salario < 1000){
//     // debes imprimir el 5%
//     // DONE : imprimir "Debes pagar el 5%"
//     mensaje = "Debes pagar el 5%"
// }else{
//     // debes impriomir el 10%
//     // DONE : imprimir "Debes pagar el 10%"
//     mensaje = "Debes pagar el 10%"
// }


// Ternary operator
// if(condicion){
    //     si es ciertyo que hago
    // }else{
        //     se falso que hago
        // }
        // (condicion) ? si es ciertyo que hago: se falso que hago
let mensaje =  salario < 1000 ? "Debes pagar el 5%" : "Debes pagar el 10%"
        
console.log(mensaje)
// (condicion) ? si es ciertyo que hago: 
//            (condicion) ? si es ciertyo que hago: se falso que hago

// document.getElementById("content").innerHTML = mensaje

document.getElementById("content").insertAdjacentHTML(
    "beforeend",
    `<p> mensaje  ${mensaje} </p>`
)