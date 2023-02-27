

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function (valor) {
    this.preco += valor
}
Produto.prototype.desconto = function (valor) {
    this.preco -= valor
}

//cria o construtor Camiseta chamando o construtor de Produto
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

//altera o prototipo de Camiseta pro prototipo de Produto e perde o construtor
Camiseta.prototype = Object.create(Produto.prototype)
//para manter o construtor da Camiseta é necessário informar
Camiseta.prototype.constructor = Camiseta

const p1 = new Produto('Generico', 10)

//vai criar a Camiseta com o prototipo do Produto
const camiseta = new Camiseta('Regata', 50, 'Preta')
camiseta.aumento(20)
console.log(camiseta)
console.log(p1)

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque
        },
        set: function (valor) {
            if (typeof valor !== 'number') return
            estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca


const canecaJulia = new Caneca('Julia', 20, 'porcelana', 1000)
canecaJulia.estoque = 'teste' //nao altera pois nao é number
console.log(canecaJulia.estoque)
canecaJulia.estoque = 10
console.log(canecaJulia.estoque)