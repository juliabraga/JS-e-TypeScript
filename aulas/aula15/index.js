let num1 = 1654
let num2 = 2.576938
let num3 = 123

console.log(num1.toString() +num2) // concatena pq um dos valores foi "convertido" pra texto
console.log(num1.toString(2)) //representação binaria do num1
console.log(num2.toFixed(3)) //arredonda o numero
console.log(Number.isInteger(num3)) //verifica se o numero é inteiro

let temp1 = 0.7
let temp2 = 0.1
console.log(temp1 + temp2)
temp1 += temp2
console.log(temp1)
temp1 += temp2
console.log(temp1)
temp1 += temp2
console.log(temp1)
//pra corrigir a imprecisao pode ser usado parseFloat ou Number
temp1 = parseFloat(temp1.toFixed(2))
let temp3 = Number(temp1.toFixed(2))
console.log(temp1, temp3)
console.log(Number.isInteger(temp1, temp3))

//outra opcao para corrigir a imprecisao é multipllicar por 100 e divir a conta por 100
let num09 = 0.9
let num01 = 0.1
let numeroInteiro = ((num09 *100) + (num01 *100))/100
console.log (numeroInteiro)
console.log(Number.isInteger(numeroInteiro))