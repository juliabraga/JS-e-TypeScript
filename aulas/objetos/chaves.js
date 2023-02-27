//define propriedades de alguma ou algumas propriedade do objeto
//o freeze congela o objeto todo
//definePropety - pode congelar uma unica propriedade
//definePropeties - pode mostrar mais de uma propriedade

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //aparece qunado mostra o obejeto, ou seja, é uma chave
        value: estoque, //recebe o valor do parametro
        writable: false, //deixa ou nao alterar o valor depois de criado
        configurable: true // pode ou nao reconfigurar com outro defineProperty. se for false tb nao deixa apagar a chave
    })

    Object.defineProperty(this, 'estoque', {
        enumerable: false, //aparece qunado mostra o obejeto, ou seja, é uma chave
        value: estoque, //recebe o valor do parametro
        writable: true, //deixa ou nao alterar o valor depois de criado
        configurable: false // pode ou nao reconfigurar com outro defineProperty ou deletar a chave
    })

}


const p1 = new Produto('camisa', 30, 3)
p1.estoque = 1000
// delete p1.estoque
console.log(p1)

console.log(Object.keys(p1)) //retorna um array com as chaves do objeto

function Pessoa(nome, sobrenome) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true
        },
        sobrenome: {
            enumerable: true,
            value: sobrenome,
            writable: true,
            configurable: true
        }
    })
}

const p2 = new Pessoa('Julia', 'Braga')
console.log(p2)
p2.nome = 'Lara' //nao altera
console.log(p2)