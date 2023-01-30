/*
operadores aritmeticos + - * / ** %
+ adicao ou concatenacao
** potencia
% resto da divisao
++ incremento (pode ser pre ou pós)
-- decremento (pode ser pre ou pós)

precedencia
()
**
* / %
+ -

*/

const num1 = 5
const num2 = 10
console.log(num1 + num2) //15

//usando string + concatena
const num3 = '5'
const num4 = 10
console.log(num3 + num4) //510

const num5 = 2
const num6 = 10
console.log(num5 ** num6) //1024

const num7 = 10
const num8 = 3
const num9 = 5
console.log(num7 % num8) //1
console.log(num7 % num9) //0 FORMA DE DESCOBRIR NUMERO PAR

let contador = 4;
contador++
console.log(contador)

let contadorPasso = 0
const passo = 5
contadorPasso = contadorPasso + passo
console.log(contadorPasso)
//forma mais inteligente de somar um valor a variavel PODE USAR * / - **
contadorPasso +=  passo
console.log(contadorPasso)
contadorPasso *= passo
console.log(contadorPasso)

//converter String em numero
const a = 10
const b = '5'
console.log(a + b) //o js concatena 105
console.log(a * b) //o js converte b para numero para tentar fazer a conta
const c = parseInt(b) // converte b em numero inteiro antes de definir c
console.log(typeof c)
console.log(a + c) 
console.log(a * c)
const g = '1.80'
const h = '3'
const d = parseInt(g) //restorna um inteiro 1
const e = parseFloat(g) // converte o string num numero real
const f = Number(g) //converte para number, se for inteiro pra inteiro, se for real, pra real
const i = Number(h)
console.log(typeof d, d)
console.log(typeof e, e)
console.log(typeof f, f)
console.log(typeof i, i)

const aa = Number('Julia') //converte para um tipo numero mas o valor fica NaN
console.log(typeof aa,aa)
