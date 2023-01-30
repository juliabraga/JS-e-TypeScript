const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

//usando for of que pega o valor de cada item
for (valor of a1){
    console.log(valor)
}

//usando forEach

a1.forEach(function(valor, indice, array){
    console.log(valor, indice)
})

//com arrowFunction
a1.forEach(v => console.log(v))

//simulando reduce com forEach
let total = 0
a1.forEach(v => total +=v)
console.log(total)