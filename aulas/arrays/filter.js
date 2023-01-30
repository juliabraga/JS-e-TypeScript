const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//retornar um array com os numeros maiores que 10 da constante
num = []
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        num.push(numeros[i])
    }
}
console.log(num)

//metodo filter expandido

function callbackFilter(valor, indice, array){ //parametros q vem do metodo filter
    if (valor > 10){
        return true
    } else {
        return false
    }
}

const numerosFiltrados = numeros.filter(callbackFilter) //passa a funcao sem executar ela

//reduzindo o metodo filter
const numerosFiltrados2 = numeros.filter( v => v >10) //v > 10 é o fitro q queremos

console.log(numerosFiltrados)
console.log(numerosFiltrados2)






const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]
//retorne as pessoas que o nome com 5 letras ou mais
const maisDeCincoLetras = pessoas.filter(v => v.nome.length >= 5)
console.log(maisDeCincoLetras)

//retorne as pessoas com mais de 50 anos
const maisDeCinquentaAnos = pessoas.filter(v => v.idade > 50)
console.log(maisDeCinquentaAnos)

//retorne as pessoas cujo nome termina com a
//lembrar de colocar o nome em letra minuscula antes de verificar
const ultimaLetraA = pessoas.filter(v => v.nome.toLowerCase().slice(-1) === 'a')
//outra forma de fazer
const TerminaComA = pessoas.filter(v => v.nome.toLowerCase().endsWith('a'))
console.log(ultimaLetraA)
console.log(TerminaComA)