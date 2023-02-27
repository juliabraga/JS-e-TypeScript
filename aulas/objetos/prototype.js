function Pessoa(nome, sobrenome) {
    this.nome = nome,
        this.sobrenome = sobrenome
    //this.nomeCompleto = () => 'Do Objeto ' + this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Julia', 'Braga')
const pessoa2 = new Pessoa('Enrique', 'Torres')

Pessoa.prototype.nomeCompleto = function () { //nao da pra suar arrow function
    return this.nome + ' ' + this.sobrenome
}
Pessoa.prototype.somenteSobrenome = function () { 
    return `Meu sobrenome é ${this.sobrenome}` 
}

console.log(pessoa1.nomeCompleto())
console.log(pessoa1.somenteSobrenome())

console.dir(pessoa1)
console.dir(pessoa2)

const objA = {
    chaveA: 'A'
}
const objB = {
    chaveB: 'B'
}

Object.setPrototypeOf(objB, objA)
console.log(objB.chaveA) //é possivel acessa a chaveA pq o objA é um prototipo de objB
console.dir(objB)

function Produto (nomeProduto, precoProduto) {
    this.nomeProduto = nomeProduto,
    this.precoProduto = precoProduto
}
Produto.prototype.desconto = function (valor) {
    this.precoProduto = this.precoProduto - (this.precoProduto * valor /100)
}
Produto.prototype.aumento = function (valor) {
    this.precoProduto = this.precoProduto + (this.precoProduto * valor /100)
}

const p1 = new Produto ('camisa', 50)
p1.desconto(50)
console.log(p1)

//cria um objeto literal
const p2 = {
    cor: 'Branca',
    precoProduto: 100
}
//define o prototipo do construtor Produto para o objeto criado literal
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(50)
console.log(`p2 ${p2.precoProduto}`)

//criar um objeto ja indicando o prototype do Produto pra ele
const p3 = Object.create(Produto.prototype)
p3.precoProduto = 150
p3.aumento(25)
console.log(p3)

//criar objeto indicando o prototype e algumas chaves ja definindo as propriedades
const p4 = Object.create(Produto.prototype, {
    precoProduto: {
        value: 130,
        enumerable: true,
        writable: true,
        configurable: true
    }
})

console.log(p4)
p4.desconto(50)
console.log(p4)