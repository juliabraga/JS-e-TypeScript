//Escreva uma função que recebe 2 numeros e retorna o maior deles

function maior(num1, num2){
    if (num1 > num2){
        return num1
    }
    return num2
}

let num1 = 48
let num2= 6
const maior2 = num1 > num2 ? num1 : num2

function maior3(num1, num2){
    if (num1 > num2) return num1
    return num2
}

function maior4(num1, num2){
        return num1 > num2 ? num1 : num2
}

const maior5 = (num1, num2) => num1 > num2 ? num1 : num2

console.log(maior(48, 6))
console.log(maior2)
console.log(maior3(48, 6))
console.log(maior4(4, 6))
console.log(maior5(48, 6))