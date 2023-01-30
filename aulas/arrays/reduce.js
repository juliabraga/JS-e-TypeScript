//reduce para reduzir o array a um unico valor
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    return acumulador += valor
}, 0) //esse é um valor inicial pro acumulador da funcao callback. se nao colocar ele usa o valor do promeiro item

console.log(total)

//usando arrow function
const total2 = numeros.reduce((a, v) => a += v)

console.log(total2)

//usando o reduce para retonar os valores pares. seria melhor o filter
const pares = numeros.reduce((a, v) => {
    if (v % 2 === 0) a.push(v)
    return a
}, [])

const impar = numeros.reduce((a, v) => {
    if (v % 2 !== 0) a.push(v)
    return a
}, [])

console.log(pares)
console.log(impar)

//usando o reduce para retornar um array com o dobro do valor de cada item. melhor o map
const dobro = numeros.reduce((a, v) => {
    a.push(v * 2)
    return a
}, [])
console.log(dobro)

//se nao enviar o valor inicial do acumulador ele usa o valor do primeiro item
const somaPares = numeros.reduce((a, v) => {
    if (v % 2 === 0) a += v
    return a
}) //a soma iniciou com o valor 5 do primeiro item
console.log(somaPares)

const somaParesCorreto = numeros.reduce((a, v) => {
    if (v % 2 === 0) a += v
    return a
}, 0) //a soma iniciou com o valor 0 e nao o 5 q é do primeiro item
console.log(somaParesCorreto)




//retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
]

const maisVelha = pessoas.reduce((a, v) => a.idade > v.idade ? a: v)
console.log(maisVelha)