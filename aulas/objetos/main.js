//criar um objeto de forma literal
const pessoa = {
    nome:'Julia',
    sobrenome: 'Braga'
}

const chaveQualquer = 'nome'
console.log(pessoa.nome)
console.log(pessoa['nome'])
console.log(pessoa[chaveQualquer])
console.log(pessoa.chaveQualquer) //nao funciona!!
console.log(pessoa.sobrenome)

//Criar objeto pelo construtor
const pessoa1 = new Object
pessoa1.nome = 'Enrique'
pessoa1.sobrenome = 'Torres'

console.log(pessoa1.nome)

const pessoa2 = {
    nome: 'Hudar',
    sobrenome: 'Souza'
}

console.log(pessoa2)
delete pessoa2.nome
console.log(pessoa2)