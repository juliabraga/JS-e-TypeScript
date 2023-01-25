//todos os argumentos enviados para a funcao criada com a palavra function
//são armazenados no obejto arguments, sendo eles usados ou nao na função
//esse objeto arguments tem indices q podem ser usados para acessar o valor
function funcao(texto) {
    console.log(arguments)
    console.log(texto)
    console.log(arguments[3])
}
funcao('Oie', 'Julia', 1, 4)

//se precisar usar na arrow function pode usar o rest operator ...
const  arrow = (...args) => console.log(args)
arrow('OieArrow', 'Julia', 1, 4)


function soma(a, b) {
    console.log(a + b)
}
soma (2) 
//se eu nao envio parametro pra um argumento necessario no codigo, 
//a variavel é criada e fica com valor undefined.
//para evitar erro pode-se colocar valor padrão pra variavel

function soma2(a=0, b=0) {
    console.log(a + b)
}
soma2 (2)

function soma3(a=0, b=2, c=4) {
    console.log(a + b + c)
}
soma3 (2, undefined , 20)
//para usar um valor padrão de uma variavel no meio dos argumentos, o parametro tem q ser
//undefined. vazio, zero ou qualquer outra ele nao assume o padrão

function desestruturar({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}
//nesse caso a funcao pega os valores dos itens
let obj2 = {
    nome: 'Julia',
    sobrenome: 'Braga',
    idade: 43
}
desestruturar(obj2)

function desestruturaArray([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}

array = ['Julia Braga', 'casada', 30]

desestruturaArray(array)

//nesse caso a funcao pega os demais argumentos e coloca no parametro numeros como array
function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros)
    for(let numero of numeros){
        if(operador === '+') acumulador +=numero
        if(operador === '-') acumulador -=numero
        if(operador === '/') acumulador /=numero
        if(operador === '*') acumulador *=numero
    }
    console.log(acumulador)
}

conta('+', 0, 10, 20, 30, 40)